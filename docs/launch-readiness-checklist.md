# Launch Readiness Checklist

Use this checklist before promoting any release to production. Every item must
be signed off by the responsible owner. Evidence artifacts (CI reports,
screenshots, review links) should be attached to the release PR or linked in
release notes.

---

## 1. CI pipeline — all green

- [ ] Typecheck passes
- [ ] Build succeeds
- [ ] ESLint: zero warnings
- [ ] Prettier: no formatting drift
- [ ] npm audit: zero high/critical findings
- [ ] Semgrep SAST: zero errors
- [ ] Trivy dependency scan: zero high/critical CVEs
- [ ] TruffleHog secrets scan: zero verified findings
- [ ] CodeQL (weekly): latest run clean

**Owner:** Engineering
**Evidence:** CI workflow run link

---

## 2. E2E testing

- [ ] Playwright E2E suite passes (chromium)
- [ ] Homepage renders with correct title and hero
- [ ] All navigation links resolve (no 4xx/5xx)
- [ ] Blog index lists posts; individual posts render
- [ ] Legal pages (privacy, terms, security) load correctly
- [ ] FAQ page loads correctly

**Owner:** Engineering
**Evidence:** `playwright-report` artifact from CI

---

## 3. Accessibility

- [ ] axe-core WCAG 2.1 AA: zero violations on homepage
- [ ] axe-core WCAG 2.1 AA: zero violations on blog index
- [ ] Lighthouse accessibility score >= 95
- [ ] Keyboard navigation works for all CTAs and nav items
- [ ] Color contrast meets WCAG AA minimums
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] All form fields have associated labels
- [ ] All images have meaningful alt text or are decorative

**Owner:** Engineering + Marketing
**Evidence:** Lighthouse artifact, Playwright a11y test results

---

## 4. Performance

- [ ] Lighthouse performance score >= 90
- [ ] Lighthouse best-practices score >= 90
- [ ] TTFB (p95) < 200 ms (Cloudflare Analytics after staging deploy)
- [ ] No render-blocking resources
- [ ] Images optimized (if any added before launch)
- [ ] CSS minified or within acceptable size budget

**Owner:** Engineering
**Evidence:** Lighthouse artifact, Cloudflare Analytics screenshot

---

## 5. SEO

- [ ] Lighthouse SEO score >= 90
- [ ] `sitemap.xml` is valid and lists all public pages
- [ ] `robots.txt` references sitemap and allows crawlers
- [ ] Every public page has unique `<title>` and `<meta description>`
- [ ] Open Graph tags present on all public pages
- [ ] `og-image.png` exists and renders correctly
- [ ] Structured data (JSON-LD) validates without errors
- [ ] Landing pages in `/lp/` have `noindex` meta tag

**Owner:** Marketing + Engineering
**Evidence:** Lighthouse artifact, manual sitemap review

---

## 6. Security

- [ ] No secrets committed to repo (TruffleHog clean)
- [ ] HTTPS enforced (Cloudflare handles this)
- [ ] Security headers present (CSP, X-Frame-Options, etc.)
- [ ] `security.html` page is accurate and up to date
- [ ] SECURITY.md has responsible disclosure instructions
- [ ] MCP hub endpoints reviewed per `mcp-security-review` skill

**Owner:** Engineering
**Evidence:** TruffleHog artifact, manual header check

---

## 7. Copy and brand

- [ ] Homepage copy follows pain-promise-proof-CTA flow
- [ ] All pages reviewed against `docs/copy-system.md`
- [ ] Brand colors, typography, and spacing match `docs/brand-guide.md`
- [ ] No placeholder text ("Lorem ipsum", "TODO", "TBD")
- [ ] Legal pages reviewed by appropriate stakeholder

**Owner:** Marketing
**Evidence:** PR review approval from marketing owner

---

## 8. Staging validation

- [ ] Staging deploy succeeded
- [ ] Staging smoke tests passed (all critical paths return 200)
- [ ] Manual walkthrough of staging site completed
- [ ] Cross-browser spot check (Chrome, Firefox, Safari)
- [ ] Mobile responsive spot check

**Owner:** Engineering + Marketing
**Evidence:** `smoke-staging-report` artifact, staging URL confirmation

---

## 9. Production deploy

- [ ] Production environment approval granted in GitHub
- [ ] Production deploy succeeded
- [ ] Production smoke tests passed
- [ ] DNS resolves correctly: `dig marketermcp.com`
- [ ] Site loads at `https://marketermcp.com`
- [ ] Cloudflare cache is warm (check cache status headers)

**Owner:** Engineering
**Evidence:** `smoke-production-report` artifact, curl output

---

## 10. Post-launch monitoring

- [ ] Cloudflare Analytics baseline recorded (first 24h)
- [ ] Error rate within expected range
- [ ] No unexpected 4xx/5xx spikes
- [ ] Search console submitted (if applicable)
- [ ] Social sharing preview renders correctly (test with card validators)

**Owner:** Engineering + Marketing
**Evidence:** Cloudflare Analytics screenshot at T+24h

---

## Sign-off

| Role | Name | Date | Go / No-Go |
|---|---|---|---|
| Engineering | | | |
| Marketing | | | |
| Product | | | |
