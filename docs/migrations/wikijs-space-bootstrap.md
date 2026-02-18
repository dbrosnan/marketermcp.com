# Wiki.js Space Bootstrap (Initial Taxonomy)

Use this as the first setup structure inside Wiki.js.

## Recommended top-level spaces

1. **Company**
   - Vision
   - Org map
   - Operating principles
2. **Product**
   - Marketer MCP strategy
   - Tool roadmap
   - Release calendar
3. **Engineering**
   - Service maps
   - Integration notes
   - Playbooks (non-canonical)
4. **Marketing Ops**
   - Launch campaigns
   - Messaging tests
   - Creative process docs
5. **GTM Launches**
   - Current launch plan
   - Task trackers
   - Retrospectives

## Canonical source policy

For each Wiki.js page that derives from Git docs:

- Add \"Source of truth\" with a link to the markdown file in `docs/`.
- Do not edit canonical specs directly in Wiki.js.

## Permission model (starter)

- Admins: 2-3 maintainers only
- Editors: by functional team
- Readers: all internal users
- Public access: off by default

## Setup checklist

- [ ] Create all top-level spaces
- [ ] Add landing page for each space
- [ ] Add source-of-truth notice template
- [ ] Assign space owner and backup owner
- [ ] Confirm backup/restore health before onboarding wider team
