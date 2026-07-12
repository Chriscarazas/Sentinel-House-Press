import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { InkStamp } from "@/components/ui/InkStamp";
import { EASE_EDITORIAL } from "@/lib/motion";
import coverSrc from "@/assets/books/now-that-im-still-here-cover.webp";
import cover480 from "@/assets/books/now-that-im-still-here-cover-480.webp";
import cover920 from "@/assets/books/now-that-im-still-here-cover-920.webp";

export function BooksInTheHouse() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-press-black/10 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Kicker number="07" label="Books in the House" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
            The proof is in the finished editions.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            whileHover={reduceMotion ? undefined : { rotate: -0.6, y: -4 }}
            transition={{ duration: 0.4, ease: EASE_EDITORIAL }}
            className="mt-14"
          >
            <Link
              to="/work/now-that-im-still-here"
              className="group grid gap-0 overflow-hidden border border-press-black/15 bg-paper shadow-[0_18px_40px_-24px_rgba(21,20,17,0.4)] md:grid-cols-[minmax(0,20rem)_1fr]"
            >
              <div className="relative flex items-center justify-center overflow-hidden bg-press-black p-6 md:aspect-auto md:p-8">
                <img
                  src={coverSrc}
                  srcSet={`${cover480} 480w, ${cover920} 920w, ${coverSrc} 922w`}
                  sizes="(min-width: 768px) 20rem, 80vw"
                  width={922}
                  height={1536}
                  alt="Now That I'm Still Here: A Memoir of Ruin and Resurrection, by Christopher J. Carazas &mdash; cover art of a German shepherd silhouette watching a boy sitting in a lit doorway"
                  loading="lazy"
                  decoding="async"
                  className="relative h-auto max-h-96 w-auto object-contain shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:h-full md:max-h-[28rem]"
                />
                <InkStamp
                  mark="1st ED."
                  label="NOW THAT I'M STILL HERE"
                  className="absolute bottom-4 right-4 w-16 opacity-80 sm:bottom-6 sm:right-6 sm:w-20"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-oxblood">
                  Memoir &middot; Christopher J. Carazas
                </p>
                <h3 className="mt-4 font-serif text-h2 leading-tight">
                  A Memoir of Ruin and Resurrection
                </h3>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                      Challenge
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-press-black/70">
                      A raw personal manuscript needed structural development,
                      professional design, and a publishing path that kept the
                      author&rsquo;s rights intact.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                      Scope
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-press-black/70">
                      Developmental edit, copyedit, cover direction, interior
                      design, KDP and IngramSpark setup, author website, launch
                      plan.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                      Deliverables
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-press-black/70">
                      Print and ebook editions, registered ISBN and metadata,
                      author website, retail listings.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                      Outcome
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-press-black/70">
                      Published independently. Author retains full rights,
                      royalties, and publishing accounts.
                    </dd>
                  </div>
                </dl>
                <span className="mt-8 inline-flex w-fit font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 group-hover:text-oxblood group-hover:decoration-oxblood">
                  Read the case study &rarr;
                </span>
              </div>
            </Link>
          </motion.div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 border-t border-press-black/10 pt-6 text-sm text-press-black/50">
            Also in the house: a fiction manuscript and a business nonfiction
            title, both in active development. Case studies to follow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
