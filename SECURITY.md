# Security Policy

## Supported versions

| Version | Supported |
|---|---|
| latest on `main` | Yes |
| older releases | Best-effort |

## Reporting a vulnerability

**Do not open a public issue for security vulnerabilities.**

Instead, please email **drew@marketermcp.com** with:

1. A description of the vulnerability.
2. Steps to reproduce or a proof-of-concept.
3. The impact you believe it has.

You will receive an acknowledgement within **48 hours** and a detailed response
within **5 business days** with next steps.

## Disclosure policy

- We follow coordinated disclosure. We will work with you to understand the
  issue and agree on a timeline before any public disclosure.
- Credit will be given to reporters in release notes unless they prefer to
  remain anonymous.

## Secret handling

- Secrets and credentials must **never** be committed to version control.
- All production secrets are stored in GitHub Actions secrets or Cloudflare
  environment variables.
- The repository has **secret scanning** and **push protection** enabled to
  prevent accidental exposure.
- `.env` files are git-ignored by default.

## Dependencies

- Dependabot is enabled for automated dependency updates.
- All dependency PRs must pass CI before merge.
