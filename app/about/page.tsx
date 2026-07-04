import Header           from "../components/layout/Header";
import Footer           from "../components/layout/Footer";
import About            from "../components/sections/About";
import ScrollRevealInit from "../components/ui/ScrollRevealInit";

export const metadata = {
  title: "About Us | Tiera and Cielo Agro",
  description: "Learn about Tiera and Cielo Agro's mission, team, and organic farming philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}