# Care & Cure Pharmaceuticals

A responsive Next.js App Router site with a categorized medicine catalogue, individual product pages, company profile, contact details, and a shared pharmacy photo-banner design.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build` and then `npm start`.

Set `NEXT_PUBLIC_SITE_URL` to the public deployment URL before building so the generated metadata, sitemap, and robots file use the correct host.

## Catalogue data

Product names, categories, and reference prices live in `data/products.js`. Update that file when the confirmed business catalogue changes. Reference prices can be edited there without touching the page components. Product order, product routes, and the sitemap are generated from the same data source.

## Media

Page banners use a teal-tinted pharmacy-cart photo with a fine vertical grid inspired by the supplied visual reference. Selected product photos are served from the public product listing source through the Next.js image optimizer. Other catalogue cards use illustrative pack artwork until approved product photos are supplied.

## Content source note

The URL supplied in the original request, `careandcurepharma.com`, could not be reached during implementation. The available company profile and catalogue data were taken from the public listing for the similarly named Care And Cure Pharmaceuticals in New Delhi at `careandcurepharmaceuticals.net`. Confirm that this is the right business and replace any mismatched company details, photos, or prices before publishing.

Prices, stock, pack details, and prescription requirements must be confirmed with the business before an order is placed.
