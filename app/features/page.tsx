import type { Metadata } from "next";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Features } from "@/components/features";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Features — ${siteConfig.name}`,
  description: `Explore the core features that make ${siteConfig.name} a great foundation for your SaaS.`,
  alternates: { canonical: `${siteConfig.url}/features` },
};

export default function FeaturesPage() {
  return (
    <>
      <SiteNavbar />
      <main id="content" role="main" className="px-0">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
            All the essentials
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Designed for real apps: responsive UI, accessibility, great
            defaults, and extensible components.
          </p>
        </section>
        <Features />
      </main>
      <SiteFooter />
    </>
  );
}
