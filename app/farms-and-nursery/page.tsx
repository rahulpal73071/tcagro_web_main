import Header           from "../components/layout/Header";
import Footer           from "../components/layout/Footer";
import Farms            from "../components/sections/Farms";
import Nursery          from "../components/sections/Nursery";
import ScrollRevealInit from "../components/ui/ScrollRevealInit";

export const metadata = {
  title: "Our Farms & Nursery | Tiera and Cielo Agro",
  description: "Explore Tiera and Cielo Agro's farms and nursery operations across Haryana and Maharashtra.",
};

export default function FarmsAndNurseryPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <Farms />
        <Nursery />
      </main>
      <Footer />
    </>
  );
}