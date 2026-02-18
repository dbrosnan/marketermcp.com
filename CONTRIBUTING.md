# Contributing to Marketer MCP

Thank you for your interest in contributing! This guide covers the workflow and standards for making changes.

## Development setup

1. Fork and clone the repository.
2. Install dependencies: `npm install`
3. Type-check: `npm run typecheck`
4. Create a feature branch: `git checkout -b feat/my-change`

## Branch naming

Use a short prefix followed by a descriptive slug:

- `feat/` — new feature
- `fix/` — bug fix
- `docs/` — documentation only
- `chore/` — tooling, CI, dependency updates
- `refactor/` — code restructuring with no behavior change

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary>

<optional body>

<optional footer>
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`, `perf`, `build`.

## Pull requests

- Fill out every section in the PR template.
- Keep PRs focused — one logical change per PR.
- Ensure CI passes before requesting review.
- Link related issues using `Closes #<number>`.

## Code standards

- TypeScript strict mode everywhere.
- No `any` unless explicitly justified in a comment.
- Prefer named exports over default exports.
- Keep packages independent — shared types belong in `packages/mcp-schemas`.

## Testing

Add tests for new behavior. Run the full suite with `npm test` (once the test runner is configured).

## Reporting bugs

Use the **Bug report** issue template. Include reproduction steps, expected behavior, and environment details.

## Code of Conduct

All contributors must follow the [Code of Conduct](CODE_OF_CONDUCT.md).
