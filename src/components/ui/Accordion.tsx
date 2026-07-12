import { useState } from "react";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-press-black/10 border-y border-press-black/10">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl leading-snug text-press-black">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 font-mono text-lg text-oxblood transition-transform ${open ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-header-${i}`}
              hidden={!open}
              className="pb-6"
            >
              <p className="max-w-3xl leading-relaxed text-press-black/75">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
