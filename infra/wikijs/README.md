# Wiki.js Self-Hosted Stack

This folder provides the FLOSS Notion-replacement phase for collaborative internal documentation.

## Includes

- `docker-compose.yml` for Wiki.js + Postgres + daily backups
- `.env.example` for required database credentials

## Quick start

1. Copy env file:
   - `cp .env.example .env`
2. Set a strong `POSTGRES_PASSWORD`.
3. Launch:
   - `docker compose up -d`
4. Open:
   - `http://localhost:8080`

## Root workspace helpers

From repo root you can also run:

- `npm run docs:wikijs:up`
- `npm run docs:wikijs:ps`
- `npm run docs:wikijs:logs`
- `npm run docs:wikijs:down`

## Production notes

- Run behind TLS reverse proxy (Cloudflare Tunnel or your ingress layer).
- Restrict admin users to minimum required.
- Configure SSO before org-wide rollout.
- Monitor backup job and test restores quarterly.
