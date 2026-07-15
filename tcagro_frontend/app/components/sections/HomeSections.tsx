"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { getProducts, getLocations, imageUrl, type Product, type LocationSummary } from "@/lib/api";

export function Hero() {
  const { t, lang } = useLanguage();
  return (
    <section className="hero-organic section-wrap">
      <div className="inner hero-inner">
        <div className="hero-text">
          <span className="eyebrow">🌾 Tiera &amp; Cielo Agro</span>
          <h1 className="hero-title">
            {t("hero_title").split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h1>
          <p className="hero-sub">{t("hero_sub")}</p>
          <div className="hero-ctas">
            <Link href="/products" className="btn btn-primary">🌱 {t("hero_cta_products")}</Link>
            <Link href="/farms-and-nursery" className="btn btn-outline">🚜 {t("hero_cta_farms")}</Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src="/images/organic_seedling.webp" alt="Seedlings" className="hero-image" />
          <div className="hero-image-badge">
            {lang === "en" ? "Fresh from our nursery" : "हमारी नर्सरी से ताज़ा"}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();
  const steps = [
    { icon: "🌱", title: t("how_1_title"), desc: t("how_1_desc") },
    { icon: "✍️", title: t("how_2_title"), desc: t("how_2_desc") },
    { icon: "📞", title: t("how_3_title"), desc: t("how_3_desc") },
  ];
  return (
    <section className="section-wrap section-y">
      <div className="inner">
        <h2 className="text-center section-title">{t("how_title")}</h2>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-card blob-card" key={i}>
              <div className="how-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  const { t, lang } = useLanguage();
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    getProducts().then((p) => setProducts(p.slice(0, 4)));
  }, []);

  return (
    <section className="section-wrap section-y section-alt">
      <div className="inner">
        <span className="eyebrow text-center" style={{ display: "block", textAlign: "center" }}>🥬</span>
        <h2 className="text-center section-title">{t("products_title")}</h2>
        <p className="text-center section-sub">{t("products_sub")}</p>

        <div className="product-grid">
          {(products || []).map((p) => (
            <Link href={`/products/${p.id}`} key={p.id} className="blob-card product-card">
              <img src={imageUrl(p.image)} alt={lang === "en" ? p.name_en : p.name_hi} className="blob-img" />
              <div className="product-card-body">
                <h4>{lang === "en" ? p.name_en : p.name_hi}</h4>
                <p className="product-price">₹{p.price_per_unit} <span>/{p.unit_display}</span></p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 32 }}>
          <Link href="/products" className="btn btn-outline">{t("products_view_all")} →</Link>
        </div>
      </div>
    </section>
  );
}

export function FarmsPreview() {
  const { t, lang } = useLanguage();
  const [locations, setLocations] = useState<LocationSummary[] | null>(null);

  useEffect(() => {
    getLocations().then((l) => setLocations(l.slice(0, 3)));
  }, []);

  return (
    <section className="section-wrap section-y">
      <div className="inner">
        <h2 className="text-center section-title">{t("farms_title")}</h2>
        <p className="text-center section-sub">{t("farms_sub")}</p>

        <div className="farm-grid">
          {(locations || []).map((loc) => (
            <Link href={`/farms-and-nursery/${loc.id}`} key={loc.id} className="blob-card farm-card">
              <img src={imageUrl(loc.cover_image)} alt={lang === "en" ? loc.name_en : loc.name_hi} className="blob-img" />
              <div className="product-card-body">
                <span className={`blob-badge ${loc.location_type === "farm" ? "blob-badge-growing" : ""}`}>
                  {loc.location_type === "farm" ? t("farms_type_farm") : t("farms_type_nursery")}
                </span>
                <h4>{lang === "en" ? loc.name_en : loc.name_hi}</h4>
                <p className="farm-village">{lang === "en" ? loc.village_en : loc.village_hi}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
