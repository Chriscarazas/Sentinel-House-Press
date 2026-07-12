import type { ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";

export function LegalPage({
  number,
  label,
  title,
  updated,
  path,
  description,
  children,
}: {
  number: string;
  label: string;
  title: string;
  updated: string;
  path: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageHero number={number} label={label} title={title} />
      <section className="px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pencil">
            Last updated: {updated}
          </p>
          <div className="prose-legal mt-8 space-y-6 leading-relaxed text-press-black/80">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
