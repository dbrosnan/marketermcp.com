# Marketer MCP

Monorepo for the public Marketer MCP hub (`marketermcp.com`), first-party tool packages (starting with Budget Buddy), and launch website.

## Workspace layout

- `apps/mcp-hub-worker` - public MCP hub API on Cloudflare Workers
- `apps/website` - launch website assets and Worker config
- `packages/tools-budget-buddy` - Budget Buddy tool implementation
- `packages/tool-registry` - tool registry and discovery metadata
- `packages/mcp-schemas` - shared schemas and validation types
- `docs` - product docs, launch comms, brand/copy standards
- `infra` - deployment and release templates

## Quick start

1. Install dependencies:
   - `npm install`
2. Type-check the repo:
   - `npm run typecheck`
3. Run the MCP hub locally:
   - `npm run dev:mcp`
4. Run website locally:
   - `npm run dev:website`

## Deploy

- MCP hub:
  - `npm run deploy:mcp`
- Website:
  - `npm run deploy:website`
