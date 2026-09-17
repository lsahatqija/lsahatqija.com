# Deployment

The production host is Netlify. Its repository configuration lives in `netlify.toml` and defines the build command, publish directory, SPA rewrite, caching, and security headers.

## First deployment

1. In Netlify, create a project by importing this repository.
2. Netlify reads the build settings from `netlify.toml`; no build settings need to be entered manually.
3. Confirm that the generated `*.netlify.app` deployment works before connecting the production domain.
4. Add `lsahatqija.com` and `www.lsahatqija.com` under **Domain management** in Netlify.
5. Keep the domain registered and DNS hosted at GoDaddy. Add or replace only the DNS records Netlify displays for the apex domain and `www` subdomain.
6. Choose one hostname as the primary domain so Netlify redirects the other to it and provisions HTTPS for both.

Do not copy DNS targets from old documentation: use the values shown by Netlify for this project.

## Deployment contract

The deployable output is `build/client`. The host must:

1. Serve existing files normally.
2. Rewrite unknown routes to `/index.html` with a successful response.
3. Avoid long-lived caching for `index.html`.
4. Cache fingerprinted assets immutably.
5. Serve the site over HTTPS.

The included Nginx configuration remains an executable alternative for container hosting.
