"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view to highlight the correct nav link
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop sticky header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,246,240,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 24px rgba(26,61,43,0.09)" : "none",
          paddingLeft: "var(--section-pad-x)",
          paddingRight: "var(--section-pad-x)",
        }}
      >
        <div
          className="max-w-[1200px] mx-auto flex items-center justify-between"
          style={{ padding: scrolled ? "14px 0" : "20px 0", transition: "padding 0.3s" }}
        >
          <Logo />

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href.replace("#", "") ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#consultation"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg no-underline"
            style={{
              background: "var(--green-800)",
              padding: "11px 26px",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-600)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-800)"; }}
          >
            Get Consultation
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: scrolled ? "var(--green-800)" : "white" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-5 transition-all duration-300"
        style={{
          background: "var(--cream)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <button
          className="absolute top-6 p-2 rounded-lg"
          style={{ right: "var(--section-pad-x)", color: "var(--green-800)" }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="mb-4">
          <Logo size="lg" />
        </div>

        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display font-semibold no-underline transition-colors"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 2.4rem)",
              color: active === link.href.replace("#", "") ? "var(--green-600)" : "var(--green-800)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#consultation"
          className="mt-4 inline-flex items-center text-white rounded-full font-semibold no-underline transition-all duration-300 hover:shadow-lg"
          style={{ background: "var(--green-800)", padding: "13px 32px", fontSize: "0.95rem" }}
          onClick={() => setMobileOpen(false)}
        >
          Get Consultation
        </a>
      </div>
    </>
  );
}
