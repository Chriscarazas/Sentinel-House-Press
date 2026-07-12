import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

export function PageHero({
  number,
  label,
  title,
  intro,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-press-black/10 px-6 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <Kicker number={number} label={label} />
        <Reveal>
          <h1 className="mt-6 max-w-3xl font-serif text-display leading-[1.02]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-press-black/75">
              {intro}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.14}>{children}</Reveal>}
      </div>
    </section>
  );
}
