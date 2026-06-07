import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface Niche {
  label: string;
  icon: ReactNode;
}

interface Benefit {
  title: string;
  desc: string;
  icon: ReactNode;
}

const niches: Niche[] = [
  {
    label: "Clínicas",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-3.75a.75.75 0 00-.75.75V12a.75.75 0 00.75.75m0-3.75a.75.75 0 01.75.75V12a.75.75 0 01-.75.75m-6 5.25l-1.5 1.5M18 18l1.5 1.5M12 21v-1.5" />
      </svg>
    ),
  },
  {
    label: "Barberías",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm0 0l3.804 2.197m0 0l3.804-2.197m-3.804 2.197l-4.056 7.839m4.056-7.839l4.056 7.839M5.472 18l-1.248-1.5M16.152 8.25l-1.536.887m1.536-.887a3 3 0 115.196-3 3 3 0 01-5.196 3zm0 0l-3.804 2.197m0 0l-4.056-7.839m4.056 7.839l4.056 7.839M18 18l1.248-1.5" />
      </svg>
    ),
  },
  {
    label: "Salones de Belleza",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    label: "Pequeños Negocios",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M5.106 11.98C3.388 12.36 2.25 13.772 2.25 15.75v.75c0 .414.336.75.75.75h.75m13.5-6.901V9.35m0 0c0-.92.632-1.692 1.498-1.918a2.29 2.29 0 00.23-.416c.136-.294.328-.563.562-.775l.374-.33a.75.75 0 011.036.087 2.257 2.257 0 01.502 1.23c.09.592.09 1.192 0 1.784a2.257 2.257 0 01-.502 1.23.75.75 0 01-1.036.088l-.375-.33a2.54 2.54 0 01-.56-.776 2.29 2.29 0 00-.23-.415 2.29 2.29 0 00-1.5-.919z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h.75a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75z" />
      </svg>
    ),
  },
];

const benefits: Benefit[] = [
  {
    title: "Soluciones Personalizadas",
    desc: "Cada proyecto se diseña desde cero según las necesidades específicas de tu negocio y tus clientes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0a3 3 0 100 6m0-6a3 3 0 110 6m-6 3a3 3 0 100 6m0-6a3 3 0 110 6m6 3v-3m0 0a3 3 0 10-6 0m6 0a3 3 0 106 0" />
      </svg>
    ),
  },
  {
    title: "Tecnología Moderna",
    desc: "Usamos herramientas actuales para garantizar rendimiento, seguridad y escalabilidad desde el día uno.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Soporte Cercano",
    desc: "Acompañamiento permanente con comunicación directa y tiempos de respuesta rápidos.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Precios Adaptados",
    desc: "Planes flexibles que se ajustan al presupuesto de cada negocio sin sacrificar calidad.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ValuePropositionSection() {
  return (
    <section id="tu-negocio" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
            Tu <span className="doodle-underline">Negocio</span>
          </h2>
          <p className="mt-4 text-base text-navy-600 sm:text-lg">
            Soluciones a la medida del sector que atiendes.
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full pr-0 lg:w-[40%] lg:pr-12"
          >
            <h3 className="mb-6 text-lg font-semibold text-navy-800">
              Ideal para
            </h3>
            <div className="flex flex-col gap-4">
              {niches.map((n) => (
                <div
                  key={n.label}
                  className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-red-accent/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-accent/10 text-red-accent transition-colors group-hover:bg-red-accent group-hover:text-white">
                    {n.icon}
                  </div>
                  <span className="text-sm font-semibold text-navy-800">
                    {n.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-navy-500">
              Identificamos los retos específicos de tu rubro y construimos una
              solución digital que realmente funciona para ti.
            </p>
          </motion.div>

          <div className="hidden lg:block">
            <div className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-red-accent/60 to-transparent" />
          </div>

          <div className="block border-t border-red-accent/40 lg:hidden" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="w-full pl-0 pt-6 lg:w-[60%] lg:pl-12 lg:pt-0"
          >
            <h3 className="mb-6 text-lg font-semibold text-navy-800 lg:hidden">
              Beneficios
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <motion.div
                  key={b.title}
                  variants={cardVariants}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-accent/20"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-accent/10 text-red-accent transition-colors group-hover:bg-red-accent group-hover:text-white">
                    {b.icon}
                  </div>
                  <h4 className="mb-1.5 text-base font-semibold text-navy-900">
                    {b.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-navy-600">
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
