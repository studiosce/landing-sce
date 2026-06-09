import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { QueHacemos } from "../components/QueHacemos";
import { ValuePropositionSection } from "../components/ValuePropositionSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

const DEMO_URL = import.meta.env.VITE_DEMO_URL as string;

export function MainLayout() {
  return (
    <>
      <div className="relative z-50 bg-navy-900">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-1 px-4 py-2 text-center text-sm font-medium text-white/90">
          <span className="hidden sm:inline">Nuevo —</span>
          <span>
            Prueba nuestra demo de software para negocios{" "}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-red-accent px-2.5 py-0.5 font-semibold text-white transition-colors hover:bg-red-hover"
            >
              haciendo clic aqui
            </a>
          </span>
        </div>
      </div>
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
