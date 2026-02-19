import type { HubDiscoveryResponse } from "@marketermcp/mcp-schemas";
import { executeTool, listPublicTools } from "@marketermcp/tool-registry";

interface Env {
  HUB_NAME: string;
  HUB_ENVIRONMENT: string;
  HUB_API_TOKEN?: string;
  ALLOW_UNAUTH_DISCOVERY?: string;
}

const MAX_PAYLOAD_BYTES = 102_400; // 100 KB
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function generateRequestId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 10);
  return `req_${timestamp}_${random}`;
}

function getRateLimitKey(request: Request): string {
  const token = readBearerToken(request);
  if (token) return `tok:${token.slice(0, 8)}`;
  return `ip:${request.headers.get("cf-connecting-ip") ?? "unknown"}`;
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  let entry = rateLimitStore.get(key);

  if (!entry || now >= entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitStore.set(key, entry);
  }

  entry.count++;

  if (entry.count > RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count, resetAt: entry.resetAt };
}

function corsHeaders(): HeadersInit {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}

function json(
  data: unknown,
  status = 200,
  extra: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...corsHeaders(),
      ...extra,
    },
  });
}

function readBearerToken(request: Request): string | null {
  const header = request.headers.get("authorization");
  if (!header || !header.toLowerCase().startsWith("bearer ")) return null;
  return header.slice("bearer ".length).trim();
}

function isAuthorized(request: Request, env: Env): boolean {
  if (!env.HUB_API_TOKEN) return true;
  return readBearerToken(request) === env.HUB_API_TOKEN;
}

function log(
  level: "info" | "warn" | "error",
  requestId: string,
  message: string,
  meta: Record<string, unknown> = {},
): void {
  console.log(
    JSON.stringify({
      level,
      requestId,
      message,
      timestamp: new Date().toISOString(),
      ...meta,
    }),
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const requestId = generateRequestId();
    const startTime = Date.now();

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    const rateLimitKey = getRateLimitKey(request);
    const rateLimit = checkRateLimit(rateLimitKey);
    const rateLimitHeaders: Record<string, string> = {
      "x-request-id": requestId,
      "x-ratelimit-limit": String(RATE_LIMIT_MAX),
      "x-ratelimit-remaining": String(rateLimit.remaining),
      "x-ratelimit-reset": String(Math.ceil(rateLimit.resetAt / 1000)),
    };

    if (!rateLimit.allowed) {
      log("warn", requestId, "Rate limited", { path, key: rateLimitKey });
      return json(
        { ok: false, error: "Rate limit exceeded", code: "RATE_LIMITED", requestId },
        429,
        { ...rateLimitHeaders, "retry-after": String(Math.ceil((rateLimit.resetAt - Date.now()) / 1000)) },
      );
    }

    // Health check
    if (path === "/health" && request.method === "GET") {
      return json(
        { status: "ok", service: env.HUB_NAME, environment: env.HUB_ENVIRONMENT, requestId },
        200,
        rateLimitHeaders,
      );
    }

    // Tool discovery
    if (path === "/v1/tools" && request.method === "GET") {
      const allowUnauthDiscovery = (env.ALLOW_UNAUTH_DISCOVERY ?? "false") === "true";
      if (!allowUnauthDiscovery && !isAuthorized(request, env)) {
        log("warn", requestId, "Unauthorized discovery attempt", { path });
        return json({ ok: false, error: "Unauthorized", code: "UNAUTHORIZED", requestId }, 401, rateLimitHeaders);
      }

      const response: HubDiscoveryResponse = {
        hub: { name: env.HUB_NAME, version: "0.1.0", environment: env.HUB_ENVIRONMENT },
        tools: listPublicTools(),
      };
      log("info", requestId, "Tool discovery", { toolCount: response.tools.length });
      return json(response, 200, rateLimitHeaders);
    }

    // Tool execution
    if (path.startsWith("/v1/tools/") && path.endsWith("/execute") && request.method === "POST") {
      if (!isAuthorized(request, env)) {
        log("warn", requestId, "Unauthorized execution attempt", { path });
        return json({ ok: false, error: "Unauthorized", code: "UNAUTHORIZED", requestId }, 401, rateLimitHeaders);
      }

      const contentLength = parseInt(request.headers.get("content-length") ?? "0", 10);
      if (contentLength > MAX_PAYLOAD_BYTES) {
        log("warn", requestId, "Payload too large", { contentLength, max: MAX_PAYLOAD_BYTES });
        return json(
          { ok: false, error: `Payload exceeds ${MAX_PAYLOAD_BYTES} byte limit`, code: "PAYLOAD_TOO_LARGE", requestId },
          413,
          rateLimitHeaders,
        );
      }

      const toolName = path.replace("/v1/tools/", "").replace("/execute", "");

      let payload: unknown;
      try {
        const body = await request.text();
        if (body.length > MAX_PAYLOAD_BYTES) {
          return json(
            { ok: false, error: `Payload exceeds ${MAX_PAYLOAD_BYTES} byte limit`, code: "PAYLOAD_TOO_LARGE", requestId },
            413,
            rateLimitHeaders,
          );
        }
        payload = JSON.parse(body);
      } catch {
        log("warn", requestId, "Malformed JSON", { toolName });
        return json(
          { ok: false, error: "Request body must be valid JSON", code: "INVALID_JSON", requestId },
          400,
          rateLimitHeaders,
        );
      }

      try {
        const result = executeTool(toolName, payload);
        const durationMs = Date.now() - startTime;
        log("info", requestId, "Tool executed", { toolName, durationMs });
        return json({ ok: true, requestId, ...result }, 200, {
          ...rateLimitHeaders,
          "x-response-time": `${durationMs}ms`,
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        const durationMs = Date.now() - startTime;
        log("error", requestId, "Tool execution failed", { toolName, error: message, durationMs });
        return json(
          { ok: false, error: message, code: "EXECUTION_ERROR", requestId },
          400,
          rateLimitHeaders,
        );
      }
    }

    log("info", requestId, "Route not found", { path, method: request.method });
    return json({ ok: false, error: "Not found", code: "NOT_FOUND", requestId }, 404, rateLimitHeaders);
  },
};
