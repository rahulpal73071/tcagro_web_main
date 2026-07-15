"use client";

import SectionLabel from "../ui/SectionLabel";
import { NURSERY_CATS, NURSERY_STATS } from "@/lib/data";

export default function Nursery() {
  return (
    <section
      id="nursery"
      className="section-wrap"
      style={{
        background: "var(--green-900)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="inner">
        {/* Header */}
        <div
          className="reveal"
          style={{
            maxWidth: 580,
            marginBottom: "48px",
          }}
        >
          <SectionLabel text="Nursery Operations" light />

          <h2
            className="font-display text-white leading-tight"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,2.9rem)",
              marginBottom: "14px",
            }}
          >
            Premium Quality Seedlings &amp; Plants
          </h2>

          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Our nursery produces millions of healthy, disease-free seedlings and
            saplings annually for vegetable farmers, fruit growers, and
            commercial buyers.
          </p>
        </div>

        {/* Nursery Categories */}
        <div
          className="nursery-grid reveal"
          style={{
            marginBottom: "28px",
          }}
        >
          {NURSERY_CATS.map((cat) => (
            <div
              key={cat.title}
              className="nursery-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.09)",
                background: "rgba(255,255,255,0.055)",
                transition: "all 0.35s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.10)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.055)";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "180px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.67rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: "50px",
                    marginBottom: "10px",
                    background: "rgba(82,183,136,0.15)",
                    color: "var(--green-300)",
                    border: "1px solid rgba(82,183,136,0.25)",
                  }}
                >
                  {cat.tag}
                </span>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.15rem",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.8rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.58)",
                  }}
                >
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Capacity Spotlight Card */}
          
        </div>

        {/* Stats Strip */}
        <div
          className="reveal"
          style={{
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            padding: "clamp(20px,3vw,32px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: "36px",
          }}
        >
          {NURSERY_STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                minWidth: "100px",
              }}
            >
              <div
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.8rem,3vw,2.6rem)",
                  color: "var(--green-400)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>

              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "5px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              background: "white",
              color: "var(--green-800)",
              borderRadius: "50px",
              padding: "14px 32px",
              fontSize: "0.9rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--green-100)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "";
            }}
          >
            📋 Request Nursery Catalogue
          </a>
        </div>
      </div>

      <style>{`
        .nursery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .nursery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .nursery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}