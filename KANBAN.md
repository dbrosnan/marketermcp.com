# KANBAN: Marketer MCP

> **Project**: marketermcp.com
> **Prefix**: MCP
> **Foreman**: [GTM-Project-Foreman](../GTM-Project-Foreman/KANBAN.md)
> **Last synced**: 2026-03-17

---

## Backlog

### MCP-007: Build Channel Allocation Planner tool
- **Tags**: `#FORE-007` `#product` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 6h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Build the `channel_allocation` MCP tool — suggests budget reallocation based on performance data and efficiency thresholds. Requires performance data ingestion. Release sequence position: 4.
- **Acceptance**:
  - [ ] Tool accepts typed JSON input per roadmap spec
  - [ ] Recommendations generated with rationale
  - [ ] Blended CPA projection calculated
  - [ ] Tests pass

### MCP-008: Build Campaign Flighting Helper tool
- **Tags**: `#FORE-007` `#product` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 6h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Build the `campaign_flighting` MCP tool — generates campaign schedule and phasing recommendations. Builds on allocation logic. Release sequence position: 5.
- **Acceptance**:
  - [ ] Tool generates phased campaign schedule
  - [ ] Budget distributed across phases and channels
  - [ ] Notes generated per phase
  - [ ] Tests pass

### MCP-009: Build Audience Planner tool
- **Tags**: `#FORE-007` `#product` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 8h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Build the `audience_planner` MCP tool — suggests audience segments and exclusion lists based on ICP definitions. Requires platform API integration for reach estimates. Release sequence position: 6.
- **Acceptance**:
  - [ ] Tool generates audience segments with rationale
  - [ ] Exclusion lists suggested
  - [ ] Budget suggestions based on segment size
  - [ ] Tests pass

### MCP-010: Configure DNS records
- **Tags**: `#FORE-006` `#infrastructure` `#human`
- **Type**: chore
- **Priority**: P1
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Configure DNS records for marketermcp.com, api.marketermcp.com, and staging.marketermcp.com in Cloudflare.
- **Acceptance**:
  - [ ] Root domain resolves to Cloudflare Pages
  - [ ] api subdomain routes to Worker
  - [ ] staging subdomain configured

### MCP-019: Add dynamic channel configuration
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 4h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-013
- **Description**: Replace hardcoded channels (Google, Facebook, TikTok, Snapchat) with configurable channel list. Store in D1 config table. Allow users to add/remove channels. Update UI to render dynamic columns.
- **Acceptance**:
  - [ ] Channel config table in D1
  - [ ] API to manage channels
  - [ ] UI renders dynamic channel columns
  - [ ] MCP tools support arbitrary channels
  - [ ] Tests pass

### MCP-020: Build Smart Query MCP tool
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 4h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-013
- **Description**: Create `budget_buddy.smart_query` tool that accepts natural language questions. Generate D1 SQL (not BigQuery). Return results or explanation. Replace Gemini with Claude API.
- **Acceptance**:
  - [ ] Tool accepts natural language query input
  - [ ] Generates valid D1 SQL queries
  - [ ] Returns query results or explanation
  - [ ] Works as MCP tool in Claude Desktop
  - [ ] Tests pass

### MCP-021: Add multi-tenant support
- **Tags**: `#FORE-007` `#infrastructure` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 6h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-011, MCP-015
- **Description**: Tenant isolation in D1 (tenant_id column). API keys scoped to tenant. Key management UI. Per-tenant rate limits.
- **Acceptance**:
  - [ ] Tenant isolation in D1 database
  - [ ] API keys scoped to tenant
  - [ ] Key generation/rotation in dashboard
  - [ ] Rate limits per tenant
  - [ ] Tests pass

