import { Link, useParams } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { InkStamp } from "@/components/ui/InkStamp";
import { Magnetic } from "@/components/ui/Magnetic";
import { PullQuote } from "@/components/ui/PullQuote";
import { getCaseStudy } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/seo";
import coverSrc from "@/assets/books/now-that-im-still-here-cover.webp";
import cover480 from "@/assets/books/now-that-im-still-here-cover-480.webp";
import cover920 from "@/assets/books/now-that-im-still-here-cover-920.webp";

const covers: Record<string, { src: string; srcSet: string }> = {
  "now-that-im-still-here": {
    src: coverSrc,
    srcSet: `${cover480} 480w, ${cover920} 920w, ${coverSrc} 922w`,
  },
};

export function CaseStudy() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 pt-24 sm:px-8">
        <Seo
          title="Case Study Coming Soon"
          description="This case study is still in development."
          path={`/work/${slug ?? ""}`}
          noindex
        />
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
          In production
        </p>
        <h1 className="mt-4 font-serif text-h1 leading-tight">Case study coming soon.</h1>
        <p className="mt-4 max-w-lg text-press-black/70">
          This project is still in development. In the meantime, see the
          finished work already in the house.
        </p>
        <Link
          to="/work"
          className="mt-8 border border-press-black bg-press-black px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
        >
          View selected work
        </Link>
      </div>
    );
  }

  const cover = covers[study.slug];

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: study.title,
    alternateName: study.subtitle,
    author: {
      "@type": "Person",
      name: study.author,
    },
    genre: study.genre,
    bookFormat: "https://schema.org/Paperback",
    description: study.challenge,
    image: cover ? `${SITE_URL}${cover.src}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "Sentinel House Press",
    },
  };

  return (
    <>
      <Seo
        title={`${study.title}: ${study.subtitle}`}
        description={study.challenge}
        path={`/work/${study.slug}`}
        image={cover ? `${SITE_URL}${cover.src}` : undefined}
        schema={bookSchema}
      />
      <section className="border-b border-press-black/10 px-6 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:items-end">
          {cover && (
            <Reveal>
              <div className="relative flex items-center justify-center overflow-hidden bg-press-black p-6">
                <img
                  src={cover.src}
                  srcSet={cover.srcSet}
                  sizes="(min-width: 768px) 18rem, 80vw"
                  width={922}
                  height={1536}
                  alt={`${study.title}: ${study.subtitle}, by ${study.author}`}
                  className="h-auto max-h-[28rem] w-auto object-contain shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
                <InkStamp
                  mark="1st ED."
                  label={study.title.toUpperCase()}
                  className="absolute bottom-4 right-4 w-16 opacity-80"
                />
              </div>
            </Reveal>
          )}
          <div>
            <Kicker number="01" label="Books in the House" />
            <Reveal delay={0.06}>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-oxblood">
                {study.genre} &middot; {study.author}
              </p>
              <h1 className="mt-4 font-serif text-display leading-[1.02]">
                {study.subtitle}
              </h1>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                {study.details}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-press-black/10 bg-paper-dim px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full border-l-2 border-oxblood bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                Challenge
              </p>
              <p className="mt-4 text-press-black/80">{study.challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full border-l-2 border-proof-blue bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                Scope
              </p>
              <p className="mt-4 text-press-black/80">{study.scope}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border-l-2 border-press-black/30 bg-paper p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                Deliverables
              </p>
              <p className="mt-4 text-press-black/80">{study.deliverables}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full border-l-2 border-oxblood bg-press-black p-6 text-paper">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                Outcome
              </p>
              <p className="mt-4">{study.outcome}</p>
            </div>
          </Reveal>
        </div>

        {study.authorNote && (
          <PullQuote className="mx-auto mt-10 max-w-3xl">{study.authorNote}</PullQuote>
        )}
      </section>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Your manuscript could be next in the house.
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
