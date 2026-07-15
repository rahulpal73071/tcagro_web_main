# Tiera-Cielo Agro Private Limited — Website

A production-grade Next.js 15 website for Tiera-Cielo Agro Private Limited.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + CSS custom properties
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (headings) + DM Sans (body) via Google Fonts
- **Language**: TypeScript

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        ← Sticky nav, mobile menu
│   │   └── Footer.tsx        ← 4-column footer
│   ├── sections/
│   │   ├── Hero.tsx          ← Full-screen hero + stats
│   │   ├── About.tsx         ← Company intro + values
│   │   ├── Farms.tsx         ← Farm types + gallery strip
│   │   ├── Nursery.tsx       ← Nursery categories + stats
│   │   ├── Services.tsx      ← 5 service cards
│   │   ├── Consultation.tsx  ← Advisory + consultation form
│   │   ├── WhyUs.tsx         ← Why choose us
│   │   ├── Gallery.tsx       ← Filterable masonry gallery
│   │   ├── Testimonials.tsx  ← Testimonial slider
│   │   └── Contact.tsx       ← Contact info + contact form
│   └── ui/
│       ├── Logo.tsx           ← Company logo component
│       ├── Button.tsx         ← Reusable button (4 variants)
│       ├── SectionLabel.tsx   ← Small uppercase section label
│       ├── Icon.tsx           ← Lucide icon mapper
│       └── ScrollRevealInit.tsx ← Scroll animation trigger
├── globals.css               ← Design tokens + base styles
├── layout.tsx                ← Root layout + metadata
└── page.tsx                  ← Home page (section composition)

lib/
└── data.ts                   ← ALL website content lives here
```

---

## How to Update Content

**All website text, services, stats, etc. are in one file:**

```
lib/data.ts
```

- Update `SITE` for company name, phone, email, address
- Update `SERVICES` to change/add/remove services
- Update `TESTIMONIALS` to change customer reviews
- Update `FARMS`, `NURSERY_CATS` for farm/nursery sections

---

## How to Add Real Images

1. Place images in `/public/images/`
2. Replace `<div className="img-ph">` placeholders with `<Image>` from `next/image`:

```tsx
import Image from "next/image";

// Replace:
<div className="img-ph" style={{ height: 480 }}>...</div>

// With:
<Image src="/images/your-photo.jpg" alt="Farm" fill className="object-cover" />
```

---

## Adding Your Logo

Edit `app/components/ui/Logo.tsx` and replace the SVG with:

```tsx
import Image from "next/image";
// Inside the logo component:
<Image src="/images/logo.png" alt="Tiera-Cielo Agro" width={120} height={40} />
```

---

## Deployment

```bash
npm run build    # Production build
npm start        # Start production server

# Or deploy to Vercel:
vercel deploy
```

---

© 2025 Tiera-Cielo Agro Private Limited
