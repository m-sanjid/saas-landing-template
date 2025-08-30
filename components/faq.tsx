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
      <div className="mt-6 max-w-4xl mx-auto">
        <AccordionGroup items={siteConfig.faq} />
      </div>
    </SectionContainer>
  );
}
