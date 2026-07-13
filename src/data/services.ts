import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const shapeTheManuscript: ServicePageData = {
  numeral: "I",
  number: "01",
  eyebrow: "Shape the Manuscript",
  title: "Shape the Manuscript",
  path: "/services/shape-the-manuscript",
  headline: "Find the book inside the draft.",
  intro:
    "Manuscript assessment, developmental editing, copyediting, and proofreading for authors who have a draft and need an honest, structural read before anything else happens.",
  tone: "paper",
  forWho: [
    "Authors with a complete or near-complete draft",
    "Authors unsure whether the manuscript is actually ready",
    "Authors who want an honest assessment before investing further",
    "Memoir, fiction, and narrative nonfiction authors",
  ],
  problem:
    "A finished draft is not the same as a ready manuscript. Structure, pacing, and clarity problems are usually invisible from inside the work. Someone outside it has to find them first.",
  included: [
    "Manuscript assessment with a full editorial letter",
    "Developmental editing for structure, pacing, and voice",
    "Copyediting for line-level correctness and consistency",
    "Proofreading as a final pre-production pass",
  ],
  notIncluded: [
    "Ghostwriting or writing chapters on the author's behalf",
    "Guaranteed acceptance by agents or publishers",
    "Unlimited rounds of revision",
    "Rewriting the manuscript into a different genre",
  ],
  deliverables: [
    "Editorial assessment letter (PDF)",
    "Tracked-changes developmental edit",
    "Copyedited manuscript file",
    "Proofread final manuscript file",
  ],
  timeline: "6 to 12 weeks, depending on manuscript length and current stage.",
  revisions: "One round of author revisions per editorial pass is included.",
  clientResponsibilities: [
    "Submit a complete draft to begin",
    "Respond to editorial notes within agreed windows",
    "Make the final creative call on suggested changes",
  ],
  investment:
    "Starting at $2,200 for a manuscript assessment. Full developmental and copyedit packages are scoped after assessment, based on word count.",
  addOns: ["Sensitivity read", "Additional revision rounds", "Expedited timeline"],
  processSteps: [
    { label: "Submit", note: "Send the complete manuscript and your goals for it." },
    { label: "Assess", note: "We read closely and return an honest editorial letter." },
    { label: "Edit", note: "Structural and line-level editing, tracked and explained." },
    { label: "Revise", note: "You review, we discuss, the manuscript is finalized." },
  ],
  nextHref: "/services/build-the-edition",
  nextLabel: "give the words a form worthy of them",
};

export const buildTheEdition: ServicePageData = {
  numeral: "II",
  number: "02",
  eyebrow: "Build the Edition",
  title: "Build the Edition",
  path: "/services/build-the-edition",
  headline: "Give the words a form worthy of them.",
  intro:
    "Cover direction, interior design, print and ebook formatting, ISBN and metadata setup, and production quality control for authors with an edited manuscript ready to become a real book.",
  tone: "black",
  forWho: [
    "Authors with an edited manuscript ready for design",
    "Authors self-publishing who want professional-grade files",
    "Authors who want KDP and IngramSpark set up correctly the first time",
  ],
  problem:
    "A Word document is not a book. A professional edition requires dozens of design and production decisions most authors have never made before. Most of them are invisible until they go wrong.",
  included: [
    "Cover direction and design coordination with a vetted designer",
    "Interior book design for print",
    "Print formatting to specification",
    "Ebook formatting (EPUB and MOBI)",
    "ISBN guidance and registration support",
    "Metadata development for retail listings",
    "KDP account and listing setup",
    "IngramSpark account and listing setup",
    "Production quality control before files go live",
  ],
  notIncluded: [
    "Original cover illustration or artwork (coordinated, not created in-house)",
    "Translation services",
    "Audiobook production",
  ],
  deliverables: [
    "Print-ready interior PDF",
    "Formatted ebook files",
    "Print and ebook cover files",
    "ISBN and metadata sheet",
    "Live KDP and IngramSpark listings",
  ],
  timeline: "8 to 14 weeks, depending on design complexity and revision rounds.",
  revisions: "Two rounds of design revisions are included per deliverable.",
  clientResponsibilities: [
    "Approve cover direction before design proceeds",
    "Provide author bio, photo, and metadata inputs",
    "Give final sign-off before files go live",
  ],
  investment:
    "Starting at $4,800 for a complete interior, cover, and platform setup package.",
  addOns: ["Hardcover formatting", "Additional interior design styles", "Expedited production"],
  processSteps: [
    { label: "Design", note: "Cover direction and interior grid are established." },
    { label: "Produce", note: "Files are built to exact print and platform spec." },
    { label: "Review", note: "You approve proofs before anything goes live." },
    { label: "Publish", note: "ISBNs, metadata, KDP, and IngramSpark go live." },
  ],
  nextHref: "/services/enter-the-market",
  nextLabel: "help the finished book meet its readers",
};

export const enterTheMarket: ServicePageData = {
  numeral: "III",
  number: "03",
  eyebrow: "Enter the Market",
  title: "Enter the Market",
  path: "/services/enter-the-market",
  headline: "Help the finished book meet the people it was written for.",
  intro:
    "Launch strategy, retailer optimization, author websites, and marketing materials for authors with a finished, production-ready book approaching launch.",
  tone: "oxblood",
  forWho: [
    "Authors with a finished, production-ready book approaching launch",
    "Authors who want a coordinated launch instead of guessing",
    "Authors who need a website and marketing materials before publication day",
  ],
  problem:
    "A published book is not the same as a discovered one. Retail listings, metadata, and launch timing decide whether readers ever find it. None of that happens automatically.",
  included: [
    "Book-launch strategy and calendar",
    "Retailer listing optimization",
    "Author website design and build",
    "Marketing materials (one-sheet, email templates, social graphics)",
    "Metadata refinement for discoverability",
    "Reader-facing positioning and messaging",
    "Ongoing author support after launch",
  ],
  notIncluded: [
    "Paid advertising spend (media buys are the author's cost; we can advise)",
    "Guaranteed sales or bestseller status",
    "Day-to-day social media account management",
  ],
  deliverables: [
    "Launch plan and calendar",
    "Optimized retail listings",
    "Author website",
    "Launch marketing asset set",
    "30-day post-launch support window",
  ],
  timeline: "4 to 8 weeks leading up to the launch date.",
  revisions: "One round of revisions per asset is included.",
  clientResponsibilities: [
    "Confirm the launch date early",
    "Provide access to relevant author platforms",
    "Participate actively in launch-week promotion",
  ],
  investment:
    "Starting at $3,200 for launch strategy, an author website, and a marketing asset package.",
  addOns: [
    "Extended post-launch support",
    "Additional marketing assets",
    "Paid ad campaign management via a referred partner",
  ],
  processSteps: [
    { label: "Plan", note: "A launch calendar built around your actual timeline." },
    { label: "Position", note: "Retail listings and messaging built for readers." },
    { label: "Build", note: "Your author website and marketing assets go live." },
    { label: "Launch", note: "The book meets the readers it was written for." },
  ],
  nextHref: "/contact",
  nextLabel: "start the conversation",
};
