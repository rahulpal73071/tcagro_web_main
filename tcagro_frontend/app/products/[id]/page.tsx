"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { getProduct, imageUrl, submitEnquiry, type Product } from "@/lib/api";

export default function ProductDetailPage() {
  const { t, lang } = useLanguage();
  const params = useParams();
  const id = Number(params.id);

  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [quantity, setQuantity] = useState("");
  const [bidPrice, setBidPrice] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [village, setVillage] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  useEffect(() => {
    if (product) setBidPrice(product.price_per_unit);
  }, [product]);

  if (product === undefined) {
    return (
      <>
        <Header />
        <main><p className="text-center" style={{ padding: 60 }}>{t("loading")}</p></main>
        <Footer />
      </>
    );
  }

  if (product === null) {
    return (
      <>
        <Header />
        <main><p className="text-center" style={{ padding: 60 }}>404</p></main>
        <Footer />
      </>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await submitEnquiry({
      product: product.id,
      customer_name: name,
      phone_number: phone,
      village_or_address: village,
      quantity: Number(quantity),
      bid_price_per_unit: Number(bidPrice),
      message,
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <>
        <Header />
        <main>
          <section className="section-wrap section-y">
            <div className="inner text-center">
              <div className="blob-card success-card mx-auto">
                <div style={{ fontSize: "3rem" }}>✅</div>
                <h2>{t("product_success_title")}</h2>
                <p style={{ color: "var(--ink-soft)", marginTop: 8 }}>{t("product_success_desc")}</p>
                <Link href="/products" className="btn btn-primary" style={{ marginTop: 24 }}>
                  {t("product_back")}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="section-wrap section-y">
          <div className="inner">
            <Link href="/products" className="back-link">← {t("product_back")}</Link>

            <div className="product-detail-grid">
              <div className="product-detail-image-wrap">
                <img src={imageUrl(product.image)} alt={lang === "en" ? product.name_en : product.name_hi} className="product-detail-image" />
              </div>

              <div>
                <h1>{lang === "en" ? product.name_en : product.name_hi}</h1>
                <p className="product-price" style={{ fontSize: "1.4rem", margin: "10px 0" }}>
                  ₹{product.price_per_unit} <span>/{product.unit_display}</span>
                </p>
                <p style={{ color: "var(--ink-soft)", marginBottom: 6 }}>
                  {lang === "en" ? product.description_en || product.short_description_en : product.description_hi || product.short_description_hi}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                  {t("product_min_order")}: {product.minimum_order_quantity}
                </p>

                <form className="bid-form blob-card" onSubmit={handleSubmit}>
                  <div className="bid-form-row">
                    <label>
                      {t("product_quantity")}
                      <input type="number" min={1} required value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </label>
                    <label>
                      {t("product_your_price")}
                      <input type="number" min={0} step="0.01" required value={bidPrice} onChange={(e) => setBidPrice(e.target.value)} />
                    </label>
                  </div>
                  <p className="bid-form-hint">{t("product_your_price_hint")}</p>

                  <label>
                    {t("product_name")}
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
                  <label>
                    {t("product_phone")}
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </label>
                  <label>
                    {t("product_village")}
                    <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} />
                  </label>
                  <label>
                    {t("product_message")}
                    <textarea rows={2} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </label>

                  {status === "error" && <p className="bid-form-error">{t("product_error")}</p>}

                  <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"}>
                    {status === "sending" ? t("product_submitting") : `📞 ${t("product_submit")}`}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
