"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { SectionContainer } from "./container";
import { MouseEvent } from "react";

const items = [
  {
    title: "Performance-first",
    desc: "Optimized for Core Web Vitals with lazy-loaded images, Next.js optimizations, and modern best practices.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      >
        <path d="M12 2v4" />
        <path d="m16.2 7.8 2.9-2.9" />
        <path d="M18 12h4" />
        <path d="m16.2 16.2 2.9 2.9" />
        <path d="M12 18v4" />
        <path d="m4.9 19.1 2.9-2.9" />
        <path d="M2 12h4" />
        <path d="m4.9 4.9 2.9 2.9" />
      </svg>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Accessible by default",
    desc: "WCAG AA contrast, full keyboard navigation, and semantic markup. No compromises.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    className: "md:row-span-2",
  },
  {
    title: "Motion-first",
    desc: "Smooth reveals, parallax scroll, and micro-interactions designed to boost engagement.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    className: "",
  },
  {
    title: "Composable UI",
    desc: "Built with shadcn/ui primitives, Tailwind, and TypeScript for flexible, future-proof components.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
    className: "",
  },
];

function FeatureCard({ item }: { item: typeof items[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(item.className, "group relative")}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/50 to-purple-500/50 opacity-0 transition duration-300 group-hover:opacity-100" />
      <Card className="relative h-full overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm transition-colors hover:bg-card/80">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(14, 165, 233, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        <CardHeader className="relative z-10 flex flex-row items-center gap-4 pb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:text-primary">
            {item.icon}
          </div>
          <CardTitle className="text-lg font-semibold tracking-tight">
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 text-muted-foreground">
          {item.desc}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Features() {
  return (
    <SectionContainer>
      <SectionHeader
        title="Everything you need to launch & scale"
        subTitle="Crafted with a premium SaaS aesthetic: minimal, modern, and conversion-focused. Built to impress from day one."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <FeatureCard key={i} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
}
