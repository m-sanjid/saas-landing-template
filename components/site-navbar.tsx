"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence, Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";

export function SiteNavbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navLinkVariants: Variants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileItemVariants: Variants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      initial={false}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("sticky top-0 z-50 border-b", scrolled || menuOpen ? "bg-white dark:bg-gray-900" : "bg-transparent")}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium"
            aria-label={`${siteConfig.name} Home`}
          >
            <motion.div
              className="h-8 w-8 rounded-lg shadow-sm"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              style={{
                background:
                  "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
              }}
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.links.map((link, i) => {
            const isActive = isActiveLink(link.href);
            return (
              <motion.div
                key={link.href}
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={i}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-primary/10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="hidden items-center gap-2 md:flex">
                <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild className="group/btn rounded-full px-6 shadow-lg shadow-primary/20">
                    <Link href="/auth/signup">
                      <span className="ml-1">Get Started</span>
                      <IconArrowRight className="h-4 w-4 transition-all duration-200 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="relative z-50 rounded-full p-2 hover:bg-muted transition-colors duration-200 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX className="h-6 w-6 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 className="h-6 w-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-x-0 top-[60px] bottom-0 z-40 flex flex-col bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-1 flex-col gap-2 px-4 py-8">
              {siteConfig.nav.links.map((link, i) => {
                const isActive = isActiveLink(link.href);
                return (
                  <motion.div
                    key={link.href}
                    variants={mobileItemVariants}
                    custom={i}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition-all duration-200",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          className="h-2 w-2 rounded-full bg-primary"
                          layoutId="mobileActiveDot"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={mobileItemVariants}
                custom={siteConfig.nav.links.length}
                className="mt-auto space-y-4 px-4 pb-8"
              >
                <Button variant="outline" size="lg" className="w-full justify-center rounded-xl" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button size="lg" className="w-full justify-center rounded-xl shadow-lg shadow-primary/20" asChild>
                  <Link href="/auth/signup">
                    Get Started
                    <IconArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
