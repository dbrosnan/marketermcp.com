# GitHub Add-On Skills Allowlist

Use this checklist before adopting any external skill into production workflows.

## Vetting criteria

- Active maintenance (recent commits in last 90 days preferred)
- Clear license (MIT/Apache-2.0 preferred)
- Documented inputs and outputs
- No hidden network calls or telemetry defaults
- No hardcoded secrets or unsafe shell execution patterns

## Trial workflow

1. Add skill in sandbox branch only.
2. Test against non-production data.
3. Record:
   - time saved
   - quality impact
   - failure modes
4. Approve/reject in weekly review.

## Candidate categories

- Copy quality assistant
- SEO metadata reviewer
- Accessibility reviewer
- API schema and contract checker
- Release notes/changelog helper

## Ownership

- Product owner: final approval
- Engineering owner: security/quality checks
- Marketing owner: copy and brand consistency checks
