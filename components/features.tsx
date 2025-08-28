"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { SectionContainer } from "./container";

const items = [
  {
    title: "Performance-first",
    desc: "Optimized for Core Web Vitals with lazy-loaded images, Next.js optimizations, and modern best practices.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 10V7h-2v7h6v-2h-4Z"
        />
      </svg>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Accessible by default",
    desc: "WCAG AA contrast, full keyboard navigation, and semantic markup. No compromises.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <path
          fill="currentColor"
          d="M12 4a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 4Zm-5 8h10v2H7v-2Zm-3 5h16v2H4v-2Z"
        />
      </svg>
    ),
    className: "md:row-span-2",
  },
  {
    title: "Motion-first",
    desc: "Smooth reveals, parallax scroll, and micro-interactions designed to boost engagement.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <path fill="currentColor" d="M4 6h16v2H4zm0 5h10v2H4zm0 5h7v2H4z" />
      </svg>
    ),
    className: "",
  },
  {
    title: "Composable UI",
    desc: "Built with shadcn/ui primitives, Tailwind, and TypeScript for flexible, future-proof components.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="text-foreground"
      >
        <path
          fill="currentColor"
          d="M3 3h8v8H3zM13 13h8v8h-8zM13 3h8v8h-8zM3 13h8v8H3z"
        />
      </svg>
    ),
    className: "",
  },
];

export function Features() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Everything you need to launch & scale"
        subTitle="Crafted with a premium SaaS aesthetic: minimal, modern, and conversion-focused. Built to impress from day one."
      />

      {/* Features Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(item.className)}
          >
            <Card className="group bg-card/60 relative h-full border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="from-brand-primary/10 to-brand-accent/10 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
              <CardHeader className="relative z-10 flex flex-row items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="text-background flex h-10 w-10 items-center justify-center rounded-md shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
                  }}
                >
                  {item.icon}
                </motion.div>
                <CardTitle className="text-foreground text-base font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                {item.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
