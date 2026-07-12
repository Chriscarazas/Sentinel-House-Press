import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";

export function FinalInvitation() {
  return (
    <section className="border-t border-press-black/10 px-6 py-24 text-center sm:px-8 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-serif text-h2 leading-tight text-press-black/40">
            You wrote the manuscript.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 font-serif text-hero leading-tight text-oxblood">
            Let&rsquo;s build the book.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-press-black/75">
            Tell us what you are writing, where you are in the process, and
            what you hope the finished book can become. We will tell you
            honestly whether Sentinel House Press is the right fit.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <Link
            to="/contact"
            className="mt-10 inline-block border border-press-black bg-press-black px-8 py-4 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
          >
            Tell us about your manuscript
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-pencil">
            Based in Plymouth, Massachusetts. Working with authors everywhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
