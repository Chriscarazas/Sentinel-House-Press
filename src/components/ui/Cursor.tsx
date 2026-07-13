import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const HOVER_SELECTOR = "a, button, input, select, textarea, [data-cursor]";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  const initialized = useRef(false);

  useEffect(() => {
    if (reduceMotion) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!initialized.current) {
        springX.jump(e.clientX);
        springY.jump(e.clientY);
        initialized.current = true;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest?.(HOVER_SELECTOR));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, x, y, springX, springY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-oxblood mix-blend-multiply"
      style={{ x: springX, y: springY }}
      animate={{
        width: hovering ? 48 : 16,
        height: hovering ? 48 : 16,
        marginLeft: hovering ? -24 : -8,
        marginTop: hovering ? -24 : -8,
        opacity: hovering ? 0.7 : 0.4,
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
