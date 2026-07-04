"use client";

import SectionLabel from "../ui/SectionLabel";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { ABOUT_VALUES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "56px", alignItems: "center" }}
          className="lg-two-col">

          {/* ── Left: image block ── */}
          <div className="reveal" style={{ position: "relative" }}>
            <div
  className="rounded-2xl overflow-hidden"
  style={{ height: "420px" }}
>
  <img
    src="https://imgs.search.brave.com/iA2IEYKZ3Xd6Pep0-St9FH-wOxdQKUfdG9vau9Lg2UU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/MTk4NDM2Mi9waG90/by9mYXJtZXItZXhh/bWluaW5nLXN1bmZs/b3dlci1zZWVkbGlu/Z3MtYXQtc3Vuc2V0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BbTdFRHcyTzE2/dlAzODdxSUdNdGQw/U2ljN21nWmtsc1lD/QjhUOHdRM1RVPQ"
    alt="Agriculture"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>
            {/* Accent thumbnail — hidden on small screens to prevent overflow */}
            <div
  className="img-ph rounded-xl about-accent-img"
  style={{
    width: "170px",
    height: "170px",
    borderRadius: "12px",
    border: "5px solid white",
    boxShadow: "var(--shadow-lg)",
    position: "absolute",
    bottom: "-28px",
    right: "-24px",
    overflow: "hidden",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
    alt="Plant growth"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    }}
  />
</div>
            {/* Badge */}
            <div className="about-badge" style={{
              position: "absolute", top: "28px", left: "-18px",
              background: "var(--green-800)", color: "white",
              borderRadius: "12px", padding: "14px 18px",
              boxShadow: "var(--shadow-md)",
            }}>
              <div className="font-display" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.75, marginTop: "4px" }}>
                Years of Excellence
              </div>
            </div>
          </div>

          {/* ── Right: text ── */}
          <div className="reveal reveal-d2">
            <SectionLabel text="Who We Are" />
            <h2 className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)" }}>
              A Vision Rooted in the Soil,{" "}
              <span style={{ display: "block" }}>Reaching for the Sky</span>
            </h2>
            <div className="section-line" />
            <p className="leading-relaxed mb-6" style={{ fontSize: "0.95rem", color: "#4a4a4a" }}>
              Tiera and Cielo Agro Private Limited is an integrated agriculture company
              that works at the intersection of traditional farming wisdom and modern agronomy.
              We don&apos;t just advise — we get on the field with you.
            </p>

            {/* Vision & Mission */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}
              className="vm-grid">
              {[
                { title: "Our Vision", text: "To be the most trusted agricultural enterprise in India, driving sustainable food systems for future generations." },
                { title: "Our Mission", text: "Empowering farmers with technology, knowledge, and quality inputs to achieve maximum productivity, sustainably." },
              ].map((item) => (
                <div key={item.title} style={{ paddingLeft: "14px", borderLeft: "3px solid var(--green-400)" }}>
                  <h4 style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-600)", marginBottom: "6px" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "#5a5a5a" }}>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Value cards — 2 per row, no overflow */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "28px" }}
              className="val-grid">
              {ABOUT_VALUES.map((val) => (
                <div key={val.title} className="val-card"
                  style={{ background: "var(--beige-200)", borderRadius: "12px", padding: "18px 16px", cursor: "default", transition: "all 0.3s" }}>
                  <div className="val-icon" style={{
                    width: 38, height: 38, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "12px", background: "var(--green-200)", color: "var(--green-800)", transition: "all 0.3s",
                  }}>
                    <Icon name={val.icon} size={17} />
                  </div>
                  <h4 className="val-title" style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "5px", color: "var(--green-800)", transition: "color 0.3s" }}>
                    {val.title}
                  </h4>
                  <p className="val-desc" style={{ fontSize: "0.78rem", lineHeight: 1.55, color: "#6a6a6a", transition: "color 0.3s" }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#services">
              Explore Our Services <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .lg-two-col {
          grid-template-columns: 1fr !important;
        }
        @media (min-width: 1024px) {
          .lg-two-col {
            grid-template-columns: 1fr 1fr !important;
            gap: 80px !important;
          }
        }
        .about-accent-img, .about-badge {
          display: none;
        }
        @media (min-width: 768px) {
          .about-accent-img, .about-badge { display: flex; }
          .about-badge { display: block; }
        }
        @media (max-width: 480px) {
          .val-grid, .vm-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .val-card:hover {
          background: var(--green-800) !important;
          transform: translateY(-3px);
          box-shadow: var(--shadow-sm);
        }
        .val-card:hover .val-title { color: white !important; }
        .val-card:hover .val-desc  { color: rgba(255,255,255,0.7) !important; }
        .val-card:hover .val-icon  { background: rgba(255,255,255,0.15) !important; color: white !important; }
      `}</style>
    </section>
  );
}
