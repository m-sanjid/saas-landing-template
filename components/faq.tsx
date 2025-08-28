"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h2 className="text-center text-3xl font-semibold text-balance md:text-4xl">
        Frequently asked
      </h2>
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
    </section>
  );
}
