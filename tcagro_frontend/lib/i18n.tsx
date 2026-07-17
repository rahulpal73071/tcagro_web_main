"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "hi";

/**
 * All site text lives here. Keep entries short — this is a photo-first,
 * low-text website for farmers who may not read comfortably in either
 * language, so every string should be as plain and short as possible.
 */
const dict = {
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_farms: "Our Farms",
    nav_about: "About Us",
    nav_contact: "Contact",

    hero_title: "Seed to Sell.\nWe have All.",
    hero_sub: "From our nursery to your field — good plants, fair prices, real people to call.",
    hero_cta_products: "See Products",
    hero_cta_farms: "See Our Farms",

    how_title: "How It Works",
    how_1_title: "Pick what you need",
    how_1_desc: "Browse seedlings and farm inputs with photos and prices.",
    how_2_title: "Tell us quantity & your price",
    how_2_desc: "Enter how much you need and what you're willing to pay.",
    how_3_title: "We call you",
    how_3_desc: "Our team calls to confirm and arrange delivery or pickup.",

    products_title: "Our Products",
    products_sub: "Fresh seedlings and farm inputs, ready now",
    products_view_all: "View All Products",
    products_all_categories: "All",
    products_empty: "No products here right now. Please check back soon.",
    products_price_per: "per",
    products_stock: "In stock",
    products_out_of_stock: "Out of stock",
    products_view: "View & Order",

    product_back: "Back to Products",
    product_quantity: "Quantity",
    product_your_price: "Your Price (per unit)",
    product_your_price_hint: "Tell us what you're willing to pay — we'll call to confirm.",
    product_name: "Your Name",
    product_phone: "Phone Number",
    product_village: "Village / Address (optional)",
    product_message: "Any note (optional)",
    product_submit: "Submit & We'll Call You",
    product_submitting: "Sending...",
    product_success_title: "Thank you!",
    product_success_desc: "We got your request. Our team will call you soon.",
    product_error: "Something went wrong. Please try again or call us directly.",
    product_min_order: "Minimum order",

    farms_title: "Our Farms & Nurseries",
    farms_sub: "See how your food is grown — real photos, real progress",
    farms_type_farm: "Farm",
    farms_type_nursery: "Nursery",
    farms_beds_active: "active beds",
    farms_beds_ready: "ready to sell",
    farms_view: "View Farm",

    farm_back: "Back to Farms & Nurseries",
    farm_beds_title: "Beds & Plots",
    farm_bed_view: "See Growth Photos",
    bed_status_prepared: "Getting Ready",
    bed_status_growing: "Growing",
    bed_status_ready: "Ready to Sell",
    bed_status_harvested: "Harvested",

    bed_back: "Back",
    bed_timeline_title: "Growth Story",
    bed_timeline_empty: "Photos coming soon.",
    bed_sown: "Sown on",
    bed_quantity_available: "units available",

    contact_title: "Visit Us",
    contact_sub: "Come see the nursery yourself",
    contact_call: "Call Us",
    contact_whatsapp: "WhatsApp",
    contact_directions: "Get Directions",

    footer_tagline: "Growing trust, one seedling at a time.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",

    lang_modal_title: "Choose Your Language",
    lang_modal_sub: "अपनी भाषा चुनें",
    lang_modal_en: "English",
    lang_modal_hi: "हिंदी",

    loading: "Loading...",

    about_hero_title: "How We Work",
    about_hero_sub: "A simple idea: bring good land, good farmers, and good experts together — everyone earns from it.",
    about_step1_title: "We Lease or Partner on Land",
    about_step1_desc: "We find farmland owners who aren't farming their land themselves, or want a better return on it, and we take it on lease or as a partnership.",
    about_step2_title: "Our Expert Team Takes Over",
    about_step2_desc: "Agronomists, farm managers, and field staff plan the crop, prepare the soil, and manage the farm day to day — real people who visit the field, not remote advice.",
    about_step3_title: "The Land Starts Producing",
    about_step3_desc: "Vegetables, seedlings, and other crops come from that farm and from our nurseries — using organic and sustainable methods wherever we can.",
    about_step4_title: "Everyone Benefits",
    about_step4_desc: "The landowner earns steady income without doing the farming themselves. Local workers get real jobs on the farm. Nearby farmers get access to good seedlings, inputs, and advice. The land itself gets healthier over time instead of lying idle.",

    about_why_title: "Why This Model Works",
    about_why_1: "Landowners earn from land they couldn't farm themselves",
    about_why_2: "Local employment — real jobs for real people, season after season",
    about_why_3: "Farmers nearby get quality seedlings and honest guidance",
    about_why_4: "Idle or under-used land becomes productive again",

    ventures_title: "Our Ventures",
    ventures_sub: "Farms and initiatives run directly under Tiera & Cielo Agro",
    partners_title: "Our Partners",
    partners_sub: "Companies we work with to bring you better seeds, machinery, and farms",

    team_title: "Meet Our Team",
    team_sub: "Real people you can call — field experience and genuine care for farmers",
    team_experience: "Experience",
    team_expertise: "Expertise",

    contact_form_title: "Send Us a Message",
    contact_form_sub: "Have a question? Write to us directly — we read every message.",
    contact_form_name: "Your Name",
    contact_form_village: "Village",
    contact_form_phone: "Phone Number",
    contact_form_message: "Your Message",
    contact_form_submit: "Send Message",
    contact_form_sending: "Sending...",
    contact_form_success: "Thank you — we received your message and will get back to you soon.",
    contact_form_error: "Something went wrong. Please try again or call us directly.",
  },
  hi: {
    nav_home: "होम",
    nav_products: "उत्पाद",
    nav_farms: "हमारे फार्म",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क करें",

    hero_title: "बीज से बिक्री तक।\nहमारे पास सब कुछ है।",
    hero_sub: "हमारी नर्सरी से आपके खेत तक — अच्छे पौधे, सही दाम, बात करने के लिए असली लोग।",
    hero_cta_products: "उत्पाद देखें",
    hero_cta_farms: "हमारे फार्म देखें",

    how_title: "यह कैसे काम करता है",
    how_1_title: "जो चाहिए वो चुनें",
    how_1_desc: "फोटो और दाम के साथ पौध और खेती का सामान देखें।",
    how_2_title: "मात्रा और अपना दाम बताएं",
    how_2_desc: "आपको कितना चाहिए और आप कितना देना चाहते हैं, बताएं।",
    how_3_title: "हम आपको फोन करेंगे",
    how_3_desc: "हमारी टीम फोन करके पक्का करेगी और डिलीवरी या पिकअप तय करेगी।",

    products_title: "हमारे उत्पाद",
    products_sub: "ताज़ी पौध और खेती का सामान, अभी उपलब्ध",
    products_view_all: "सभी उत्पाद देखें",
    products_all_categories: "सभी",
    products_empty: "अभी यहाँ कोई उत्पाद नहीं है। कृपया बाद में देखें।",
    products_price_per: "प्रति",
    products_stock: "स्टॉक में है",
    products_out_of_stock: "स्टॉक में नहीं",
    products_view: "देखें और ऑर्डर करें",

    product_back: "उत्पादों पर वापस जाएं",
    product_quantity: "मात्रा",
    product_your_price: "आपका दाम (प्रति यूनिट)",
    product_your_price_hint: "बताएं आप कितना देना चाहते हैं — हम फोन करके पक्का करेंगे।",
    product_name: "आपका नाम",
    product_phone: "फोन नंबर",
    product_village: "गांव / पता (वैकल्पिक)",
    product_message: "कोई नोट (वैकल्पिक)",
    product_submit: "भेजें, हम आपको फोन करेंगे",
    product_submitting: "भेजा जा रहा है...",
    product_success_title: "धन्यवाद!",
    product_success_desc: "हमें आपका अनुरोध मिल गया है। हमारी टीम जल्द ही फोन करेगी।",
    product_error: "कुछ गड़बड़ हुई। कृपया फिर से कोशिश करें या सीधे फोन करें।",
    product_min_order: "न्यूनतम ऑर्डर",

    farms_title: "हमारे फार्म और नर्सरी",
    farms_sub: "देखें आपका खाना कैसे उगाया जाता है — असली फोटो, असली प्रगति",
    farms_type_farm: "फार्म",
    farms_type_nursery: "नर्सरी",
    farms_beds_active: "सक्रिय बेड",
    farms_beds_ready: "बिक्री के लिए तैयार",
    farms_view: "फार्म देखें",

    farm_back: "फार्म और नर्सरी पर वापस जाएं",
    farm_beds_title: "बेड और प्लॉट",
    farm_bed_view: "विकास की फोटो देखें",
    bed_status_prepared: "तैयार हो रहा है",
    bed_status_growing: "बढ़ रहा है",
    bed_status_ready: "बिक्री के लिए तैयार",
    bed_status_harvested: "कटाई हो चुकी",

    bed_back: "वापस",
    bed_timeline_title: "विकास की कहानी",
    bed_timeline_empty: "फोटो जल्द आ रही हैं।",
    bed_sown: "बुवाई की तारीख",
    bed_quantity_available: "यूनिट उपलब्ध",

    contact_title: "हमसे मिलें",
    contact_sub: "खुद नर्सरी देखने आएं",
    contact_call: "फोन करें",
    contact_whatsapp: "व्हाट्सएप",
    contact_directions: "रास्ता देखें",

    footer_tagline: "हर पौध के साथ भरोसा बढ़ाते हुए।",
    footer_quick_links: "जल्दी लिंक",
    footer_contact: "संपर्क",
    footer_rights: "सर्वाधिकार सुरक्षित।",

    lang_modal_title: "Choose Your Language",
    lang_modal_sub: "अपनी भाषा चुनें",
    lang_modal_en: "English",
    lang_modal_hi: "हिंदी",

    loading: "लोड हो रहा है...",

    about_hero_title: "हम कैसे काम करते हैं",
    about_hero_sub: "एक सीधी सोच: अच्छी ज़मीन, अच्छे किसान और अच्छे विशेषज्ञों को एक साथ लाना — जिससे हर कोई कमाए।",
    about_step1_title: "हम ज़मीन लीज़ या पार्टनरशिप पर लेते हैं",
    about_step1_desc: "जो ज़मीन मालिक खुद खेती नहीं कर रहे, या अपनी ज़मीन से बेहतर कमाई चाहते हैं, हम उनकी ज़मीन लीज़ या साझेदारी पर लेते हैं।",
    about_step2_title: "हमारी विशेषज्ञ टीम काम संभालती है",
    about_step2_desc: "कृषि विशेषज्ञ, फार्म मैनेजर और फील्ड स्टाफ फसल की योजना बनाते हैं, मिट्टी तैयार करते हैं, और रोज़ाना खेत का काम संभालते हैं — असली लोग जो खेत पर आते हैं, सिर्फ दूर से सलाह नहीं देते।",
    about_step3_title: "ज़मीन से उत्पादन शुरू होता है",
    about_step3_desc: "सब्ज़ियां, पौध और अन्य फसलें उस खेत और हमारी नर्सरी से आती हैं — जहां तक हो सके, जैविक और टिकाऊ तरीकों से।",
    about_step4_title: "हर कोई फायदे में",
    about_step4_desc: "ज़मीन मालिक बिना खुद खेती किए स्थिर कमाई पाता है। स्थानीय मज़दूरों को असली रोज़गार मिलता है। आसपास के किसानों को अच्छी पौध, सामान और सही सलाह मिलती है। ज़मीन खाली पड़े रहने की बजाय समय के साथ और उपजाऊ बनती है।",

    about_why_title: "यह मॉडल क्यों काम करता है",
    about_why_1: "ज़मीन मालिक उस ज़मीन से कमाते हैं जो वे खुद नहीं जोत सकते थे",
    about_why_2: "स्थानीय रोज़गार — असली लोगों के लिए असली नौकरी, सीज़न दर सीज़न",
    about_why_3: "आसपास के किसानों को अच्छी पौध और ईमानदार सलाह मिलती है",
    about_why_4: "खाली पड़ी या कम उपयोग की ज़मीन फिर से उपजाऊ बनती है",

    ventures_title: "हमारे उद्यम",
    ventures_sub: "टिएरा एंड सिएलो एग्रो के तहत सीधे चलने वाले फार्म और पहल",
    partners_title: "हमारे साझेदार",
    partners_sub: "बेहतर बीज, मशीनरी और खेत लाने के लिए हम इन कंपनियों के साथ काम करते हैं",

    team_title: "हमारी टीम से मिलें",
    team_sub: "असली लोग जिन्हें आप फोन कर सकते हैं — फील्ड का अनुभव और किसानों के लिए सच्ची परवाह",
    team_experience: "अनुभव",
    team_expertise: "विशेषज्ञता",

    contact_form_title: "हमें संदेश भेजें",
    contact_form_sub: "कोई सवाल है? सीधे हमें लिखें — हम हर संदेश पढ़ते हैं।",
    contact_form_name: "आपका नाम",
    contact_form_village: "गांव",
    contact_form_phone: "फोन नंबर",
    contact_form_message: "आपका संदेश",
    contact_form_submit: "संदेश भेजें",
    contact_form_sending: "भेजा जा रहा है...",
    contact_form_success: "धन्यवाद — हमें आपका संदेश मिल गया है, हम जल्द ही जवाब देंगे।",
    contact_form_error: "कुछ गड़बड़ हुई। कृपया फिर से कोशिश करें या सीधे फोन करें।",
  },
} as const;

export type TKey = keyof typeof dict["en"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TKey) => string;
  ready: boolean;
  showPicker: boolean;
  closePicker: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tcagro_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "en" || saved === "hi") {
      setLangState(saved);
    } else {
      setShowPicker(true);
    }
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const closePicker = () => setShowPicker(false);

  const t = (key: TKey) => dict[lang][key] ?? dict.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ready, showPicker, closePicker }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
