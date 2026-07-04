import Header           from "../components/layout/Header";
import Footer           from "../components/layout/Footer";
import Services         from "../components/sections/Services";
import ScrollRevealInit from "../components/ui/ScrollRevealInit";

export const metadata = {
  title: "Our Services | Tiera and Cielo Agro",
  description: "Discover the services offered by Tiera and Cielo Agro.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}