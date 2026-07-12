import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { primaryNav, ctaLabel, ctaHref } from "@/lib/nav";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-press-black/10 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[100rem] items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-medium tracking-tight text-press-black sm:text-2xl">
            Sentinel House
          </span>
          <span className="mt-0.5 font-mono text-[0.6rem] uppercase tracking-[0.35em] text-oxblood">
            Press
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group flex items-baseline gap-1.5 font-sans text-sm text-press-black/80 transition-colors hover:text-oxblood"
            >
              <span className="font-mono text-[0.65rem] text-pencil group-hover:text-oxblood">
                {item.number}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to={ctaHref}
            className="hidden rounded-none border border-press-black bg-press-black px-5 py-2.5 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood sm:inline-block"
          >
            {ctaLabel}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-index"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-press-black transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-press-black transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <MobileMenu open={open} />
    </header>
  );
}
