# Runbook: Website

## Service overview

Static launch website served via Cloudflare Workers at `marketermcp.com`.

## Health check

```bash
curl -sI https://marketermcp.com | head -5
```

## Common issues

### Site not loading

1. Check DNS resolution: `dig marketermcp.com`
2. Check Cloudflare dashboard for Worker status.
3. Review recent deployments in GitHub Actions.

### Stale content

1. Purge Cloudflare cache via dashboard or API.
2. Verify the latest deployment succeeded.

## Deployment

See `.github/workflows/deploy-website.yml`.

## Contacts

- Primary: Drew Brosnan (@dbrosnan)
