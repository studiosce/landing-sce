import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const services = [
  {
    title: "Desarrollo Web",
    desc: "Creación de sitios web profesionales, landing pages y plataformas digitales adaptadas a tu negocio.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5" />
      </svg>
    ),
  },
  {
    title: "Hosting Rápido y Seguro",
    desc: "Alojamiento web optimizado con alto rendimiento, certificados SSL y soporte técnico permanente.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "Registro de Dominios",
    desc: "Gestión y registro de dominios web con las mejores extensiones y precios competitivos.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Consultoría Digital",
    desc: "Asesoría estratégica para optimizar tu presencia online, elegir tecnologías y acelerar tu crecimiento digital.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

const steps = [
  { num: 1, text: "Cuéntanos tu idea" },
  { num: 2, text: "Analizamos tus necesidades" },
  { num: 3, text: "Recibes una propuesta" },
  { num: 4, text: "Desarrollamos la solución" },
];

export function QueHacemos() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-navy-900 sm:text-4xl">
            Qué <span className="doodle-underline">hacemos</span>
          </h2>
          <p className="text-base text-navy-600 sm:text-lg">
            Todo lo que tu negocio necesita para brillar en el mundo digital.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((s, i) => (
                <Card key={s.title} index={i}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-accent/10 text-red-accent transition-colors group-hover:bg-red-accent group-hover:text-white">
                    {s.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-600">
                    {s.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-red-accent/5 to-transparent opacity-50" />

              <div className="relative">
                <h3 className="mb-6 text-center text-lg font-bold tracking-wide text-red-accent uppercase">
                  ¿Cómo trabajamos?
                </h3>

                <div className="h-px bg-gradient-to-r from-transparent via-red-accent/30 to-transparent" />

                <div className="mt-6 flex flex-col gap-3">
                  {steps.slice(0, 2).map((s, i) => (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-red-accent/30 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-accent/10 text-sm font-bold text-red-accent transition-colors group-hover:bg-red-accent group-hover:text-white">
                        {s.num}
                      </span>
                      <span className="text-sm font-semibold text-navy-800">
                        {s.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-red-accent/30 to-transparent" />

                <div className="flex flex-col gap-3">
                  {steps.slice(2, 4).map((s, i) => (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12 }}
                      className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-red-accent/30 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-accent/10 text-sm font-bold text-red-accent transition-colors group-hover:bg-red-accent group-hover:text-white">
                        {s.num}
                      </span>
                      <span className="text-sm font-semibold text-navy-800">
                        {s.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
