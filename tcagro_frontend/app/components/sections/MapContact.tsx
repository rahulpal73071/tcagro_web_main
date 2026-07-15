"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { getSiteSettings, type SiteSettings } from "@/lib/api";
import ContactForm from "./ContactForm";

export default function MapContact() {
  const { t, lang } = useLanguage();
  const [settings, setSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  const lat = settings ? parseFloat(settings.latitude) : 28.1994;
  const lng = settings ? parseFloat(settings.longitude) : 76.6188;
  const bbox = `${lng - 0.01}%2C${lat - 0.008}%2C${lng + 0.01}%2C${lat + 0.008}`;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lng}`;

  return (
    <section className="section-wrap section-y" id="contact">
      <div className="inner">
        <h2 className="text-center section-title">{t("contact_title")}</h2>
        <p className="text-center section-sub">{t("contact_sub")}</p>

        <div className="contact-grid">
          <div className="map-blob-frame">
            <iframe
              title="Office location"
              src={mapSrc}
              className="map-iframe"
              loading="lazy"
            />
            <div className="map-pin-badge">📍</div>
          </div>

          <div className="contact-card blob-card">
            <p className="contact-address">
              {settings ? (lang === "en" ? settings.address_en : settings.address_hi) : ""}
            </p>
            <div className="contact-buttons">
              <a href={`tel:${settings?.phone_primary || "+918168368079"}`} className="btn btn-primary btn-full">
                📞 {t("contact_call")}
              </a>
              {settings?.whatsapp_number && (
                <a
                  href={`https://wa.me/${settings.whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-full"
                >
                  💬 {t("contact_whatsapp")}
                </a>
              )}
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-full">
                🧭 {t("contact_directions")}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
