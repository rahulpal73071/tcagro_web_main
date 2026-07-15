"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { getCategories, getProducts, imageUrl, type Category, type Product } from "@/lib/api";

export default function ProductsPage() {
  const { t, lang } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setProducts(null);
    getProducts(activeCategory ?? undefined).then(setProducts);
  }, [activeCategory]);

  return (
    <>
      <Header />
      <main>
        <section className="section-wrap section-y">
          <div className="inner">
            <h1 className="text-center section-title">{t("products_title")}</h1>
            <p className="text-center section-sub">{t("products_sub")}</p>

            <div className="category-pills">
              <button
                className={`category-pill ${activeCategory === null ? "active" : ""}`}
                onClick={() => setActiveCategory(null)}
              >
                {t("products_all_categories")}
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`category-pill ${activeCategory === c.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(c.id)}
                >
                  {c.icon_emoji} {lang === "en" ? c.name_en : c.name_hi}
                </button>
              ))}
            </div>

            {products === null && <p className="text-center" style={{ padding: 40 }}>{t("loading")}</p>}

            {products && products.length === 0 && (
              <p className="text-center" style={{ padding: 40 }}>{t("products_empty")}</p>
            )}

            {products && products.length > 0 && (
              <div className="product-grid">
                {products.map((p) => (
                  <Link href={`/products/${p.id}`} key={p.id} className="blob-card product-card">
                    <img src={imageUrl(p.image)} alt={lang === "en" ? p.name_en : p.name_hi} className="blob-img" />
                    <div className="product-card-body">
                      {!p.is_available || p.stock_quantity === 0 ? (
                        <span className="blob-badge" style={{ background: "var(--rust-500)" }}>
                          {t("products_out_of_stock")}
                        </span>
                      ) : (
                        <span className="blob-badge blob-badge-growing">{t("products_stock")}</span>
                      )}
                      <h4>{lang === "en" ? p.name_en : p.name_hi}</h4>
                      <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)", margin: "4px 0 8px" }}>
                        {lang === "en" ? p.short_description_en : p.short_description_hi}
                      </p>
                      <p className="product-price">₹{p.price_per_unit} <span>/{p.unit_display}</span></p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
