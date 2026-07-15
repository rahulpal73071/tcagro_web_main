"use client";

import SectionLabel from "../ui/SectionLabel";
import { WHY_US } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why-us" className="section-wrap relative overflow-hidden"
      style={{ background: "linear-gradient(150deg,var(--green-900) 0%,#0a1c11 100%)", paddingTop: "96px", paddingBottom: "96px" }}>
      {/* glow */}
      <div className="absolute top-0 right-0 pointer-events-none" style={{
        width: "min(500px,70vw)", height: "min(500px,70vw)",
        background: "radial-gradient(circle,rgba(82,183,136,0.09) 0%,transparent 70%)",
      }} />
      <div className="inner" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="text-center reveal" style={{ maxWidth: 560, margin: "0 auto 52px" }}>
          <SectionLabel text="Our Advantage" light center />
          <h2 className="font-display text-white" style={{ fontSize: "clamp(1.9rem,3.5vw,2.9rem)", lineHeight: 1.15, marginBottom: "14px" }}>
            Why Farmers Choose Us
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
            We earn trust the old-fashioned way — by showing up, doing the work, and delivering real results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3 reveal">
          {WHY_US.map((item) => (
            <div key={item.num} className="why-card"
              style={{
                padding: "clamp(20px,3vw,28px)", borderRadius: "16px",
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)",
                transition: "background 0.35s, transform 0.35s", cursor: "default",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.transform = ""; }}>
              <div className="font-display font-bold" style={{ fontSize: "clamp(2.5rem,4vw,3.5rem)", color: "rgba(82,183,136,0.18)", lineHeight: 1, marginBottom: "14px" }}>
                {item.num}
              </div>
              <h3 className="font-display text-white" style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.58)" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="reveal" style={{
          marginTop: "52px", borderRadius: "16px", padding: "clamp(20px,3vw,28px)",
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
          display: "grid", gap: "20px",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px" }}>
            {[
              { value: "500+", label: "Farmers Advised" },
              { value: "50+",  label: "Farms Managed" },
              { value: "1M+",  label: "Seedlings Produced" },
              { value: "10+",  label: "Years in the Field" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div className="font-display font-bold text-white" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", lineHeight: 1, marginBottom: "4px" }}>{stat.value}</div>
                <div style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
