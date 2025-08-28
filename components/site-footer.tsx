"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div
            className="h-6 w-6 rounded-md"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-primary, #0ea5e9), var(--brand-accent, #14b8a6))",
            }}
            aria-hidden
          />
          <span className="font-semibold">{siteConfig.name}</span>
        </div>
        <nav className="text-muted-foreground flex items-center gap-5 text-sm">
          {siteConfig.nav.links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="text-muted-foreground flex items-center gap-3 text-sm">
          {siteConfig.socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="hover:text-foreground"
              aria-label={s.label}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground mx-auto mt-6 max-w-6xl px-4 text-center text-xs">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
