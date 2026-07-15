"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { useLanguage } from "@/lib/i18n";
import { getBed, imageUrl, type Bed } from "@/lib/api";

const STATUS_KEY: Record<string, "bed_status_prepared" | "bed_status_growing" | "bed_status_ready" | "bed_status_harvested"> = {
  prepared: "bed_status_prepared",
  growing: "bed_status_growing",
  ready: "bed_status_ready",
  harvested: "bed_status_harvested",
};

export default function BedTimelinePage() {
  const { t, lang } = useLanguage();
  const params = useParams();
  const bedId = Number(params.bedId);
  const locationId = params.id;
  const [bed, setBed] = useState<Bed | null | undefined>(undefined);

  useEffect(() => {
    getBed(bedId).then(setBed);
  }, [bedId]);

  if (bed === undefined) {
    return (<><Header /><main><p className="text-center" style={{ padding: 60 }}>{t("loading")}</p></main><Footer /></>);
  }
  if (bed === null) {
    return (<><Header /><main><p className="text-center" style={{ padding: 60 }}>404</p></main><Footer /></>);
  }

  return (
    <>
      <Header />
      <main>
        <section className="section-wrap section-y">
          <div className="inner">
            <Link href={`/farms-and-nursery/${locationId}`} className="back-link">← {t("bed_back")}</Link>

            <div className="bed-header">
              <img src={imageUrl(bed.cover_image)} alt={lang === "en" ? bed.name_en : bed.name_hi} className="bed-header-image" />
              <div>
                <span className={`blob-badge ${bed.status === "ready" ? "blob-badge-ready" : bed.status === "growing" ? "blob-badge-growing" : ""}`}>
                  {t(STATUS_KEY[bed.status])}
                </span>
                <h1 style={{ marginTop: 10 }}>{lang === "en" ? bed.crop_name_en : bed.crop_name_hi}</h1>
                <p style={{ color: "var(--ink-soft)", marginTop: 4 }}>
                  {lang === "en" ? bed.name_en : bed.name_hi} — {lang === "en" ? bed.location_name_en : bed.location_name_hi}
                </p>
                {bed.sown_date && (
                  <p style={{ color: "var(--ink-soft)", marginTop: 4, fontSize: "0.9rem" }}>
                    {t("bed_sown")}: {new Date(bed.sown_date).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN")}
                  </p>
                )}
                {bed.status === "ready" && bed.quantity_available > 0 && (
                  <p style={{ color: "var(--rust-600)", fontWeight: 700, marginTop: 8 }}>
                    {bed.quantity_available} {t("bed_quantity_available")}
                  </p>
                )}
              </div>
            </div>

            <h2 style={{ marginTop: 48, marginBottom: 24 }}>🌿 {t("bed_timeline_title")}</h2>

            {(!bed.updates || bed.updates.length === 0) && (
              <p style={{ color: "var(--ink-soft)" }}>{t("bed_timeline_empty")}</p>
            )}

            {bed.updates && bed.updates.length > 0 && (
              <div className="timeline-vine">
                {bed.updates.map((u) => (
                  <div className="timeline-node" key={u.id}>
                    <div className="blob-card timeline-card">
                      <img src={imageUrl(u.image)} alt="" className="timeline-photo" />
                      <div className="timeline-card-body">
                        <p className="timeline-date">
                          {new Date(u.date).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                        {(u.caption_en || u.caption_hi) && (
                          <p className="timeline-caption">{lang === "en" ? u.caption_en : u.caption_hi}</p>
                        )}
                      </div>
                    </div>
                  </div>
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
