# Tiera & Cielo Agro — Backend

Django + Django REST Framework backend for the tcagro.com website. Built to be
run alongside your existing Next.js frontend, matching the pattern you already
use for Field Tag and Live Dukaan (Django REST API + separate frontend, VPS +
Nginx deployment).

This first version covers the two pieces you asked to start with:

1. **Products & Bids** — admin pushes seedlings/agri-inputs with photo + price;
   a farmer picks a product, enters quantity + their own offered price, and
   your team gets the enquiry to call them.
2. **Farms & Nurseries** — admin creates a Farm or Nursery, adds Beds/Plots
   inside it (multiple crops can run at once on the same site), and uploads
   dated photos to each bed to build a simple photo timeline. Beds also carry
   a "ready to sell" status + quantity, so the site can show what's currently
   available at each location.

Everything bilingual: every user-facing text field has an `_en` and `_hi`
version, filled in by your team from one admin form — no code changes needed
to add products, farms, or update text.

---

## 1. Local setup

```bash
cd tcagro_backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env               # then edit values if needed
python manage.py migrate
python manage.py createsuperuser   # make your own admin login
python manage.py runserver
```

Admin panel: http://127.0.0.1:8000/admin/
API root: http://127.0.0.1:8000/api/

A demo superuser already exists in this build for testing:
- username: `admin`
- password: `changeme123`
**Change this password immediately, or delete the user and create your own,
before this ever touches a real server.**

To load a few example products/farms so the admin isn't empty on first look:
```bash
python manage.py shell < seed_demo_data.py
```

---

## 2. What the admin can do (no code needed)

Log in at `/admin/`. Three sections:

**Site Settings** — one page: office phone, WhatsApp number, address, map
coordinates, logo, tagline. Edit this once and it feeds the whole site.

**Products & Bids**
- *Categories* — add/reorder categories (Vegetable Seedlings, Fruit Plants, etc.)
- *Products* — add a product: pick category, name (EN + HI), upload one photo,
  short one-line description, price, unit, stock. A photo preview shows right
  in the form.
- *Enquiries (Bids)* — every time a farmer submits quantity + their offered
  price on the website, it lands here, newest first, phone number is a
  click-to-call link, with a status you update as you call them (New → Called
  → Order Confirmed).

**Farms & Nurseries**
- *Location* — add a Farm or Nursery: name, village, one cover photo, map
  coordinates. Underneath, add as many **Beds** as are actually running right
  now (each bed = one crop, one patch of land/tray).
- *Bed* — inside a bed, set status (Growing / Ready to Sell / Harvested), sown
  date, and — this is the timeline — add dated photos with a short caption
  each ("First leaves", "Flowering", "Ready for transplant"). This is exactly
  what a farmer sees when they tap into that bed on the website: a simple
  photo-by-date story of the crop.

---

## 3. API reference (for the Next.js frontend)

All public, read-only GET endpoints — no login needed for browsing:

| Endpoint | Purpose |
|---|---|
| `GET /api/settings/settings/` | Office info, phone, map coords, logo |
| `GET /api/products/categories/` | List of categories |
| `GET /api/products/` | List available products (`?category=<id>` to filter) |
| `GET /api/products/<id>/` | Single product |
| `POST /api/products/enquiries/` | Submit a bid — `{product, customer_name, phone_number, quantity, bid_price_per_unit, message}` |
| `GET /api/locations/?type=farm` or `?type=nursery` | List farms/nurseries |
| `GET /api/locations/<id>/` | One farm/nursery + its beds |
| `GET /api/locations/beds/<id>/` | One bed + its full photo timeline (`updates`) |

All list endpoints are paginated (`count`, `next`, `previous`, `results`).
All image fields return a full URL ready to drop into an `<img>` tag.

---

## 4. Deployment (matching your existing VPS pattern)

1. Provision Postgres (or reuse an existing instance), create a database + user.
2. On the VPS: clone this repo, `pip install -r requirements.txt` inside a venv.
3. Fill in a real `.env` from `.env.example` — set `DATABASE_URL` to your
   Postgres URL, a real `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=False`, and your
   real domain(s) in `DJANGO_ALLOWED_HOSTS` / `CORS_ALLOWED_ORIGINS`.
