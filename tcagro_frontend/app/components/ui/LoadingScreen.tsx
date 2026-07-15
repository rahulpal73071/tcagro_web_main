"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("tcagro-loaded")) {
      setMounted(false);
      return;
    }

    let raf: number;
    let start: number | null = null;
    const duration = 2200;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / duration, 1), 3);
      const pct = Math.round(eased * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHidden(true);
          sessionStorage.setItem("tcagro-loaded", "true");
          setTimeout(() => setMounted(false), 700);
        }, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`tc-loader ${hidden ? "tc-loader--hidden" : ""}`} aria-hidden={hidden}>
      <div className="tc-loader__glow" />

      {/* Drifting leaf particles */}
      <div className="tc-loader__particles">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={`tc-loader__particle tc-loader__particle--${i}`} />
        ))}
      </div>

      <svg viewBox="0 0 200 220" className="tc-loader__svg">
        <defs>
          <radialGradient id="tc-sun-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe28a" />
            <stop offset="100%" stopColor="#f2b705" />
          </radialGradient>
          <linearGradient id="tc-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6fbf5f" />
            <stop offset="100%" stopColor="#357a34" />
          </linearGradient>
          <linearGradient id="tc-ground-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c99a63" />
            <stop offset="100%" stopColor="#9c7247" />
          </linearGradient>
        </defs>

        <g transform="translate(148,46)">
          <g className="tc-loader__rays">
            {Array.from({ length: 10 }).map((_, i) => (
              <rect
                key={i}
                x="-1.2"
                y="-34"
                width="2.4"
                height="9"
                rx="1.2"
                transform={`rotate(${i * 36})`}
                className="tc-loader__ray"
                style={{ animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </g>
          <circle r="16" fill="url(#tc-sun-grad)" className="tc-loader__sun-core" />
        </g>

        <path d="M0 178 Q100 158 200 178 L200 220 L0 220 Z" fill="url(#tc-ground-grad)" />
        <ellipse cx="100" cy="179" rx="46" ry="5" className="tc-loader__ground-shadow" />

        <g transform="translate(100,178)">
          <path d="M0 0 C 0 -22, 0 -44, 0 -62" className="tc-loader__stem" />

          <path
            d="M0 -32 C -20 -37, -31 -54, -24 -67 C -9 -62, 0 -47, 0 -32 Z"
            fill="url(#tc-leaf-grad)"
            className="tc-loader__leaf tc-loader__leaf--left"
          />
          <path
            d="M0 -46 C 20 -51, 31 -68, 24 -81 C 9 -76, 0 -61, 0 -46 Z"
            fill="url(#tc-leaf-grad)"
            className="tc-loader__leaf tc-loader__leaf--right"
          />
          <path
            d="M0 -58 C -13 -61, -20 -73, -15 -83 C -5 -80, 0 -69, 0 -58 Z"
            fill="url(#tc-leaf-grad)"
            className="tc-loader__leaf tc-loader__leaf--top"
          />
        </g>
      </svg>

      <div className="tc-loader__brand">
        <span className="tc-loader__brand-main">Tiera and Cielo Agro Private Limited</span>
        <span className="tc-loader__brand-sub">Rooted in nature, growing with purpose</span>
      </div>

      <div className="tc-loader__progress">
        <div className="tc-loader__progress-track">
          <div className="tc-loader__progress-fill" style={{ width: `${progress}%` }}>
            <span className="tc-loader__progress-shimmer" />
          </div>
        </div>
        <span className="tc-loader__progress-label">{progress}%</span>
      </div>
    </div>
  );
}