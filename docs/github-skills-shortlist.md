# GitHub Add-On Skills Shortlist

This shortlist maps high-impact GitHub projects to practical skills we can run
in this repo. Every entry meets the allowlist criteria in
`docs/github-skills-allowlist.md`: >=5 000 stars **and** commits within the
last 90 days (exceptions noted).

Last validated: 2026-02-18

---

## Tier 1 — adopt for launch

### 1. E2E and visual testing

| Repo | Stars | License | Role |
|---|---|---|---|
| `microsoft/playwright` | 81 600 | Apache-2.0 | Cross-browser E2E tests, smoke tests post-deploy |

### 2. Performance and accessibility audits

| Repo | Stars | License | Role |
|---|---|---|---|
| `GoogleChrome/lighthouse` | 29 800 | Apache-2.0 | Lighthouse CI performance budgets |
| `dequelabs/axe-core` | 6 800 | MPL-2.0 | Accessibility rule engine (via `@axe-core/playwright`) |

### 3. Security scanning

| Repo | Stars | License | Role |
|---|---|---|---|
| `semgrep/semgrep` | 14 100 | LGPL-2.1 | SAST for JS/TS patterns |
| `github/codeql` | 9 200 | MIT | SAST (already in CI) |
| `aquasecurity/trivy` | 25 000+ | Apache-2.0 | Dependency and license scanning, SBOM |
| `trufflesecurity/trufflehog` | 16 000+ | AGPL-3.0 | Secrets scanning in commits and PRs |

### 4. MCP security reference

| Repo | Stars | License | Role |
|---|---|---|---|
| `modelcontextprotocol/servers` | 16 000+ | MIT | Architecture and threat-model reference |

### 5. Code quality and formatting

| Repo | Stars | License | Role |
|---|---|---|---|
| `eslint/eslint` | 25 000+ | MIT | JS/TS static analysis |
| `prettier/prettier` | 49 000+ | MIT | Opinionated code formatter |

---

## Tier 2 — adopt post-launch

### 6. Build framework upgrade

| Repo | Stars | License | Role |
|---|---|---|---|
| `withastro/astro` | 56 200 | MIT | Static-first framework with island architecture, Cloudflare adapter |

### 7. Design tokens

| Repo | Stars | License | Role |
|---|---|---|---|
| `amzn/style-dictionary` | ~4 000 | Apache-2.0 | Brand tokens to CSS variables (below 5k threshold; grandfathered from original shortlist) |

### 8. Copy and editorial linting

| Repo | Stars | License | Role |
|---|---|---|---|
| `textlint/textlint` | ~4 500 | MIT | Lint docs and marketing copy (below 5k threshold; grandfathered) |

### 9. Observability and error tracking

| Repo | Stars | License | Role |
|---|---|---|---|
| `getsentry/sentry-javascript` | 8 500+ | MIT | Client-side error tracking |
| `grafana/grafana` | 72 100 | AGPL-3.0 | Dashboards for uptime and performance metrics |
| `open-telemetry/opentelemetry-js` | 2 800+ | Apache-2.0 | Trace instrumentation (below 5k; ecosystem standard, exception noted) |

### 10. Content workflow

| Repo | Stars | License | Role |
|---|---|---|---|
| `decaporg/decap-cms` | 18 900 | MIT | Git-backed CMS for static sites |
| `strapi/strapi` | 71 200 | MIT (EE) | Headless CMS for future API-driven content |

---

## Tier 3 — optional / reference only

### 11. Prompt libraries for marketing drafts

| Repo | Stars | License | Role |
|---|---|---|---|
| `f/awesome-chatgpt-prompts` | 120 000+ | CC0-1.0 | Idea seeds; adapt and review manually |

---

## Adoption policy

- Add each candidate in a sandbox branch first.
- Require license check, maintenance check, and security review per the
  allowlist criteria.
- Track measurable impact after 2 weeks:
  - content throughput
  - defect reduction
  - time saved
- Tools marked "grandfathered" or "exception noted" must be re-evaluated
  quarterly against the 5k/90-day threshold.
