import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";

type Tone = "paper" | "black" | "oxblood";

const TONE_STYLES: Record<Tone, string> = {
  paper: "bg-paper text-press-black border-press-black/10",
  black: "bg-press-black text-paper border-paper/10",
  oxblood: "bg-oxblood text-paper border-oxblood",
};

const stages: {
  label: string;
  summary: string;
  authorRole: string;
  duration: string;
  tone: Tone;
}[] = [
  {
    label: "Read",
    summary:
      "We read the complete manuscript before forming any opinion about it. No skimming, no assessment based on the first chapter alone.",
    authorRole: "Submit a complete, current draft.",
    duration: "1 to 2 weeks",
    tone: "paper",
  },
  {
    label: "Diagnose",
    summary:
      "An honest editorial assessment: what is working, what isn't, and what the manuscript actually needs to become a professional edition.",
    authorRole: "Review the assessment letter and ask questions.",
    duration: "1 week",
    tone: "paper",
  },
  {
    label: "Shape",
    summary:
      "Developmental edits address structure, pacing, and voice at the manuscript level, followed by a line-level copyedit.",
    authorRole: "Respond to edits and make the final revision decisions.",
    duration: "3 to 6 weeks",
    tone: "black",
  },
  {
    label: "Design",
    summary:
      "Cover direction and interior book design give the manuscript physical form, built to print and platform specification.",
    authorRole: "Approve cover direction and interior style.",
    duration: "3 to 5 weeks",
    tone: "paper",
  },
  {
    label: "Produce",
    summary:
      "Print and ebook files are built to exact specification, then quality-checked before anything is submitted anywhere.",
    authorRole: "Review and approve final proofs.",
    duration: "2 to 3 weeks",
    tone: "black",
  },
  {
    label: "Publish",
    summary:
      "ISBNs, metadata, KDP, and IngramSpark go live, under the author's own publishing accounts, not ours.",
    authorRole: "Give final sign-off before files go live.",
    duration: "1 to 2 weeks",
    tone: "paper",
  },
  {
    label: "Launch",
    summary:
      "Retail listings, an author website, and marketing materials help the finished book meet the readers it was written for.",
    authorRole: "Confirm launch date and participate in launch week.",
    duration: "4 to 8 weeks lead-in",
    tone: "oxblood",
  },
];

export function Process() {
  return (
    <>
      <Seo
        title="Process"
        description="Seven stages, always in this order: Read, Diagnose, Shape, Design, Produce, Publish, Launch. See how a manuscript becomes a professionally published book."
        path="/process"
      />
      <PageHero
        number="03"
        label="Process"
        title="How a manuscript becomes a book."
        intro="Seven stages, always in this order, always with the author making the final call. Nothing is skipped, and nothing happens without your sign-off."
      />

      <div>
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            className={`border-t px-6 py-14 sm:px-8 sm:py-18 ${TONE_STYLES[stage.tone]}`}
          >
            <Reveal delay={0.03 * i}>
              <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
                <div className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-mono text-sm opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-h2 leading-none">{stage.label}</h2>
                </div>
                <div className="max-w-2xl">
                  <p className="text-lg leading-relaxed opacity-85">{stage.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] opacity-60">
                    <span>Your role: {stage.authorRole}</span>
                    <span>Duration: {stage.duration}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>

      <section className="border-t border-press-black/10 px-6 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-h1 leading-tight">
              Ready to find out where your manuscript stands?
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
