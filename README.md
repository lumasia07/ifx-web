# IFX Web

Marketing site for **IFX**, the forex bureau management platform (accounting, risk assessment, AML, rateboards and CBK‑compliant reporting). Since 2007.

## Stack

- Next.js 15 (App Router) with static export (`output: "export"`)
- TypeScript, plain CSS (`app/globals.css`)
- Outfit via `next/font/google`
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Structure

- `app/page.tsx` contains all page sections and their copy
- `components/` holds the client components (nav, live rateboard, counters, product tabs) and the icon set
- `public/brand/` contains the three logo concepts; the brand board is served at `/brand/`

## Before launch

The stats, testimonials, timeline and contact details are **placeholders**. Replace them with verified figures and real, approved client quotes in `app/page.tsx`.
