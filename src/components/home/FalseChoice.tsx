import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

export function FalseChoice() {
  return (
    <section className="border-t border-press-black/10 bg-paper-dim px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Kicker number="03" label="The False Choice" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
            Authors are usually offered two choices.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full border border-press-black/15 bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-pencil">
                Option One
              </p>
              <h3 className="mt-4 font-serif text-h3">Do everything alone.</h3>
              <p className="mt-4 leading-relaxed text-press-black/70">
                The author manages editors, designers, formatters,
                platforms, files, ISBNs, metadata, distribution, and launch,
                usually all at once, and usually for the first time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full border border-press-black/15 bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-pencil">
                Option Two
              </p>
              <h3 className="mt-4 font-serif text-h3">Hand over control.</h3>
              <p className="mt-4 leading-relaxed text-press-black/70">
                The author risks unclear costs, rights concessions, royalty
                deductions, vague promises, or production that looks like
                everyone else's.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mt-14 border-t-2 border-oxblood pt-10">
            <h3 className="font-serif text-h2 text-oxblood">
              We built a better one.
            </h3>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-press-black/80">
              Professional publishing support. Clear scope. Honest guidance.
              Author ownership.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
