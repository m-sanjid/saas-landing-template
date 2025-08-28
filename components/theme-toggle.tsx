"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-full"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
          aria-hidden
        >
          {isDark ? (
            // Moon
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-foreground"
            >
              <path
                fill="currentColor"
                d="M20.354 15.354A9 9 0 0 1 8.646 3.646a7 7 0 1 0 11.708 11.708Z"
              />
            </svg>
          ) : (
            // Sun
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="text-foreground"
            >
              <path
                fill="currentColor"
                d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.05a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2.95a1 1 0 0 1 2 0V3a1 1 0 0 1-1 1Zm9 9a1 1 0 0 1-1-1h-1.05a1 1 0 1 1 0-2H20a1 1 0 0 1 0 2h-1Zm-14 0a1 1 0 0 1-1-1H3.95a1 1 0 0 1 0-2H4a1 1 0 0 1 0 2h-1Z"
              />
            </svg>
          )}
        </motion.span>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
