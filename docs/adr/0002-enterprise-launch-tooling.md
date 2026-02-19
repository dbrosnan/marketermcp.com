# ADR-0002: Enterprise launch tooling selections

## Status

Accepted

## Context

The website (`apps/website/`) is a static HTML site deployed to Cloudflare
Pages with no build step, no tests, and limited CI quality gates. The current
CI pipeline covers only TypeScript type-checking, a non-blocking `npm audit`,
and weekly CodeQL scans. To ship an enterprise-grade public launch we need
automated E2E testing, accessibility and performance audits, stronger security
scanning, and a content/design pipeline that enforces brand standards.

All tool selections must meet the allowlist criteria in
`docs/github-skills-allowlist.md` (>=5 000 GitHub stars, commits within 90
days, permissive license). Exceptions are documented in
`docs/github-skills-shortlist.md`.

## Decision

### Build stack

Stay with static HTML on Cloudflare Pages for the initial launch. Evaluate an
Astro migration (`withastro/astro`, 56k stars) as a Tier 2 post-launch
improvement. Astro's static-first model, island architecture, and native
Cloudflare adapter make it the strongest upgrade path when the site outgrows
hand-written HTML.

### CI quality gates (added to `.github/workflows/ci.yml`)

| Job | Tool | Purpose |
|---|---|---|
| `lint` | ESLint + Prettier | Code quality and formatting |
| `e2e` | Playwright | Cross-browser smoke tests against local dev server |
| `lighthouse` | Lighthouse CI | Performance, a11y, SEO, best-practices budgets |
| `a11y` | axe-core (via `@axe-core/playwright`) | WCAG 2.1 AA accessibility checks |

### CI security gates (added to `.github/workflows/ci.yml`)

| Job | Tool | Purpose |
|---|---|---|
| `semgrep` | Semgrep | SAST for JS/TS anti-patterns |
| `trivy` | Trivy | Dependency CVE scan and license audit |
| `trufflehog` | TruffleHog | Secrets scanning on diffs |
| `codeql` | CodeQL | Existing weekly schedule retained |

### Deploy pipeline additions

| Step | Where | Purpose |
|---|---|---|
| Post-deploy smoke test | `deploy-website.yml` | Playwright health-check against staging URL |
| Make npm audit blocking | `ci.yml` | Fail on high-severity findings |

### Observability (Tier 2)

Sentry JS SDK for client-side error tracking. Cloudflare Analytics (native) for
request metrics. Grafana + OpenTelemetry considered for the MCP hub but not
required for the static website at launch.

### Content workflow (Tier 2)

Decap CMS (Git-backed) is the recommended first step when editorial self-serve
is needed. Strapi is the long-term option if API-driven content is required.

## Consequences

- CI run time increases by ~2-4 minutes due to Playwright, Lighthouse, and
  security scan jobs running in parallel.
- Developers must install Playwright browsers locally (`npx playwright install`)
  for E2E development. CI handles this automatically.
- Semgrep and TruffleHog require no additional secrets; they run on public
  rulesets.
- Trivy license scanning may surface transitive dependency license issues that
  need triage.

## Alternatives considered

- **Cypress over Playwright**: Rejected. Playwright has broader browser support,
  faster execution, and native `axe-core` integration.
- **Immediate Astro migration**: Deferred. The static site works for launch; a
  framework migration mid-launch adds unnecessary risk.
- **Full Grafana/Prometheus stack for the website**: Overkill for a static site
  behind Cloudflare's edge. Cloudflare Analytics and Sentry cover launch needs.
- **Strapi as day-one CMS**: Rejected for launch. A headless CMS adds
  infrastructure complexity; Decap CMS is Git-native and zero-infra.
