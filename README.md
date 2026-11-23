# Kanto Cuts: Barbershop Website (Portfolio Demo)

A one-page, mobile-first website for a **fictional** barbershop in Mandaluyong.
Second portfolio sample for a ₱7,500 Starter Business Website package.

**Live demo:** _add Netlify URL_

## Features
- Responsive layout (phone, tablet, desktop)
- Sticky navigation with accessible mobile menu and a "Book a slot" button
- Services price board with durations and prices
- Barber profiles
- Live "Open now / Closed" status in Philippine time (handles closed days)
- Gallery with lightbox (built-in `<dialog>`, no libraries)
- Messenger booking link, call link, Google Maps link, social links
- Basic SEO and social share tags; accessibility: skip link, focus styles, alt text
- No frameworks, no build step, no paid APIs

## Project structure
```
barbershop-website/
├── index.html          # all page content
├── css/style.css       # styling (colors/fonts in :root)
├── js/script.js        # menu toggle, open-now status, lightbox
├── assets/
│   ├── favicon.svg
│   └── images/         # put client photos here
├── README.md
└── .gitignore
```

## Run locally
Open the folder in VS Code → right-click `index.html` → **Open with Live Server**.

## Customizing for a client
| What | Where |
|---|---|
| Colors and fonts | `css/style.css` → `:root` |
| Services and prices | `index.html` → `.price-list` |
| Opening hours (status badge) | `js/script.js` → `HOURS` (`null` = closed) |
| Messenger link | `index.html` → replace every `https://m.me/` with `https://m.me/<page-name>` |
| Photos | `index.html` → each `<img>` `src`, `data-full`, `alt` |
| Search visibility | `index.html` → **delete** `<meta name="robots" content="noindex">` for real clients |

## Image credits
Photos from [Unsplash](https://unsplash.com), used under the free [Unsplash License](https://unsplash.com/license),
loaded from Unsplash's image CDN:
- Hero: https://unsplash.com/photos/red-and-black-leather-office-rolling-chair-XTAtx9UhNBo
- https://unsplash.com/photos/man-in-white-dress-shirt-cutting-hair-of-man-Q82AM6BWBPM
- https://unsplash.com/photos/mans-head-wE-GAKR9WaY
- https://unsplash.com/photos/a-man-getting-his-hair-cut-at-a-barber-shop-a04Xt_QI8c8
- https://unsplash.com/photos/a-close-up-of-a-table-with-a-hair-brush-and-a-pair-of-scissors-5WttPbwX73c
- https://unsplash.com/photos/barber-trimming-beard-in-salon-4k60yfGy7fU
- https://unsplash.com/photos/barber-trimming-hair-with-thinning-shears-DrG4V5skbMY

For real clients, use the client's own photos and store them in `assets/images/`.

## Deploy
Netlify (free plan), connected to this GitHub repo. Every push to `main` redeploys.

---
*Kanto Cuts is fictional. Address, phone, barbers, and links are placeholders.*
