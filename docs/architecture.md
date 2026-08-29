# Architecture

The site uses React Router Framework Mode in client-only SPA mode. It has one index route and one wildcard 404 route.

- `app/routes` contains route-level page composition.
- `app/components` contains reusable interactive and visual components.
- `app/content/site.ts` is the typed source for project and personal-link content.
- `app/features/preferences` owns the persisted light/dark theme preference.
- `app/components/ui` contains small shared UI primitives.

There is deliberately no data-fetching layer, runtime environment configuration, API adapter, authentication, or global server-state provider. Add those only if the requirements change.
