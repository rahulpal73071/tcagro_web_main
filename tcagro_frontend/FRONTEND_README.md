# Tiera & Cielo Agro — Frontend (redesigned)

Next.js 15 site, bilingual (English/Hindi), connected to the Django backend
(`tcagro_backend`).

## Setup

```bash
npm install
cp .env.local.example .env.local   # point NEXT_PUBLIC_API_URL at your backend
npm run dev
```

If the backend isn't running, the site still works using built-in demo data
(see `lib/api.ts`) — useful for previewing the design on its own.

## What's new in this pass

- **Language**: first-visit popup lets a farmer pick English or Hindi; a
  pill toggle in the header switches anytime. All text lives in `lib/i18n.tsx`.
- **Design system**: one flat background color across the whole site
  (`--bg-flat` in `app/globals.css`), organic "blob" shapes instead of
  rectangular cards, Baloo 2 (headings) + Mukta (body) — both support
  Devanagari natively so Hindi looks as intentional as English, not a
  translated afterthought.
- **Splash screen**: logo animation plays once per browser session
  (`app/components/ui/SplashScreen.tsx`).
- **Browser tab icon**: `app/icon.png` (generated from your logo) — Next.js
  picks this up automatically, no extra config needed.
- **Products**: `/products` — category filter pills, image-forward cards.
  `/products/[id]` — product page with the quantity + your-price bid form
  that posts straight to the backend.
- **Farms & Nursery**: `/farms-and-nursery` — list of farms/nurseries.
  `/farms-and-nursery/[id]` — one location's beds, each showing status
  (Growing / Ready to Sell / Harvested). `/farms-and-nursery/[id]/beds/[bedId]`
  — the growth-story timeline: dated photos strung along a vine, the
  signature visual element of the redesign.
- **Map**: office location on `/` (Contact section) — an OpenStreetMap embed
  inside an organic-shaped frame, plus a "Get Directions" button that opens
  Google Maps with the exact coordinates from the backend's Site Settings.
- **Mobile**: fixed bottom nav bar (Home / Products / Farms / Contact) on
  small screens, full desktop nav above 900px.

## Not yet redone

`/about` and `/services` still use the previous corporate design/content —
the `globals.css` tokens changed under them, so they'll look plainer until
restyled. Say the word and I'll bring those in line with the new system next.

## Env

`.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.tcagro.com/api
```
Defaults to `http://127.0.0.1:8000/api` if unset (local backend dev).
