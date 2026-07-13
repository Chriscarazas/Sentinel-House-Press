import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE_EDITORIAL } from "@/lib/motion";
import { InkStamp } from "@/components/ui/InkStamp";
import { Magnetic } from "@/components/ui/Magnetic";
import { Marquee } from "@/components/ui/Marquee";

const capabilities = ["Editing", "Design", "Formatting", "Metadata", "Distribution", "Launch"];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-8 sm:pt-40 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--color-paper)_0%,var(--color-paper-dim)_100%)]"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 w-40 sm:w-56 lg:w-64"
        initial={reduceMotion ? undefined : { opacity: 0, rotate: -18, scale: 0.85 }}
        animate={{ opacity: 1, rotate: -8, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.7, ease: EASE_EDITORIAL }}
      >
        <InkStamp />
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-pencil">
          Draft 01 &middot; Plymouth, MA
        </p>

        <h1 className="mt-6 font-serif leading-[0.95] text-press-black">
          <motion.span
            className="block text-hero"
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
          >
            You wrote the manuscript.
            {!reduceMotion && (
              <span
                className="cursor-blink ml-1 inline-block h-[0.7em] w-[3px] translate-y-[0.1em] bg-oxblood align-middle"
                aria-hidden
              />
            )}
          </motion.span>
          <motion.span
            className="-ml-1 block max-w-4xl text-mega text-oxblood"
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: EASE_EDITORIAL }}
          >
            Now comes the part nobody explains.
          </motion.span>
        </h1>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6, ease: EASE_EDITORIAL }}
          className="mt-10 border-t border-press-black/15 pt-8"
        >
          <Marquee
            items={capabilities}
            className="font-mono text-xs uppercase tracking-[0.2em] text-proof-blue"
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-xl">
              <p className="text-lg leading-relaxed text-press-black/80">
                Independent publishing gives authors control. It also gives
                them every problem at once.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-press-black/80">
                Sentinel House Press turns promising manuscripts into
                professionally edited, beautifully designed, market-ready
                books. Without surrendering your rights. Your royalties.
                Your publishing accounts. Or your voice.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-block border border-press-black bg-press-black px-8 py-4 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
                >
                  Build the book
                </Link>
              </Magnetic>
              <a
                href="#process"
                className="font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 transition-colors hover:text-oxblood hover:decoration-oxblood"
              >
                Explore the process
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
