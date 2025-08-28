"use client";

import { motion, Variants } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delayPerWord?: number;
  duration?: number;
}

export const TextReveal = ({
  text,
  delayPerWord = 0.1,
  duration = 0.5,
  className = "",
}: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * delayPerWord,
            duration: duration,
            ease: "easeOut",
          }}
          className="mr-1 inline-block whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
