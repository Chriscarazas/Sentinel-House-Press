import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PullQuote({
  children,
  cite,
  tone = "default",
  center = false,
  className = "",
}: {
  children: ReactNode;
  cite?: string;
  tone?: "default" | "inverse";
  center?: boolean;
  className?: string;
}) {
  const textColor = tone === "inverse" ? "text-paper" : "text-press-black";
  const citeColor = tone === "inverse" ? "text-paper/50" : "text-pencil";

  return (
    <Reveal>
      <figure className={`${center ? "text-center" : ""} ${className}`}>
        <span aria-hidden className={`mb-5 block h-px w-14 bg-oxblood ${center ? "mx-auto" : ""}`} />
        <blockquote
          className={`font-serif text-h2 italic leading-[1.25] ${textColor}`}
        >
          {children}
        </blockquote>
        {cite && (
          <figcaption className={`mt-5 font-mono text-xs uppercase tracking-[0.2em] ${citeColor}`}>
            {cite}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
