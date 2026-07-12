import { LegalPage } from "@/components/ui/LegalPage";

const h2 = "font-serif text-xl text-press-black pt-4";

export function Privacy() {
  return (
    <LegalPage
      number="—"
      label="Privacy Policy"
      title="Privacy Policy"
      updated="July 2026"
      path="/privacy"
      description="How Sentinel House Press collects, uses, and protects information submitted through this website."
    >
      <p>
        Sentinel House Press ("we," "us") respects the privacy of everyone
        who visits this website or shares information with us through the
        project inquiry form. This policy explains what we collect, why,
        and how it&rsquo;s handled.
      </p>

      <h2 className={h2}>What we collect</h2>
      <p>
        When you submit the project inquiry form, we collect your name,
        email address, information about your manuscript, and any file you
        choose to attach. If you email us directly, we retain that
        correspondence. Standard website analytics may also record general,
        non-identifying information such as browser type and page views.
      </p>

      <h2 className={h2}>How we use it</h2>
      <p>
        Information submitted through the inquiry form is used solely to
        evaluate whether Sentinel House Press is a good fit for your
        project and to respond to you. We do not sell, rent, or share your
        personal information with third parties for marketing purposes.
      </p>

      <h2 className={h2}>Manuscript materials</h2>
      <p>
        Any manuscript sample or project file you share is treated as
        confidential. It is used only to evaluate your inquiry and is not
        shared outside Sentinel House Press without your permission.
      </p>

      <h2 className={h2}>Third-party services</h2>
      <p>
        This site may use third-party services for hosting, form
        processing, and basic analytics. These providers process data on
        our behalf and are not authorized to use it for their own purposes.
      </p>

      <h2 className={h2}>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of any
        personal information we hold about you at any time by contacting us
        at{" "}
        <a href="mailto:chris@sentinelhousepress.com" className="text-oxblood underline underline-offset-2">
          chris@sentinelhousepress.com
        </a>
        .
      </p>

      <h2 className={h2}>Changes to this policy</h2>
      <p>
        We may update this policy occasionally. The date at the top of this
        page reflects the most recent revision.
      </p>
    </LegalPage>
  );
}
