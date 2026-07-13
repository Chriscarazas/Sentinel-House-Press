import { Link, useLocation } from "react-router-dom";
import { Seo } from "@/components/Seo";

export function NotFound() {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 pt-24 sm:px-8">
      <Seo
        title="Page Not Found"
        description="This page does not exist."
        path={pathname}
        noindex
      />
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
        404
      </p>
      <h1 className="mt-4 font-serif text-h1 leading-tight">
        This page was cut in editing.
      </h1>
      <p className="mt-4 max-w-lg text-press-black/70">
        The page you&rsquo;re looking for doesn&rsquo;t exist. It may have
        been moved, renamed, or never written at all.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/"
          className="border border-press-black bg-press-black px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood"
        >
          Back home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center font-sans text-sm font-medium text-press-black underline decoration-pencil underline-offset-4 hover:text-oxblood hover:decoration-oxblood"
        >
          Tell us about your manuscript
        </Link>
      </div>
    </div>
  );
}
