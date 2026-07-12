import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { shapeTheManuscript, buildTheEdition, enterTheMarket } from "@/data/services";

const packages = [
  { data: shapeTheManuscript, href: "/services/shape-the-manuscript", tone: "paper" as const },
  { data: buildTheEdition, href: "/services/build-the-edition", tone: "black" as const },
  { data: enterTheMarket, href: "/services/enter-the-market", tone: "oxblood" as const },
];

const TONE_STYLES: Record<string, string> = {
  paper: "bg-paper text-press-black border-press-black/15",
  black: "bg-press-black text-paper border-press-black",
  oxblood: "bg-oxblood text-paper border-oxblood",
};

export function Pricing() {
  return (
    <>
      <Seo
        title="Starting Investment"
        description="Clear scope, honest pricing. Starting investment ranges for each Sentinel House Press publishing pathway, with an exact quote after a manuscript assessment."
        path="/pricing"
      />
      <PageHero
        number="05"
        label="Starting Investment"
        title="Clear scope. Honest pricing."
        intro="Every project is scoped individually based on manuscript length, condition, and goals. These are starting points, not final quotes, so you know roughly what you're looking at before the first conversation."
      />

      <section className="border-b border-press-black/10 px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.data.numeral} delay={0.05 * i}>
              <div className={`flex h-full flex-col justify-between border p-7 ${TONE_STYLES[p.tone]}`}>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                    {p.data.numeral} &middot; {p.data.title}
                  </p>
                  <p className="mt-4 font-serif text-3xl leading-tight">
                    {p.data.investment.split(".")[0]}.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed opacity-75">
                    {p.data.investment.split(".").slice(1).join(".").trim()}
                  </p>
                </div>
                <Link
                  to={p.href}
                  className="mt-8 inline-block font-sans text-sm font-medium underline underline-offset-4 opacity-90 hover:opacity-100"
                >
                  See full scope &rarr;
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-press-black/10 bg-paper-dim px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                How pricing works
              </p>
              <p className="mt-4 leading-relaxed text-press-black/80">
                Pricing is based on manuscript length, current condition, and
                which pathways you need. A short, clean manuscript costs
                less to shape than a long, early-stage draft. You&rsquo;ll
                receive an exact quote after a manuscript assessment, before
                any production work begins.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                What is never a surprise
              </p>
              <ul className="mt-4 space-y-2 leading-relaxed text-press-black/80">
                <li>&middot; No rights or royalty deductions, ever</li>
                <li>&middot; No fees added after work has begun</li>
                <li>&middot; No charges for accounts that stay in your name</li>
                <li>&middot; No pressure to purchase services you don&rsquo;t need</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Want an exact number?
            </h2>
            <p className="mt-4 text-press-black/70">
              Tell us about your manuscript and we&rsquo;ll follow up with a
              real quote, not a range.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Magnetic className="mt-8 inline-block">
              <Link
                to="/contact"
                className="inline-block border border-press-black bg-press-black px-8 py-4 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
              >
                Tell us about your manuscript
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </>
  );
}
