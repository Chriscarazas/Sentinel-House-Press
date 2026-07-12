import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { InkStamp } from "@/components/ui/InkStamp";
import { caseStudies } from "@/data/caseStudies";
import coverSrc from "@/assets/books/now-that-im-still-here-cover.webp";
import cover480 from "@/assets/books/now-that-im-still-here-cover-480.webp";
import cover920 from "@/assets/books/now-that-im-still-here-cover-920.webp";

const covers: Record<string, { src: string; srcSet: string }> = {
  "now-that-im-still-here": {
    src: coverSrc,
    srcSet: `${cover480} 480w, ${cover920} 920w, ${coverSrc} 922w`,
  },
};

export function Work() {
  return (
    <>
      <Seo
        title="Work"
        description="Selected editorial and production work from Sentinel House Press, including the real scope, deliverables, and outcome for each project."
        path="/work"
      />
      <PageHero
        number="01"
        label="Work"
        title="Books in the house."
        intro="Selected editorial and production work. Each project includes the real scope, the real deliverables, and the real outcome, not just an attractive cover."
      />

      <section className="px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={0.04 * i}>
              <Link
                to={`/work/${c.slug}`}
                className="group grid gap-0 overflow-hidden border border-press-black/15 bg-paper shadow-[0_18px_40px_-24px_rgba(21,20,17,0.4)] md:grid-cols-[minmax(0,16rem)_1fr]"
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-press-black p-6">
                  {covers[c.slug] ? (
                    <img
                      src={covers[c.slug].src}
                      srcSet={covers[c.slug].srcSet}
                      sizes="(min-width: 768px) 16rem, 70vw"
                      width={922}
                      height={1536}
                      alt={`${c.title}: ${c.subtitle}, by ${c.author}`}
                      loading="lazy"
                      decoding="async"
                      className="h-auto max-h-80 w-auto object-contain shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:max-h-96"
                    />
                  ) : (
                    <p className="font-serif text-2xl text-paper">{c.title}</p>
                  )}
                  <InkStamp mark="1st ED." label={c.title.toUpperCase()} className="absolute bottom-4 right-4 w-14 opacity-80" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-oxblood">
                    {c.genre} &middot; {c.author}
                  </p>
                  <h2 className="mt-4 font-serif text-h2 leading-tight">{c.subtitle}</h2>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-press-black/70">
                    {c.challenge}
                  </p>
                  <span className="mt-6 inline-flex w-fit font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 group-hover:text-oxblood group-hover:decoration-oxblood">
                    Read the case study &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Fiction manuscript", "Business nonfiction"].map((label) => (
                <div
                  key={label}
                  className="flex h-full flex-col justify-between border border-dashed border-press-black/20 p-8 text-press-black/50"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em]">In the house</p>
                  <p className="mt-6 font-serif text-xl">{label}</p>
                  <p className="mt-2 text-sm">Case study in progress.</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
