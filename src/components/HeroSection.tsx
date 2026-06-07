import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-cream to-white pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 sm:mb-14"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-accent/5 via-blue-accent/5 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-black/5">
            <img
              src="/banner.jpeg"
              alt="Banner ilustrativo"
              className="w-full rounded-2xl"
            />
          </div>
        </motion.div>

        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mb-4 inline-block rounded-full bg-red-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-red-accent">
              Soluciones Digitales
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Transformamos tus ideas en{" "}
              <span className="text-red-accent">experiencias digitales</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg">
              Diseñamos y desarrollamos productos digitales que impulsan tu
              negocio. Desde landing pages hasta plataformas complejas, hacemos
              realidad tu visión con tecnología de punta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" onClick={() => scrollTo("#contacto")}>
              Solicitar cotización
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("#servicios")}>
              Ver servicios
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
