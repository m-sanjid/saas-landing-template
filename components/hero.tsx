"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { TextReveal } from "./text-animations";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]); // parallax
  const float = {
    initial: { y: 0 },
    animate: { y: [0, -8, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(60rem 30rem at 50% -10%, color(display-p3 0.15 0.68 0.9 / 0.12), transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-16 pb-20 md:grid-cols-2 md:items-center md:gap-16 md:pt-24 md:pb-28">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="bg-background/60 text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur"
          >
            🚀 New • Premium SaaS Template
          </motion.p>

          {/* Headline */}
          <TextReveal
            className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
            text="Launch faster with a conversion-focused template"
            delayPerWord={0.08}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground max-w-xl text-pretty md:text-lg"
          >
            {siteConfig.description} Optimized for startups, SaaS, and
            entrepreneurs who want to move quickly with design-first best
            practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="px-6 py-5 text-base font-medium shadow-lg transition-transform hover:scale-[1.02]"
            >
              <a href="#pricing" aria-label="Get started with pricing plans">
                Get Started
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:border-foreground/60 px-6 py-5 text-base font-medium"
            >
              <a href="#features" aria-label="See all features of the template">
                See Features
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
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
          initial="initial"
          animate="animate"
          variants={float}
          className="bg-card/60 relative aspect-16/10 w-full overflow-hidden rounded-xl border p-2 shadow-xl backdrop-blur-lg"
          aria-label="Product preview mockup"
        >
          <div className="bg-muted/40 h-full w-full overflow-hidden rounded-md border shadow-inner">
            <motion.img
              src="/product-dashboard-mockup.png"
              alt="Dashboard preview of the SaaS product"
              className="h-full w-full rounded-md object-cover object-top"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Glass highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 -top-1 h-16 rounded-t-xl"
            style={{
              background:
                "linear-gradient(180deg, color(display-p3 1 1 1 / 0.4), color(display-p3 1 1 1 / 0))",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
