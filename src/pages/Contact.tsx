import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/ui/PageHero";
import { InquiryForm } from "@/components/contact/InquiryForm";

export function Contact() {
  return (
    <>
      <Seo
        title="Start a Project"
        description="Tell Sentinel House Press about your manuscript. We review each inquiry carefully and recommend a next step only when we can provide meaningful value."
        path="/contact"
      />
      <PageHero
        number="08"
        label="Start a Project"
        title="Let's build the book."
        intro="Tell us what you're writing, where you are in the process, and what you hope the finished book can become. We will tell you honestly whether Sentinel House Press is the right fit."
      />

      <section className="px-6 pb-24 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
