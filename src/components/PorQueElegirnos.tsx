import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const reasons = [
  {
    title: "Equipo Experto",
    desc: "Profesionales con años de experiencia en tecnologías modernas y metodologías ágiles.",
  },
  {
    title: "Enfoque en Resultados",
    desc: "Cada decisión de diseño y desarrollo está orientada a cumplir tus objetivos de negocio.",
  },
  {
    title: "Comunicación Constante",
    desc: "Estás involucrado en cada etapa del proceso con reportes claros y reuniones periódicas.",
  },
  {
    title: "Tecnología Moderna",
    desc: "Usamos las herramientas más actuales para garantizar rendimiento, seguridad y escalabilidad.",
  },
  {
    title: "Diseño Centrado",
    desc: "Investigamos a tus usuarios para crear experiencias intuitivas que realmente conecten.",
  },
  {
    title: "Soporte Post-Entrega",
    desc: "No te abandonamos al finalizar el proyecto. Ofrecemos mantenimiento y mejora continua.",
  },
];

export function PorQueElegirnos() {
  return (
    <section id="por-que" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-navy-900 sm:text-4xl">
            Por qué <span className="doodle-underline">elegirnos</span>
          </h2>
          <p className="text-base text-navy-600 sm:text-lg">
            Somos el socio tecnológico que tu negocio necesita.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Card key={r.title} index={i}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-accent/10 text-blue-accent">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-base font-semibold text-navy-900">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-600">{r.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
