# lsahatqija.com

The personal site and project hub at `lsahatqija.com`. It is a static, client-only React SPA with no backend, authentication, database, or API calls.

## Requirements

- Node.js 24
- pnpm 11 through Corepack

## Development

```bash
corepack pnpm install
corepack pnpm dev
```

All editable site content lives in `app/content/site.ts`. Replace the starter project entries, links, introductory copy, and email address before publishing.

## Validation

```bash
corepack pnpm validate
corepack pnpm test:e2e
```

## Deployment

Deploy `build/client` to any static host. Unknown paths must rewrite to `/index.html` so the client-side 404 route can render. The included Dockerfile and Nginx configuration demonstrate that hosting contract.
