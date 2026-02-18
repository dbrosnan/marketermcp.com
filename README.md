# Marketer MCP

[![CI](https://github.com/dbrosnan/marketermcp.com/actions/workflows/ci.yml/badge.svg)](https://github.com/dbrosnan/marketermcp.com/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Monorepo for the public Marketer MCP hub ([marketermcp.com](https://marketermcp.com)), first-party tool packages (starting with Budget Buddy), and launch website.

## Architecture

```
marketermcp.com/
├── apps/
│   ├── mcp-hub-worker   # Public MCP hub API — Cloudflare Workers
│   └── website           # Launch website — static assets + Worker
├── packages/
│   ├── tools-budget-buddy # Budget Buddy tool implementation
│   ├── tool-registry      # Tool registry and discovery metadata
│   └── mcp-schemas        # Shared schemas and validation types
├── docs/                  # Product docs, launch comms, brand/copy
└── infra/                 # Deployment and release templates
```

## Prerequisites

- **Node.js** >= 20.0.0
- **npm** >= 10 (ships with Node 20+)

## Quick start

```bash
# 1. Clone and install
git clone https://github.com/dbrosnan/marketermcp.com.git
cd marketermcp.com
npm install

# 2. Type-check the entire repo
npm run typecheck

# 3. Run the MCP hub locally
npm run dev:mcp

# 4. Run the website locally
npm run dev:website
```

## Available scripts

| Script | Description |
|---|---|
| `npm run build` | Build all workspaces |
| `npm run typecheck` | Type-check all workspaces |
| `npm run dev:mcp` | Start MCP hub worker in dev mode |
| `npm run dev:website` | Start website in dev mode |
| `npm run deploy:mcp` | Deploy MCP hub to Cloudflare |
| `npm run deploy:website` | Deploy website to Cloudflare |

## Deploy

Deployments target Cloudflare Workers. In CI, workflows gate on passing checks before deploying to staging, then require manual approval for production.

```bash
npm run deploy:mcp
npm run deploy:website
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development workflow, coding standards, and PR guidelines.

## Security

To report a vulnerability, see [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE).
