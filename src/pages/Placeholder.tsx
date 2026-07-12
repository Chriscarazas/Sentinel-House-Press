import { Link, useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function Placeholder({ title }: { title: string }) {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 pt-24 sm:px-8">
      <Seo title={title} description="This page is not available." path={pathname} noindex />
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
        In production
      </p>
      <h1 className="mt-4 font-serif text-h1 leading-tight">{title}</h1>
      <p className="mt-4 max-w-lg text-press-black/70">
        This page is being typeset. In the meantime, tell us about your
        manuscript and we will follow up directly.
      </p>
      <Link
        to="/contact"
        className="mt-8 border border-press-black bg-press-black px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
      >
        Tell us about your manuscript
      </Link>
      <Link to="/" className="mt-6 text-sm text-press-black/60 hover:text-oxblood">
        &larr; Back home
      </Link>
    </div>
  );
}
