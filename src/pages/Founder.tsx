import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { PullQuote } from "@/components/ui/PullQuote";
import { SITE_URL } from "@/lib/seo";
import coverSrc from "@/assets/books/now-that-im-still-here-cover.webp";
import cover480 from "@/assets/books/now-that-im-still-here-cover-480.webp";
import cover920 from "@/assets/books/now-that-im-still-here-cover-920.webp";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christopher J. Carazas",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Sentinel House Press",
    url: SITE_URL,
  },
  url: `${SITE_URL}/about/founder`,
};

const work = [
  "Manuscript development",
  "Editing",
  "Cover decisions",
  "Interior formatting",
  "ISBN ownership",
  "KDP",
  "IngramSpark",
  "Distribution",
  "Retail presentation",
  "Author website",
  "Launch strategy",
  "Reader engagement",
];

export function Founder() {
  return (
    <>
      <Seo
        title="Founder"
        description="Christopher J. Carazas founded Sentinel House Press after taking his own memoir from manuscript to market, and learning everything a serious book requires along the way."
        path="/about/founder"
        schema={personSchema}
      />
      <PageHero
        number="05"
        label="Founder"
        title="I built the publishing support I wish I had."
      />

      <section className="border-b border-press-black/10 px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="relative flex items-center justify-center overflow-hidden bg-press-black p-6">
              <img
                src={coverSrc}
                srcSet={`${cover480} 480w, ${cover920} 920w, ${coverSrc} 922w`}
                sizes="(min-width: 1024px) 24rem, 80vw"
                width={922}
                height={1536}
                alt="Now That I'm Still Here: A Memoir of Ruin and Resurrection, by Christopher J. Carazas"
                className="h-auto max-h-[32rem] w-auto object-contain shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.06}>
              <p className="drop-cap max-w-[38rem] text-lg leading-[1.75] text-press-black/80">
                Sentinel House Press grew out of one project: taking my own
                memoir, <em className="italic">Now That I&rsquo;m Still Here:
                A Memoir of Ruin and Resurrection</em>, from manuscript to
                market. I learned, the hard way, everything a serious book
                actually requires between those two points.
              </p>
              <p className="mt-6 max-w-[38rem] leading-[1.75] text-press-black/80">
                Independent publishing gives authors complete freedom. It
                also gives them every problem at once. There was no shortage
                of vendors willing to sell me one piece of the process. What
                was missing was someone who understood the whole thing, and
                who had a reason to get every piece right instead of just
                the piece they were paid for.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {work.map((item) => (
                  <li
                    key={item}
                    className="border border-press-black/15 bg-paper-dim px-3 py-1.5 font-mono text-xs text-press-black/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <PullQuote className="mt-10 max-w-xl">
              Independent authors were not lacking commitment. They were
              lacking a trustworthy system.
            </PullQuote>

            <Reveal delay={0.26}>
              <p className="mt-6 max-w-xl leading-relaxed text-press-black/70">
                Sentinel House Press exists to be that system for other
                authors, across memoir, fiction, and nonfiction alike. I am
                still directly involved in every project. That is a
                deliberate choice, not a placeholder until the company gets
                bigger.
              </p>
              <Link
                to="/work/now-that-im-still-here"
                className="mt-6 inline-block font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 hover:text-oxblood hover:decoration-oxblood"
              >
                Read the case study &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-press-black/10 bg-press-black px-6 py-20 text-paper sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <PullQuote tone="inverse" center cite="Christopher J. Carazas, Founder">
            Your name goes on the cover. The work behind it should deserve
            that.
          </PullQuote>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Let&rsquo;s build the book.
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
