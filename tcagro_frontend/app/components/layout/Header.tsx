"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "../ui/LanguagePicker";

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", key: "nav_home" as const },
    { href: "/products", key: "nav_products" as const },
    { href: "/farms-and-nursery", key: "nav_farms" as const },
    { href: "/about", key: "nav_about" as const },
    { href: "/#contact", key: "nav_contact" as const },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Tiera & Cielo Agro" />
          <span className="header-logo-text">T&amp;C Agro Pvt. Ltd.</span>
        </Link>

        <nav className="header-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="header-nav-link">
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <a href="tel:+918168368079" className="header-call-btn">
            📞 {t("contact_call")}
          </a>
          <button
            type="button"
            className={`menu-toggle-btn ${open ? "open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu-panel"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${open ? "backdrop-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div id="mobile-menu-panel" className={`mobile-menu ${open ? "menu-open" : ""}`}>
        <nav className="mobile-menu-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-menu-link" onClick={() => setOpen(false)}>
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <a href="tel:+918168368079" className="mobile-call-btn" onClick={() => setOpen(false)}>
          📞 {t("contact_call")}
        </a>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 400;
          background: #eef0df;
          border-bottom: 1px solid #d7e4ce;
        }
        .header-bar {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 20px;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          min-width: 0;
          text-decoration: none;
        }
        .header-logo img {
          width: 38px;
          height: 38px;
          object-fit: contain;
          border-radius: 50%;
          background: #fff;
          padding: 4px;
          flex-shrink: 0;
          display: block;
        }
        .header-logo-text {
          font-weight: 700;
          font-size: 1.05rem;
          color: #1e3324;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header-nav {
          display: none;
          gap: 24px;
        }
        .header-nav-link {
          font-weight: 600;
          font-size: 0.95rem;
          color: #5b5340;
          text-decoration: none;
        }
        .header-nav-link:hover { color: #2f4a34; }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .header-call-btn {
          display: none;
          align-items: center;
          gap: 6px;
          background: #d9a62e;
          color: #1e3324;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 10px 18px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
        }

        .menu-toggle-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          background: #d7e4ce;
          border-radius: 10px;
          border: none;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        .menu-toggle-btn span {
          display: block;
          width: 18px;
          height: 2.5px;
          background: #1e3324;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.2s ease;
        }
        .menu-toggle-btn.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .menu-toggle-btn.open span:nth-child(2) { opacity: 0; }
        .menu-toggle-btn.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(20, 30, 20, 0);
          pointer-events: none;
          transition: background 0.25s ease;
          z-index: 350;
        }
        .backdrop-open {
          background: rgba(20, 30, 20, 0.45);
          pointer-events: auto;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 400;
          background: #fbf9f0;
          box-shadow: 0 24px 60px rgba(42, 36, 24, 0.18);
          border-radius: 0 0 24px 24px;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.25s ease;
          padding-top: 68px;
          max-height: 100vh;
          overflow-y: auto;
        }
        .menu-open {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          padding: 8px 20px 4px;
        }
        .mobile-menu-link {
          padding: 14px 4px;
          font-weight: 600;
          font-size: 1.05rem;
          color: #2a2418;
          text-decoration: none;
          border-bottom: 1px solid #d7e4ce;
        }
        .mobile-menu-link:last-child { border-bottom: none; }
        .mobile-call-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 16px 20px 20px;
          background: #d9a62e;
          color: #1e3324;
          font-weight: 700;
          font-size: 1rem;
          padding: 13px 20px;
          border-radius: 999px;
          text-decoration: none;
        }

        @media (min-width: 900px) {
          .header-nav { display: flex; }
          .header-call-btn { display: inline-flex; }
          .menu-toggle-btn { display: none; }
          .mobile-menu-backdrop { display: none; }
          .mobile-menu { display: none; }
        }
      `}</style>
    </header>
  );
}