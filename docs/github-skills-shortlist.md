# GitHub Add-On Skills Shortlist

This shortlist maps high-impact GitHub projects to practical \"skills\" we can run in this repo.

## Tier 1 (adopt first)

1. **MCP security and implementation reference**
   - Repo: `modelcontextprotocol/servers`
   - Use as: architecture and threat-model reference, not production code copy/paste.
   - Why: keeps our hub aligned with MCP ecosystem patterns.
2. **Accessibility quality automation**
   - Repos: `dequelabs/axe-core` + `pa11y/pa11y-ci`
   - Use as: automated website accessibility checks in CI.
   - Why: fastest way to reduce launch risk on public pages.
3. **Design token pipeline**
   - Repo: `style-dictionary/style-dictionary`
   - Use as: convert brand tokens into CSS variables and future app targets.
   - Why: enforces brand consistency and speeds up design iteration.

## Tier 2 (adopt next)

1. **Copy and editorial linting**
   - Repo: `textlint/textlint`
   - Use as: lint docs/marketing copy for clarity and consistency.
   - Why: improves readability and keeps tone on-brand.
2. **Security static analysis**
   - Repo: `semgrep/semgrep`
   - Use as: SAST checks for dangerous patterns before release.
   - Why: catches avoidable implementation issues early.

## Tier 3 (optional prompt libraries)

1. **Prompt libraries for marketing drafts**
   - Repos: `f/awesome-chatgpt-prompts`, `0x2e-Tech/awesome-ai-prompts`, `mathewsdaniel/ChatGPTPrompts`
   - Use as: idea seeds only; adapt and review manually before publishing.
   - Why: can accelerate content generation, but quality must be curated.

## Adoption policy

- Add each candidate in a sandbox branch first.
- Require license check, maintenance check, and security review.
- Track measurable impact after 2 weeks:
  - content throughput
  - defect reduction
  - time saved
