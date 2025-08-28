"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]); // subtle parallax

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 50% -10%, color(display-p3 0.15 0.68 0.9 / 0.15), transparent 60%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-16 md:grid-cols-2 md:items-center md:gap-16 md:pt-20 md:pb-24">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="bg-background/50 text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur"
          >
            🚀 New • Premium SaaS Template
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            Launch{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
              }}
            >
              faster
            </span>{" "}
            with a conversion-focused template
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-xl text-pretty md:text-lg"
          >
            {siteConfig.description} Optimized for startups, SaaS, and
            entrepreneurs who want to move quickly with design-first best
            practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="px-6 py-5 text-base font-medium"
            >
              <a href="#pricing" aria-label="Get started with pricing plans">
                Get Started
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-6 py-5 text-base font-medium"
            >
              <a href="#features" aria-label="See all features of the template">
                See Features
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-muted-foreground mt-4 flex items-center gap-4 text-sm"
          >
            <span>⭐ Trusted by 1,000+ developers</span>
            <span className="hidden md:inline">•</span>
            <span>⚡ 100% production ready</span>
          </motion.div>
        </div>

        {/* Right Content (Mockup) */}
        <motion.div
          style={{ y }}
          className="bg-card/50 relative aspect-16/10 w-full overflow-hidden rounded-xl border p-2 shadow-sm backdrop-blur-lg"
          aria-label="Product preview mockup"
        >
          <div className="bg-muted/30 h-full w-full overflow-hidden rounded-md border">
            <img
              src="/product-dashboard-mockup.png"
              alt="Dashboard preview of the SaaS product"
              className="h-full w-full rounded-md object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Glass highlight effect */}
          <div
            className="pointer-events-none absolute inset-x-0 -top-1 h-16 rounded-t-xl"
            style={{
              background:
                "linear-gradient(180deg, color(display-p3 1 1 1 / 0.35), color(display-p3 1 1 1 / 0))",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
