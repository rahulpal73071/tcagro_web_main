"use client";

import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import { TESTIMONIALS } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const visible = [0, 1, 2].map((o) => TESTIMONIALS[(current + o) % TESTIMONIALS.length]);

  return (
    <section id="testimonials" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">
        <div className="text-center reveal" style={{ maxWidth: 520, margin: "0 auto 52px" }}>
          <SectionLabel text="What People Say" center />
          <h2 className="font-display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.9rem)", color: "var(--green-800)", lineHeight: 1.15, marginBottom: "12px" }}>
            Farmers &amp; Partners Trust Us
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a" }}>
            Here is what farmers and partners say about working with us.
          </p>
        </div>

        <div className="testi-grid reveal" style={{ marginBottom: "32px" }}>
          {visible.map((t, i) => (
            <div key={`${t.name}-${i}`}
              style={{
                borderRadius: "16px", padding: "clamp(20px,3vw,28px)", transition: "all 0.3s",
                background: t.featured ? "var(--green-800)" : "var(--beige-200)",
              }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={13} fill={t.featured ? "var(--green-300)" : "#f4a261"} stroke="none" />
                ))}
              </div>
              <div className="font-display" style={{ fontSize: "3.5rem", lineHeight: 1, color: t.featured ? "var(--green-400)" : "var(--green-300)", marginBottom: "4px" }}>
                &ldquo;
              </div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "20px", color: t.featured ? "rgba(255,255,255,0.82)" : "#5a5a5a" }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: "0.9rem",
                  background: t.featured ? "rgba(255,255,255,0.15)" : "var(--beige-400)",
                  color: t.featured ? "white" : "var(--green-800)",
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: t.featured ? "white" : "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: t.featured ? "rgba(255,255,255,0.55)" : "#8a8a8a" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          <button onClick={prev} aria-label="Previous"
            style={{ width: 42, height: 42, borderRadius: "50%", border: "2px solid var(--beige-300)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-800)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-800)"; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = "var(--green-800)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--green-800)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--beige-300)"; }}>
            <ChevronLeft size={16} />
          </button>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`}
              style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", transition: "all 0.25s", background: current === i ? "var(--green-800)" : "var(--beige-400)", transform: current === i ? "scale(1.4)" : "scale(1)" }} />
          ))}
          <button onClick={next} aria-label="Next"
            style={{ width: 42, height: 42, borderRadius: "50%", border: "2px solid var(--beige-300)", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-800)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--green-800)"; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = "var(--green-800)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--green-800)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--beige-300)"; }}>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr; }
          .testi-grid > *:nth-child(2), .testi-grid > *:nth-child(3) { display: none; }
        }
      `}</style>
    </section>
  );
}