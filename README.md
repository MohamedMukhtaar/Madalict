# Madal ICT Solutions

Marketing site for Madal ICT Solutions, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build |
| `npm run typecheck` | TypeScript check only, no build |

> All imagery is local — WebP photos in [public/photos/](public/photos/) (see
> [SOURCES.md](public/photos/SOURCES.md) for licensing) with drawn SVG alternatives in
> [public/illustrations/](public/illustrations/). Nothing is hotlinked, so the site renders
> without an internet connection.

## Structure

```
app/                 Routes (App Router)
  services/[slug]/   Service detail pages, generated from siteData
  blog/[slug]/       Blog article pages, generated from siteData
  privacy/, terms/   Legal pages
components/          Shared UI
data/siteData.ts     All site content lives here
public/              Images and brand assets
```

## Brand

Colours and logos come from the brand book (`Madal logo011.pdf`).

| Token | Hex | Use |
| --- | --- | --- |
| `brand-900` | `#011F4B` | Brand navy — dark surfaces, hero, footer |
| `brand-950` | `#010F26` | Deepest navy, gradient ends |
| `accent-500` | `#00C3FF` | Brand cyan — buttons, highlights |
| `brand-100` | `#E6EBF0` | Light neutral panel |

Cyan is a **light** colour: it carries navy text (`text-brand-900`), never white.
On light backgrounds use `accent-600`/`accent-700` for cyan text so it stays readable.

The mark contains white shapes, so the logo artwork must match the surface behind it.
Use the `Logo` component rather than referencing the files directly:

```tsx
<Logo />                          {/* auto: swaps light/navy with the theme */}
<Logo surface="navy" />           {/* on navy panels  */}
<Logo surface="cyan" />           {/* on cyan panels  */}
<Logo surface="navy" markOnly />  {/* icon only       */}
```

Assets in [public/brand/](public/brand/) are transparent, tightly cropped vectors extracted
from the brand book. The favicon ([app/icon.svg](app/icon.svg)), Apple touch icon, and the
social share image ([app/opengraph-image.png](app/opengraph-image.png)) are generated from
the same artwork and are picked up automatically by Next.js file conventions.

## Imagery

Ten WebP photos in [public/photos/](public/photos/) fill every image slot: one hero, six
service images, three blog images. `next/image` optimization is on, so Next serves AVIF and
per-device sizes from the `sizes` each component already declares.

Swapping a photo means replacing the file at the same name — no code change. To use a drawn
illustration instead, point the entry in `art` (in [data/siteData.ts](data/siteData.ts)) at
the matching `/illustrations/*.svg`.

> The image optimizer rejects SVG sources with a 400, so anything SVG must render as a plain
> `<img>` — that is why [components/Logo.tsx](components/Logo.tsx) does not use `next/image`.
> If you move an illustration into an image slot, set `unoptimized` on that `Image`.

## Illustrations

The 12 illustrations in [public/illustrations/](public/illustrations/) are one designed set:
a navy field with a faint cyan grid, two soft glows, and a scene built from the same panel,
bar, and dot primitives. Each is 1200×800 and 2–5 KB.

To add or restyle one, edit the generator rather than hand-editing an SVG, so the set stays
visually consistent — keep the shared frame and change only the scene:

```bash
python tools/generate-illustrations.py   # rewrites public/illustrations/
python tools/extract-brand-logos.py      # rewrites public/brand/ from the brand PDF
```

Both scripts are deterministic and overwrite their output directory. They need
`pymupdf` and `pillow` (`pip install pymupdf pillow`); only the logo script reads the PDF.

## Editing content

Almost all copy lives in [data/siteData.ts](data/siteData.ts) — no component edits needed for
routine content changes.

- `services` — service cards and the base data for each detail page
- `serviceDetails` — the long-form content per service, keyed by slug
- `blogPosts` — post metadata and cards
- `blogContent` — article bodies, keyed by slug
- `contactDetails`, `socialLinks` — phone, email, WhatsApp, social profiles

Adding a service or post means adding an entry to **both** the list and its matching
detail record. The slugs must match, or the page returns 404.

## Contact form

The form on [/contact](app/contact/page.tsx) validates input client-side, then composes the
details into a message and hands off to WhatsApp or the visitor's email client. Nothing is
sent until the visitor presses send in that app, and no submission data is stored on a server.

To switch to server-side delivery later, replace the `handoff` function in
[components/ContactForm.tsx](components/ContactForm.tsx) with a POST to an API route.
