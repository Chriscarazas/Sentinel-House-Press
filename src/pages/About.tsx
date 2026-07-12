import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SentinelStandard } from "@/components/home/SentinelStandard";

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Sentinel House Press is a founder-led publishing studio in Plymouth, Massachusetts, bringing the standards of a publishing house to independent authors."
        path="/about"
      />
      <PageHero
        number="04"
        label="About"
        title="The standards of a publishing house. The control of independent publishing."
        intro="Sentinel House Press is a founder-led publishing studio in Plymouth, Massachusetts. We help serious independent authors develop, edit, design, produce, publish, and launch professional books, without asking them to give up their rights, royalties, publishing accounts, or voice."
      />

      <section className="border-b border-press-black/10 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                What we are
              </p>
              <p className="mt-4 text-lg leading-relaxed text-press-black/80">
                A professional publishing studio. We provide editorial
                expertise, design direction, production management, and
                strategic counsel, the same standards a traditional
                publishing house would apply, brought to authors who are
                publishing independently.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                What we are not
              </p>
              <p className="mt-4 text-lg leading-relaxed text-press-black/80">
                A vanity press, a rights-acquiring hybrid publisher, or a
                collection of freelancers pretending to be a system. We do
                not take ownership of your work at any point in the process.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <SentinelStandard />

      <section className="border-t border-press-black/10 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                Founded by
              </p>
              <h2 className="mt-4 font-serif text-h2 leading-tight">
                Christopher J. Carazas
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-press-black/80">
                Sentinel House Press grew out of one project: taking a
                personal memoir from manuscript to market, and learning
                everything a serious book actually requires along the way.
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
      </section>

      <section className="border-t border-press-black/10 bg-paper-dim px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
              Plymouth, Massachusetts
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-press-black/80">
              Built in Plymouth. Made for authors everywhere. Sentinel House
              Press works with authors across the country; the standards
              don&rsquo;t change based on time zone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              This is serious work for serious authors.
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
