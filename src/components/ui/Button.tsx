import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-red-accent text-white hover:bg-red-hover shadow-lg shadow-red-accent/25",
  outline:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  ghost: "text-navy-800 hover:text-red-accent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 cursor-pointer",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
