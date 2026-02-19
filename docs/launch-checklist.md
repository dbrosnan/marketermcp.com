# Launch Readiness Checklist

Use this checklist as the go/no-go gate before opening public access.

Items marked **(HUMAN)** require manual action by a person and cannot be automated.

---

## Human actions required (consolidated)

These are every action across the project that needs a human to complete.

### Account and legal setup
- [ ] **(HUMAN)** Register and verify `marketermcp.com` domain in Cloudflare dashboard
- [ ] **(HUMAN)** Create Cloudflare Pages project named `marketermcp-site` in dashboard
- [ ] **(HUMAN)** Map custom domain `marketermcp.com` to Pages project in Cloudflare
- [ ] **(HUMAN)** Create Worker custom domain `api.marketermcp.com` for MCP hub
- [ ] **(HUMAN)** Replace placeholder privacy page with legal-reviewed privacy policy
- [ ] **(HUMAN)** Replace placeholder terms page with legal-reviewed terms of use
- [ ] **(HUMAN)** Replace placeholder security page with legal-reviewed security policy
- [ ] **(HUMAN)** Review and finalize `docs/policies/fair-use.md` with legal counsel
- [ ] **(HUMAN)** Review and finalize `docs/policies/enterprise-sla.md` with legal counsel
- [ ] **(HUMAN)** Decide on enterprise contract template and billing workflow

### GitHub and repo setup
- [ ] **(HUMAN)** Create GitHub repo at `dbrosnan/marketermcp.com` and push codebase
- [ ] **(HUMAN)** Run label sync command from `.github/PROJECT_SETUP.md` to apply label taxonomy
- [ ] **(HUMAN)** Create GitHub Project v2 board per `.github/PROJECT_SETUP.md` instructions
- [ ] **(HUMAN)** Configure Project board custom fields (Area, Priority, TierImpact, Owner, TargetSprint)
- [ ] **(HUMAN)** Set up Project board automations (label -> backlog, PR merge -> done, assign -> ready)
- [ ] **(HUMAN)** Enable branch protection rules on `main` (require PR review, status checks)
- [ ] **(HUMAN)** Enable GitHub Discussions for community support channel

### Secrets and credentials
- [ ] **(HUMAN)** Run `wrangler secret put HUB_API_TOKEN` for dev environment
- [ ] **(HUMAN)** Run `wrangler secret put HUB_API_TOKEN` for staging environment
- [ ] **(HUMAN)** Run `wrangler secret put HUB_API_TOKEN` for production environment
- [ ] **(HUMAN)** Add `CLOUDFLARE_API_TOKEN` secret to GitHub repo for CI/CD deployments
- [ ] **(HUMAN)** Set strong `POSTGRES_PASSWORD` in `infra/wikijs/.env` for production Wiki.js

### Cloudflare security configuration
- [ ] **(HUMAN)** Enable Cloudflare WAF rules for `marketermcp.com` zone
- [ ] **(HUMAN)** Configure rate limiting rules in Cloudflare dashboard (or via wrangler config)
- [ ] **(HUMAN)** Verify SSL/TLS is set to Full (Strict) in Cloudflare
- [ ] **(HUMAN)** Configure bot protection settings

### Content and marketing
- [ ] **(HUMAN)** Write and record Budget Buddy demo video/GIF for launch
- [ ] **(HUMAN)** Draft 3-5 teaser social posts for X and LinkedIn
- [ ] **(HUMAN)** Write founder announcement post targeting ICP
- [ ] **(HUMAN)** Draft launch email sequence (welcome, what is MCP, beta invite)
- [ ] **(HUMAN)** Set up email capture service and autoresponder for waitlist form
- [ ] **(HUMAN)** Set up analytics (Cloudflare Web Analytics or Plausible/Fathom)
- [ ] **(HUMAN)** Configure conversion tracking on waitlist form
- [ ] **(HUMAN)** Create landing pages `/lp/budget-pacing.html` and `/lp/marketing-ops.html`
- [ ] **(HUMAN)** Set up paid media campaigns (Google Ads, LinkedIn Ads, Meta, YouTube)
- [ ] **(HUMAN)** Seed community posts in MarketingOps, AI/builder Slack groups, relevant subreddits

### Enterprise operations
- [ ] **(HUMAN)** Set up dedicated enterprise support email address
- [ ] **(HUMAN)** Define and document incident response contacts and escalation path
- [ ] **(HUMAN)** Set up enterprise intake form or CRM workflow for customer-request issues
- [ ] **(HUMAN)** Prepare enterprise onboarding session template
- [ ] **(HUMAN)** Prepare security overview document for enterprise customers

### Wiki.js (Phase 2 docs platform)
- [ ] **(HUMAN)** Complete Wiki.js first-time setup wizard at `http://localhost:8080` (create admin account)
- [ ] **(HUMAN)** Create top-level Wiki.js spaces per `docs/migrations/wikijs-space-bootstrap.md`
- [ ] **(HUMAN)** Plan SSO integration for Wiki.js before wider rollout
- [ ] **(HUMAN)** Set up production hosting for Wiki.js (TLS reverse proxy, backup monitoring)

### Pricing decisions
- [ ] **(HUMAN)** Final sign-off on Growth tier pricing ($0.002/execution) before publishing on website
- [ ] **(HUMAN)** Decide on self-serve API key provisioning flow vs manual key distribution
- [ ] **(HUMAN)** Decide when to build developer dashboard for key management

### Sign-off
- [ ] **(HUMAN)** Product owner: launch approved
- [ ] **(HUMAN)** Engineering owner: launch approved
- [ ] **(HUMAN)** Staging -> Production cutover: authorized

---

## Automated / code-completable checks

### Product
- [ ] MCP hub endpoint live and returning `/health` OK
- [ ] Budget Buddy tool registered and executing via `/v1/tools/budget_buddy.plan_overview/execute`
- [ ] Tool discovery working at `/v1/tools`
- [ ] API key authentication enforced on execution routes
- [ ] Rate limiting active per tier
- [ ] Quota enforcement active per tier
- [ ] Upgrade prompt headers included at 80% usage

### Commercial docs
- [ ] Pricing docs published (`docs/pricing.md`)
- [ ] Fair-use policy published (`docs/policies/fair-use.md`)
- [ ] Enterprise SLA scope published (`docs/policies/enterprise-sla.md`)
- [ ] API access tiers documented (`docs/api/access-tiers.md`)
- [ ] Enterprise intake workflow operational (issue template + contact link)

### Website
- [ ] Homepage live with updated tier messaging
- [ ] Waitlist form present on homepage
- [ ] Privacy, terms, and security pages linked from footer
- [ ] SEO foundation deployed (meta, OG, sitemap, robots.txt)

### Documentation
- [ ] Quickstart published
- [ ] API docs with tier-specific examples
- [ ] Security policy published
- [ ] CHANGELOG.md current

### Infrastructure
- [ ] CI/CD pipeline green on all checks
- [ ] Staging environment deployed and tested

### Operations
- [ ] MCP hub runbook updated (`docs/operations/runbook-mcp-hub.md`)
- [ ] Website runbook updated (`docs/operations/runbook-website.md`)
- [ ] Rollback procedure documented

### Governance
- [ ] GitHub Project board active with all launch tasks tracked
- [ ] PR governance enforced (commercial impact, docs checklist)
- [ ] CODEOWNERS protecting pricing, security, and public API
- [ ] Label taxonomy applied to all open issues
