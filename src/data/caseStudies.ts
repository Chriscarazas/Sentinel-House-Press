export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  genre: string;
  details: string;
  challenge: string;
  scope: string;
  deliverables: string;
  outcome: string;
  authorNote?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "now-that-im-still-here",
    title: "Now That I'm Still Here",
    subtitle: "A Memoir of Ruin and Resurrection",
    author: "Christopher J. Carazas",
    genre: "Memoir",
    details: "Trade paperback and ebook",
    challenge:
      "A raw, deeply personal manuscript needed structural development, professional design, and a publishing path that kept the author's rights, royalties, and publishing accounts entirely intact.",
    scope:
      "Developmental edit, copyedit, proofreading, cover direction, interior book design, print and ebook formatting, ISBN and metadata setup, KDP and IngramSpark configuration, author website, and launch strategy.",
    deliverables:
      "Print and ebook editions, registered ISBN and metadata, a complete author website, and live retail listings on Amazon and IngramSpark's distribution network.",
    outcome:
      "Published independently on the author's own accounts. The author retains full copyright, royalties, and control over every future edition.",
    authorNote:
      "This project is also the origin of Sentinel House Press itself — the process of building this book is what convinced the founder that other authors needed the same system.",
  },
];

export function getCaseStudy(slug: string | undefined) {
  return caseStudies.find((c) => c.slug === slug);
}
