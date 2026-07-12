import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

const goodFit: { label: string; feature?: boolean }[] = [
  { label: "Committed to completing the book", feature: true },
  { label: "Open to editorial guidance" },
  { label: "Responsive and collaborative" },
  { label: "Realistic about commercial outcomes" },
  { label: "Prepared to invest in professional support" },
  { label: "Interested in maintaining ownership", feature: true },
  { label: "Willing to follow a structured process" },
];

const notFit: { label: string; feature?: boolean }[] = [
  { label: "Authors seeking guaranteed sales" },
  { label: "Authors unwilling to revise" },
  { label: "Authors expecting unlimited revisions" },
  { label: "Authors looking for the cheapest possible production" },
  {
    label:
      "Authors wanting someone else to take full responsibility, with no obligations of their own",
    feature: true,
  },
  { label: "Authors requiring an unrealistic rush timeline" },
];

export function BestFitAuthors() {
  return (
    <section className="border-t border-press-black/10 bg-paper-dim px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Kicker number="10" label="Best-Fit Authors" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
            This is serious work for serious authors.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-proof-blue">
              A strong fit
            </p>
            <ul
              className="mt-5 grid grid-cols-2 gap-2.5"
              style={{ gridAutoFlow: "dense" }}
            >
              {goodFit.map((item, i) => (
                <Reveal
                  key={item.label}
                  as="li"
                  delay={0.03 * i}
                  className={item.feature ? "col-span-2" : "col-span-1"}
                >
                  <div
                    className={`flex h-full items-start gap-2.5 border-l-2 border-proof-blue bg-paper px-4 py-3 leading-snug text-press-black/85 ${
                      item.feature ? "min-h-20 text-lg font-serif" : "min-h-16 text-sm"
                    }`}
                  >
                    <span className="font-mono text-proof-blue">+</span>
                    <span>{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
              Probably not a fit
            </p>
            <ul
              className="mt-5 grid grid-cols-2 gap-2.5"
              style={{ gridAutoFlow: "dense" }}
            >
              {notFit.map((item, i) => (
                <Reveal
                  key={item.label}
                  as="li"
                  delay={0.03 * i}
                  className={item.feature ? "col-span-2" : "col-span-1"}
                >
                  <div
                    className={`flex h-full items-start gap-2.5 border border-oxblood/25 bg-[repeating-linear-gradient(135deg,transparent,transparent_7px,rgba(140,29,36,0.07)_7px,rgba(140,29,36,0.07)_8px)] px-4 py-3 leading-snug text-press-black/55 ${
                      item.feature ? "min-h-20 text-base" : "min-h-16 text-sm"
                    }`}
                  >
                    <span className="font-mono text-oxblood/70">&minus;</span>
                    <span>{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
