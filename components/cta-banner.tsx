"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div
        className="relative overflow-hidden rounded-xl border p-8 text-center md:p-12"
        style={{
          background:
            "linear-gradient(90deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
          color: "white",
        }}
      >
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
          <Button variant="secondary" size="lg" className="font-medium">
            Get Lumen
          </Button>
        </motion.div>
        {/* subtle pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.2) 0 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
    </section>
  );
}