4. `python manage.py migrate && python manage.py collectstatic`
5. Run with **gunicorn** behind **Nginx** (same shape as Live Dukaan):
   ```
   gunicorn tcagro_backend.wsgi:application --bind 127.0.0.1:8001
   ```
   Keep it alive with a systemd service (or PM2 in `fork` mode running the
   gunicorn command, if you'd rather manage it the same way as your Node apps).
6. Nginx: reverse-proxy `api.tcagro.com` → `127.0.0.1:8001`, and serve
   `/media/` and `/static/` directly from disk for speed.
7. Point the Next.js frontend's API base URL at `https://api.tcagro.com/api/`.

---

## 5. AI image generation guide

You asked for **less text, more images** — and for real photos to be the
default with AI-generated images as a fallback when you don't have a photo
yet. Every `Product` and `Location` has an `ai_image_prompt_used` /
description field to log what you used, so keep a record for consistency.

**House style to keep every image feeling human and consistent (paste this
line into every prompt below):**
> "Natural daylight photo, shot on a phone camera, slight imperfection and
> realistic texture, warm earthy tones, no text or watermark, candid not
> staged, North Indian farmland setting."

**Prompts you can paste into ChatGPT/DALL·E, Midjourney, or similar:**

- **Hero/homepage banner** — *"Wide photo of an Indian farmer's hands gently
  holding a small green seedling with soil, early morning light, farmland
  blurred in the background, warm and hopeful mood, natural daylight photo
  shot on a phone camera, candid not staged, no text or watermark."*

- **Vegetable seedling product photo** — *"Close-up photo of young tomato
  seedlings in black plastic nursery trays, healthy green leaves, soil
  visible, shot from a slight top-down angle, natural daylight, shallow
  depth of field, realistic phone-camera photo, no text or watermark."*

- **Fruit plant product photo** — *"Photo of a young grafted guava sapling in
  a black poly bag, standing upright against a plain nursery background,
  natural daylight, clear focus on the plant, realistic phone-camera style,
  no text or watermark."*

- **Nursery location cover photo** — *"Wide photo of a small Indian plant
  nursery with rows of green seedling trays under a shade net structure, one
  farm worker visible watering plants in the distance, natural daylight,
  candid documentary style, no text or watermark."*

- **Farm location cover photo** — *"Wide photo of an open organic vegetable
  farm field in Haryana, India, green rows of crops under a clear sky, one
  farmer walking through the field, natural daylight, candid documentary
  photo style, no text or watermark."*

- **Progress timeline photo (early growth stage)** — *"Close-up photo of a
  small vegetable bed with tiny green seedling sprouts just emerging from
  soil, natural daylight, realistic phone-camera photo, no text or
  watermark."*

- **Progress timeline photo (ready to harvest)** — *"Photo of a fully grown
  healthy vegetable crop row ready for harvest, vibrant green, natural
  daylight, realistic phone-camera photo taken from standing height, no text
  or watermark."*

- **Logo splash animation background frame** — *"Simple, minimal illustration
  of a single green leaf sprouting from soil, flat design, one solid muted
  background color, no text, centered composition, clean and calming, works
  well as an animated loading screen."*

Reminder: real photos of your actual seedlings, farms, and team will always
build more trust with farmers than AI images — use these prompts only where
you genuinely don't have a photo yet, and swap in the real one as soon as
you do.

---

## 6. What's next

This backend covers Products/Bids and Farms/Nurseries end-to-end (models,
admin, API, tested). Natural next additions, whenever you're ready:

- Admin login restricted to staff accounts only (currently any superuser)
- SMS/WhatsApp auto-notification to your team when a new bid comes in
- Simple analytics: which products get the most enquiries
- Frontend pages that consume this API (bilingual, organic-shape design,
  farm/nursery timeline UI, products + bid form, splash animation, map)
