"use client";

import SectionLabel from "../ui/SectionLabel";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { ABOUT_VALUES } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">
        
        {/* ── Main Two-Column Grid (Text Left, Images Right) ── */}
        <div 
          className="lg-two-col" 
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "64px", alignItems: "center" }}
        >
          
          {/* ── Left: Narrative & Values ── */}
          <div className="reveal">
            <SectionLabel text="Who We Are" />
            <h2 
              className="font-display leading-tight mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)" }}
            >
              A Vision Rooted in the Soil,{" "}
              <span style={{ display: "block" }}>Reaching for the Sky</span>
            </h2>
            <div className="section-line" />
            <p className="leading-relaxed mb-8" style={{ fontSize: "0.95rem", color: "#4a4a4a" }}>
              Tiera and Cielo Agro Private Limited is an integrated agriculture company
              that works at the intersection of traditional farming wisdom and modern agronomy.
              We don&apos;t just advise — we get on the field with you.
            </p>

            {/* Value Cards — Horizontal layout (Icon Left, Text Right) */}
            <div 
              className="val-grid" 
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "32px" }}
            >
              {ABOUT_VALUES.map((val) => (
                <div 
                  key={val.title} 
                  className="val-card"
                  style={{ 
                    background: "var(--beige-200)", 
                    borderRadius: "14px", 
                    padding: "16px", 
                    cursor: "default", 
                    transition: "all 0.3s",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start"
                  }}
                >
                  <div 
                    className="val-icon" 
                    style={{
                      width: 42, height: 42, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
                      background: "var(--green-200)", color: "var(--green-800)", transition: "all 0.3s", flexShrink: 0
                    }}
                  >
                    <Icon name={val.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="val-title" style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "4px", color: "var(--green-800)", transition: "color 0.3s" }}>
                      {val.title}
                    </h4>
                    <p className="val-desc" style={{ fontSize: "0.78rem", lineHeight: 1.5, color: "#6a6a6a", transition: "color 0.3s" }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button href="#services">
              Explore Our Services <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* ── Right: Asymmetrical "Bento" Image Collage ── */}
          <div className="reveal reveal-d2" style={{ position: "relative", paddingRight: "20px", paddingBottom: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "12fr 5fr", gap: "16px", alignItems: "end" }}>
              
              {/* Primary Tall Image */}
              <div className="rounded-2xl overflow-hidden" style={{ height: "460px", boxShadow: "var(--shadow-md)" }}>
                <img
                  src="https://imgs.search.brave.com/iA2IEYKZ3Xd6Pep0-St9FH-wOxdQKUfdG9vau9Lg2UU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/MTk4NDM2Mi9waG90/by9mYXJtZXItZXhh/bWluaW5nLXN1bmZs/b3dlci1zZWVkbGlu/Z3MtYXQtc3Vuc2V0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BbTdFRHcyTzE2/dlAzODdxSUdNdGQw/U2ljN21nWmtsc1lD/QjhUOHdRM1RVPQ"
                  alt="Agriculture"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Secondary Offset Image */}
              <div className="rounded-2xl overflow-hidden about-accent-img" style={{ height: "280px", boxShadow: "var(--shadow-md)" }}>
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                  alt="Plant growth"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>

            {/* Floating Horizontal Stat Card */}
            <div 
              className="about-badge" 
              style={{
                position: "absolute", 
                bottom: "0px", 
                left: "20px",
                background: "var(--green-800)", 
                color: "white",
                borderRadius: "16px", 
                padding: "18px 24px",
                boxShadow: "var(--shadow-lg)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                border: "4px solid white"
              }}
            >
              <div className="font-display" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>10+</div>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Years of Excellence
                </div>
                <div style={{ fontSize: "0.7rem", opacity: 0.8 }}>Transforming Indian Agriculture</div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Section: Full-Width Vision & Mission Banner ── */}
        <div 
          className="reveal mt-16 rounded-2xl" 
          style={{ 
            background: "linear-gradient(135deg, var(--beige-200) 0%, rgba(45,106,79,0.05) 100%)", 
            border: "1px solid var(--beige-300)",
            padding: "36px" 
          }}
        >
          <div className="vm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px" }}>
            {[
              { title: "Our Vision", text: "To be the most trusted agricultural enterprise in India, driving sustainable food systems for future generations." },
              { title: "Our Mission", text: "Empowering farmers with technology, knowledge, and quality inputs to achieve maximum productivity, sustainably." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--green-600)" }} />
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--green-800)", margin: 0 }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#4a4a4a", margin: 0 }}>{item.text}</p>
              </div>
            ))}
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
            grid-template-columns: 11fr 10fr !important;
            gap: 72px !important;
          }
        }
        .about-accent-img, .about-badge {
          display: none !important;
        }
        @media (min-width: 768px) {
          .about-accent-img { display: block !important; }
          .about-badge { display: flex !important; }
        }
        @media (max-width: 640px) {
          .val-grid, .vm-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
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