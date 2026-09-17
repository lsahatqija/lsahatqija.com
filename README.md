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

Production deploys use Netlify. Import the repository and Netlify will use `netlify.toml` to build and publish `build/client`, including the SPA fallback and response headers. See `docs/deployment.md` for the initial domain setup.

The included Dockerfile and Nginx configuration remain available as a self-hosted alternative.
