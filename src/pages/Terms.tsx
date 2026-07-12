import { LegalPage } from "@/components/ui/LegalPage";

const h2 = "font-serif text-xl text-press-black pt-4";

export function Terms() {
  return (
    <LegalPage
      number="—"
      label="Terms of Use"
      title="Terms of Use"
      updated="July 2026"
      path="/terms"
      description="The terms governing use of the Sentinel House Press website."
    >
      <p>
        These terms govern your use of the sentinelhousepress.com website.
        They do not constitute, and are not a substitute for, the separate
        written agreement that governs any actual editorial, design, or
        production engagement with Sentinel House Press.
      </p>

      <h2 className={h2}>Use of this site</h2>
      <p>
        You're welcome to browse this site, read its content, and submit a
        project inquiry. Content on this site may not be copied,
        republished, or used for commercial purposes without permission.
      </p>

      <h2 className={h2}>No guarantee of acceptance</h2>
      <p>
        Submitting a project inquiry does not create an engagement or any
        obligation on either side. Sentinel House Press reviews inquiries
        selectively and will recommend a next step only when it believes it
        can provide meaningful value.
      </p>

      <h2 className={h2}>No guarantee of outcomes</h2>
      <p>
        Nothing on this site constitutes a guarantee of sales, commercial
        performance, or acceptance by any third party (including agents,
        publishers, or retailers). Descriptions of services reflect
        Sentinel House Press&rsquo;s standard approach and may vary by
        project.
      </p>

      <h2 className={h2}>Intellectual property</h2>
      <p>
        Design, text, and code on this website belong to Sentinel House
        Press. This has no bearing on ownership of any author&rsquo;s
        manuscript or published work, which remains the author&rsquo;s at
        all times.
      </p>

      <h2 className={h2}>Limitation of liability</h2>
      <p>
        This website and its content are provided as is. Sentinel House
        Press is not liable for any indirect or consequential damages
        arising from use of this site.
      </p>

      <h2 className={h2}>Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of
        Massachusetts.
      </p>

      <h2 className={h2}>Changes</h2>
      <p>
        We may update these terms from time to time. The date above
        reflects the most recent revision.
      </p>
    </LegalPage>
  );
}
