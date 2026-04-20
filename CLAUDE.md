# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Commands

```bash
npm run dev       # Next dev server
npm run build     # Production build
npm run start     # Run the production build locally
npm run lint      # ESLint (flat config)
```

No test suite is configured.

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 3. Node 22.

**Routing:** File-based under `src/app/`. Routes: `/`, `/customers`, `/vendors`, `/vendors/[vendorSlug]`, `/code-of-conduct`, `/map`. Vendor profile pages are statically generated via `generateStaticParams` from the static vendor registry.

**Data sources:**
- **Static vendor registry** — `src/data/vendors.js` is a generated file (id, name, slug, logo URL, location, description). Regenerate with `node scripts/sync-vendors.js`, which authenticates against LocalLine and rewrites the `vendorMap` block in place. Logos are hosted on S3 (`localline-public-images.s3.amazonaws.com`); `VendorLogo` renders initials as a fallback when `logo` is null.
- **LocalLine runtime client** — `src/lib/localline.js` manages a token-refresh singleton and exposes `getVendorProducts(vendorId)` (wrapped in `unstable_cache` with 6h revalidate) and `createCustomer` (used by the subscribe server action). `LocalLineError` surfaces `ALREADY_EXISTS` for duplicate-email handling.
- **Server actions** — `src/lib/actions.js` exports `subscribe({ email, firstName })`, called from `EmailCTA`. It validates the email, calls `createCustomer`, and returns `{ ok }` / `{ error }`.

**Styling:** Tailwind utility classes throughout. Brand colors (`brand.primary` `#c8513b`, `brand.amber`, `brand.blue`, `brand.plum`, `brand.sage`) are defined in `tailwind.config.js`; other tones (`#3F3228`, `#c8bca9`, `#e2d8ca`, etc.) are used inline. Fonts — Inter (body), Merriweather (headings), Amatic SC (display accents) — are loaded via `next/font/google` in `src/app/layout.jsx` and exposed as CSS variables (`--font-inter`, `--font-merriweather`, `--font-amatic`).

**SEO:** `src/app/layout.jsx` sets shared metadata (OG, Twitter, robots, icons). `src/app/sitemap.js` emits static routes plus one entry per vendor. `src/app/robots.js` allows all. The landing page injects Organization JSON-LD. `SITE_URL`, `SITE_NAME`, and `SITE_DESCRIPTION` live in `src/lib/site.js` and read from `NEXT_PUBLIC_SITE_URL`.

**Environment:** `.env.local` (see `.env.example`) provides `NEXT_PUBLIC_SITE_URL`, `LOCALLINE_USERNAME`, and `LOCALLINE_PASSWORD`. The same vars must be set in Vercel for production.

**Deployment:** `.github/workflows/deploy.yml` runs on push to `main` and drives `vercel pull` → `vercel build --prod` → `vercel deploy --prebuilt --prod`. Requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` repo secrets. `vercel.json` pins the framework to `nextjs`.
