"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="section-wrap">
        <div className="inner footer-inner">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Tiera & Cielo Agro" className="footer-logo" />
            <p className="font-display footer-brand-name">Tiera &amp; Cielo Agro Private Limited</p>
            <p className="footer-tagline">{t("footer_tagline")}</p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">{t("footer_quick_links")}</p>
            <Link href="/">{t("nav_home")}</Link>
            <Link href="/products">{t("nav_products")}</Link>
            <Link href="/farms-and-nursery">{t("nav_farms")}</Link>
            <Link href="/about">{t("nav_about")}</Link>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">{t("footer_contact")}</p>
            <a href="tel:+918168368079">📞 +91 81683 68079</a>
            <a href="https://wa.me/918168368079" target="_blank" rel="noopener noreferrer">
              💬 {t("contact_whatsapp")}
            </a>
            <a href="mailto:info@tcagro.com">✉️ info@tcagro.com</a>
          </div>
        </div>

        <div className="inner footer-bottom">
          <p>© {new Date().getFullYear()} Tiera &amp; Cielo Agro Pvt Ltd — {t("footer_rights")}</p>
        </div>
      </div>
    </footer>
  );
}
