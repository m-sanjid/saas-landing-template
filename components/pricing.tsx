"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";
import { IconCheck } from "@tabler/icons-react";
import { SlidingNumber } from "./ui/sliding-number";

export function Pricing() {
  const [yearly, setYearly] = React.useState(true);

  return (
    <SectionContainer>
      <SectionHeader
        badge="What we offer"
        title="Simple, Transparent Pricing."
        subTitle="Start free and upgrade as you grow. Cancel anytime."
      />

      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-10 flex items-center justify-center gap-3"
      >
        <Label
          htmlFor="billing"
          className={cn(
            "relative cursor-pointer rounded-full px-4 py-2 text-sm transition-colors",
            !yearly
              ? "bg-primary/10 font-semibold text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => setYearly(false)}
        >
          Monthly
        </Label>
        <Switch
          id="billing"
          checked={yearly}
          onCheckedChange={setYearly}
          aria-label="Billing"
        />
        <Label
          htmlFor="billing"
          className={cn(
            "relative cursor-pointer rounded-full px-4 py-2 text-sm transition-colors",
            yearly
              ? "bg-primary/10 font-semibold text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => setYearly(true)}
        >
          Yearly{" "}
          <span className="absolute -right-8 -top-4 rotate-12 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
            -20%
          </span>
        </Label>
      </motion.div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {siteConfig.pricing.map((plan, idx) => {
          const price = yearly ? plan.yearly : plan.monthly;
          const suffix = yearly ? "/year" : "/month";
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={cn(
                "relative",
                plan.popular && "md:-mt-4 md:mb-4"
              )}
            >
              {plan.popular && (
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-70 blur-sm" />
              )}
              <div
                className={cn(
                  "relative flex h-full flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
                  plan.popular ? "border-transparent bg-background" : "border-border",
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <span className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-medium text-white shadow-sm">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                  <AnimatePresence>
                    <motion.div
                      layout
                      className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tight inline-flex text-foreground">
                        $<SlidingNumber value={price} />
                      </span>
                      <motion.span
                        key={suffix}
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-medium text-muted-foreground">
                        {suffix}
                      </motion.span>
                    </motion.div>
                  </AnimatePresence>

                  <ul className="mt-8 space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-muted-foreground">
                        <IconCheck className="h-5 w-5 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    className={cn(
                      "w-full transition-all hover:scale-[1.02]",
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
