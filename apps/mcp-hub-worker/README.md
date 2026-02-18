# MCP Hub Worker

Public Marketer MCP hub hosted on Cloudflare Workers.

## Routes

- `GET /health` - service health
- `GET /v1/tools` - discovery response
- `POST /v1/tools/:toolName/execute` - execute a tool

## Local development

1. From repo root: `npm install`
2. Optional auth token:
   - `npm --workspace apps/mcp-hub-worker exec wrangler secret put HUB_API_TOKEN`
3. Start local Worker:
   - `npm run dev:mcp`
