import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Field, TextInput, TextArea, Select } from "@/components/contact/fields";
import { Magnetic } from "@/components/ui/Magnetic";
import { EASE_EDITORIAL } from "@/lib/motion";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

interface FormState {
  bookTitle: string;
  genre: string;
  wordCount: string;
  manuscriptStage: string;
  servicesNeeded: string[];
  name: string;
  email: string;
  previousExperience: string;
  discoveredVia: string;
  targetDate: string;
  primaryConcern: string;
  successLooksLike: string;
  investmentRange: string;
}

const initialState: FormState = {
  bookTitle: "",
  genre: "",
  wordCount: "",
  manuscriptStage: "",
  servicesNeeded: [],
  name: "",
  email: "",
  previousExperience: "",
  discoveredVia: "",
  targetDate: "",
  primaryConcern: "",
  successLooksLike: "",
  investmentRange: "",
};

const serviceOptions = [
  "Shape the Manuscript",
  "Build the Edition",
  "Enter the Market",
  "Not sure yet",
];

const steps = ["Your book", "About you", "The vision"];

export function InquiryForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const reduceMotion = useReducedMotion();

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const toggleService = (service: string) => {
    setForm((f) => ({
      ...f,
      servicesNeeded: f.servicesNeeded.includes(service)
        ? f.servicesNeeded.filter((s) => s !== service)
        : [...f.servicesNeeded, service],
    }));
  };

  const canAdvanceFromStep = (i: number) => {
    if (i === 0) return form.bookTitle && form.genre && form.manuscriptStage;
    if (i === 1) return form.name && form.email;
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      console.error(
        "VITE_FORMSPREE_ENDPOINT is not set. The inquiry form cannot deliver submissions until it is configured.",
      );
      setError(true);
      return;
    }

    setSubmitting(true);
    setError(false);

    const payload = new FormData();
    payload.append("_subject", `New manuscript inquiry: ${form.bookTitle}`);
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("bookTitle", form.bookTitle);
    payload.append("genre", form.genre);
    payload.append("wordCount", form.wordCount);
    payload.append("manuscriptStage", form.manuscriptStage);
    payload.append("servicesNeeded", form.servicesNeeded.join(", "));
    payload.append("previousExperience", form.previousExperience);
    payload.append("discoveredVia", form.discoveredVia);
    payload.append("targetDate", form.targetDate);
    payload.append("primaryConcern", form.primaryConcern);
    payload.append("successLooksLike", form.successLooksLike);
    payload.append("investmentRange", form.investmentRange);

    const file = fileInputRef.current?.files?.[0];
    if (file) {
      payload.append("sampleFile", file);
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Inquiry form submission failed:", err);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-press-black/15 bg-paper p-10 text-center sm:p-14">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-oxblood">
          Received
        </p>
        <h2 className="mt-4 font-serif text-h2 leading-tight">
          Thank you for trusting us with an introduction to your book.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-press-black/75">
          We review each inquiry carefully and recommend a next step only
          when we believe we can provide meaningful value.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-press-black/15 bg-paper p-7 sm:p-10">
      <div className="flex items-center gap-3">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <span
              className={`font-mono text-xs ${i === step ? "text-oxblood" : i < step ? "text-press-black/50" : "text-pencil"}`}
            >
              {String(i + 1).padStart(2, "0")} {label}
            </span>
            {i < steps.length - 1 && <span className="h-px w-6 bg-press-black/15" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={reduceMotion ? undefined : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
            transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
            className="space-y-6"
          >
            {step === 0 && (
              <>
                <Field label="Book title or working title" htmlFor="bookTitle" required>
                  <TextInput
                    id="bookTitle"
                    required
                    value={form.bookTitle}
                    onChange={(e) => update("bookTitle", e.target.value)}
                  />
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Genre" htmlFor="genre" required>
                    <Select
                      id="genre"
                      required
                      value={form.genre}
                      onChange={(e) => update("genre", e.target.value)}
                    >
                      <option value="">Select one</option>
                      <option>Memoir</option>
                      <option>Fiction</option>
                      <option>Narrative nonfiction</option>
                      <option>Business nonfiction</option>
                      <option>Other</option>
                    </Select>
                  </Field>
                  <Field label="Approximate word count" htmlFor="wordCount">
                    <TextInput
                      id="wordCount"
                      value={form.wordCount}
                      onChange={(e) => update("wordCount", e.target.value)}
                      placeholder="e.g. 75,000"
                    />
                  </Field>
                </div>
                <Field label="Current manuscript stage" htmlFor="manuscriptStage" required>
                  <Select
                    id="manuscriptStage"
                    required
                    value={form.manuscriptStage}
                    onChange={(e) => update("manuscriptStage", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option>Idea or outline</option>
                    <option>Partial draft</option>
                    <option>Complete first draft</option>
                    <option>Revised draft</option>
                    <option>Previously published, seeking a new edition</option>
                  </Select>
                </Field>
                <fieldset>
                  <legend className="font-mono text-xs uppercase tracking-[0.15em] text-press-black/70">
                    Services needed
                  </legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {serviceOptions.map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm text-press-black/85">
                        <input
                          type="checkbox"
                          checked={form.servicesNeeded.includes(s)}
                          onChange={() => toggleService(s)}
                          className="h-4 w-4 accent-oxblood"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </>
            )}

            {step === 1 && (
              <>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name" required>
                    <TextInput
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </Field>
                  <Field label="Email" htmlFor="email" required>
                    <TextInput
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </Field>
                </div>
                <Field label="Previous publishing experience" htmlFor="previousExperience">
                  <Select
                    id="previousExperience"
                    value={form.previousExperience}
                    onChange={(e) => update("previousExperience", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option>This is my first book</option>
                    <option>I've self-published before</option>
                    <option>I've been traditionally published before</option>
                    <option>Other</option>
                  </Select>
                </Field>
                <Field label="How did you find Sentinel House Press?" htmlFor="discoveredVia">
                  <Select
                    id="discoveredVia"
                    value={form.discoveredVia}
                    onChange={(e) => update("discoveredVia", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option>Search</option>
                    <option>Referral from another author</option>
                    <option>Social media</option>
                    <option>Other</option>
                  </Select>
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                <Field label="Target publication date" htmlFor="targetDate">
                  <TextInput
                    id="targetDate"
                    value={form.targetDate}
                    onChange={(e) => update("targetDate", e.target.value)}
                    placeholder="e.g. Spring 2027, or flexible"
                  />
                </Field>
                <Field label="Primary publishing concern" htmlFor="primaryConcern">
                  <TextArea
                    id="primaryConcern"
                    value={form.primaryConcern}
                    onChange={(e) => update("primaryConcern", e.target.value)}
                    placeholder="What worries you most about this process?"
                  />
                </Field>
                <Field label="What would success look like?" htmlFor="successLooksLike">
                  <TextArea
                    id="successLooksLike"
                    value={form.successLooksLike}
                    onChange={(e) => update("successLooksLike", e.target.value)}
                  />
                </Field>
                <Field label="Expected investment range" htmlFor="investmentRange">
                  <Select
                    id="investmentRange"
                    value={form.investmentRange}
                    onChange={(e) => update("investmentRange", e.target.value)}
                  >
                    <option value="">Select one</option>
                    <option>Under $2,500</option>
                    <option>$2,500 &ndash; $5,000</option>
                    <option>$5,000 &ndash; $10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </Select>
                </Field>
                <Field label="Manuscript sample or project file (optional)" htmlFor="sampleFile">
                  <input
                    id="sampleFile"
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mt-2 w-full border border-press-black/25 bg-paper px-4 py-3 font-sans text-sm text-press-black/70 file:mr-4 file:border-0 file:bg-press-black file:px-4 file:py-2 file:font-sans file:text-sm file:text-paper"
                  />
                </Field>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between border-t border-press-black/10 pt-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="font-sans text-sm font-medium text-press-black/60 hover:text-oxblood"
            >
              &larr; Back
            </button>
          ) : (
            <span />
          )}

          {step < steps.length - 1 ? (
            <Magnetic>
              <button
                type="button"
                disabled={!canAdvanceFromStep(step)}
                onClick={() => setStep((s) => s + 1)}
                className="border border-press-black bg-press-black px-7 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue &rarr;
              </button>
            </Magnetic>
          ) : (
            <Magnetic>
              <button
                type="submit"
                disabled={submitting}
                className="border border-press-black bg-press-black px-7 py-3 font-sans text-sm font-medium text-paper transition-colors hover:border-oxblood hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send inquiry"}
              </button>
            </Magnetic>
          )}
        </div>

        {error && (
          <p className="mt-4 text-sm text-oxblood">
            Something went wrong sending your inquiry. Please try again, or
            email us directly at{" "}
            <a href="mailto:chris@sentinelhousepress.com" className="underline underline-offset-2">
              chris@sentinelhousepress.com
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
