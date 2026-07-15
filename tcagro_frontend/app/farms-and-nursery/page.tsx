"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { getLocations, imageUrl, type LocationSummary } from "@/lib/api";

export default function FarmsAndNurseryPage() {
  const { t, lang } = useLanguage();
  const [locations, setLocations] = useState<LocationSummary[] | null>(null);

  useEffect(() => {
    getLocations().then(setLocations);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="section-wrap section-y">
          <div className="inner">
            <h1 className="text-center section-title">{t("farms_title")}</h1>
            <p className="text-center section-sub">{t("farms_sub")}</p>

            {locations === null && <p className="text-center" style={{ padding: 40 }}>{t("loading")}</p>}

            {locations && (
              <div className="farm-grid">
                {locations.map((loc) => (
                  <Link href={`/farms-and-nursery/${loc.id}`} key={loc.id} className="blob-card farm-card">
                    <img src={imageUrl(loc.cover_image)} alt={lang === "en" ? loc.name_en : loc.name_hi} className="blob-img" />
                    <div className="product-card-body">
                      <span className={`blob-badge ${loc.location_type === "farm" ? "blob-badge-growing" : ""}`}>
                        {loc.location_type === "farm" ? t("farms_type_farm") : t("farms_type_nursery")}
                      </span>
                      <h4 style={{ marginTop: 8 }}>{lang === "en" ? loc.name_en : loc.name_hi}</h4>
                      <p className="farm-village">{lang === "en" ? loc.village_en : loc.village_hi}</p>
                      <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: 6 }}>
                        {loc.active_bed_count} {t("farms_beds_active")}
                        {loc.ready_bed_count > 0 && ` · ${loc.ready_bed_count} ${t("farms_beds_ready")}`}
                      </p>
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
