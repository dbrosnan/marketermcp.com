# Marketer MCP Quickstart

## Endpoints

- `GET /health`
- `GET /v1/tools`
- `POST /v1/tools/:toolName/execute`

## Authentication

- Discovery can be public when `ALLOW_UNAUTH_DISCOVERY=true`.
- Tool execution should require `Authorization: Bearer <token>`.
- Set token securely with:
  - `wrangler secret put HUB_API_TOKEN`

## Budget Buddy request example

```json
{
  "monthlyBudget": 50000,
  "channels": [
    { "name": "paid_search", "spend": 17000 },
    { "name": "paid_social", "spend": 22000 },
    { "name": "creator", "spend": 9000 }
  ]
}
```

## Release checklist (minimum)

- Secrets configured per environment (`dev`, `staging`, `prod`)
- Rate limits enabled
- Error and latency alerts configured
- Privacy, terms, and security pages published
