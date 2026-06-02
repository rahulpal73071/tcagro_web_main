"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/lib/data";

// Free royalty-free agricultural videos from Mixkit (assets.mixkit.co)
// No attribution required — Mixkit License
const VIDEOS = [
  "https://assets.mixkit.co/videos/7838/7838-720.mp4",   // Wheat field growing in summer
  "https://assets.mixkit.co/videos/35854/35854-720.mp4", // Flying over irrigated crop fields
  "https://assets.mixkit.co/videos/45782/45782-720.mp4", // Harvester in golden wheat field
];

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set slow-motion playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  // Cycle through videos every 12 s for a cinematic multi-scene effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let idx = 0;

    const advance = () => {
      idx = (idx + 1) % VIDEOS.length;
      video.src = VIDEOS[idx];
      video.playbackRate = 0.6;
      video.play().catch(() => {});
    };

    video.addEventListener("ended", advance);
    return () => video.removeEventListener("ended", advance);
  }, []);

  // Counter animation
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.querySelectorAll<HTMLSpanElement>("[data-target]").forEach((span) => {
          const target = Number(span.dataset.target);
          const suffix = span.dataset.suffix ?? "";
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            span.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.42) saturate(1.2)" }}
      >
        {/* Primary: wheat field swaying in summer sun */}
        <source src={VIDEOS[0]} type="video/mp4" />
      </video>

      {/* ── LAYERED OVERLAYS ── */}
      {/* Bottom vignette — keeps text ultra-legible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(6,22,10,0.95) 0%, rgba(6,22,10,0.50) 38%, rgba(6,22,10,0.18) 100%)",
        }}
      />
      {/* Left frame gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,22,10,0.72) 0%, transparent 65%)",
        }}
      />
      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Green accent glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          background:
            "radial-gradient(circle at center, rgba(82,183,136,0.14) 0%, transparent 68%)",
        }}
      />

      {/* ── CONTENT ── */}
      <div
        className="section-wrap relative z-10 w-full"
        style={{ paddingTop: "110px", paddingBottom: "80px" }}
      >
        <div className="inner">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-8 border"
            style={{
              background: "rgba(255,255,255,0.10)",
              borderColor: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
              animation: "fadeUp 0.8s ease both",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: "var(--green-400)",
                animation: "pulseRing 2.4s ease infinite",
              }}
            />
            <span
              className="text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              Integrated Agriculture Solutions
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white leading-[1.08] mb-5"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              maxWidth: 780,
              animation: "fadeUp 0.8s 0.1s ease both",
              opacity: 0,
              animationFillMode: "forwards",
              textShadow: "0 2px 28px rgba(0,0,0,0.55)",
            }}
          >
            Growing Agriculture Through{" "}
            <em style={{ color: "var(--green-300)", fontStyle: "italic" }}>
              Innovation
            </em>{" "}
            and Sustainability
          </h1>

          {/* Sub-headline */}
          <p
            className="leading-relaxed mb-10 font-light"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
              color: "rgba(255,255,255,0.76)",
              maxWidth: 520,
              animation: "fadeUp 0.8s 0.22s ease both",
              opacity: 0,
              animationFillMode: "forwards",
              textShadow: "0 1px 14px rgba(0,0,0,0.45)",
            }}
          >
            Tiera-Cielo Agro delivers end-to-end agricultural solutions from
            soil to market, empowering farmers and transforming Indian
            agriculture.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-3.5 mb-14"
            style={{
              animation: "fadeUp 0.8s 0.34s ease both",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "white",
                color: "var(--green-800)",
                padding: "13px 28px",
                fontSize: "0.88rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              Explore Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full font-semibold no-underline transition-all duration-300 hover:bg-white/10 border-2"
              style={{
                color: "white",
                borderColor: "rgba(255,255,255,0.5)",
                padding: "11px 28px",
                fontSize: "0.88rem",
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.07)",
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          {/* <div
            ref={statsRef}
            className="grid rounded-2xl overflow-hidden"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.13)",
              maxWidth: 680,
              animation: "fadeUp 0.8s 0.46s ease both",
              opacity: 0,
              animationFillMode: "forwards",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
            }}
          >
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="px-5 py-5 text-center"
                style={{
                  borderRight:
                    i < HERO_STATS.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <div
                  className="font-display font-bold text-white leading-none mb-1"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  <span data-target={stat.value} data-suffix={stat.suffix}>
                    0{stat.suffix}
                  </span>
                </div>
                <div
                  className="text-xs font-semibold tracking-wide uppercase"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        <div
          className="w-px h-10 rounded"
          style={{
            background:
              "linear-gradient(to bottom,rgba(255,255,255,0.5),transparent)",
            animation: "scrollLine 2s ease infinite",
          }}
        />
        <ChevronDown size={14} />
      </div>
    </section>
  );
}