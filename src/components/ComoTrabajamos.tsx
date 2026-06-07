import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Descubrimiento",
    desc: "Analizamos tu negocio, objetivos y audiencia para definir la estrategia ideal.",
  },
  {
    step: 2,
    title: "Diseño",
    desc: "Creamos wireframes y prototipos interactivos que visualizan la solución antes de desarrollarla.",
  },
  {
    step: 3,
    title: "Desarrollo",
    desc: "Construimos el producto con tecnologías modernas, código limpio y buenas prácticas.",
  },
  {
    step: 4,
    title: "Entrega & Soporte",
    desc: "Desplegamos, probamos y acompañamos tu proyecto con mantenimiento continuo.",
  },
];

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-navy-900 sm:text-4xl">
            Cómo <span className="doodle-underline">trabajamos</span>
          </h2>
          <p className="text-base text-navy-600 sm:text-lg">
            Un proceso transparente y eficiente de principio a fin.
          </p>
        </motion.div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900 text-xl font-bold text-white shadow-lg">
                {s.step}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-navy-900">
                {s.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-navy-600">
                {s.desc}
              </p>

              {i < steps.length - 1 && (
                <div className="mt-4 hidden text-red-accent/40 lg:block">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