### MCP-034: Configure Cloudflare Access (optional)
- **Tags**: `#FORE-006` `#infrastructure` `#budget-buddy` `#human`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Description**: Configure Cloudflare Access for /budget/* routes as alternative to custom auth. Set up identity providers.
- **Why human**: Requires Cloudflare dashboard and identity provider configuration.
- **Acceptance**:
  - [ ] Cloudflare Access enabled for /budget/*
  - [ ] Identity provider configured
  - [ ] Access policies defined

### MCP-035: Port SmartQuery UI component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-020, MCP-028
- **Description**: Migrate SmartQuery component. Connect to smart_query MCP tool or direct API. Show input, loading, results, errors.
- **Acceptance**:
  - [ ] SmartQuery component ported
  - [ ] Connected to API/MCP tool
  - [ ] Results display correctly
  - [ ] Error states handled

### MCP-036: Implement quarterly/yearly totals
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P2
- **Estimate**: 3h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-012
- **Description**: Implement proper quarterly (3-month) and yearly (12-month) aggregations server-side. Currently source app returns monthly for all.
- **Acceptance**:
  - [ ] Quarterly aggregations span 3 months
  - [ ] Yearly aggregations span 12 months
  - [ ] API endpoint for totals
  - [ ] Tests pass

---

## To Do

### MCP-001: Add Cloudflare secrets to GitHub Actions
- **Tags**: `#FORE-006` `#infrastructure` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 30m
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Add CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID as repository secrets in GitHub Actions. Without these, every deploy workflow fails.
- **Acceptance**:
  - [ ] Both secrets added to GitHub repo
  - [ ] Deploy workflow passes credential step

### MCP-002: Create GitHub environments (staging + production)
- **Tags**: `#FORE-006` `#infrastructure` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 30m
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Create staging and production environments in GitHub. Production needs required reviewer approval gate.
- **Acceptance**:
  - [ ] staging environment created
  - [ ] production environment created with approval gate
  - [ ] Deploy tracking visible in GitHub UI

### MCP-003: Create Cloudflare Pages project
- **Tags**: `#FORE-006` `#infrastructure` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 30m
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Create the `marketermcp-site` project in Cloudflare Pages. The deploy script references this project name.
- **Acceptance**:
  - [ ] Cloudflare Pages project created
  - [ ] wrangler pages deploy works

### MCP-004: Verify Dependabot and CodeQL
- **Tags**: `#FORE-006` `#infrastructure` `#human`
- **Type**: chore
- **Priority**: P1
- **Estimate**: 30m
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Verify Dependabot is scanning npm dependencies and CodeQL is running code analysis. Trigger first CodeQL run if needed.
- **Acceptance**:
  - [ ] Dependabot active and scanning
  - [ ] CodeQL first run completed

### MCP-005: Build Attribution QA tool
- **Tags**: `#FORE-007` `#product` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 6h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Build the `attribution_qa` MCP tool — validates UTM parameters against taxonomy, flags mismatches, duplicates, and missing values. Release sequence position: 2 (next after Budget Buddy).
- **Acceptance**:
  - [ ] Tool accepts URL list and taxonomy input
  - [ ] Validates source, medium, campaign against taxonomy
  - [ ] Reports pass/fail with specific issues
  - [ ] Tests pass

### MCP-006: Build Creative QA tool
- **Tags**: `#FORE-007` `#product` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 8h
- **Assignee**: drew
- **Created**: 2026-03-16
- **Description**: Build the `creative_qa` MCP tool — preflight checks for ad creative against platform specs, brand guidelines, and compliance. Release sequence position: 3.
- **Acceptance**:
  - [ ] Tool validates image dimensions, file size, text lengths
  - [ ] Brand color and prohibited claims checks
  - [ ] Multi-platform support (Meta, LinkedIn, TikTok)
  - [ ] Tests pass

### MCP-011: Create Cloudflare D1 database
- **Tags**: `#FORE-007` `#infrastructure` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Description**: Create D1 database with schema for daily budget data. Include migrations infrastructure.
- **Acceptance**:
  - [ ] D1 database schema created
  - [ ] Migrations system in place
  - [ ] Seed data script for development

### MCP-022: Configure wrangler.toml D1 bindings
- **Tags**: `#FORE-006` `#infrastructure` `#budget-buddy` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 30m
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-011
- **Why human**: Requires Cloudflare dashboard access and wrangler CLI auth.
- **Description**: Add D1 database binding to wrangler.toml. Create database in Cloudflare dashboard. Run initial migration.
- **Acceptance**:
  - [ ] D1 binding added to wrangler.toml
  - [ ] Database created in Cloudflare
  - [ ] Initial migration successful

### MCP-012: Build Budget Buddy REST API endpoints
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 4h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-011
- **Description**: Build REST API in mcp-hub-worker for all CRUD operations.
- **Endpoints**:
  - `GET /v1/budget/daily?year=&month=` - fetch monthly data
  - `POST /v1/budget/daily` - create/update daily entry
  - `DELETE /v1/budget/daily?date=` - remove entry
  - `POST /v1/budget/distribute` - distribute across month
  - `GET /v1/budget/totals?year=&month=` - get aggregations
- **Acceptance**:
  - [ ] All 5 endpoints implemented
  - [ ] Auth required on all endpoints
  - [ ] Input validation
  - [ ] Tests pass

### MCP-023: Migrate date/currency utilities
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Description**: Port getDaysInMonth(), formatCurrency(), formatDate() to packages/tools-budget-buddy/src/utils/. Add MONTH_NAMES and generateYears() constants.
- **Acceptance**:
  - [ ] All utilities ported
  - [ ] Constants defined
  - [ ] Tests pass

### MCP-013: Build Budget Buddy MCP tool suite
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 6h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-012
- **Description**: Register 6 MCP tools in tool-registry with typed schemas.
- **Tools**:
  - `budget_buddy.get_monthly_summary` - totals for month
  - `budget_buddy.get_daily_data` - single day data
  - `budget_buddy.update_daily` - create/update day
  - `budget_buddy.delete_daily` - remove day
  - `budget_buddy.distribute_budget` - spread across month
  - `budget_buddy.get_channel_breakdown` - per-channel totals
- **Acceptance**:
  - [ ] 6 MCP tools registered
  - [ ] Typed schemas in mcp-schemas
  - [ ] Tools callable via /v1/tools/{name}/execute
  - [ ] Tests pass

### MCP-024: Add MCP schemas for Budget Buddy
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-013
- **Description**: Define TypeScript interfaces in packages/mcp-schemas/ for all Budget Buddy I/O types: DailyData, ChannelData, Totals, distribution params.
- **Acceptance**:
  - [ ] All I/O types defined
  - [ ] Types exported from package
  - [ ] Documentation in types

### MCP-025: Create Claude Desktop MCP config
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: docs
- **Priority**: P1
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-013
- **Description**: Create example claude_desktop_config.json for Budget Buddy MCP server. Document setup in docs/api/.
- **Acceptance**:
  - [ ] Example config created
  - [ ] Setup documentation written
  - [ ] Config tested in Claude Desktop

### MCP-026: Test MCP tools in Claude Desktop
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#human`
- **Type**: test
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-025
- **Why human**: Requires Claude Desktop app and manual interaction testing.
- **Description**: Manually test all 6 MCP tools in Claude Desktop. Verify tool discovery, execution, and response formatting.
- **Acceptance**:
  - [ ] All tools discoverable
  - [ ] All tools executable
  - [ ] Response formatting correct

### MCP-014: Set up Vite React app for Budget Buddy
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Description**: Initialize Vite React app in apps/website/budget/. Configure TypeScript, Tailwind CSS, build output for Cloudflare Pages.
- **Acceptance**:
  - [ ] Vite React app initialized
  - [ ] TypeScript configured
  - [ ] Tailwind CSS configured
  - [ ] Build output configured for Pages

### MCP-027: Migrate Tailwind config with design tokens
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-014
- **Description**: Map bluethumb-* colors to marketermcp design tokens. Configure Tailwind with packages/design-tokens output. Ensure consistent palette.
- **Acceptance**:
  - [ ] Colors mapped to design tokens
  - [ ] Tailwind config updated
  - [ ] Consistent palette applied

### MCP-028: Port Icon components (6 SVGs)
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-014
- **Description**: Migrate EditIcon, CloseIcon, TrashIcon, SpinnerIcon, WandIcon, AlertTriangleIcon to apps/website/budget/components/icons/.
- **Acceptance**:
  - [ ] All 6 icons ported
  - [ ] Icons render correctly
  - [ ] Accessibility props supported

### MCP-029: Build API client service
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-012, MCP-014
- **Description**: Create typed API client replacing mock api.ts. Use fetch with auth headers. Handle errors, retries, optimistic updates.
- **Acceptance**:
  - [ ] Typed API client created
  - [ ] Auth headers included
  - [ ] Error handling implemented
  - [ ] Retry logic for transient failures

### MCP-030: Port useBudgetData hook
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-029
- **Description**: Migrate useBudgetData hook with real API integration. Maintain optimistic updates pattern and error rollback.
- **Acceptance**:
  - [ ] Hook ported with real API
  - [ ] Optimistic updates work
  - [ ] Error rollback implemented
  - [ ] Loading states handled

### MCP-031: Port Header component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-027, MCP-028
- **Description**: Migrate Header with month/year selectors and distribute button. Sticky positioning, responsive sizing.
- **Acceptance**:
  - [ ] Header component ported
  - [ ] Month/year selectors work
  - [ ] Distribute button works
  - [ ] Sticky positioning correct

### MCP-032: Port BudgetTable component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 3h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-030, MCP-028
- **Description**: Migrate BudgetTable with multi-header layout, sticky date column, horizontal scroll, edit buttons, currency formatting.
- **Acceptance**:
  - [ ] Table component ported
  - [ ] Multi-header layout correct
  - [ ] Sticky date column works
  - [ ] Horizontal scroll smooth
  - [ ] Currency formatting applied

### MCP-016: Port Summary cards component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-030
- **Description**: Migrate Summary with SummaryCard subcomponent. 3-column responsive grid. Monthly/quarterly/yearly totals display.
- **Acceptance**:
  - [ ] Summary component ported
  - [ ] SummaryCard subcomponent works
  - [ ] 3-column responsive grid
  - [ ] Totals display correctly

### MCP-018: Port EditDayModal component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 3h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-030, MCP-028
- **Description**: Migrate EditDayModal with GA4 + 4 channel inputs. Save/delete with loading states. Confirmation dialog. Accessibility (aria-modal, focus trap).
- **Acceptance**:
  - [ ] Modal component ported
  - [ ] All inputs working
  - [ ] Save/delete with loading states
  - [ ] Confirmation dialog works
  - [ ] Accessibility complete

### MCP-017: Port DistributeBudgetModal component
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-030, MCP-028
- **Description**: Migrate DistributeBudgetModal with metric dropdown (9 options), amount input with $ prefix, loading state.
- **Acceptance**:
  - [ ] Modal component ported
  - [ ] Metric dropdown with 9 options
  - [ ] Amount input with $ prefix
  - [ ] Loading state works

### MCP-033: Port App.tsx main container
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-031, MCP-032, MCP-016, MCP-018, MCP-017
- **Description**: Assemble all components in App.tsx. Wire state management, modal handlers, loading/error states.
- **Acceptance**:
  - [ ] All components assembled
  - [ ] State management wired
  - [ ] Modal handlers work
  - [ ] Loading/error states displayed

### MCP-015: Build login page and auth flow
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: feat
- **Priority**: P0
- **Estimate**: 4h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-014
- **Description**: Create login page with API key input. JWT session management. Store token in localStorage. Protected route wrapper.
- **Acceptance**:
  - [ ] Login page implemented
  - [ ] JWT session management works
  - [ ] Token stored in localStorage
  - [ ] Protected route wrapper works

### MCP-037: Write E2E tests for Budget Buddy UI
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: test
- **Priority**: P1
- **Estimate**: 4h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-033
- **Description**: Playwright E2E tests for: login, view monthly data, edit day, delete day, distribute budget, month navigation.
- **Acceptance**:
  - [ ] Login flow tested
  - [ ] View monthly data tested
  - [ ] Edit day tested
  - [ ] Delete day tested
  - [ ] Distribute budget tested
  - [ ] Month navigation tested

### MCP-038: Write API integration tests
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: test
- **Priority**: P1
- **Estimate**: 3h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-012
- **Description**: Integration tests for all Budget API endpoints. Test auth, validation, CRUD operations, distribution logic.
- **Acceptance**:
  - [ ] Auth tests pass
  - [ ] Validation tests pass
  - [ ] CRUD operations tested
  - [ ] Distribution logic tested

### MCP-039: Write MCP tool unit tests
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: test
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-013
- **Description**: Unit tests for all 6 Budget Buddy MCP tools. Test input validation, output schemas, error handling.
- **Acceptance**:
  - [ ] All 6 tools tested
  - [ ] Input validation tested
  - [ ] Output schemas verified
  - [ ] Error handling tested

### MCP-040: Write Budget Buddy user documentation
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: docs
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-033
- **Description**: Create docs/budget-buddy/ with user guide, feature walkthrough, screenshots. Add to docs/README.md.
- **Acceptance**:
  - [ ] User guide written
  - [ ] Feature walkthrough complete
  - [ ] Screenshots added
  - [ ] Linked from docs README

### MCP-041: Write MCP tool API documentation
- **Tags**: `#FORE-007` `#product` `#budget-buddy` `#agent`
- **Type**: docs
- **Priority**: P1
- **Estimate**: 2h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-024
- **Description**: Document all Budget Buddy MCP tools in docs/api/budget-buddy.md. Include schemas, examples, error codes.
- **Acceptance**:
  - [ ] All tools documented
  - [ ] Schemas included
  - [ ] Examples provided
  - [ ] Error codes documented

### MCP-042: Deploy Budget Buddy to staging
- **Tags**: `#FORE-006` `#infrastructure` `#budget-buddy` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-033, MCP-022
- **Why human**: Requires deployment approval and staging verification.
- **Description**: Deploy Budget Buddy to staging environment. Verify D1 migrations, API endpoints, UI functionality.
- **Acceptance**:
  - [ ] Deployed to staging
  - [ ] D1 migrations verified
  - [ ] API endpoints working
  - [ ] UI functional

### MCP-043: Deploy Budget Buddy to production
- **Tags**: `#FORE-006` `#infrastructure` `#budget-buddy` `#human`
- **Type**: chore
- **Priority**: P0
- **Estimate**: 1h
- **Assignee**: drew
- **Created**: 2026-03-17
- **Blocked by**: MCP-042, MCP-037
- **Why human**: Requires production approval gate and launch coordination.
- **Description**: Deploy Budget Buddy to production after staging validation. Announce launch.
- **Acceptance**:
  - [ ] Staging validation complete
  - [ ] Production deployed
  - [ ] Launch announced

---

## In Progress

---

## Review

---

## Done

---

## Archive

---

## Epic: Budget Buddy Migration

**Epic ID**: `#FORE-007-BB`
**Goal**: Migrate Budget Buddy from Google Apps Script + BigQuery to Cloudflare Workers + D1 with live web UI and MCP tool integration.

**Source codebase**: `~/Downloads/_Organized/Work_Bluethumb/digital-marketing-budget-planner/`

### Migration Phases

**Phase 1: Infrastructure** (MCP-011, MCP-022)
- Create D1 database with budget schema
- Configure wrangler.toml bindings

**Phase 2: Data API** (MCP-012, MCP-023)
- Build REST API endpoints for CRUD operations
- Migrate date/currency utilities

**Phase 3: MCP Tools** (MCP-013, MCP-024, MCP-025, MCP-026)
- Register Budget Buddy tools in tool-registry
- Define typed schemas for all operations
- Enable Claude Desktop integration

**Phase 4: Web UI Core** (MCP-014, MCP-027, MCP-028, MCP-029, MCP-030)
- Set up Vite React app
- Migrate Tailwind config and icons
- Build API client and hooks

**Phase 5: Web UI Components** (MCP-031, MCP-032, MCP-016, MCP-018, MCP-017, MCP-033)
- Port all UI components
- Assemble main container

**Phase 6: Authentication** (MCP-015, MCP-034)
- Build login page and auth flow
- Optional Cloudflare Access

**Phase 7: Smart Query** (MCP-020, MCP-035)
- Build Smart Query MCP tool
- Port SmartQuery UI component

**Phase 8: Enhancements** (MCP-019, MCP-036, MCP-021)
- Dynamic channel configuration
- Quarterly/yearly totals
- Multi-tenant support

**Phase 9: Testing** (MCP-037, MCP-038, MCP-039)
- E2E tests for UI
- API integration tests
- MCP tool unit tests

**Phase 10: Docs & Launch** (MCP-040, MCP-041, MCP-042, MCP-043)
- User documentation
- API documentation
- Staging and production deployment

### Summary

| Phase | Cards | Agent | Human | Total Est |
|-------|-------|-------|-------|-----------|
| 1. Infrastructure | 2 | 1 | 1 | 2.5h |
| 2. Data API | 2 | 2 | 0 | 5h |
| 3. MCP Tools | 4 | 3 | 1 | 11h |
| 4. Web UI Core | 5 | 5 | 0 | 8h |
| 5. Web UI Components | 6 | 6 | 0 | 13h |
| 6. Authentication | 2 | 1 | 1 | 6h |
| 7. Smart Query | 2 | 2 | 0 | 6h |
| 8. Enhancements | 3 | 3 | 0 | 13h |
| 9. Testing | 3 | 3 | 0 | 9h |
| 10. Docs & Launch | 4 | 2 | 2 | 6h |
| **Total** | **33** | **28** | **5** | **79.5h** |

### Human Tasks (5 cards)
- MCP-022: D1 database setup in Cloudflare
- MCP-026: Manual MCP testing in Claude Desktop
- MCP-034: Cloudflare Access configuration (optional)
- MCP-042: Staging deployment verification
- MCP-043: Production deployment approval

### Critical Path (P0)
MCP-011 → MCP-022 → MCP-012 → MCP-013 → MCP-024 → MCP-014 → MCP-029 → MCP-030 → MCP-032 → MCP-018 → MCP-033 → MCP-015 → MCP-042 → MCP-043

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Claude Desktop/Claude.ai                │
│                         (MCP Client)                        │
└─────────────────────────────┬───────────────────────────────┘
                              │ MCP Protocol
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    mcp-hub-worker                           │
│                  (Cloudflare Workers)                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │ Tool Routes │  │ Budget API  │  │ Tool Registry       │ │
│  │ /v1/tools/* │  │ /v1/budget/*│  │ budget_buddy.*      │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
│         │                │                    │             │
│         └────────────────┼────────────────────┘             │
│                          │                                  │
│                          ▼                                  │
│               ┌─────────────────────┐                       │
│               │   Cloudflare D1     │                       │
│               │ (SQLite at edge)    │                       │
│               └─────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    apps/website/budget/                     │
│                   (Cloudflare Pages)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Header    │  │   Summary   │  │    BudgetTable      │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
│  ┌─────────────┐  ┌─────────────────────────────────────┐  │
│  │ EditModal   │  │       DistributeModal               │  │
│  └─────────────┘  └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Data Model (D1 Schema)

```sql
-- Daily budget entries
CREATE TABLE budget_daily (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL UNIQUE,  -- 'YYYY-MM-DD'
  ga4_revenue REAL DEFAULT 0,
  google_ad_spend REAL DEFAULT 0,
  google_publisher_revenue REAL DEFAULT 0,
  facebook_ad_spend REAL DEFAULT 0,
  facebook_publisher_revenue REAL DEFAULT 0,
  tiktok_ad_spend REAL DEFAULT 0,
  tiktok_publisher_revenue REAL DEFAULT 0,
  snapchat_ad_spend REAL DEFAULT 0,
  snapchat_publisher_revenue REAL DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX idx_budget_daily_date ON budget_daily(date);
```

### MCP Tools

| Tool Name | Description | Input | Output |
|-----------|-------------|-------|--------|
| `budget_buddy.get_monthly_summary` | Get totals for month | `{ year, month }` | `{ totals, channels }` |
| `budget_buddy.get_daily_data` | Get data for specific day | `{ date }` | `{ dailyData }` |
| `budget_buddy.update_daily` | Create/update daily entry | `{ date, ga4Revenue, channels }` | `{ success, data }` |
| `budget_buddy.delete_daily` | Remove daily entry | `{ date }` | `{ success }` |
| `budget_buddy.distribute_budget` | Spread value across month | `{ year, month, column, total }` | `{ success, affected }` |
| `budget_buddy.get_channel_breakdown` | Per-channel totals | `{ year, month }` | `{ channels[] }` |
| `budget_buddy.smart_query` | Natural language query | `{ question }` | `{ answer, sql? }` |
