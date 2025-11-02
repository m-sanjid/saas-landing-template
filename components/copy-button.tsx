"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export const CopyButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy code");
    }
  };

  return (
    <motion.button
      onClick={handleCopyCode}
      aria-label="Copy code"
      layout
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "group absolute right-3 top-6 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-primary/10 backdrop-blur-md transition-colors hover:border-border hover:bg-primary/20 active:scale-[0.97]",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isCopied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-green-500"
          >
            <IconCheck className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-muted-foreground group-hover:text-primary"
          >
            <IconCopy className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
