"use client";

import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import { GALLERY_CATS } from "@/lib/data";
import { Maximize2 } from "lucide-react";

const ITEMS = [
  { cat: "Farms",              height: 240, label: "Open Field Overview" },
  { cat: "Nursery",            height: 300, label: "Nursery Seedling Trays" },
  { cat: "Net House",          height: 200, label: "Net House Structure" },
  { cat: "Polyhouse",          height: 260, label: "Polyhouse Interior" },
  { cat: "Organic Vegetables", height: 180, label: "Organic Harvest" },
  { cat: "Training",           height: 240, label: "Farmer Training Program" },
  { cat: "Nursery",            height: 200, label: "Seedling Dispatch" },
  { cat: "Farms",              height: 280, label: "Farm Aerial View" },
  { cat: "Polyhouse",          height: 220, label: "Capsicum Crop" },
  { cat: "Organic Vegetables", height: 250, label: "Tomato Harvest" },
  { cat: "Training",           height: 200, label: "Field Demonstration" },
  { cat: "Net House",          height: 270, label: "Net House Crop" },
];

export default function Gallery() {
  const [active, setActive]       = useState("All");
  const [lightboxOpen, setLight]  = useState(false);

  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="section-wrap" style={{ background: "var(--cream)", paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="inner">

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "24px" }} className="reveal">
          <div>
            <SectionLabel text="Visual Stories" />
            <h2 className="font-display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.9rem)", color: "var(--green-800)", lineHeight: 1.15 }}>
              From Our Fields &amp; Facilities
            </h2>
          </div>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#5a5a5a", maxWidth: 340 }}>
            Placeholder — A glimpse into our farms, nursery, protected cultivation, and farmer training activities.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginBottom: "28px" }} className="reveal">
          {GALLERY_CATS.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{
                padding: "7px 18px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.25s", border: "2px solid",
                background: active === cat ? "var(--green-800)" : "white",
                color: active === cat ? "white" : "#6a6a6a",
                borderColor: active === cat ? "var(--green-800)" : "var(--beige-300)",
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div style={{ columns: "4 200px", gap: "12px" }} className="reveal">
          {filtered.map((item, i) => (
            <div key={`${item.cat}-${i}`}
              style={{ breakInside: "avoid", marginBottom: "12px", borderRadius: "12px", overflow: "hidden", position: "relative", cursor: "pointer" }}
              className="gallery-item"
              onClick={() => setLight(true)}>
              <div className="img-ph" style={{ height: `${item.height}px`, width: "100%" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
                <span>{item.label}</span>
              </div>
              <div className="gallery-overlay" style={{
                position: "absolute", inset: 0, background: "rgba(26,61,43,0.65)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0, transition: "opacity 0.3s",
              }}>
                <div style={{ width: 40, height: 40, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-800)" }}>
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.93)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
            onClick={() => setLight(false)}>
            <div style={{ position: "relative", width: "100%", maxWidth: 860 }} onClick={(e) => e.stopPropagation()}>
              <button style={{ position: "absolute", top: "-38px", right: 0, color: "white", background: "none", border: "none", cursor: "pointer", fontSize: "1rem", fontWeight: 600 }}
                onClick={() => setLight(false)}>✕ Close</button>
              <div className="img-ph" style={{ height: "460px", borderRadius: "16px" }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
                <span>Replace with actual farm photos</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
