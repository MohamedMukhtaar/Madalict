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
> [SOURCES.md](public/photos/SOURCES.md) for licensing). Nothing is hotlinked, so the site
> renders without an internet connection.

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

Colours and typography come from the official Madal ICT Solutions Brand Identity Guidelines.

| Token | Hex | Use |
| --- | --- | --- |
| `brand-900` | `#02354C` | Dark Teal — dark surfaces, hero, footer |
| `brand-950` | `#011A26` | Deepest teal, gradient ends |
| `accent-500` | `#00C3FF` | Deep Sky Blue — buttons, highlights |
| `brand-100` | `#E6EDF0` | Light neutral panel |

Cyan is a **light** colour: it carries navy text (`text-brand-900`), never white.
On light backgrounds use `accent-600`/`accent-700` for cyan text so it stays readable.

Typography is a single family, [Inter](https://fonts.google.com/specimen/Inter),
used for both headings and body text — set once on `body` in
[app/globals.css](app/globals.css) and inherited everywhere.

The mark contains white shapes, so the logo artwork must match the surface behind it.
Use the `Logo` component rather than referencing the files directly:

```tsx
<Logo />                          {/* auto: swaps light/navy with the theme */}
<Logo surface="navy" />           {/* on navy panels  */}
<Logo surface="cyan" />           {/* on cyan panels  */}
<Logo surface="navy" markOnly />  {/* icon only       */}
```

Assets in [public/brand/](public/brand/) are transparent, tightly cropped vectors. The favicon
([app/icon.svg](app/icon.svg)), Apple touch icon, and the social share image
([app/opengraph-image.png](app/opengraph-image.png)) are generated from the same artwork and
are picked up automatically by Next.js file conventions.

## Imagery

Ten WebP photos in [public/photos/](public/photos/) fill every image slot: one hero, six
service images, three blog images. `next/image` optimization is on, so Next serves AVIF and
per-device sizes from the `sizes` each component already declares.

Swapping a photo means replacing the file at the same name — no code change.

> The image optimizer rejects SVG sources with a 400, so anything SVG must render as a plain
> `<img>` — that is why [components/Logo.tsx](components/Logo.tsx) does not use `next/image`.

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
