# County Farm Collective Website

Public-facing website for the County Farm Collective (CFC).

## What's here

- Landing page with featured vendors and Local Line storefront link
- Vendor directory with logos and profiles
- Transparency dashboard (monthly datasets)
- CFC Code of Conduct / policy pages

## Stack

React 19 + React Router 7 (HashRouter) + Vite + Tailwind CSS 3, deployed to GitHub Pages.

## Development

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Data

- **Vendors:** `src/data/vendors.js` — names, slugs, logo URLs (hosted on S3)
- **Transparency:** `public/transparency/` — one folder per month (`YYYY-MM/summary.json`), discovered via `index.json`

## Deployment

Pushes to `main` trigger a GitHub Actions build and deploy to Vercel.
