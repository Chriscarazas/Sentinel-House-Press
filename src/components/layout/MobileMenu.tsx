import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, ctaLabel, ctaHref } from "@/lib/nav";
import { EASE_EDITORIAL } from "@/lib/motion";

export function MobileMenu({ open }: { open: boolean }) {
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-index"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
          className="fixed inset-0 top-[57px] z-40 flex flex-col justify-between bg-paper px-6 pb-10 pt-8 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, ease: EASE_EDITORIAL }}
                className="border-b border-press-black/10"
              >
                <Link
                  to={item.href}
                  className="flex items-baseline gap-4 py-4 font-serif text-3xl text-press-black"
                >
                  <span className="font-mono text-sm text-oxblood">{item.number}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <Link
            to={ctaHref}
            className="mt-8 block border border-press-black bg-press-black px-6 py-4 text-center font-sans font-medium text-paper"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
