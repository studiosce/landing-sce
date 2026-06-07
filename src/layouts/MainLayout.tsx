import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { QueHacemos } from "../components/QueHacemos";
import { ValuePropositionSection } from "../components/ValuePropositionSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <QueHacemos />
        <ValuePropositionSection />
        <PortfolioSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
