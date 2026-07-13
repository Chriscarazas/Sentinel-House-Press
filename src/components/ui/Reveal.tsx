import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, maskWipe, slideLeft, slideRight, rise, viewportOnce } from "@/lib/motion";

const VARIANTS = {
  fade: fadeUp,
  mask: maskWipe,
  slideLeft,
  slideRight,
  rise,
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "li";
  variant?: keyof typeof VARIANTS;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "fade",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
