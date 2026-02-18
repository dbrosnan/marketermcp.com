# Documentation Strategy: Git First -> FLOSS Knowledge Platform

## Goal

Create a self-hosted documentation system that starts as disciplined docs-as-code in Git, then expands into a collaborative FLOSS Notion replacement without losing governance.

## Phase 1 (Now): Git-native docs operations

### Why start here

- Strong change history and peer review from day one.
- Tight coupling to product code, release workflows, and runbooks.
- Low complexity while team and content model stabilize.

### Operating model

1. **Single source of truth in repo**
   - All engineering, product, and launch docs live under `docs/`.
2. **Structured doc types**
   - ADRs in `docs/adr/`
   - Runbooks in `docs/operations/`
   - Policies and guides in top-level `docs/*.md`
3. **Review and ownership**
   - Every new doc has an owner and a review cadence.
4. **Release coupling**
   - No production launch without updated runbook and security docs.

### Phase 1 deliverables in this repo

- Documentation hub index: `docs/README.md`
- Platform strategy (this file)
- Docs platform runbook: `docs/operations/runbook-docs-platform.md`
- Migration guide to collaborative platform: `docs/migrations/git-to-wikijs.md`

## Phase 2 (Expansion): FLOSS Notion replacement

### Selected platform

Use **Wiki.js** as the self-hosted collaborative knowledge layer.

Why Wiki.js for this phase:

- Open-source and self-hostable.
- Supports rich editing and role-based permissions.
- Works well as a central internal knowledge base.
- Can be run with a simple Docker Compose stack.

### Role of each system

- **Git docs** remain canonical for:
  - Architecture decisions
  - Runbooks
  - API and security specs
- **Wiki.js** becomes collaborative workspace for:
  - Team playbooks
  - Meeting notes
  - Cross-functional planning pages
  - Living operational FAQs

### Sync model

1. Keep critical technical docs in Git as source-of-truth.
2. Publish curated copies/summaries to Wiki.js for wider collaboration.
3. Link each Wiki.js page to source markdown path where applicable.

## Governance model (both phases)

- **Content classes**
  - Canonical (must be in Git)
  - Collaborative (can live in Wiki.js)
  - Published (website/docs pages)
- **Review cadence**
  - Critical docs: monthly
  - Operational docs: quarterly
  - Marketing narrative docs: per campaign
- **Change control**
  - Required review for Canonical docs
  - Optional async review for Collaborative docs

## 30-60-90 rollout

### 30 days

- Stabilize docs taxonomy and ownership in Git.
- Enforce docs updates for product and infra changes.

### 60 days

- Deploy Wiki.js in staging with SSO plan and permissions model.
- Migrate non-canonical internal content categories first.

### 90 days

- Move team collaboration workflows to Wiki.js.
- Keep canonical technical docs in Git with clear cross-links.

## Success metrics

- Time to find key runbook information.
- Percentage of releases with updated docs.
- Number of stale docs older than review window.
- Team adoption of collaborative platform pages.
