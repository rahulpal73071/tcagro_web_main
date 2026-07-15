"use client";

import SectionLabel from "../ui/SectionLabel";
import { FARMS } from "@/lib/data";

export default function Farms() {
  return (
    <section
      id="farms"
      className="section-wrap"
      style={{
        background: "var(--cream)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="inner">
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <div>
            <SectionLabel text="Our Operations" />
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                color: "var(--green-800)",
                lineHeight: 1.15,
              }}
            >
              Farm Infrastructure &amp; Operations
            </h2>
          </div>

          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "#5a5a5a",
              maxWidth: 360,
            }}
          >
            Our farming facilities are built for maximum productivity across
            open-field cultivation, protected structures, nurseries, and
            sustainable farming systems.
          </p>
        </div>

        {/* Farm Cards */}
        <div className="grid-3 reveal">
          {FARMS.map((farm) => (
            <article
              key={farm.title}
              className="card"
              style={{
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "220px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={farm.img}
                  alt={farm.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <span
                  className="tag-pill"
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    zIndex: 2,
                  }}
                >
                  {farm.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--green-800)",
                    marginBottom: "8px",
                  }}
                >
                  {farm.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    lineHeight: 1.65,
                    color: "#5a5a5a",
                    marginBottom: "16px",
                  }}
                >
                  {farm.desc}
                </p>

                <a
                  href="#contact"
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--green-600)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Slider */}
        <div
          className="reveal"
          style={{
            marginTop: "56px",
          }}
        >
          <h3
            className="font-display"
            style={{
              fontSize: "1.5rem",
              color: "var(--green-800)",
              marginBottom: "18px",
            }}
          >
            Farm Photo Gallery
          </h3>

          <div
            style={{
              display: "flex",
              gap: "14px",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "12px",
            }}
          >
            {FARMS.map((farm) => (
              <div
                key={farm.title}
                style={{
                  flexShrink: 0,
                  width: "280px",
                  height: "190px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  scrollSnapAlign: "start",
                }}
              >
                <img
                  src={farm.img}
                  alt={farm.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.55), transparent)",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    left: "14px",
                    bottom: "12px",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {farm.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}