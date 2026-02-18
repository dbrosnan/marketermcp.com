# Infrastructure Notes

## Cloudflare setup targets

- Website: `marketermcp.com`
- MCP hub: `api.marketermcp.com` (recommended)
- Staging: `staging.marketermcp.com`

## Deployment guidance

- Deploy website from `apps/website/public`.
- Deploy hub Worker from `apps/mcp-hub-worker`.
- Configure environment vars and secrets per environment.

## Immediate TODOs

- Create Cloudflare Pages project for website.
- Add custom domain mapping.
- Configure Worker route/domain for MCP hub.
- Enable rate limiting and WAF rules.
