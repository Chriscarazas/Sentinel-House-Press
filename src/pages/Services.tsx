import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { shapeTheManuscript, buildTheEdition, enterTheMarket } from "@/data/services";

const pathways = [shapeTheManuscript, buildTheEdition, enterTheMarket];

const TONE_BG: Record<string, string> = {
  paper: "bg-paper text-press-black border-press-black/10",
  black: "bg-press-black text-paper border-paper/10",
  blue: "bg-proof-blue text-paper border-proof-blue",
  oxblood: "bg-oxblood text-paper border-oxblood",
};

export function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Three publishing pathways: Shape the Manuscript, Build the Edition, and Enter the Market. Start wherever your manuscript actually is."
        path="/services"
      />
      <PageHero
        number="02"
        label="Services"
        title="Three pathways. One finished book."
        intro="Every engagement moves through the same three stages: shape the manuscript, build the edition, enter the market. Start wherever your manuscript actually is."
      />

      <div>
        {pathways.map((p, i) => (
          <Link
            key={p.nextHref === "/contact" ? p.title : p.numeral}
            to={
              p.title === "Shape the Manuscript"
                ? "/services/shape-the-manuscript"
                : p.title === "Build the Edition"
                  ? "/services/build-the-edition"
                  : "/services/enter-the-market"
            }
            className={`group relative block overflow-hidden border-t px-6 py-16 sm:px-8 sm:py-24 ${TONE_BG[p.tone]}`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-16 select-none font-serif text-[16rem] font-medium leading-none opacity-[0.05] transition-transform duration-500 group-hover:scale-105 sm:text-[22rem]"
            >
              {p.numeral}
            </span>
            <Reveal delay={0.04 * i}>
              <div className="relative mx-auto max-w-5xl">
                <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-70">
                  {p.numeral} &middot; {p.title}
                </p>
                <h2 className="mt-4 max-w-2xl font-serif text-display leading-[1.02]">
                  {p.headline}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
                  {p.intro}
                </p>
                <Magnetic className="mt-8 inline-block">
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-medium underline underline-offset-4 opacity-90 group-hover:opacity-100">
                    See what&rsquo;s included &rarr;
                  </span>
                </Magnetic>
              </div>
            </Reveal>
          </Link>
        ))}
      </div>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Not sure where your manuscript fits?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-press-black/70">
              Tell us where you are, and we&rsquo;ll tell you honestly which
              pathway makes sense to start with.
            </p>
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
