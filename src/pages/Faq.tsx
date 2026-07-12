import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Magnetic } from "@/components/ui/Magnetic";
import { faqItems } from "@/data/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function Faq() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Direct answers about rights, pricing, timelines, genre fit, and what makes Sentinel House Press different from a hybrid publisher."
        path="/faq"
        schema={faqSchema}
      />
      <PageHero
        number="07"
        label="Frequently Asked Questions"
        title="Direct answers to the questions that matter."
      />

      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-press-black/10 bg-paper-dim px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Still have a question?
            </h2>
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
