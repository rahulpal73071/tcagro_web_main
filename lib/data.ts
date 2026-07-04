// ─────────────────────────────────────────────
//  Tiera-Cielo Agro — All website content lives here.
//  When you get your final copy ready, just update
//  the text in this file. No need to touch components.
// ────────────────────────────────────────

export const SITE = {
  name: "Tiera and Cielo Agro Pvt Ltd",
  fullName: "Tiera and Cielo Agro Private Limited",
  tagline: "Private Limited",
  phone: "+91 8168368079",
  phoneAlt: "+91 8059195251",
  email: "info@tcagro.com",
  emailConsult: "T.c.agrocorp@gmail.com",
  address: "Shiv Nagar, Part 2, Delhi Road, Rewari, Rewari, Rewari – 123401, Haryana, India",
  hours: "Mon – Sat: 9 AM – 6 PM",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#",
    linkedin: "#",
  },
};

// ── Ventures & Partners ──────────────────────
export const VENTURES = [
  {
    name: "Akshat's Farm",
    type: "Venture",
    logo: "/images/ventures/venture.png",
    desc: "A brief description of this venture, what it does, where it operates, and how it connects to the Tiera-Cielo Agro ecosystem.",
    details: ["Est. 20XX", "Haryana", "Placeholder Tag"],
    exploreUrl: "#",
  },
];

export const PARTNERS = [
  {
    name: "Akaaya Seeds",
    type: "Partner",
    logo: "/images/partners/partner.png",
    desc: "A brief description of this partner organisation, what they do, and the nature of the partnership with Tiera-Cielo Agro.",
    details: ["Partner Type", "Location", "Since 20XX"],
    exploreUrl: "#",
  },
];
// ── Navigation ──────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Oparations", href: "/farms-and-nursery" },
  { label: "Services", href: "/services" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/#contact" },
];


