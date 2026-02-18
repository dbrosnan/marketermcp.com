# ADR-0001: Monorepo with npm workspaces

## Status

Accepted

## Context

The Marketer MCP platform consists of multiple apps (MCP hub worker, website)
and shared packages (schemas, tool registry, tool implementations). These
components share types and evolve together. A single repository simplifies
cross-cutting changes, CI, and dependency management.

## Decision

Use a single monorepo managed with npm workspaces. Workspaces are organized
under `apps/` (deployable services) and `packages/` (shared libraries).

## Consequences

- Simplified cross-package refactoring and type sharing.
- Single CI pipeline validates the entire repo.
- Requires path-based CI filtering to avoid unnecessary builds.
- Dependency hoisting handled by npm workspaces.

## Alternatives considered

- **Polyrepo**: Rejected due to overhead of cross-repo coordination for tightly coupled packages.
- **Turborepo / Nx**: Not needed at current scale; can be adopted later if build times grow.
