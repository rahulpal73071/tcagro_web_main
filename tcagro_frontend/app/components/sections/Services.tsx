"use client";

import SectionLabel from "../ui/SectionLabel";
import Icon from "../ui/Icon";
import { SERVICES } from "@/lib/data";

const TAG_BG: Record<string, { bg: string; color: string }> = {
  Consulting: { bg: "rgba(45,106,79,0.1)",  color: "var(--green-600)" },
  Inputs:     { bg: "rgba(169,114,69,0.1)", color: "var(--earth-500)" },
  Testing:    { bg: "rgba(26,61,43,0.08)",  color: "var(--green-800)" },
};

export default function Services() {
  return (
    <section id="services" className="section-wrap bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">

        {/* Header */}
        <div className="text-center reveal" style={{ maxWidth: 560, margin: "0 auto 52px" }}>
          <SectionLabel text="What We Offer" center />
          <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "var(--green-800)", lineHeight: 1.15, marginBottom: "14px" }}>
            Making Farming More Productive
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a" }}>
            Whether you need guidance on the field, quality inputs, or scientific testing, we have a service designed for that.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid-3 reveal">
          {SERVICES.map((svc) => {
            const tagStyle = TAG_BG[svc.tag] ?? TAG_BG.Consulting;
            return (
              <article key={svc.title} className="svc-card"
                style={{ background: "var(--beige-200)", borderRadius: "16px", padding: "28px 24px", transition: "all 0.35s", position: "relative", overflow: "hidden", cursor: "default" }}>
                {/* Animated top bar */}
                <div className="svc-bar" style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg,var(--green-600),var(--green-400))",
                  transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s",
                }} />
                {/* Icon */}
                <div style={{ width: 50, height: 50, background: "var(--green-800)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px", color: "white" }}>
                  <Icon name={svc.icon} size={22} />
                </div>
                {/* Tag */}
                <span style={{ display: "inline-block", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "50px", marginBottom: "10px", background: tagStyle.bg, color: tagStyle.color }}>
                  {svc.tag}
                </span>
                <h3 className="font-display" style={{ fontSize: "1.2rem", color: "var(--green-800)", marginBottom: "10px" }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "#5a5a5a", marginBottom: "18px" }}>
                  {svc.desc}
                </p>
                <a href="#contact" style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--green-600)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  Get Started →
                </a>
              </article>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="reveal" style={{
          marginTop: "52px", borderRadius: "16px", padding: "clamp(20px,4vw,36px)",
          background: "var(--green-800)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px",
        }}>
          <div>
            <h3 className="font-display" style={{ fontSize: "clamp(1.2rem,3vw,1.8rem)", color: "white", marginBottom: "4px" }}>
              Not sure which service you need?
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
              Talk to our team — we&apos;ll help you figure out what your farm actually needs.
            </p>
          </div>
          <a href="#consultation"
            style={{
              flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "8px",
              background: "white", color: "var(--green-800)", borderRadius: "50px",
              padding: "13px 28px", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
            Book a Free Consultation
          </a>
        </div>
      </div>

      <style>{`
        .svc-card:hover {
          background: white !important;
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }
        .svc-card:hover .svc-bar {
          transform: scaleX(1) !important;
        }
      `}</style>
    </section>
  );
}
