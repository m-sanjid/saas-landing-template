"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "./container";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-background/50 shadow-2xl">
        {/* Animated background gradients */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse delay-1000" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-500 backdrop-blur-sm"
          >
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            <span>Limited time offer</span>
          </motion.div>

          <motion.h3
            className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to launch your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              next big idea?
            </span>
          </motion.h3>

          <motion.p
            className="mt-4 max-w-xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of developers building the future with our premium SaaS template.
            Start shipping in minutes, not months.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-muted-foreground/20 hover:bg-muted/50"
            >
              View Documentation
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
