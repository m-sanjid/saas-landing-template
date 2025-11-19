import { siteConfig } from "@/lib/site-config";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";
import { AccordionGroup } from "./accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Lumen.",
};

export function FAQ() {
  return (
    <SectionContainer>
      <SectionHeader
        badge="FAQ"
        title="Frequently asked"
        subTitle="Got Questions? We’ve Got Answers"
      />
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-muted/40 bg-card/30 p-6 shadow-sm backdrop-blur-sm md:p-10">
        <AccordionGroup items={siteConfig.faq} />
      </div>
    </SectionContainer>
  );
}
