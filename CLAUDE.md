# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Marketer MCP** — Marketing MCP platform providing a registry of structured AI tools for marketing teams. Each tool accepts typed JSON input, returns typed JSON output, and integrates into any MCP-compatible AI assistant.

## Commands

```bash
# Development
npm run dev:mcp           # MCP Hub Worker at http://localhost:8787
npm run dev:website       # Website at http://localhost:8788

# Quality
npm run typecheck         # TypeScript check all workspaces
npm run lint              # ESLint (zero warnings enforced)
npm run format            # Prettier format (write)
npm run format:check      # Prettier check only

# Testing
npm run test:e2e          # Full Playwright E2E suite
npm run test:smoke        # Critical paths only (/, /blog/, /faq.html, sitemap.xml, robots.txt)
npm run test:lighthouse   # Lighthouse CI (90%+ perf, 95%+ a11y)

# Deployment
npm run deploy:mcp        # Deploy MCP Hub to Cloudflare Workers
npm run deploy:website    # Deploy website to Cloudflare Pages

# Wiki.js (docs platform)
npm run docs:wikijs:up    # Start Wiki.js containers
npm run docs:wikijs:down  # Stop Wiki.js containers
```

## Architecture

```
apps/
├── mcp-hub-worker/      # Cloudflare Worker — API for tool discovery/execution
└── website/             # Static site + Worker — no build step, direct deploy

packages/
├── mcp-schemas/         # Shared TypeScript types (ToolDescriptor, I/O contracts)
├── tool-registry/       # Tool registration and routing
└── tools-budget-buddy/  # First tool implementation (beta)
```

**Request flow:** API request → rate limit check → auth check → payload validation → tool-registry → tool execution → JSON response

**API endpoints:**
- `GET /health` — health check
- `GET /v1/tools` — tool discovery (auth optional via `ALLOW_UNAUTH_DISCOVERY`)
- `POST /v1/tools/{toolName}/execute` — tool execution (auth required)

**Error codes:** `RATE_LIMITED`, `UNAUTHORIZED`, `PAYLOAD_TOO_LARGE`, `INVALID_JSON`, `EXECUTION_ERROR`, `NOT_FOUND`

## Adding a New MCP Tool

1. Create package in `packages/tools-{name}/` with typed I/O interfaces
2. Add input/output types to `packages/mcp-schemas/`
3. Register tool in `packages/tool-registry/` with namespace, version, visibility
4. Write E2E test in `tests/e2e/`

## Product Suite

1. **Budget Buddy** (`budget_buddy`) — live — real-time budget pacing
2. **Attribution QA** (`attribution_qa`) — next — UTM validation
3. **Creative QA** (`creative_qa`) — preflight ad creative checks
4. **Channel Allocation Planner** (`channel_allocation`) — budget reallocation
5. **Campaign Flighting Helper** (`campaign_flighting`) — campaign scheduling
6. **Audience Planner** (`audience_planner`) — audience segment suggestions

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Platform | Cloudflare Workers (API) + Pages (website) |
| Language | TypeScript (strict mode) |
| Testing | Playwright (E2E), Lighthouse CI |
| Security | Semgrep SAST, Trivy, TruffleHog |

## Kanban

- **Prefix**: MCP
- **Board**: [KANBAN.md](KANBAN.md)
- **Foreman**: [GTM-Project-Foreman](../GTM-Project-Foreman/KANBAN.md)
- **Next ID**: MCP-044

### Rules
- Every card must have at least one `#FORE-XXX` tag linking to a Foreman epic
- When updating a card, also update the Foreman's epic table
- Card IDs are monotonically increasing, never reused

### Epics
- `#FORE-006` — Infrastructure Setup
- `#FORE-007` — Product Development (MCP tools)
