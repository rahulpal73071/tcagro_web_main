import Header           from "./components/layout/Header";
import Footer           from "./components/layout/Footer";
import Hero             from "./components/sections/Hero";
import VenturesPartners from "./components/sections/VenturesPartners";
import Consultation     from "./components/sections/Consultation";
import WhyUs            from "./components/sections/WhyUs";
import Gallery          from "./components/sections/Gallery";
import Testimonials     from "./components/sections/Testimonials";
import Contact          from "./components/sections/Contact";
import ScrollRevealInit from "./components/ui/ScrollRevealInit";

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <Hero />
        <VenturesPartners />
        <Consultation />
        <WhyUs />
        {/* <Gallery /> */}
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}