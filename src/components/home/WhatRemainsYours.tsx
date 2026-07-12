import { Reveal } from "@/components/ui/Reveal";

const retain: { label: string; feature?: boolean }[] = [
  { label: "Copyright" },
  { label: "Publishing accounts" },
  { label: "Royalties" },
  { label: "Final approval" },
  { label: "Creative control", feature: true },
  { label: "Your author identity" },
  { label: "Your voice", feature: true },
];

const provide: { label: string; feature?: boolean }[] = [
  { label: "Editorial expertise", feature: true },
  { label: "Production management" },
  { label: "Design direction" },
  { label: "Technical guidance" },
  { label: "Publishing setup" },
  { label: "Strategic counsel" },
  { label: "Quality control", feature: true },
];

export function WhatRemainsYours() {
  return (
    <section className="border-t border-paper/10 bg-press-black px-6 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
          06 &middot; What Remains Yours
        </p>
        <Reveal>
          <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight text-paper">
            The book remains yours.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50">
              You retain
            </p>
            <ul
              className="mt-5 grid grid-cols-2 gap-2.5"
              style={{ gridAutoFlow: "dense" }}
            >
              {retain.map((item, i) => (
                <Reveal
                  key={item.label}
                  as="li"
                  delay={0.03 * i}
                  className={item.feature ? "col-span-2" : "col-span-1"}
                >
                  <div
                    className={`flex h-full items-center border-l-2 border-oxblood bg-paper px-4 font-serif leading-tight text-press-black ${
                      item.feature ? "min-h-20 text-2xl" : "min-h-16 text-base"
                    }`}
                  >
                    {item.label}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50">
              Sentinel House Press provides
            </p>
            <ul
              className="mt-5 grid grid-cols-2 gap-2.5"
              style={{ gridAutoFlow: "dense" }}
            >
              {provide.map((item, i) => (
                <Reveal
                  key={item.label}
                  as="li"
                  delay={0.03 * i}
                  className={item.feature ? "col-span-2" : "col-span-1"}
                >
                  <div
                    className={`flex h-full items-center border border-paper/20 px-4 font-mono uppercase tracking-wide text-paper/70 ${
                      item.feature ? "min-h-20 text-sm" : "min-h-16 text-xs"
                    }`}
                  >
                    {item.label}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-xl border-l-2 border-oxblood pl-6 font-serif text-h3 leading-snug">
            You should not have to surrender control in order to receive
            professional support.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/50">
            It is a surprisingly radical position in an industry built around
            paperwork nobody reads until something goes wrong.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
