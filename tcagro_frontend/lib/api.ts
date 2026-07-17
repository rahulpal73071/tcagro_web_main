const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export interface Category {
  id: number;
  name_en: string;
  name_hi: string;
  icon_emoji: string;
  order: number;
}

export interface Product {
  id: number;
  category: number;
  category_name_en: string;
  category_name_hi: string;
  name_en: string;
  name_hi: string;
  short_description_en: string;
  short_description_hi: string;
  description_en: string;
  description_hi: string;
  image: string | null;
  price_per_unit: string;
  unit: string;
  unit_display: string;
  stock_quantity: number;
  is_available: boolean;
  is_featured: boolean;
  minimum_order_quantity: number;
}

export interface ProgressUpdate {
  id: number;
  image: string;
  date: string;
  caption_en: string;
  caption_hi: string;
}

export interface Bed {
  id: number;
  location?: number;
  location_name_en?: string;
  location_name_hi?: string;
  name_en: string;
  name_hi: string;
  crop_name_en: string;
  crop_name_hi: string;
  cover_image: string | null;
  sown_date: string | null;
  expected_ready_date: string | null;
  status: "prepared" | "growing" | "ready" | "harvested";
  status_display: string;
  quantity_available: number;
  updates?: ProgressUpdate[];
}

export interface LocationSummary {
  id: number;
  location_type: "farm" | "nursery";
  location_type_display: string;
  name_en: string;
  name_hi: string;
  village_en: string;
  village_hi: string;
  cover_image: string | null;
  short_description_en: string;
  short_description_hi: string;
  latitude: string;
  longitude: string;
  active_bed_count: number;
  ready_bed_count: number;
}

export interface LocationDetail extends Omit<LocationSummary, "active_bed_count" | "ready_bed_count"> {
  description_en: string;
  description_hi: string;
  beds: Bed[];
}

export interface SiteSettings {
  office_name_en: string;
  office_name_hi: string;
  address_en: string;
  address_hi: string;
  latitude: string;
  longitude: string;
  phone_primary: string;
  whatsapp_number: string;
  email: string;
  logo: string | null;
  tagline_en: string;
  tagline_hi: string;
}

async function safeGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// ── Demo fallback data (used only if the backend isn't reachable) ────────
const DEMO_CATEGORIES: Category[] = [
  { id: 1, name_en: "Vegetable Seedlings", name_hi: "सब्जी की पौध", icon_emoji: "🥬", order: 1 },
  { id: 2, name_en: "Fruit Plants", name_hi: "फल के पौधे", icon_emoji: "🍎", order: 2 },
];

const DEMO_PRODUCTS: Product[] = [
  {
    id: 1, category: 1, category_name_en: "Vegetable Seedlings", category_name_hi: "सब्जी की पौध",
    name_en: "Tomato Seedling", name_hi: "टमाटर की पौध",
    short_description_en: "Healthy, disease-free tomato seedlings ready to transplant",
    short_description_hi: "स्वस्थ, रोगमुक्त टमाटर की पौध, रोपाई के लिए तैयार",
    description_en: "", description_hi: "",
    image: "/images/vegetable_seedling.webp",
    price_per_unit: "2.50", unit: "piece", unit_display: "Per Piece",
    stock_quantity: 5000, is_available: true, is_featured: true, minimum_order_quantity: 50,
  },
  {
    id: 2, category: 1, category_name_en: "Vegetable Seedlings", category_name_hi: "सब्जी की पौध",
    name_en: "Capsicum Seedling", name_hi: "शिमला मिर्च की पौध",
    short_description_en: "Strong capsicum seedlings, polyhouse-raised",
    short_description_hi: "मजबूत शिमला मिर्च की पौध, पॉलीहाउस में तैयार",
    description_en: "", description_hi: "",
    image: "/images/organic_seedling.webp",
    price_per_unit: "3.00", unit: "piece", unit_display: "Per Piece",
    stock_quantity: 3000, is_available: true, is_featured: false, minimum_order_quantity: 50,
  },
];

