"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { getLocation, imageUrl, type LocationDetail } from "@/lib/api";

const STATUS_KEY: Record<string, "bed_status_prepared" | "bed_status_growing" | "bed_status_ready" | "bed_status_harvested"> = {
  prepared: "bed_status_prepared",
  growing: "bed_status_growing",
  ready: "bed_status_ready",
  harvested: "bed_status_harvested",
};

export default function FarmDetailPage() {
  const { t, lang } = useLanguage();
  const params = useParams();
  const id = Number(params.id);
  const [location, setLocation] = useState<LocationDetail | null | undefined>(undefined);

  useEffect(() => {
    getLocation(id).then(setLocation);
  }, [id]);

  if (location === undefined) {
    return (<><Header /><main><p className="text-center" style={{ padding: 60 }}>{t("loading")}</p></main><Footer /></>);
  }
  if (location === null) {
    return (<><Header /><main><p className="text-center" style={{ padding: 60 }}>404</p></main><Footer /></>);
  }

  return (
    <>
      <Header />
      <main>
        <div className="farm-hero-banner">
          <img src={imageUrl(location.cover_image)} alt={lang === "en" ? location.name_en : location.name_hi} />
        </div>
        <section className="section-wrap section-y">
          <div className="inner">
            <Link href="/farms-and-nursery" className="back-link">← {t("farm_back")}</Link>

            <span className={`blob-badge ${location.location_type === "farm" ? "blob-badge-growing" : ""}`}>
              {location.location_type === "farm" ? t("farms_type_farm") : t("farms_type_nursery")}
            </span>
            <h1 style={{ marginTop: 10 }}>{lang === "en" ? location.name_en : location.name_hi}</h1>
            <p style={{ color: "var(--ink-soft)", marginTop: 6 }}>
              {lang === "en" ? location.village_en : location.village_hi}
            </p>
            {(location.description_en || location.description_hi) && (
              <p style={{ marginTop: 16, maxWidth: 640, color: "var(--ink-soft)" }}>
                {lang === "en" ? location.description_en : location.description_hi}
              </p>
            )}

            <h2 style={{ marginTop: 44, marginBottom: 20 }}>{t("farm_beds_title")}</h2>

            <div className="farm-grid">
              {location.beds.map((bed) => (
                <Link href={`/farms-and-nursery/${location.id}/beds/${bed.id}`} key={bed.id} className="blob-card farm-card">
                  <img src={imageUrl(bed.cover_image)} alt={lang === "en" ? bed.name_en : bed.name_hi} className="blob-img" />
                  <div className="product-card-body">
                    <span className={`blob-badge ${bed.status === "ready" ? "blob-badge-ready" : bed.status === "growing" ? "blob-badge-growing" : ""}`}>
                      {t(STATUS_KEY[bed.status])}
                    </span>
                    <h4 style={{ marginTop: 8 }}>{lang === "en" ? bed.name_en : bed.name_hi}</h4>
                    <p className="farm-village">{lang === "en" ? bed.crop_name_en : bed.crop_name_hi}</p>
                    {bed.status === "ready" && bed.quantity_available > 0 && (
                      <p style={{ fontSize: "0.85rem", color: "var(--rust-600)", marginTop: 6, fontWeight: 600 }}>
                        {bed.quantity_available} {t("bed_quantity_available")}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
