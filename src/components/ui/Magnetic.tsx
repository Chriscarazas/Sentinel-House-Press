import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", "0px");
    ref.current.style.setProperty("--my", "0px");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: "translate(var(--mx, 0px), var(--my, 0px))",
        transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </motion.div>
  );
}
