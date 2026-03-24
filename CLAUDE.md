# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** React 19 + React Router 7 (HashRouter) + Vite + Tailwind CSS 3

**Routing:** Hash-based URLs (`/#/path`). All routes defined in `src/App.jsx`. The `VendorProfilePlaceholderPage` uses a `:vendorSlug` param; `TransparencyPage` uses an optional `:month` param.

**Data sources:**
- Vendor data (names, logos, featured vendors) lives in `src/data/vendors.js`. Logos are hosted on AWS S3; `VendorLogo` renders initials as a fallback when no logo URL exists.
- Transparency dashboard data is JSON in `public/transparency/`. On load, `TransparencyPage` fetches `public/transparency/index.json` to discover available months, then fetches the selected month's `summary.json`. Adding a new month means adding a folder under `public/transparency/YYYY-MM/` and updating `index.json` (and symlinking/copying to `public/transparency/latest/`).

**Styling:** Pure Tailwind utility classes throughout — no CSS modules or styled-components. Custom brand colors are hardcoded inline (greens `#2F5D50`, browns `#3F3228`/`#B86F4B`/`#c8bca9`). Fonts are Inter (body) and Fraunces (headings) loaded from Google Fonts in `index.css`.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys to GitHub Pages. Vite base path is set to `/website/` in `vite.config.js` to match the Pages URL.
