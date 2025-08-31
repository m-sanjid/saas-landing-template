"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { CtaBanner } from "./cta-banner";

export function SiteFooter() {
  return (
    <>
      <CtaBanner/>
    <footer className="border-t py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="h-8 w-8 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, var(--cyan-500, #0ea5e9), var(--brand-accent, #14b8a6))",
                }}
                aria-hidden
              />
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {siteConfig.socials.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="hover:text-foreground text-muted-foreground transition-colors"
                  aria-label={s.label}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/press" className="text-muted-foreground hover:text-foreground transition-colors">
                Press
              </Link>
            </nav>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/status" className="text-muted-foreground hover:text-foreground transition-colors">
                Status
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Support
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
