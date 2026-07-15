"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function SplashScreen() {
  const [show, setShow] = useState(false);
  const { t, ready } = useLanguage();

  useEffect(() => {
    const seen = window.sessionStorage.getItem("tcagro_splash_seen");
    if (!seen) {
      setShow(true);
      window.sessionStorage.setItem("tcagro_splash_seen", "1");
      const timer = setTimeout(() => setShow(false), 2300);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show || !ready) return null;

  return (
    <div className="splash-screen">
      <img src="/images/logo.png" alt="Tiera & Cielo Agro" className="splash-logo" />
      <p className="splash-tagline">{t("footer_tagline")}</p>
    </div>
  );
}
