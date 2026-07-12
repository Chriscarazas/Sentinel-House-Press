import { Seo } from "@/components/Seo";
import { Hero } from "@/components/home/Hero";
import { UncomfortableTruth } from "@/components/home/UncomfortableTruth";
import { FalseChoice } from "@/components/home/FalseChoice";
import { Pathways } from "@/components/home/Pathways";
import { ProcessSequence } from "@/components/home/ProcessSequence";
import { WhatRemainsYours } from "@/components/home/WhatRemainsYours";
import { BooksInTheHouse } from "@/components/home/BooksInTheHouse";
import { FoundingStory } from "@/components/home/FoundingStory";
import { SentinelStandard } from "@/components/home/SentinelStandard";
import { BestFitAuthors } from "@/components/home/BestFitAuthors";
import { FinalInvitation } from "@/components/home/FinalInvitation";

export function Home() {
  return (
    <>
      <Seo
        bareTitle
        title="Sentinel House Press — Editorial, Design & Publishing Studio"
        description="Sentinel House Press is a founder-led publishing studio in Plymouth, Massachusetts helping independent authors edit, design, produce, and publish professional books without surrendering their rights, royalties, or voice."
        path="/"
      />
      <Hero />
      <UncomfortableTruth />
      <FalseChoice />
      <Pathways />
      <ProcessSequence />
      <WhatRemainsYours />
      <BooksInTheHouse />
      <FoundingStory />
      <SentinelStandard />
      <BestFitAuthors />
      <FinalInvitation />
    </>
  );
}
