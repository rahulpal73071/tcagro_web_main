import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero, HowItWorks, FeaturedProducts, FarmsPreview } from "./components/sections/HomeSections";
import MapContact from "./components/sections/MapContact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedProducts />
        <FarmsPreview />
        <MapContact />
      </main>
      <Footer />
    </>
  );
}
