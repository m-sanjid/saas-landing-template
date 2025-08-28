"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";

export function FAQ() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Frequently asked"
        subTitle="Got Questions? We’ve Got Answers"
      />
      <div className="mt-6">
        <Accordion type="single" collapsible>
          {siteConfig.faq.map((item, idx) => (
            <AccordionItem value={`q-${idx}`} key={idx}>
              <AccordionTrigger className="text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
}
