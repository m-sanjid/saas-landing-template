"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CtaBanner } from "./cta-banner";

export function SiteFooter() {
  return (
    <>
      <CtaBanner />
      <footer className="border-t bg-card/30 pt-16 pb-8 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
            {/* Brand Section */}
            <div className="space-y-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div
                  className="h-8 w-8 rounded-lg shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
                  }}
                  aria-hidden
                />
                <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-9 bg-background/50"
                  />
                  <Button size="sm" className="h-9">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Product</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link
                  href="/features"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/press"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Legal</h3>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                {siteConfig.socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={s.label}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
