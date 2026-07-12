export interface Resource {
  title: string;
  summary: string;
  body: string;
}

export const resources: Resource[] = [
  {
    title: "What to prepare before a manuscript assessment",
    summary: "Get more out of your first editorial read.",
    body: "Send the most current complete draft, not an outline or a partial. Include a short note on what you're hoping the book becomes and who you imagine reading it. You don't need a synopsis, a comp title list, or a polished query letter. The manuscript itself is what we're assessing.",
  },
  {
    title: "ISBNs, imprints, and who actually owns what",
    summary: "The paperwork nobody explains until it matters.",
    body: "An ISBN identifies an edition of a book, and whoever purchases it is listed as the publisher of record. When we set up KDP and IngramSpark accounts, they are registered in your name, using your own ISBNs. That is what 'you retain your publishing accounts' means in practice.",
  },
  {
    title: "KDP versus IngramSpark, in plain terms",
    summary: "Two platforms, two different jobs.",
    body: "KDP (Kindle Direct Publishing) is Amazon's platform for print-on-demand and ebooks; it's fast and simple, but distribution is mostly limited to Amazon. IngramSpark reaches bookstores, libraries, and other retailers beyond Amazon, at the cost of a more involved setup. Most authors use both.",
  },
  {
    title: "How to read your first editorial letter",
    summary: "It is not a review. It is a map.",
    body: "An editorial letter is not a judgment of the manuscript's worth; it's a structural diagnosis. Expect it to name what's working as clearly as what isn't, and to prioritize a small number of major issues over a long list of minor ones. Read it once in full before reacting to any single note.",
  },
  {
    title: "What a realistic timeline actually looks like",
    summary: "From manuscript to market is rarely fast.",
    body: "A full path through all three pathways, assessment through launch, typically runs six to nine months for a full-length manuscript. Rushing any single stage tends to cost more time later. A realistic timeline is one of the first things we'll discuss honestly.",
  },
];
