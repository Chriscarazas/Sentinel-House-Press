import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Magnetic } from "@/components/ui/Magnetic";
import { resources } from "@/data/resources";

export function Resources() {
  return (
    <>
      <Seo
        title="Author Resources"
        description="Short, honest explainers on manuscript assessments, ISBNs, KDP versus IngramSpark, editorial letters, and realistic publishing timelines."
        path="/resources"
      />
      <PageHero
        number="06"
        label="Author Resources"
        title="Publishing knowledge, in plain English."
        intro="Short, honest explainers on the parts of publishing nobody explains up front. No email required."
      />

      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={0.04 * i}>
              <div className="border border-press-black/15 bg-paper p-7 sm:p-8">
                <Kicker number={String(i + 1).padStart(2, "0")} label={r.summary} />
                <h2 className="mt-4 font-serif text-h3 leading-snug">{r.title}</h2>
                <p className="mt-3 leading-relaxed text-press-black/75">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-press-black/10 bg-paper-dim px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Have a question these didn&rsquo;t answer?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-press-black/70">
              Check the FAQ, or ask us directly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Link
                  to="/faq"
                  className="inline-block border border-press-black bg-press-black px-7 py-3.5 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
                >
                  Read the FAQ
                </Link>
              </Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 hover:text-oxblood hover:decoration-oxblood"
              >
                Tell us about your manuscript
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
