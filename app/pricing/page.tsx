import type { Metadata } from "next";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { Pricing } from "@/components/pricing";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Pricing — ${siteConfig.name}`,
  description: `Simple, transparent pricing for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

export default function PricingPage() {
  return (
    <>
      <SiteNavbar />
      <main id="content" role="main">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
            Pricing
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </section>
        <Pricing />
      </main>
      <SiteFooter />
    </>
  );
}
