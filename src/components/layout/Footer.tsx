import { Link } from "react-router-dom";

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-press-black text-paper">
      <div className="mx-auto max-w-[100rem] px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl">Sentinel House Press</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
              Founder-led editorial, production, publishing, and launch
              support for independent authors.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-paper/45">
              Plymouth, Massachusetts
              <br />
              Established 2025
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li>Christopher Carazas</li>
              <li>
                <a
                  className="hover:text-paper"
                  href="mailto:chris@sentinelhousepress.com"
                >
                  chris@sentinelhousepress.com
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href="tel:+12022471693">
                  (202) 247-1693
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href="https://sentinelhousepress.com">
                  sentinelhousepress.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              <li><Link className="hover:text-paper" to="/work">Work</Link></li>
              <li><Link className="hover:text-paper" to="/services">Services</Link></li>
              <li><Link className="hover:text-paper" to="/process">Process</Link></li>
              <li><Link className="hover:text-paper" to="/about">About</Link></li>
              <li><Link className="hover:text-paper" to="/resources">Resources</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oxblood">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/75">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    className="hover:text-paper"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl leading-relaxed">
            Designed around the belief that authors should not have to
            surrender control to receive professional support.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Sentinel House Press</span>
            {legal.map((l) => (
              <Link key={l.href} className="hover:text-paper" to={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
