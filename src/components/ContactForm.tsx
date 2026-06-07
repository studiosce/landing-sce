import { type FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/Button";

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError(false);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-navy-900 sm:text-4xl">
            <span className="doodle-underline">Contáctanos</span>
          </h2>
          <p className="text-base text-navy-600 sm:text-lg">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-navy-800"
              >
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 outline-none transition-all focus:border-red-accent focus:ring-2 focus:ring-red-accent/10"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-sm font-medium text-navy-800"
              >
                Correo electrónico
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 outline-none transition-all focus:border-red-accent focus:ring-2 focus:ring-red-accent/10"
                placeholder="juan@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-navy-800"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-gray-400 outline-none transition-all focus:border-red-accent focus:ring-2 focus:ring-red-accent/10"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          <div className="text-center">
            <Button type="submit" size="lg" disabled={sending}>
              {sending
                ? "Enviando..."
                : sent
                  ? "¡Mensaje enviado!"
                  : "Enviar mensaje"}
            </Button>
            {error && (
              <p className="mt-3 text-sm text-red-accent">
                Error al enviar. Verifica tus credenciales de EmailJS o
                inténtalo de nuevo.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
