# Marketer MCP Pricing and Commercial Model

## Philosophy

Free access for small businesses and creators. Paid tiers for teams that need higher throughput, guaranteed uptime, and dedicated support.

No per-seat pricing. No feature gating on core tools. You pay for volume and service level.

## Tier architecture

### Starter (Free)

- **Monthly tool executions:** 500
- **Rate limit:** 10 requests/minute
- **Payload size:** 100 KB
- **Auth:** API key (self-serve)
- **Support:** Community only (GitHub Discussions)
- **SLA:** None (best-effort)
- **Data retention:** Logs available 24 hours
- **Fair-use policy:** Applies (see `docs/policies/fair-use.md`)

**Upgrade trigger:** approaching 80% of monthly cap or needing faster support.

### Growth (Paid API)

- **Monthly tool executions:** 10,000 (additional at $0.002/execution)
- **Rate limit:** 60 requests/minute
- **Payload size:** 500 KB
- **Auth:** API key + optional OAuth
- **Support:** Email support, 48-hour response target
- **SLA:** 99.5% monthly uptime
- **Data retention:** Logs available 7 days
- **Billing:** Usage-based, billed monthly

**Upgrade trigger:** needing dedicated support, higher SLA, or custom integrations.

### Enterprise (API + SLA Support)

- **Monthly tool executions:** Custom (volume-negotiated)
- **Rate limit:** Custom
- **Payload size:** Custom (up to 2 MB)
- **Auth:** API key + OAuth + SSO
- **Support:** Dedicated channel, 4-hour critical response, named account contact
- **SLA:** 99.9% monthly uptime with credits
- **Data retention:** Logs available 30 days
- **Billing:** Annual contract or quarterly invoicing
- **Extras:** Security review support, onboarding assistance, priority feature requests

**Entry path:** Contact sales or fill enterprise intake form.

## Pricing summary

| | Starter | Growth | Enterprise |
|---|---|---|---|
| Monthly price | Free | Usage-based | Contract |
| Executions/month | 500 | 10,000+ | Custom |
| Rate limit | 10 req/min | 60 req/min | Custom |
| Support | Community | Email (48h) | Dedicated (4h critical) |
| SLA | Best-effort | 99.5% | 99.9% + credits |

## Revenue model

- Primary revenue: Growth tier usage fees and Enterprise contracts.
- Free tier purpose: adoption, community growth, bottom-up conversion pipeline.
- Enterprise purpose: predictable revenue, high-touch relationships, expansion deals.

## Precedents informing this model

- Algolia: free build tier -> pay-as-you-go grow -> custom enterprise with 99.999% SLA.
- Twilio: free trial -> usage-based pricing -> volume discounts at scale.
- Stripe: usage-based API pricing -> enterprise agreements for high-volume customers.
- CockroachDB/Elastic: free open-source core -> paid enterprise support and SLA.

## Implementation notes

- Execution counting is enforced at the MCP hub Worker level per API key.
- Rate limits use Cloudflare Workers Rate Limiting binding.
- Tier enforcement is checked before tool dispatch in the hub router.
- Upgrade prompts are returned in response headers when usage exceeds 80% of cap.
