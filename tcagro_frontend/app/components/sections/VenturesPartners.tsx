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
  const isVenture = item.category === "venture";
  const isExternal = item.exploreUrl.startsWith("http");
  const accent = isVenture ? "var(--green-800)" : "var(--earth-700)";
  const tagBg = isVenture ? "rgba(45,106,79,0.12)" : "rgba(92,61,46,0.10)";
  const tagColor = isVenture ? "var(--green-600)" : "var(--earth-700)";

  // Extracted styles and icon to keep the JSX clean and prevent syntax errors
  const linkStyles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.78rem",
    fontWeight: 700,
    color: accent,
    textDecoration: "none",
  };

  const iconSvg = (
    <svg
      width="12"
      height="12"
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
  );

  return (
    <article
      className="vp-card"
      style={{
        background: "white",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        border: "1px solid var(--beige-300)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.35s, box-shadow 0.35s",
      }}
    >
      <div
        style={{
          height: "120px",
          background: "var(--beige-200)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "12px",
            background: "white",
            boxShadow: "0 4px 20px rgba(26,61,43,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "8px",
          }}
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <span
              style={{
                fontSize: "0.5rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#bbb",
              }}
            >
              No Logo
            </span>
          )}
        </div>

        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 9px",
            borderRadius: "50px",
            background: tagBg,
            color: tagColor,
          }}
        >
          {item.type}
        </span>
      </div>

      <div
        style={{
          padding: "16px 16px 14px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          className="font-display"
          style={{
            fontSize: "1.05rem",
            color: "var(--green-800)",
            marginBottom: "6px",
            lineHeight: 1.2,
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            fontSize: "0.78rem",
            lineHeight: 1.55,
            color: "#5a5a5a",
            marginBottom: "12px",
            flex: 1,
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "12px",
            paddingBottom: "12px",
            borderBottom: "1px solid var(--beige-300)",
          }}
        >
          {item.details.map((d) => (
            <span
              key={d}
              style={{
                fontSize: "0.66rem",
                fontWeight: 600,
                padding: "3px 9px",
                borderRadius: "50px",
                background: "var(--beige-200)",
                color: "#5a5a5a",
              }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Fixed Syntax: Properly wrapping with either <a> or <Link> */}
        {isExternal ? (
          <a
            href={item.exploreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
          >
            Visit Website
            {iconSvg}
          </a>
        ) : (
          <Link href={item.exploreUrl} style={linkStyles}>
            Explore
            {iconSvg}
          </Link>
        )}
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
      style={{
        background: "var(--beige-200)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="inner">
        <div className="reveal" style={{ maxWidth: 600, marginBottom: "52px" }}>
          <SectionLabel text="Our Network" />
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,2.9rem)",
              color: "var(--green-800)",
              lineHeight: 1.15,
              marginBottom: "14px",
            }}
          >
            Ventures &amp; Partners
          </h2>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5a5a5a" }}>
            Tiera and Cielo Agro operates through focused ventures and works
            alongside trusted partners to deliver complete seed to sell
            agricultural solutions.
          </p>
        </div>

        <div className="vp-grid reveal">
          {all.map((item) => (
            <VPCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      <style>{`
        .vp-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        @media (max-width: 900px) { .vp-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .vp-grid { grid-template-columns: 1fr; } }
        .vp-card:hover { transform: translateY(-4px) !important; box-shadow: var(--shadow-md) !important; }
      `}</style>
    </section>
  );
}