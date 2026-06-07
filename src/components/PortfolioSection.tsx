import { motion } from "framer-motion";

const techStack = ["React", "Node.js", "Express", "Docker", "Google Drive API"];

function CaseStudyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:flex-row"
    >
      <div className="relative w-full overflow-hidden lg:w-1/2">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="flex h-full min-h-[260px] items-center justify-center p-8"
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gray-50">
            <img
              src="/mockup1.png"
              alt="Mockup del sistema ERP"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-8 lg:w-1/2">
        <span className="mb-3 inline-block w-fit rounded-full bg-red-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-red-accent">
          Desarrollo Full-Stack & Local-First
        </span>

        <h3 className="mb-1 text-2xl font-bold text-navy-900">
          Sistema ERP de Gestión Institucional
        </h3>
        <p className="mb-5 text-sm font-medium italic text-navy-500">
          Institución Religiosa en Honduras
        </p>

        <div className="mb-4 space-y-3">
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-accent">
              El Reto
            </h4>
            <p className="text-sm leading-relaxed text-navy-700">
              Modernizar la gestión de registros, contabilidad y control de
              citas, garantizando privacidad absoluta de los datos y
              disponibilidad rapida incluso en entornos con conectividad limitada. El sistema debía ser intuitivo para usuarios no técnicos y adaptable a futuras
              necesidades.
            </p>
          </div>
          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-accent">
              La Solución
            </h4>
            <p className="text-sm leading-relaxed text-navy-700">
              Desarrollo de una plataforma a medida estructurada en
              microservicios. Se implementó una arquitectura local en
              contenedores para asegurar estabilidad, con un módulo avanzado de
              copias de seguridad automatizadas directamente a la nube.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-navy-600 transition-colors group-hover:border-red-accent/30 group-hover:text-red-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-accent transition-colors hover:text-red-hover"
          >
            Quiero un proyecto similar
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="casos-de-exito"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-navy-900 sm:text-4xl">
            Casos de <span className="doodle-underline">éxito</span>
          </h2>
          <p className="text-base text-navy-600 sm:text-lg">
            Conoce cómo ayudamos a nuestros clientes a transformar su visión en
            realidad.
          </p>
        </motion.div>

        <CaseStudyCard />
      </div>
    </section>
  );
}
