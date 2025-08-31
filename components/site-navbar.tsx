"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth-provider";
import { UserDropdown } from "@/components/user-dropdown";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";

export function SiteNavbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const { user, isLoading } = useAuth();
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const logoVariants: Variants = {
    initial: { rotate: -10, opacity: 0, scale: 0.8 },
    animate: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
    hover: {
      rotate: [0, -5, 5, 0],
      scale: 1.05,
      transition: {
        rotate: { duration: 0.5, ease: "easeInOut" },
        scale: { duration: 0.2 },
      },
    },
    tap: { scale: 0.95 },
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
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
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
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "hsl(var(--background) / 0.8)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "data-[scrolled=true]:border-border sticky top-0 z-50 border-b border-transparent",
      )}
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
                onHoverStart={() => setHoveredLink(link.href)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="bg-primary/10 border-primary/20 absolute inset-0 rounded-md border"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover indicator */}
                  {hoveredLink === link.href && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className="bg-muted/30 absolute inset-0 rounded-md"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
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
            {!isLoading && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                {user ? (
                  <UserDropdown />
                ) : (
                  <div className="hidden items-center gap-2 md:flex">
                    <Button variant="secondary" size="sm" asChild>
                      <Link href="/auth/signin">Sign In</Link>
                    </Button>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button asChild className="group/btn">
                        <Link href="/auth/signup">
                          <span className="ml-1">Get Started</span>
                          <IconArrowRight className="h-4 w-4 transition-all duration-200 group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="hover:bg-muted relative rounded-lg p-2 transition-colors duration-200 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  layoutId="toggle-menu"
                  initial={{ y: 10, opacity: 0, filter: "blur(5px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 10, opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.2 }}
                >
                  <IconX className="text-foreground h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  layoutId="toggle-menu"
                  initial={{ y: -10, opacity: 0, filter: "blur(5px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -10, opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.2 }}
                >
                  <IconMenu2 className="text-foreground h-5 w-5" />
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
            className="border-border bg-background/95 overflow-hidden border-t backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
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
                        "relative flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-primary bg-primary/10 border-primary/20 border"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.div
                          className="bg-primary absolute right-3 h-2 w-2 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Auth Buttons */}
              <motion.div
                className="border-border/50 mt-4 space-y-3 border-t pt-4"
                variants={mobileItemVariants}
                custom={siteConfig.nav.links.length}
              >
                {!user ? (
                  <div className="flex justify-end gap-2">
                    <Button variant="secondary" asChild>
                      <Link href="/auth/signin">
                        <span className="ml-1">Sign In</span>
                      </Link>
                    </Button>
                    <Button asChild className="group/btn">
                      <Link href="/auth/signup">
                        <span className="ml-1">Get Started</span>
                        <IconArrowRight className="h-4 w-4 transition-all duration-200 group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <Button asChild>
                    <Link href="/dashboard">
                      <span className="ml-1">Dashboard</span>
                    </Link>
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
