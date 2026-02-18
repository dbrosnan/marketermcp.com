# Runbook: MCP Hub Worker

## Service overview

The MCP Hub Worker is a Cloudflare Worker serving the public MCP API at
`marketermcp.com`. It handles tool discovery, schema validation, and request
routing to tool implementations.

## Health check

```bash
curl -s https://marketermcp.com/health | jq .
```

## Common issues

### Worker returning 500

1. Check Cloudflare dashboard > Workers > mcp-hub-worker > Logs.
2. Review recent deployments for regressions.
3. If urgent, roll back via: `npx wrangler rollback --env production`

### High latency

1. Check Cloudflare analytics for request volume spikes.
2. Review Worker CPU time in dashboard.
3. Check upstream dependencies (KV, D1, external APIs).

## Deployment

See `.github/workflows/deploy-mcp.yml`. Production deploys require manual
approval in the `production` GitHub Environment.

## Contacts

- Primary: Drew Brosnan (@dbrosnan)