// ── Hero Stats ───────────────────────────────
export const HERO_STATS = [
  { value: 10, suffix: "+", label: "Farms Managing" },
  { value: 1000, suffix: "+", label: "Farmers Supported" },
  { value: 5, suffix: "M+ Plants", label: "Nursery Capacity" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];


// ── About Cards ──────────────────────────────
export const ABOUT_VALUES = [
  {
    icon: "Leaf",
    title: "Sustainability",
    desc: "Farming practices that protect the soil, water, and environment for the next generation.",
  },
  {
    icon: "FlaskConical",
    title: "Scientific Approach",
    desc: "Every recommendation we give is backed by soil data, crop science, and field research.",
  },
  {
    icon: "Users",
    title: "Farmer First",
    desc: "Our goal is simple — help every farmer we work with earn more and stress less.",
  },
  {
    icon: "BadgeCheck",
    title: "Quality You Can Trust",
    desc: "From seedlings to soil reports, we never cut corners on quality or accuracy.",
  },
];


// ── Farm Types ───────────────────────────────
export const FARMS = [
  {
    tag: "Open Field",
    title: "Open Field Farming",
    desc: "Large-scale seasonal vegetable and grain cultivation using modern soil health management and crop rotation techniques for consistent, profitable harvests.",
    img: "/images/open_field.webp",
  },
  {
    tag: "Net House",
    title: "Net House Farming",
    desc: "Protected net house setups that shield crops from pests, harsh weather, and UV damage — giving you better produce quality without heavy chemical use.",
    img: "/images/nethouse_farm.webp",
  },
  {
    tag: "Polyhouse",
    title: "Polyhouse Farming",
    desc: "Climate-controlled polyhouse structures for growing high-value crops like exotic vegetables and flowers year-round, regardless of outside weather.",
    img: "/images/polyhouse_farm.webp",
  },
  {
    tag: "Organic",
    title: "Organic Vegetable Production",
    desc: "Fully certified organic vegetable farming with zero synthetic inputs. Clean, nutrient-rich produce that commands premium prices in today's market.",
    img: "/images/organic_farm.webp",
  },
    {
    tag: "Nursery",
    title: "Nursery Facilities",
    desc: "Modern nursery infrastructure using cocopeat, pro-trays, and climate-controlled germination rooms to produce uniform, vigorous, disease-free seedlings.",
    img: "/images/nursery.webp",
  },
];


// ── Nursery Categories ───────────────────────
export const NURSERY_CATS = [
  {
    tag: "Vegetables",
    title: "Vegetable Seedlings",
    desc: "Tomato, chilli, capsicum, cucumber, brinjal, cabbage, cauliflower, and 30+ other vegetable seedlings grown from certified hybrid seeds in cocopeat media.",
    img: "/images/vegetable_seedling.webp",
  },
  
  {
    tag: "Commercial",
    title: "Commercial Nursery Seedlings",
    desc: "Bulk supply of quality planting material for institutional buyers, government schemes, FPOs, and large farm enterprises needing thousands of plants at once.",
    img:"/images/commercial.webp"
  },
  {
    tag: "Organic",
    title: "Organic Seedlings",
    desc: "Seedlings raised entirely without synthetic inputs — perfect for organic certification journeys or farmers who want a clean, chemical-free start.",
    img:"/images/organic_seedling.webp"
  },
  
];


export const NURSERY_STATS = [
  { value: "25+", label: "Vegetable Varieties" },
  { value: "12 Months", label: "Year-Round Supply" },
  { value: "100%", label: "Certified Organic" },
  { value: "Fastest delhivery", label: "Dispatch Lead Time" },
];


// ── Services ─────────────────────────────────
export const SERVICES = [
  {
    icon: "GraduationCap",
    title: "Agronomy Consulting",
    desc: "Get personalised advice from qualified agronomists who visit your farm, study your soil, and help you plan the right crops, the right way. We cover crop selection, scheduling, pest and disease management, yield improvement, and post-harvest handling.",
    tag: "Consulting",
  },
  {
    icon: "ShoppingBag",
    title: "Quality Farm Inputs",
    desc: "Source certified seeds, bio-fertilizers, bio-pesticides, and modern pest traps directly through us. We partner only with trusted suppliers so you get genuine, effective products that work — no middleman markups or fake material.",
    tag: "Inputs",
  },
  {
    icon: "FlaskConical",
    title: "Chemical Residue Testing",
    desc: "Before your produce reaches the market, we test it for pesticide and chemical residues. Stay compliant with food safety norms, protect your buyers, and build a reputation for clean, safe produce that earns premium prices.",
    tag: "Testing",
  },
  {
    icon: "Microscope",
    title: "Soil Testing & Diagnostics",
    desc: "A detailed soil health report covering pH, organic carbon, NPK levels, micronutrients, and more. We collect samples, run lab analysis, and give you a clear, practical fertilizer and amendment plan tailored to your specific land.",
    tag: "Testing",
  },
  {
    icon: "Sprout",
    title: "Kitchen Garden Consulting",
    desc: "Want to grow your own vegetables at home? We help homeowners, schools, and housing societies set up productive kitchen gardens — from planter setup and soil mix to variety selection and ongoing care guidance.",
    tag: "Consulting",
  },
];


// ── Why Choose Us ────────────────────────────
export const WHY_US = [
  {
    num: "01",
    title: "Experienced Agronomists",
    desc: "Our team has handled hundreds of farms across different crops, soils, and climates. We bring real field experience, not just textbook knowledge.",
  },
  {
    num: "02",
    title: "Science, Not Guesswork",
    desc: "We test before we recommend. Every fertilizer plan, crop advisory, or input suggestion is based on actual data from your soil and field.",
  },
  {
    num: "03",
    title: "Sustainable by Design",
    desc: "We build farming systems that stay productive for years — protecting soil health, reducing input costs, and keeping the environment intact.",
  },
  {
    num: "04",
    title: "Professional Farm Management",
    desc: "Landowners and investors trust us to run their farms profitably and transparently. We treat your land like our own.",
  },
  {
    num: "05",
    title: "Strong Nursery Infrastructure",
    desc: "Our in-house nursery ensures you always get quality, disease-free planting material — the single most important factor in a good crop.",
  },
  {
    num: "06",
    title: "One-Stop Agricultural Support",
    desc: "From land assessment and crop planning to testing and market guidance — we are there at every step of your farming journey.",
  },
];


// ── Gallery Categories ───────────────────────
export const GALLERY_CATS = [
  "All",
  "Nursery",
  "Farms",
  "Net House",
  "Polyhouse",
  "Organic Vegetables",
  "Training",
];


// ── Testimonials ─────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Ramesh Patel",
    role: "Vegetable Farmer, Pune District",
    initials: "RP",
    stars: 5,
    text: "Their soil testing and crop advisory genuinely changed how I farm. My tomato yield went up by nearly 40% in one season. The team visits regularly and the advice is practical, not just theoretical.",
    featured: false,
  },
  {
    name: "Sunita Desai",
    role: "Polyhouse Farmer, Nashik",
    initials: "SD",
    stars: 5,
    text: "The seedlings I got from their nursery were exceptional — uniform size, healthy roots, zero disease. My polyhouse capsicum crop was the best I've ever had. Highly recommend their consulting too.",
    featured: true,
  },
  {
    name: "Arvind Mehta",
    role: "Agricultural Investor, Pune",
    initials: "AM",
    stars: 5,
    text: "I invested in farmland and handed it over to Tiera-Cielo for management. The reporting is transparent, the team is professional, and the returns have been consistent. Very happy with the decision.",
    featured: false,
  },
  {
    name: "Priya Shinde",
    role: "Farmer Cooperative Head, Satara",
    initials: "PS",
    stars: 5,
    text: "The training programs they ran for our cooperative were eye-opening. Practical, hands-on, and directly applicable. Farmer income in our group has improved noticeably since we started working together.",
    featured: false,
  },
  {
    name: "Mangesh Jagtap",
    role: "Organic Farmer, Kolhapur",
    initials: "MJ",
    stars: 5,
    text: "We switched to organic farming with their guidance. The residue testing service gave our buyers confidence, and we now sell at premium prices. The kitchen garden consulting was a bonus for my family too!",
    featured: false,
  },
];


// ── Soil Testing Process ─────────────────────
export const SOIL_STEPS = [
  {
    step: "1",
    title: "Sample Collection",
    desc: "Our field team visits your farm and collects soil samples from multiple representative points using standard protocols. You don't have to do anything.",
  },
  {
    step: "2",
    title: "Laboratory Analysis",
    desc: "Samples go to our accredited lab where 25+ parameters are tested — pH, EC, organic carbon, NPK, and key micronutrients.",
  },
  {
    step: "3",
    title: "Report Generation",
    desc: "A clear, easy-to-read report is ready within 3–5 working days with charts, benchmark comparisons, and deficiency highlights.",
  },
  {
    step: "4",
    title: "Expert Recommendations",
    desc: "An agronomist reviews your report with you and gives a practical fertilizer plan, crop suitability list, and soil health roadmap.",
  },
];


// ── Footer Quick Links ───────────────────────
export const FOOTER_QUICK = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Farms", href: "#farms" },
  { label: "Nursery", href: "#nursery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];


export const FOOTER_SERVICES = [
  "Agronomy Consulting",
  "Quality Farm Inputs",
  "Chemical Residue Testing",
  "Soil Testing & Diagnostics",
  "Kitchen Garden Consulting",
  "Farm Management",
  "Nursery Supply",
];



