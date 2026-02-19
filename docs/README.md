# Documentation Hub

This directory is the source of truth for product, engineering, operations, and launch communication docs.

## Platform roadmap

- Phase 1: Git-native docs operations (in this repo)
- Phase 2: Self-hosted collaborative knowledge base (FLOSS Notion replacement)

See `docs/documentation-strategy.md` for full architecture and rollout plan.

## Key sections

- `docs/adr` - architecture decision records
- `docs/operations` - service runbooks
- `docs/migrations` - platform migration and wiki setup guides
- `docs/quickstart.md` - MCP onboarding
- `docs/security.md` - security baseline
- `docs/marketing-comms.md` - launch communications
- `docs/brand-guide.md` and `docs/copy-system.md` - brand/copy standards
- `docs/github-skills-*.md` - skill sourcing and governance

## Commercial model

- `docs/pricing.md` - tier architecture, limits, upgrade triggers, precedent references
- `docs/policies/fair-use.md` - free tier acceptable use policy
- `docs/policies/enterprise-sla.md` - enterprise SLA, support response matrix, credits
- `docs/api/access-tiers.md` - API authentication, rate limits, quotas, error codes by tier

## Product

- `docs/mcp-product-roadmap.md` - tool suite roadmap and release sequence
- `docs/positioning-agency.md` and `docs/positioning-inhouse.md` - ICP positioning

## Operating rules

1. New product/process decisions require an ADR update.
2. Production-facing changes require a runbook update.
3. Public claims (website/email/social) should trace to docs-backed facts.
4. Every docs PR includes an owner and review date.
