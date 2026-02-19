# Migration Guide: Git Docs -> Wiki.js

## Purpose

Move collaborative documentation from Git-only workflows into a self-hosted FLOSS workspace while preserving canonical technical docs in Git.

## What moves first

Good first migration candidates:

- Team playbooks
- Working drafts and planning docs
- Meeting notes
- Cross-functional launch checklists

Keep in Git:

- ADRs
- Runbooks
- API specs
- Security policies

## Migration steps

1. **Inventory docs**
   - Tag docs as `canonical` or `collaborative`.
2. **Create Wiki.js spaces**
   - Product
   - Engineering
   - Marketing Ops
   - GTM Launches
3. **Import collaborative docs**
   - Preserve original markdown links where possible.
4. **Backlink to Git source**
   - Add source references for docs derived from Git markdown.
5. **Set permissions**
   - Editors by team, read-all default for internal users.
6. **Define update policy**
   - Canonical updates always start in Git.
   - Wiki pages can summarize and operationalize canonical docs.

## Rollback plan

If migration quality is poor or permissions misconfigured:

1. Pause new imports.
2. Restore from latest Postgres backup.
3. Continue updates in Git until fixed.
