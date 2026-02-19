# GitHub Project Board Setup

All steps below require a human to complete in the GitHub UI or CLI.

## Setup checklist

- [ ] **(HUMAN)** Create GitHub Project v2 board (see command below)
- [ ] **(HUMAN)** Configure Status field columns (Backlog, Ready, In Progress, In Review, Blocked, Done)
- [ ] **(HUMAN)** Add custom fields (Area, Priority, TierImpact, Owner, TargetSprint)
- [ ] **(HUMAN)** Configure automation rules (label -> backlog, PR merge -> done, assign -> ready)
- [ ] **(HUMAN)** Run label sync to apply `.github/labels.yml` (see commands below)

## Create the project

Run via `gh` CLI:

```bash
gh project create --owner @me --title "Marketer MCP Launch + Monetization"
```

## Columns (status field)

Configure the Status field with these options:

1. Backlog
2. Ready
3. In Progress
4. In Review
5. Blocked
6. Done

## Custom fields

Add these custom fields to the project:

| Field | Type | Options |
|---|---|---|
| Area | Single select | Product, GTM, Infrastructure, Docs |
| Priority | Single select | P0, P1, P2, P3 |
| TierImpact | Single select | Free, Growth, Enterprise, All |
| Owner | Text | (assignee name) |
| TargetSprint | Iteration | (2-week iterations) |

## Automation rules

Configure these built-in automations:

- When issue is opened with label `launch/*` -> add to project Backlog.
- When PR is merged that closes an issue -> move issue to Done.
- When issue is assigned -> move to Ready (if in Backlog).

## Label sync

Apply the full label set from `.github/labels.yml`:

```bash
# Install github-label-sync (one-time)
npm install -g github-label-sync

# Dry run
github-label-sync --dry-run --labels .github/labels.yml dbrosnan/marketermcp.com

# Apply
github-label-sync --labels .github/labels.yml dbrosnan/marketermcp.com
```

Or manually create labels with `gh`:

```bash
gh label create "area/product" --color "0052CC" --description "Product code, tools, schemas, hub"
gh label create "tier/free" --color "B4F8C8" --description "Affects Starter (free) tier"
gh label create "tier/growth" --color "A2D2FF" --description "Affects Growth (paid API) tier"
gh label create "tier/enterprise" --color "FFD6A5" --description "Affects Enterprise (API + SLA) tier"
gh label create "priority/p0" --color "D73A4A" --description "Critical - blocks launch or causes outage"
gh label create "priority/p1" --color "E99695" --description "High - needed this sprint"
gh label create "priority/p2" --color "FBF2C4" --description "Medium - important but not urgent"
gh label create "priority/p3" --color "D4C5F9" --description "Low - nice to have"
gh label create "launch/blocker" --color "B60205" --description "Blocks public launch"
gh label create "epic" --color "3E4B9E" --description "Multi-issue initiative"
gh label create "task" --color "7057FF" --description "Single scoped deliverable"
gh label create "pricing" --color "FBCA04" --description "Pricing or commercial model change"
gh label create "decision" --color "C2E0C6" --description "Decision record requiring sign-off"
gh label create "customer-request" --color "F9D0C4" --description "Enterprise customer or prospect request"
```
