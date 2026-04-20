# County Farm Collective Website

Public-facing marketing site for the County Farm Collective (CFC), a weekly farm collective in Prince Edward County, Ontario. Shopping happens on LocalLine at `https://cfc.localline.ca`; this site handles discovery, vendor profiles, customer/vendor info pages, and email signup.

## Stack

- **Framework:** Next.js 15 (App Router) on React 19
- **Styling:** Tailwind CSS 3, plus a small set of brand colors in `tailwind.config.js`
- **Fonts:** Inter, Merriweather, and Amatic SC via `next/font/google`
- **Data source:** [LocalLine](https://localline.ca) backoffice API — vendor list is synced into a static registry, and product listings on vendor pages are fetched server-side and cached
- **Hosting:** Vercel (custom domain `countyfarmcollective.com`)
- **Node:** 22

## Development

```bash
npm install
cp .env.example .env.local   # fill in LocalLine credentials
npm run dev                  # Next dev server
npm run build                # Production build
npm run start                # Run the production build locally
npm run lint                 # ESLint (flat config)
```

No test suite is configured.

## Environment

`.env.local` (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — canonical site URL, used for metadata, sitemap, and JSON-LD
- `LOCALLINE_USERNAME` / `LOCALLINE_PASSWORD` — LocalLine backoffice credentials, used by the subscribe server action and the vendor sync script

Vercel needs the same vars configured under the project's environment settings.

## Routes

All routes live under `src/app/` (App Router):

- `/` — landing page with hero, email CTA, customer/vendor entry points
- `/customers` — how ordering works
- `/vendors` — vendor directory
- `/vendors/[vendorSlug]` — vendor profile with product grid (statically generated via `generateStaticParams`)
- `/code-of-conduct`
- `/map`

SEO surfaces: `src/app/sitemap.js`, `src/app/robots.js`, JSON-LD on the landing page.

## Data flow

**Vendor registry** — `src/data/vendors.js` is a checked-in static list (id, name, slug, logo, location, description). Refresh it by running:

```bash
node scripts/sync-vendors.js
```

The script authenticates against LocalLine, fetches all vendors, and rewrites the `vendorMap` block in `vendors.js`. Re-run whenever vendors are added, removed, or their logos change.

**Live product data** — `src/lib/localline.js` is the runtime LocalLine client. It manages a token refresh singleton and exposes `getVendorProducts(vendorId)`, wrapped in `unstable_cache` with a 6-hour revalidate to match the weekly order cycle. Vendor profile pages stream product data in via a Suspense boundary.

**Email signup** — the `subscribe` server action in `src/lib/actions.js` calls `createCustomer` to create a LocalLine customer record. Duplicate emails surface as `ALREADY_EXISTS` so the UI can show the right message.

## Deployment pipeline

`.github/workflows/deploy.yml` runs on push to `main`:

1. `vercel pull` — fetch project settings for the production environment
2. `vercel build --prod` — build locally in CI
3. `vercel deploy --prebuilt --prod` — ship the prebuilt output

Requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` in repo secrets. `vercel.json` pins the framework to `nextjs`.

## Project layout

```
src/
  app/           # App Router routes, layout, metadata, sitemap, robots
  components/    # Header, EmailCTA, VendorLogo, InfoBlock, WeeklySchedule
  data/          # Static vendor registry (generated)
  lib/           # LocalLine API client, server actions, site constants
  utils/         # Small string helpers
  index.css      # Tailwind entry + base styles
public/          # Static images (produce illustrations, OG image)
scripts/         # sync-vendors.js — LocalLine → vendors.js sync
```
