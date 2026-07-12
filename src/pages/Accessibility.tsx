import { LegalPage } from "@/components/ui/LegalPage";

const h2 = "font-serif text-xl text-press-black pt-4";

export function Accessibility() {
  return (
    <LegalPage
      number="—"
      label="Accessibility Statement"
      title="Accessibility Statement"
      updated="July 2026"
      path="/accessibility"
      description="Sentinel House Press is committed to WCAG 2.2 Level AA accessibility standards across this website."
    >
      <p>
        Sentinel House Press is committed to making this website usable by
        everyone, including people who rely on assistive technology. We aim
        to meet or exceed WCAG 2.2 Level AA standards.
      </p>

      <h2 className={h2}>What we've built in</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Semantic HTML and a logical heading structure</li>
        <li>Full keyboard navigation with visible focus states</li>
        <li>A skip-to-content link on every page</li>
        <li>Descriptive alt text on meaningful images</li>
        <li>Support for reduced-motion preferences</li>
        <li>Color contrast checked against WCAG AA thresholds</li>
      </ul>

      <h2 className={h2}>Ongoing work</h2>
      <p>
        Accessibility is an ongoing practice, not a one-time checklist. As
        this site grows, we test new pages and features against the same
        standard before they ship.
      </p>

      <h2 className={h2}>Contact us</h2>
      <p>
        If you encounter an accessibility barrier anywhere on this site,
        please tell us. We take these reports seriously and will address
        them promptly.{" "}
        <a href="mailto:chris@sentinelhousepress.com" className="text-oxblood underline underline-offset-2">
          chris@sentinelhousepress.com
        </a>
      </p>
    </LegalPage>
  );
}
