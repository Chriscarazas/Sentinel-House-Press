import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

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

export function FoundingStory() {
  return (
    <section className="border-t border-press-black/10 bg-paper-dim px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Kicker number="08" label="Founding Story" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="flex aspect-[4/5] items-end border border-press-black/15 bg-press-black p-8">
              <p className="font-serif text-3xl leading-tight text-paper">
                Christopher
                <br />
                J. Carazas
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-serif text-h1 leading-tight">
                I built the publishing support I wish I had.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-lg leading-relaxed text-press-black/80">
                Sentinel House Press grew out of one project: taking my own
                memoir, <em className="italic">Now That I&rsquo;m Still Here: A
                Memoir of Ruin and Resurrection</em>, from manuscript to
                market. I learned, the hard way, everything a serious book
                actually requires between those two points.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {work.map((item) => (
                  <li
                    key={item}
                    className="border border-press-black/15 bg-paper px-3 py-1.5 font-mono text-xs text-press-black/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl border-l-2 border-oxblood pl-6 font-serif text-h3 leading-snug">
                Independent authors were not lacking commitment. They were
                lacking a trustworthy system.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 max-w-xl leading-relaxed text-press-black/70">
                Sentinel House Press exists to be that system for other
                authors, across memoir, fiction, and nonfiction alike.
              </p>
              <Link
                to="/about/founder"
                className="mt-6 inline-block font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 hover:text-oxblood hover:decoration-oxblood"
              >
                Read the full founder story &rarr;
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
