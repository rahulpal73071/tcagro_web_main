"use client";

import { useEffect } from "react";

// Attaches an IntersectionObserver to all .reveal elements on the page.
// When an element enters the viewport, it gets the "visible" class which
// triggers the CSS fade-up animation defined in globals.css.

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Stop observing once revealed — no re-animation on scroll up
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    // Observe all elements that have the "reveal" class
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
