import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Magnetic } from "@/components/ui/Magnetic";

const pathways = [
  {
    numeral: "I",
    title: "Shape the Manuscript",
    headline: "Find the book inside the draft.",
    href: "/services/shape-the-manuscript",
    dark: false,
    items: [
      "Manuscript assessment",
      "Developmental editing",
      "Copyediting",
      "Proofreading",
    ],
  },
  {
    numeral: "II",
    title: "Build the Edition",
    headline: "Give the words a form worthy of them.",
    href: "/services/build-the-edition",
    dark: true,
    items: [
      "Cover direction",
      "Cover design coordination",
      "Interior book design",
      "Print formatting",
      "Ebook formatting",
      "ISBN guidance",
      "Metadata development",
      "KDP setup",
      "IngramSpark setup",
      "Production quality control",
    ],
  },
  {
    numeral: "III",
    title: "Enter the Market",
    headline: "Help the finished book meet the people it was written for.",
    href: "/services/enter-the-market",
    dark: false,
    items: [
      "Book-launch strategy",
      "Retailer optimization",
      "Author websites",
      "Marketing materials",
      "Metadata refinement",
      "Reader-facing positioning",
      "Ongoing author support",
    ],
  },
];

export function Pathways() {
  return (
    <section className="border-t border-press-black/10">
      <div className="px-6 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Kicker number="04" label="The Three Publishing Pathways" />
          <Reveal>
            <h2 className="mt-6 max-w-2xl font-serif text-h1 leading-tight">
              Three ways in, one book at the end.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        {pathways.map((p, i) => (
          <Link
            key={p.href}
            to={p.href}
            className={`group relative block overflow-hidden border-t px-6 py-16 sm:px-8 sm:py-24 ${
              p.dark
                ? "border-paper/10 bg-press-black text-paper"
                : "border-press-black/10 bg-paper text-press-black"
            }`}
          >
            <span
              aria-hidden
              className={`pointer-events-none absolute -right-6 -top-16 select-none font-serif text-[16rem] font-medium leading-none transition-transform duration-500 group-hover:scale-105 sm:text-[22rem] lg:text-[26rem] ${
                p.dark ? "text-paper/5" : "text-press-black/[0.04]"
              }`}
            >
              {p.numeral}
            </span>

            <Reveal delay={0.04 * i}>
              <div className="relative mx-auto max-w-5xl">
                <p
                  className={`font-mono text-xs uppercase tracking-[0.25em] ${p.dark ? "text-oxblood" : "text-oxblood"}`}
                >
                  {p.numeral} &middot; {p.title}
                </p>
                <h3 className="mt-4 max-w-2xl font-serif text-display leading-[1.02]">
                  {p.headline}
                </h3>

                <p
                  className={`mt-8 max-w-3xl text-base leading-relaxed ${
                    p.dark ? "text-paper/60" : "text-press-black/60"
                  }`}
                >
                  {p.items.join("  ·  ")}
                </p>

                <Magnetic className="mt-10 inline-block">
                  <span
                    className={`inline-flex items-center gap-2 font-sans text-sm font-medium underline underline-offset-4 ${
                      p.dark
                        ? "text-paper decoration-paper/40 group-hover:decoration-paper"
                        : "text-press-black decoration-pencil group-hover:text-oxblood group-hover:decoration-oxblood"
                    }`}
                  >
                    Explore this pathway &rarr;
                  </span>
                </Magnetic>
              </div>
            </Reveal>
          </Link>
        ))}
      </div>
    </section>
  );
}
