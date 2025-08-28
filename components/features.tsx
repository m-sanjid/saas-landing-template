"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Performance-first",
    desc: "Optimized for Core Web Vitals with image lazy-loading and modern best practices.",
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
    desc: "WCAG AA contrast, keyboard navigation, and screen reader friendly labels.",
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
    desc: "Smooth reveals, scroll-linked parallax, and micro-interactions that convert.",
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
    desc: "Clean, reusable components with TypeScript types and shadcn/ui primitives.",
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
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold text-balance md:text-4xl"
        >
          Everything you need to launch
        </motion.h2>
        <p className="text-muted-foreground mt-3 md:text-lg">
          Built with a premium SaaS aesthetic: minimal, modern, and
          conversion-focused.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={cn(item.className)}
          >
            <Card className="group bg-card/60 h-full border backdrop-blur transition will-change-transform hover:shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-md"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
                  }}
                >
                  {item.icon}
                </div>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {item.desc}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
