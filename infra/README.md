# Infrastructure Notes

## Cloudflare setup targets

- Website: `marketermcp.com`
- MCP hub: `api.marketermcp.com` (recommended)
- Staging: `staging.marketermcp.com`

## Deployment guidance

- Deploy website from `apps/website/public`.
- Deploy hub Worker from `apps/mcp-hub-worker`.
- Configure environment vars and secrets per environment.
- For collaborative internal docs, see `infra/wikijs/` for self-hosted Wiki.js stack.

## Immediate TODOs

- [ ] **(HUMAN)** Create Cloudflare Pages project named `marketermcp-site` in dashboard
- [ ] **(HUMAN)** Map `marketermcp.com` custom domain to Pages project
- [ ] **(HUMAN)** Create Worker custom domain `api.marketermcp.com` for MCP hub
- [ ] **(HUMAN)** Run `wrangler secret put HUB_API_TOKEN` for each environment (dev, staging, prod)
- [ ] **(HUMAN)** Add `CLOUDFLARE_API_TOKEN` to GitHub repo secrets for CI deploys
- [ ] **(HUMAN)** Enable Cloudflare WAF rules for `marketermcp.com` zone
- [ ] **(HUMAN)** Configure route-level rate limiting rules
- [ ] **(HUMAN)** Verify SSL/TLS is set to Full (Strict)
- [ ] **(HUMAN)** Deploy Wiki.js to staging host and validate backup/restore flow
