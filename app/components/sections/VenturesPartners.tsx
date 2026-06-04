"use client";
import SectionLabel from "../ui/SectionLabel";
import { VENTURES, PARTNERS } from "@/lib/data";
import Link from "next/link";
type Item = {
  name: string;
  type: string;
  logo: string;
  desc: string;
  details: string[];
  exploreUrl: string;
  category: "venture" | "partner";
};

function VPCard({ item }: { item: Item }) {
  const isVenture  = item.category === "venture";
  const isExternal = item.exploreUrl.startsWith("http");
  const accent     = isVenture ? "var(--green-800)" : "var(--earth-700)";
  const tagBg      = isVenture ? "rgba(45,106,79,0.12)" : "rgba(92,61,46,0.10)";
  const tagColor   = isVenture ? "var(--green-600)" : "var(--earth-700)";

  return (
    <article
      className="vp-card"
      style={{
        background: "white", borderRadius: "18px", overflow: "hidden",
        boxShadow: "var(--shadow-sm)", border: "1px solid var(--beige-300)",
        display: "flex", flexDirection: "column",
        transition: "transform 0.35s, box-shadow 0.35s",
      }}
    >
      <div style={{ height: "180px", background: "var(--beige-200)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px", position: "relative" }}>
        <div style={{ width: 100, height: 100, borderRadius: "18px", background: "white", boxShadow: "0 4px 20px rgba(26,61,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "7px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.65">
            {isVenture
              ? <path d="M12 22V12m0 0C12 6 6 2 6 2s0 4 6 10zm0 0c0-6 6-10 6-10s0 4-6 10z" />
              : <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            }
          </svg>
          <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#bbb" }}>Logo</span>
        </div>
        <span style={{ position: "absolute", top: "14px", left: "14px", fontSize: "0.67rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "50px", background: tagBg, color: tagColor }}>
          {item.type}
        </span>
      </div>

      <div style={{ padding: "24px 24px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="font-display" style={{ fontSize: "1.35rem", color: "var(--green-800)", marginBottom: "10px", lineHeight: 1.2 }}>
          {item.name}
        </h3>
        <p style={{ fontSize: "0.84rem", lineHeight: 1.65, color: "#5a5a5a", marginBottom: "18px", flex: 1 }}>
          {item.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid var(--beige-300)" }}>
          {item.details.map((d) => (
            <span key={d} style={{ fontSize: "0.72rem", fontWeight: 600, padding: "5px 12px", borderRadius: "50px", background: "var(--beige-200)", color: "#5a5a5a" }}>
              {d}
            </span>
          ))}
                </div>

                

        <a
          href={item.exploreUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            fontSize: "0.84rem",
            fontWeight: 700,
            color: accent,
            textDecoration: "none",
          }}
        >
          {isExternal ? "Visit Website" : "Explore"}

          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            {isExternal ? (
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            ) : (
              <path d="M5 12h14M12 5l7 7-7 7" />
            )}
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function VenturesPartners() {
  const all: Item[] = [
    ...VENTURES.map((v) => ({ ...v, category: "venture" as const })),
    ...PARTNERS.map((p) => ({ ...p, category: "partner" as const })),
  ];

  return (
    <section
      id="ventures-partners"
      className="section-wrap"
      style={{ background: "var(--beige-200)", paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div className="inner">
        <div className="reveal" style={{ maxWidth: 600, marginBottom: "52px" }}>
          <SectionLabel text="Our Network" />
          <h2 className="font-display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.9rem)", color: "var(--green-800)", lineHeight: 1.15, marginBottom: "14px" }}>
            Ventures &amp; Partners
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a" }}>
            Tiera & Cielo Agro operates through focused ventures and works alongside trusted partners to deliver complete seed to sell agricultural solutions.
          </p>
        </div>

        <div className="vp-grid reveal">
          {all.map((item) => (
            <VPCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        .vp-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        @media (max-width: 640px) { .vp-grid { grid-template-columns: 1fr; } }
        .vp-card:hover { transform: translateY(-6px) !important; box-shadow: var(--shadow-md) !important; }
      `}</style>
    </section>
  );
}