import { Reveal } from "@/components/ui/Reveal";

const lines = [
  "A book should be edited honestly.",
  "Designed intentionally.",
  "Produced professionally.",
  "Published transparently.",
  "Marketed without fantasy.",
  "And owned by the author who created it.",
];

export function SentinelStandard() {
  return (
    <section className="border-t border-press-black/10 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
          09 &middot; The Sentinel Standard
        </p>
        <div className="mt-10 space-y-3">
          {lines.map((line, i) => (
            <Reveal key={line} delay={0.12 * i}>
              <p
                className={`font-serif leading-tight ${
                  i === lines.length - 1
                    ? "text-h1 text-oxblood"
                    : "text-h2 text-press-black"
                }`}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
