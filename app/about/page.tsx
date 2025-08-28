import type { Metadata } from "next";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, our mission, and the team behind the product.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main id="content" role="main" className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
          About {siteConfig.name}
        </h1>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          {siteConfig.name} is a premium SaaS starter built for speed,
          accessibility, and conversion. It ships with modern tooling and best
          practices so you can focus on your product.
        </p>
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Our mission</h2>
          <p className="leading-relaxed">
            Empower teams to launch faster with beautiful, accessible, and
            performance-minded templates.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
