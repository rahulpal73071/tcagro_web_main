// ─────────────────────────────────────────────
//  Home page — assembles all sections in order.
//  To add/remove/reorder sections, just change
//  the component list below.
// ─────────────────────────────────────────────

import Header       from "./components/layout/Header";
import Footer       from "./components/layout/Footer";
import Hero         from "./components/sections/Hero";
import About        from "./components/sections/About";
import Farms        from "./components/sections/Farms";
import Nursery      from "./components/sections/Nursery";
import Services     from "./components/sections/Services";
import Consultation from "./components/sections/Consultation";
import WhyUs        from "./components/sections/WhyUs";
import Gallery      from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import Contact      from "./components/sections/Contact";
import ScrollRevealInit from "./components/ui/ScrollRevealInit";

export default function HomePage() {
  return (
    <>
      {/* Scroll-animation initialiser (client-only, renders nothing) */}
      <ScrollRevealInit />

      <Header />

      <main>
        <Hero />
        <About />
        <Farms />
        <Nursery />
        <Services />
        <Consultation />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
