"use client";

// Thin client wrapper that calls the scroll-reveal hook.
// Placed in the root layout so it runs once for the whole page.

import useScrollReveal from "./useScrollReveal";

export default function ScrollRevealInit() {
  useScrollReveal();
  return null; // renders nothing — just runs the hook
}
