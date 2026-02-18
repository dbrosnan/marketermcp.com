# Security and Public Release Practices

## Authentication and access

- Require Bearer token for all tool execution routes.
- Keep discovery route policy configurable by environment.
- Separate read scopes (discovery) from execute scopes when full auth lands.

## Secrets and environment management

- Store credentials in Cloudflare secrets, never in repository.
- Use separate tokens and quotas for `dev`, `staging`, and `prod`.
- Rotate credentials on schedule and after incidents.

## Abuse prevention

- Apply Cloudflare route-level rate limiting.
- Enforce payload size limits and request validation.
- Add per-tool timeout and retry budgets.

## Observability

- Structured logs with request ID, tool name, and execution status.
- Alert on error rate, p95 latency, and repeated auth failures.
- Keep a rollback playbook and incident response owner list.

## Governance

- Publish terms, privacy, and acceptable use policy before public open.
- Maintain disclosure process for security reports.
