# Runbook: Documentation Platform

## Scope

This runbook covers operation of the documentation system across:

- Phase 1 Git-native docs (`docs/` in repo)
- Phase 2 Wiki.js collaborative knowledge base (self-hosted)

## Core owners

- Documentation owner: Product/Operations lead
- Technical owner: Engineering lead
- Security owner: Engineering/Security lead

## Routine operations

### Weekly

1. Review docs PRs and stale open updates.
2. Ensure new product changes include relevant doc updates.
3. Check broken internal links in docs.

### Monthly

1. Audit canonical docs:
   - ADRs
   - Runbooks
   - Security policy
2. Mark outdated docs and assign refresh owners.
3. Review Wiki.js permission model and recent edits.

## Incident mode

If incident response documentation is missing or stale:

1. Freeze non-critical deploys.
2. Update relevant runbook in Git immediately.
3. Link incident timeline and remediation notes.
4. Perform retro and add corrective ADR if needed.

## Backup and recovery (Wiki.js phase)

1. Back up Postgres daily.
2. Keep 14-day rolling backups minimum.
3. Test restoration quarterly in staging.

## Security controls

- Restrict admin rights to minimum set of maintainers.
- Enforce SSO for internal docs when available.
- Review public/private space settings after major org changes.
