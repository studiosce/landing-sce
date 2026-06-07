import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const PHONE = import.meta.env.VITE_CONTACT_PHONE as string;
const EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string;

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Tu Negocio", href: "#tu-negocio" },
  { label: "Casos de éxito", href: "#casos-de-exito" },
  { label: "Contáctanos", href: "#contacto" },
];

function openGmail() {
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" onClick={() => scrollTo("#hero")}>
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link, idx) => (
            <li key={link.href} className="flex items-center">
              {idx > 0 && (
                <span className="mx-5 h-4 w-px bg-red-accent/50" />
              )}
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-sm font-medium text-navy-800 transition-colors hover:text-red-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE}`}
            className="rounded-xl border border-gray-200 p-2.5 text-navy-600 transition-colors hover:border-red-accent hover:text-red-accent"
            title="Llamar"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <button
            onClick={openGmail}
            className="rounded-xl border border-gray-200 p-2.5 text-navy-600 transition-colors hover:border-red-accent hover:text-red-accent"
            title="Correo"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menú"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy-800 transition-all duration-300",
              mobileOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy-800 transition-all duration-300",
              mobileOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-navy-800 transition-all duration-300",
              mobileOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <ul className="flex flex-col px-4 pb-6 pt-4">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-navy-800 transition-colors hover:text-red-accent"
                  >
                    {link.label}
                  </a>
                  {idx < navLinks.length - 1 && (
                    <div className="ml-4 h-px bg-red-accent/10" />
                  )}
                </li>
              ))}
              <li className="mt-3 flex gap-3 px-4">
                <a
                  href={`tel:${PHONE}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:border-red-accent hover:text-red-accent"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Llamar
                </a>
                <button
                  onClick={openGmail}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-navy-700 transition-colors hover:border-red-accent hover:text-red-accent"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Correo
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
