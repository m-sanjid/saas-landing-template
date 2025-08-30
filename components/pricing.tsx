"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";
import {
  IconCheck,
  IconChecklist,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export function Pricing() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <SectionContainer>
      <SectionHeader
        badge="What we offer"
        title="Simple, Transparent Pricing."
        subTitle="Start free and upgrade as you grow. Cancel anytime."
      />

      <div className="mt-6 flex items-center justify-center gap-3">
        <Label htmlFor="billing" className={cn(!yearly && "text-foreground")}>
          Monthly
        </Label>
        <Switch
          id="billing"
          checked={yearly}
          onCheckedChange={setYearly}
          aria-label="Billing"
        />
        <Label htmlFor="billing" className={cn(yearly && "text-foreground")}>
          Yearly{" "}
          <span className="bg-secondary ml-1 rounded-sm px-1.5 py-0.5 text-xs">
            Save 2 mo
          </span>
        </Label>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {siteConfig.pricing.map((plan, idx) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const suffix = yearly ? "/year" : "/month";
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={cn(plan.popular && "md:translate-y-[-8px]")}
            >
              <div
                className={cn(
                  "bg-card/60 flex h-full flex-col justify-between gap-4 rounded-2xl border p-2 backdrop-blur transition",
                  plan.popular && "ring-1 ring-(--cyan-500,#0ea5e9)",
                )}
              >
                <div className="bg-primary/5 relative rounded-lg border p-2 backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <span>{plan.name}</span>
                    {plan.popular && (
                      <span className="rounded-full border bg-cyan-500 px-2 py-0.5 text-xs font-medium tracking-tight text-white">
                        Most popular
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-neutral-500 dark:text-neutral-300">
                    {plan.tagline}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-semibold tracking-tight">
                        ${price}
                      </span>
                      <span className="pb-1 text-sm text-neutral-500 dark:text-neutral-300">
                        {suffix}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="grid gap-2 p-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 rounded-[4px]">
                        <IconCircleCheckFilled className="h-4 w-4 text-cyan-500" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button className="w-full">{plan.ctaLabel}</Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
