# Changelog

All notable changes to Marketer MCP will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- Commercial model: Starter (free-capped), Growth (paid API), Enterprise (API + SLA) tiers.
- Pricing documentation (`docs/pricing.md`) with tier limits, upgrade triggers, and precedent references.
- Fair-use policy (`docs/policies/fair-use.md`) for free tier governance.
- Enterprise SLA and support scope (`docs/policies/enterprise-sla.md`) with response matrix and credits.
- API access tiers documentation (`docs/api/access-tiers.md`) with rate limits, quotas, and error codes.
- GitHub issue templates: epic, task, pricing-decision, customer-request.
- Label taxonomy: area/*, tier/*, priority/*, launch/blocker, pricing, customer-request.
- GitHub Project board setup guide (`.github/PROJECT_SETUP.md`).
- PR template expanded with commercial impact, docs checklist, rollout/rollback sections.
- CODEOWNERS protection for pricing, security, and public API paths.
- CHANGELOG (this file).

### Changed
- Updated `docs/README.md` with commercial model and product sections.
- Updated `docs/marketing-comms.md` with tier messaging guidelines.
- Updated `.github/release.yml` with pricing and enterprise changelog categories.
- Updated `.github/labeler.yml` with area, pricing, public-api, and security auto-labels.
- Updated `.github/ISSUE_TEMPLATE/config.yml` with enterprise access contact link.

## [0.1.0] - 2026-02-18

### Added
- Initial monorepo scaffold with npm workspaces.
- MCP hub Worker with `/health`, `/v1/tools`, and `/v1/tools/:tool/execute` endpoints.
- Budget Buddy tool package (`budget_buddy.plan_overview`).
- Tool registry and shared MCP schemas packages.
- Launch website with Tekko-inspired design, waitlist form, and trust pages.
- Documentation system: quickstart, security, brand guide, copy system, marketing comms.
- Self-hosted Wiki.js stack for FLOSS Notion replacement.
- CI/CD workflows: typecheck, build, CodeQL, deploy, auto-label, stale management.
- GitHub issue templates for bugs and feature requests.
- PR template, CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md.
