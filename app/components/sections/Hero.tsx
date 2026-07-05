"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/lib/data";

const VIDEOS = [
  "https://assets.mixkit.co/videos/7838/7838-720.mp4",
  "https://assets.mixkit.co/videos/35854/35854-720.mp4",
  "https://assets.mixkit.co/videos/45782/45782-720.mp4",
];

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

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
      style={{ background: "var(--green-900)" }}
    >
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
        <source src={VIDEOS[0]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(6,22,10,0.95) 0%, rgba(6,22,10,0.50) 38%, rgba(6,22,10,0.18) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(6,22,10,0.72) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: "min(700px,90vw)", height: "min(700px,90vw)", background: "radial-gradient(circle at center, rgba(82,183,136,0.14) 0%, transparent 68%)" }} />

      <div className="section-wrap relative z-10 w-full" style={{ paddingTop: "110px", paddingBottom: "80px" }}>
        <div className="inner">

          <div className="inline-flex items-center gap-2.5 rounded-full border mb-8"
            style={{ padding: "7px 18px 7px 12px", background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", animation: "fadeUp 0.8s ease both" }}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--green-400)", animation: "pulseRing 2.4s ease infinite" }} />
            <span className="text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,0.88)" }}>
              Integrated Agriculture Solutions — From Seed to Sell
            </span>
          </div>
        
          <h1 className="font-display text-white"
            style={{ fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.08, maxWidth: 780, marginBottom: "clamp(16px,3vh,24px)",marginTop: "clamp(16px , 3vh,24px)" , textShadow: "0 2px 28px rgba(0,0,0,0.55)", animation: "fadeUp 0.8s 0.1s ease both", opacity: 0, animationFillMode: "forwards" }}>
            आधुनिक सोच, हरित खेती और प्रकृति के प्रति समर्पण।

          </h1>

          <p style={{ fontSize: "clamp(0.95rem,2vw,1.15rem)", color: "rgba(255,255,255,0.76)", lineHeight: 1.75, maxWidth: 520, fontWeight: 300, marginBottom: "clamp(28px,5vh,44px)", textShadow: "0 1px 14px rgba(0,0,0,0.45)", animation: "fadeUp 0.8s 0.22s ease both", opacity: 0, animationFillMode: "forwards" }}>
            Tiera and Cielo Agro delivers Seed to Sell agricultural solutions from soil
            to market, empowering farmers and transforming Indian agriculture.
          </p>

          <div className="flex flex-wrap gap-3.5" style={{ marginBottom: "clamp(40px,8vh,72px)", animation: "fadeUp 0.8s 0.34s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "white", color: "var(--green-800)", padding: "13px 28px", fontSize: "0.88rem", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}>
              Explore Services <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full font-semibold no-underline transition-all duration-300 hover:bg-white/10 border-2"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", padding: "11px 28px", fontSize: "0.88rem", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.07)" }}>
              Contact Us
            </a>
          </div>

          <div ref={statsRef}
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", maxWidth: "min(680px,100%)", borderRadius: "16px", overflow: "hidden", background: "rgba(6,22,10,0.60)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 8px 40px rgba(0,0,0,0.35)", animation: "fadeUp 0.8s 0.46s ease both", opacity: 0, animationFillMode: "forwards" }}>
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} style={{ padding: "clamp(14px,2.5vw,22px) clamp(10px,2vw,18px)", textAlign: "center", borderRight: i < HERO_STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", lineHeight: 1, marginBottom: "5px" }}>
                  <span data-target={stat.value} data-suffix={stat.suffix}>0{stat.suffix}</span>
                </div>
                <div style={{ fontSize: "clamp(0.58rem,1vw,0.68rem)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.52)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ bottom: "36px", color: "rgba(255,255,255,0.45)", zIndex: 5 }}>
        <div className="w-px h-10 rounded" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.5),transparent)", animation: "scrollLine 2s ease infinite" }} />
        <ChevronDown size={14} />
      </div>

      <style>{`
        @media (max-width: 540px) {
          #hero > div:nth-child(6) > div > div:last-child {
            grid-template-columns: repeat(2,1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}