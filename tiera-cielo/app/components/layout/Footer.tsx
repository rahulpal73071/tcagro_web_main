"use client";

import Logo from "../ui/Logo";
import { SITE, FOOTER_QUICK, FOOTER_SERVICES } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, Share2, Camera, Play, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--green-900)", color: "rgba(255,255,255,0.7)" }}>
      <div className="section-wrap" style={{ paddingTop: "60px", paddingBottom: "20px" }}>
        <div className="inner">

          {/* Grid */}
          <div className="footer-grid" style={{ marginBottom: "40px" }}>

            {/* Brand */}
            <div>
              <Logo dark size="md" />
              <p style={{ marginTop: "16px", fontSize: "0.83rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 270 }}>
                An integrated agriculture company committed to transforming Indian farming through science, sustainability, and genuine farmer partnership.
              </p>
              <div style={{ display: "flex", gap: "9px", marginTop: "18px" }}>
                {[
                  { Icon: Share2, label: "Facebook",  href: SITE.social.facebook },
                  { Icon: Camera, label: "Instagram", href: SITE.social.instagram },
                  { Icon: Play,   label: "YouTube",   href: SITE.social.youtube },
                  { Icon: Link2,  label: "LinkedIn",  href: SITE.social.linkedin },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    style={{ width: 36, height: 36, borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-600)"; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "white", marginBottom: "16px" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                {FOOTER_QUICK.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--green-300)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "white", marginBottom: "16px" }}>Our Services</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                {FOOTER_SERVICES.map((s) => (
                  <li key={s}>
                    <a href="#services" style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--green-300)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "white", marginBottom: "16px" }}>Contact</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                {[
                  { Icon: MapPin, text: SITE.address },
                  { Icon: Phone,  text: SITE.phone },
                  { Icon: Mail,   text: SITE.email },
                  { Icon: Clock,  text: SITE.hours },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                    <Icon size={13} style={{ color: "var(--green-300)", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "rgba(255,255,255,0.6)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px",
          }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
              © {new Date().getFullYear()} {SITE.fullName}. All Rights Reserved.
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
              Made with care for Indian Agriculture 🌱
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </footer>
  );
}
