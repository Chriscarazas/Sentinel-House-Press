import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Magnetic } from "@/components/ui/Magnetic";
import { SITE_URL } from "@/lib/seo";

type Tone = "paper" | "black" | "blue" | "oxblood";

const HERO_TONE: Record<Tone, string> = {
  paper: "bg-paper text-press-black",
  black: "bg-press-black text-paper",
  blue: "bg-proof-blue text-paper",
  oxblood: "bg-oxblood text-paper",
};

export interface ServicePageData {
  numeral: string;
  number: string;
  eyebrow: string;
  title: string;
  path: string;
  headline: string;
  intro: string;
  tone: Tone;
  forWho: string[];
  problem: string;
  included: string[];
  notIncluded: string[];
  deliverables: string[];
  timeline: string;
  revisions: string;
  clientResponsibilities: string[];
  investment: string;
  addOns: string[];
  processSteps: { label: string; note: string }[];
  nextHref: string;
  nextLabel: string;
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const {
    numeral,
    number,
    eyebrow,
    title,
    path,
    headline,
    intro,
    tone,
    forWho,
    problem,
    included,
    notIncluded,
    deliverables,
    timeline,
    revisions,
    clientResponsibilities,
    investment,
    addOns,
    processSteps,
    nextHref,
    nextLabel,
  } = data;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    description: intro,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "Organization",
      name: "Sentinel House Press",
      url: SITE_URL,
    },
    areaServed: "US",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: investment,
    },
  };

  return (
    <>
      <Seo title={title} description={intro} path={path} schema={serviceSchema} />
      <section className={`relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 sm:pt-40 ${HERO_TONE[tone]}`}>
        <span
          aria-hidden
          className={`pointer-events-none absolute -right-10 -top-10 select-none font-serif text-[16rem] font-medium leading-none opacity-[0.06] sm:text-[22rem]`}
        >
          {numeral}
        </span>
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-60">
            {number} &middot; {eyebrow}
          </p>
          <Reveal>
            <h1 className="mt-6 max-w-3xl font-serif text-display leading-[1.02]">
              {headline}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <Magnetic className="mt-9 inline-block">
              <Link
                to="/contact"
                className={`inline-block border px-7 py-3.5 font-sans text-sm font-medium transition-colors ${
                  tone === "paper"
                    ? "border-press-black bg-press-black text-paper hover:border-oxblood hover:bg-oxblood"
                    : "border-paper bg-paper text-press-black hover:border-oxblood hover:bg-oxblood hover:text-paper"
                }`}
              >
                Tell us about your manuscript
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-press-black/10 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Kicker number="01" label={`Who ${title} is for`} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {forWho.map((item, i) => (
              <Reveal key={item} as="li" delay={0.03 * i}>
                <div className="flex h-full items-start gap-3 border-l-2 border-oxblood bg-paper-dim px-4 py-4 text-press-black/85">
                  <span className="font-mono text-oxblood">+</span>
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-14 max-w-2xl border-l-2 border-press-black/20 pl-6 font-serif text-h3 leading-snug text-press-black/85">
              {problem}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-press-black/10 bg-paper-dim px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Kicker number="02" label="Scope" />
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-proof-blue">
                What&rsquo;s included
              </p>
              <ul className="mt-5 space-y-2.5">
                {included.map((item, i) => (
                  <Reveal key={item} as="li" delay={0.03 * i}>
                    <div className="flex items-start gap-3 border border-press-black/15 bg-paper px-4 py-3 text-sm text-press-black/85">
                      <span className="font-mono text-proof-blue">+</span>
                      <span>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                What&rsquo;s not included
              </p>
              <ul className="mt-5 space-y-2.5">
                {notIncluded.map((item, i) => (
                  <Reveal key={item} as="li" delay={0.03 * i}>
                    <div className="flex items-start gap-3 border border-oxblood/25 bg-[repeating-linear-gradient(135deg,transparent,transparent_7px,rgba(140,29,36,0.06)_7px,rgba(140,29,36,0.06)_8px)] px-4 py-3 text-sm text-press-black/60">
                      <span className="font-mono text-oxblood/70">&minus;</span>
                      <span>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-press-black/10 px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Kicker number="03" label="Deliverables &amp; Terms" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <div className="h-full border border-press-black/15 bg-paper p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                  Deliverables
                </p>
                <ul className="mt-4 space-y-2 text-sm text-press-black/75">
                  {deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full border border-press-black/15 bg-paper p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                  Typical timeline
                </p>
                <p className="mt-4 text-sm text-press-black/75">{timeline}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full border border-press-black/15 bg-paper p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                  Revisions
                </p>
                <p className="mt-4 text-sm text-press-black/75">{revisions}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="h-full border-2 border-oxblood bg-paper p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
                  Starting investment
                </p>
                <p className="mt-4 text-sm text-press-black/75">{investment}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 border border-press-black/15 bg-paper-dim p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                Client responsibilities
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {clientResponsibilities.map((r) => (
                  <li key={r} className="text-sm text-press-black/75">
                    &middot; {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {addOns.length > 0 && (
            <Reveal delay={0.25}>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
                  Optional add-ons
                </p>
                <p className="mt-3 text-sm text-press-black/70">{addOns.join(" · ")}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-b border-press-black/10 bg-press-black px-6 py-20 text-paper sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
            04 &middot; How it works
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.label} delay={0.05 * i}>
                <div className="h-full border border-paper/15 p-6">
                  <span className="font-mono text-xs text-paper/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl">{step.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60">
                    {step.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Next step: {nextLabel}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Magnetic className="mt-8 inline-block">
              <Link
                to={nextHref}
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
