import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

type Tone = "paper" | "black" | "oxblood";

const TONE_STYLES: Record<Tone, string> = {
  paper: "bg-paper text-press-black border border-press-black/15",
  black: "bg-press-black text-paper border border-press-black",
  oxblood: "bg-oxblood text-paper border border-oxblood",
};

const NUMERAL_TONE: Record<Tone, string> = {
  paper: "text-oxblood",
  black: "text-paper/50",
  oxblood: "text-paper/60",
};

const NOTE_TONE: Record<Tone, string> = {
  paper: "text-press-black/65",
  black: "text-paper/60",
  oxblood: "text-paper/75",
};

const stages: { label: string; note: string; tone: Tone; height: string }[] = [
  { label: "Read", note: "We read the full manuscript, closely.", tone: "paper", height: "13rem" },
  { label: "Diagnose", note: "An honest assessment of what the book needs.", tone: "paper", height: "14rem" },
  { label: "Shape", note: "Developmental edits give the story structure.", tone: "black", height: "15rem" },
  { label: "Design", note: "Cover and interior take physical form.", tone: "paper", height: "16.5rem" },
  { label: "Produce", note: "Files are built to print and platform spec.", tone: "black", height: "17.5rem" },
  { label: "Publish", note: "ISBNs, metadata, KDP, and IngramSpark go live.", tone: "paper", height: "18.5rem" },
  { label: "Launch", note: "The book meets the readers it was written for.", tone: "oxblood", height: "20rem" },
];

export function ProcessSequence() {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section
      id="process"
      className="border-t border-press-black/10 bg-paper-dim px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Kicker number="05" label="How a manuscript becomes a book" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
            One manuscript, seven stages, one finished book.
          </h2>
        </Reveal>

        <div className="mt-6 hidden h-px w-full bg-press-black/10 sm:block">
          <div
            className="h-px bg-oxblood transition-[width]"
            style={{ width: `${Math.max(progress * 100, 4)}%` }}
          />
        </div>

        <div
          ref={railRef}
          onScroll={onScroll}
          data-testid="process-rail"
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-5 sm:overflow-x-auto sm:pb-6 sm:[scroll-snap-type:x_mandatory]"
        >
          {stages.map((stage, i) => (
            <Reveal
              key={stage.label}
              delay={0.04 * i}
              className="sm:min-w-[13rem] sm:flex-1 sm:self-end sm:[scroll-snap-align:start]"
            >
              <div
                style={{ height: stage.height }}
                className={`flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1 ${TONE_STYLES[stage.tone]}`}
              >
                <span className={`font-mono text-xs ${NUMERAL_TONE[stage.tone]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-xl">{stage.label}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${NOTE_TONE[stage.tone]}`}>
                    {stage.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
