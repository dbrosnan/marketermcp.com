# API Access Tiers

## Authentication

All tiers require an API key passed as a Bearer token:

```
Authorization: Bearer <your-api-key>
```

Enterprise tier additionally supports OAuth 2.1 and SSO integration.

## Tier enforcement

The MCP hub enforces tier limits at the router level before dispatching to tools.

### Request flow

1. Authenticate request (API key lookup).
2. Resolve account tier and current usage counters.
3. Check rate limit (per-minute).
4. Check monthly execution quota.
5. Validate payload size.
6. Dispatch to tool if all checks pass.
7. Increment usage counters.
8. Return result with usage headers.

### Response headers (all tiers)

Every successful response includes:

```
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 7
X-Quota-Limit: 500
X-Quota-Used: 123
X-Quota-Remaining: 377
```

When usage exceeds 80% of quota, an additional header is included:

```
X-Upgrade-Prompt: You have used 80% of your monthly quota. Upgrade at https://marketermcp.com/pricing
```

## Limits by tier

| Limit | Starter | Growth | Enterprise |
|---|---|---|---|
| Monthly executions | 500 | 10,000 | Custom |
| Rate limit | 10 req/min | 60 req/min | Custom |
| Max payload | 100 KB | 500 KB | Up to 2 MB |
| Concurrent requests | 2 | 10 | Custom |

## Overage behavior

- **Starter:** requests beyond quota return `429 Too Many Requests` with a `Retry-After` header set to the start of the next billing month.
- **Growth:** overage requests are allowed and billed at $0.002/execution. A hard cap can be configured per account to prevent runaway costs.
- **Enterprise:** limits are soft by default. Alerts are sent to the account contact when thresholds are approached.

## API key management

- Keys are generated via the developer dashboard (when available) or by contacting support.
- Keys can be rotated at any time. Old keys are revocable immediately.
- Each account can have up to 3 active keys (Starter), 10 (Growth), or unlimited (Enterprise).

## Rate limiting implementation

Rate limits use Cloudflare Workers Rate Limiting binding keyed on the API key. Limits are enforced per calendar minute with a sliding window.

## Error responses

All tier-enforcement errors return JSON:

```json
{
  "ok": false,
  "error": "Monthly execution quota exceeded",
  "code": "QUOTA_EXCEEDED",
  "upgradeUrl": "https://marketermcp.com/pricing"
}
```

Standard error codes: `RATE_LIMITED`, `QUOTA_EXCEEDED`, `PAYLOAD_TOO_LARGE`, `UNAUTHORIZED`.
