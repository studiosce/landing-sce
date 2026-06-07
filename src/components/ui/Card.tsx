import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function Card({ children, className, index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
      className={cn(
        "group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
