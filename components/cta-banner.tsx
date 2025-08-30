"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "./container";

export function CtaBanner() {
  return (
    <SectionContainer>
      <div className="relative overflow-hidden rounded-xl border">
        {/* Blurred radial gradients */}
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-radial from-sky-400 via-cyan-500/70 to-transparent opacity-70 blur-3xl dark:opacity-20" />
        <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-radial from-sky-400 via-cyan-500/70 to-transparent opacity-70 blur-3xl dark:opacity-20" />

        {/* Foreground content */}
        <div className="relative z-10 h-full w-full bg-white/5 p-8 text-center md:p-12 dark:backdrop-blur-md">
          <motion.h3
            className="text-2xl font-semibold text-balance md:text-3xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Ready to launch faster?
          </motion.h3>
          <motion.p
            className="mt-2 opacity-90 md:text-lg"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Ship a premium experience today—no compromises.
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <Button
              variant="secondary"
              size="lg"
              className="border border-cyan-500/50 bg-cyan-500/20 font-bold backdrop-blur-lg"
            >
              Get Lumen
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