const DEMO_LOCATIONS: LocationSummary[] = [
  {
    id: 1, location_type: "nursery", location_type_display: "Nursery",
    name_en: "Karnal Nursery", name_hi: "करनाल नर्सरी",
    village_en: "Karnal, Haryana", village_hi: "करनाल, हरियाणा",
    cover_image: "/images/nursery.webp",
    short_description_en: "Our main seedling-raising nursery",
    short_description_hi: "हमारी मुख्य पौध तैयार करने वाली नर्सरी",
    latitude: "29.6857", longitude: "76.9905", active_bed_count: 1, ready_bed_count: 1,
  },
  {
    id: 2, location_type: "farm", location_type_display: "Farm",
    name_en: "Bhraf Organic Farm", name_hi: "भ्राफ ऑर्गेनिक फार्म",
    village_en: "Bhraf, Haryana", village_hi: "भ्राफ, हरियाणा",
    cover_image: "/images/organic_farm.webp",
    short_description_en: "Open-field organic vegetable cultivation",
    short_description_hi: "खुले खेत में जैविक सब्जी की खेती",
    latitude: "29.05", longitude: "76.34", active_bed_count: 1, ready_bed_count: 0,
  },
];

const DEMO_SETTINGS: SiteSettings = {
  office_name_en: "Tiera & Cielo Agro Private Limited", office_name_hi: "टिएरा एंड सिएलो एग्रो",
  address_en: "Shiv Nagar, Part 2, Delhi Road, Rewari, Haryana – 123401",
  address_hi: "शिव नगर, भाग 2, दिल्ली रोड, रेवाड़ी, हरियाणा – 123401",
  latitude: "28.1994", longitude: "76.6188",
  phone_primary: "+91 8168368079", whatsapp_number: "918168368079", email: "info@tcagro.com",
  logo: "/images/logo.png",
  tagline_en: "Seed to Sell, We have All",
  tagline_hi: "हर पौध के साथ भरोसा बढ़ाते हुए",
};

// ── Public API functions ────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeGet<SiteSettings>("/settings/settings/", DEMO_SETTINGS);
}

export async function getCategories(): Promise<Category[]> {
  const data = await safeGet<Paginated<Category> | Category[]>("/products/categories/", DEMO_CATEGORIES);
  return Array.isArray(data) ? data : data.results;
}

export async function getProducts(categoryId?: number): Promise<Product[]> {
  const qs = categoryId ? `?category=${categoryId}` : "";
  const data = await safeGet<Paginated<Product> | Product[]>(`/products/${qs}`, DEMO_PRODUCTS);
  return Array.isArray(data) ? data : data.results;
}

export async function getProduct(id: number): Promise<Product | null> {
  return safeGet<Product | null>(`/products/${id}/`, DEMO_PRODUCTS.find((p) => p.id === id) || null);
}

export async function getLocations(type?: "farm" | "nursery"): Promise<LocationSummary[]> {
  const qs = type ? `?type=${type}` : "";
  const data = await safeGet<Paginated<LocationSummary> | LocationSummary[]>(
    `/locations/${qs}`,
    type ? DEMO_LOCATIONS.filter((l) => l.location_type === type) : DEMO_LOCATIONS
  );
  return Array.isArray(data) ? data : data.results;
}

export async function getLocation(id: number): Promise<LocationDetail | null> {
  const fallback = DEMO_LOCATIONS.find((l) => l.id === id);
  return safeGet<LocationDetail | null>(
    `/locations/${id}/`,
    fallback ? { ...fallback, description_en: "", description_hi: "", beds: [] } : null
  );
}

export async function getBed(id: number): Promise<Bed | null> {
  return safeGet<Bed | null>(`/locations/beds/${id}/`, null);
}

export async function submitEnquiry(payload: {
  product: number;
  customer_name: string;
  phone_number: string;
  village_or_address?: string;
  quantity: number;
  bid_price_per_unit: number;
  message?: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/products/enquiries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { ok: false, error: data ? JSON.stringify(data) : "Request failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not reach the server" };
  }
}

export async function submitContactMessage(payload: {
  name: string;
  village_or_address?: string;
  phone_number: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/settings/contact-messages/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return { ok: false, error: data ? JSON.stringify(data) : "Request failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not reach the server" };
  }
}

export function imageUrl(path: string | null | undefined): string {
  if (!path) return "/images/organic_farm.webp";
  if (path.startsWith("http") || path.startsWith("/images")) return path;
  const origin = API_BASE.replace(/\/api\/?$/, "");
  return `${origin}${path}`;
}
