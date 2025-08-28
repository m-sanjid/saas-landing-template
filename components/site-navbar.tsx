"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export function SiteNavbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "hsl(var(--background) / 0.7)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "data-[scrolled=true]:border-border sticky top-0 z-50 border-b border-transparent",
      )}
      data-scrolled={scrolled}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
            aria-label={`${siteConfig.name} Home`}
          >
            <motion.div
              className="h-6 w-6 rounded-md"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
              }}
            />
            <span className="text-foreground font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground relative text-sm transition-colors"
              >
                {link.label}
                <motion.span
                  className="bg-foreground absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="#pricing">Get Started</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="hover:bg-muted rounded-md p-2 transition md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <Menu className="text-foreground h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-border bg-background overflow-hidden border-t px-4 py-3 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {siteConfig.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild>
                <Link href="#pricing">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
