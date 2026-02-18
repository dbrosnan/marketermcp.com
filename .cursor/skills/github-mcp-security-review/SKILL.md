# GitHub-Inspired MCP Security Review Skill

## Use when

- Adding new tools or routes to the public MCP hub.
- Preparing for beta or production release.

## Outcome

Catches common security and reliability gaps in public MCP implementations.

## Steps

1. Inspect route auth behavior for discovery and execution endpoints.
2. Confirm input validation and tool allowlisting behavior.
3. Verify secrets are not hardcoded and are sourced from runtime secrets.
4. Verify structured error handling and safe response messages.
5. Produce a short go/no-go report with:
   - critical blockers
   - medium risks
   - recommended fixes

## Source inspiration

- `modelcontextprotocol/servers`
- `modelcontextprotocol/servers/security`
- `ModelContextProtocol-Security`
