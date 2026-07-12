import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

type Tone = "paper" | "black" | "blue" | "oxblood";

const TONE_STYLES: Record<Tone, string> = {
  paper: "bg-paper text-press-black border border-press-black/15 hover:border-oxblood/50",
  black: "bg-press-black text-paper border border-press-black hover:bg-[#221f1a]",
  blue: "bg-proof-blue text-paper border border-proof-blue hover:brightness-110",
  oxblood: "bg-oxblood text-paper border border-oxblood hover:brightness-110",
};

const NUMERAL_TONE: Record<Tone, string> = {
  paper: "text-pencil",
  black: "text-paper/40",
  blue: "text-paper/50",
  oxblood: "text-paper/60",
};

const elements: { label: string; tone: Tone; feature?: boolean }[] = [
  { label: "Structure", tone: "black", feature: true },
  { label: "Editing", tone: "paper" },
  { label: "Typography", tone: "paper" },
  { label: "Cover", tone: "blue", feature: true },
  { label: "Interior", tone: "paper" },
  { label: "Production", tone: "black" },
  { label: "Metadata", tone: "paper" },
  { label: "Distribution", tone: "paper" },
  { label: "Launch", tone: "oxblood", feature: true },
];

export function UncomfortableTruth() {
  return (
    <section className="border-t border-press-black/10 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Kicker number="02" label="The Uncomfortable Truth" />
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
            A manuscript is not yet a book.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-press-black/75">
            The story may already exist, fully formed, on the page. The
            professional edition of it does not. That still has to be
            built, piece by piece.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6"
          style={{ gridAutoFlow: "dense" }}
        >
          {elements.map((el, i) => (
            <Reveal
              key={el.label}
              as="li"
              delay={0.04 * i}
              className={el.feature ? "col-span-2 row-span-2 sm:col-span-2" : "col-span-1 sm:col-span-2"}
            >
              <div
                className={`flex h-full flex-col justify-between px-5 py-6 transition-all duration-300 ${TONE_STYLES[el.tone]} ${
                  el.feature ? "min-h-56 sm:min-h-full" : "min-h-36 sm:min-h-44"
                }`}
              >
                <span className={`font-mono text-xs ${NUMERAL_TONE[el.tone]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`mt-6 font-serif leading-[1.05] ${
                    el.feature ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {el.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal delay={0.2}>
          <p className="mt-20 max-w-xl border-l-2 border-oxblood pl-6 font-serif text-h3 leading-snug text-press-black/85">
            The manuscript contains the possibility. The process creates the
            book.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
