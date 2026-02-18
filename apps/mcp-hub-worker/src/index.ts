import type { HubDiscoveryResponse } from "@marketermcp/mcp-schemas";
import { executeTool, listPublicTools } from "@marketermcp/tool-registry";

interface Env {
  HUB_NAME: string;
  HUB_ENVIRONMENT: string;
  HUB_API_TOKEN?: string;
  ALLOW_UNAUTH_DISCOVERY?: string;
}

const jsonHeaders: HeadersInit = {
  "content-type": "application/json; charset=utf-8",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET,POST,OPTIONS",
  "access-control-allow-headers": "content-type,authorization"
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), { status, headers: jsonHeaders });
}

function readBearerToken(request: Request): string | null {
  const header = request.headers.get("authorization");
  if (!header || !header.toLowerCase().startsWith("bearer ")) {
    return null;
  }
  return header.slice("bearer ".length).trim();
}

function isAuthorized(request: Request, env: Env): boolean {
  if (!env.HUB_API_TOKEN) {
    return true;
  }
  return readBearerToken(request) === env.HUB_API_TOKEN;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: jsonHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/health" && request.method === "GET") {
      return json({
        status: "ok",
        service: env.HUB_NAME,
        environment: env.HUB_ENVIRONMENT
      });
    }

    if (path === "/v1/tools" && request.method === "GET") {
      const allowUnauthDiscovery = (env.ALLOW_UNAUTH_DISCOVERY ?? "false") === "true";
      if (!allowUnauthDiscovery && !isAuthorized(request, env)) {
        return json({ error: "Unauthorized" }, 401);
      }

      const response: HubDiscoveryResponse = {
        hub: {
          name: env.HUB_NAME,
          version: "0.1.0",
          environment: env.HUB_ENVIRONMENT
        },
        tools: listPublicTools()
      };
      return json(response);
    }

    if (path.startsWith("/v1/tools/") && path.endsWith("/execute") && request.method === "POST") {
      if (!isAuthorized(request, env)) {
        return json({ error: "Unauthorized" }, 401);
      }

      const toolName = path.replace("/v1/tools/", "").replace("/execute", "");
      try {
        const payload = await request.json();
        const result = executeTool(toolName, payload);
        return json({ ok: true, ...result });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return json({ ok: false, error: message }, 400);
      }
    }

    return json({ error: "Not found" }, 404);
  }
};
