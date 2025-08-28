"use client";

import { motion, useAnimationControls } from "framer-motion";

const testimonials = [
  {
    name: "Ava M.",
    role: "Founder, Flux",
    quote:
      "We launched in days, not weeks. The attention to detail is incredible and it converts.",
  },
  {
    name: "Noah T.",
    role: "CTO, Prism",
    quote:
      "Performance and polish. This template helped us ship faster with confidence.",
  },
  {
    name: "Liam K.",
    role: "PM, Nova",
    quote: "Clean, modern, and thoughtfully animated. Our users love the UX.",
  },
  {
    name: "Sophia R.",
    role: "Designer, Halo",
    quote:
      "Beautiful defaults and easy to customize. It feels premium out of the box.",
  },
];

function Row({ reversed = false }: { reversed?: boolean }) {
  const controls = useAnimationControls();

  const base = {
    animate: {
      x: reversed ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        duration: 18,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  return (
    <motion.div
      className="flex gap-4 py-2"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start(base.animate)}
      animate={controls}
      initial={false}
      {...base}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <figure
          key={i}
          className="bg-card/60 max-w-sm min-w-[320px] flex-1 rounded-lg border p-4 text-sm shadow-sm backdrop-blur"
        >
          <blockquote className="text-pretty">“{t.quote}”</blockquote>
          <figcaption className="text-muted-foreground mt-3">
            <span className="text-foreground font-medium">{t.name}</span> —{" "}
            {t.role}
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-balance md:text-4xl">
          What customers say
        </h2>
        <p className="text-muted-foreground mt-3 md:text-lg">
          Trusted by founders, designers, and engineers to ship high-quality
          SaaS faster.
        </p>
      </div>

      <div className="mt-8 overflow-hidden">
        <Row />
        <Row reversed />
      </div>
    </section>
  );
}
