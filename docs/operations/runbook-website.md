# Runbook: Website

## Service overview

Static launch website served via Cloudflare Pages at `marketermcp.com`.
Deployed through GitHub Actions with a staging gate at
`staging.marketermcp.com` and post-deploy smoke tests at both stages.

## Health check

```bash
curl -sI https://marketermcp.com | head -5
```

Automated smoke tests run against every deploy (see `tests/smoke/`).

## SLOs

| Metric | Target | Measurement |
|---|---|---|
| Availability | >= 99.9 % | Cloudflare Analytics — successful requests / total |
| TTFB (p95) | < 200 ms | Cloudflare Analytics — origin response time |
| Lighthouse Performance | >= 90 | Lighthouse CI in `.github/workflows/ci.yml` |
| Lighthouse Accessibility | >= 95 | Lighthouse CI |
| Lighthouse SEO | >= 90 | Lighthouse CI |
| Zero critical a11y violations | 0 | axe-core via Playwright E2E tests |
| Zero high/critical CVEs | 0 | Trivy + npm audit in CI |

## Observability stack

### Cloudflare Analytics (native — no setup required)

- Request volume, error rates, bandwidth, cache hit ratio.
- Available at: Cloudflare Dashboard > Analytics > Web Traffic.
- Use for: availability SLO tracking, traffic anomaly detection.

### Sentry (Tier 2 — post-launch)

- Client-side error tracking via `@sentry/browser`.
- Integrate by adding the Sentry JS SDK to the website HTML or during an
  Astro migration.
- Use for: JavaScript error capture, user-facing regression detection.

### CI quality signals

- Playwright E2E + axe-core results uploaded as GitHub Actions artifacts
  (14-day retention).
- Lighthouse CI reports uploaded to `.lighthouseci/` artifacts.
- Semgrep, Trivy, and TruffleHog results uploaded as artifacts.

## Alerting

| Condition | Channel | Action |
|---|---|---|
| Staging smoke tests fail | GitHub Actions (workflow failure) | Block production deploy |
| Production smoke tests fail | GitHub Actions (workflow failure) | Investigate immediately; consider rollback |
| Lighthouse score below threshold | GitHub Actions (workflow failure) | Fix in next PR |
| Trivy or Semgrep finding | GitHub Actions (workflow failure) | Triage and remediate before merge |
| Cloudflare 5xx spike | Cloudflare notification (configure manually) | Check Worker status, review recent deploy |

## Common issues

### Site not loading

1. Check DNS resolution: `dig marketermcp.com`
2. Check Cloudflare dashboard for Pages project status.
3. Review recent deployments in GitHub Actions.
4. Check production smoke test artifacts for clues.

### Stale content

1. Purge Cloudflare cache via dashboard or API.
2. Verify the latest deployment succeeded.
3. Confirm the `deploy-website.yml` workflow completed all stages.

### Failed smoke tests blocking production

1. Download the `smoke-staging-report` artifact from the failed workflow run.
2. Identify which pages or assertions failed.
3. Fix the issue and re-trigger the deploy (push or workflow_dispatch).

### Performance regression

1. Download the `lighthouse-report` artifact from the failed CI run.
2. Compare scores to the thresholds in `lighthouserc.js`.
3. Profile the regressed page locally with Chrome DevTools.
4. Address the largest contributors (images, blocking scripts, layout shifts).

## Deployment

See `.github/workflows/deploy-website.yml`.

Pipeline stages:
1. CI gate (typecheck, build, lint, audit, E2E, Lighthouse, security scans)
2. Deploy to staging
3. Smoke test staging
4. Deploy to production (requires manual approval via GitHub environment)
5. Smoke test production

### Rollback

Cloudflare Pages keeps previous deployments. To roll back:

1. Open the Cloudflare dashboard > Pages > `marketermcp-site`.
2. Find the last known-good deployment.
3. Click "Rollback to this deploy".

Alternatively, revert the commit in Git and let the pipeline redeploy.

## Content workflow

### Current (launch)

Content is managed as static HTML files in `apps/website/public/`. Changes go
through standard PR review with CI quality gates.

### Future (Tier 2)

Decap CMS (Git-backed) is the recommended editorial self-serve path. It
commits directly to the repo, keeping the same CI pipeline and review flow.
See `docs/github-skills-shortlist.md` for the full content tooling evaluation.

## Contacts

- Primary: Drew Brosnan (@dbrosnan)
