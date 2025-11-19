import type { Metadata } from "next";
import { Pricing } from "@/components/pricing";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: `Pricing — ${siteConfig.name}`,
  description: `Simple, transparent pricing for ${siteConfig.name}. No hidden fees, cancel anytime.`,
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

export default function PricingPage() {
  return (
    <main id="content" role="main">
      {/* Hero Section */}
      <PageHeader
        title="Simple pricing, built for growth"
        subTitle="Choose a plan that fits your stage. No hidden fees. Cancel or switch anytime."
      />

      {/* Pricing Component */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <Pricing />
      </section>

      {/* Trust Section */}
      <section className="bg-muted/30 border-t py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold">
            Trusted by startups & teams worldwide
          </h2>
          <p className="text-muted-foreground mt-2">
            From early-stage founders to growing SaaS businesses, we’ve got you
            covered.
          </p>

          {/* Placeholder logos or avatars */}
          <Brands />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="font-medium">Can I cancel anytime?</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Yes, you can cancel your subscription at any time. No hidden fees.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Do you offer discounts for students or startups?
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              We offer special discounts for early-stage startups and students —
              contact us for details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const Brands = () => {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6 opacity-80">
      {images.map((image) => (
        <div
          key={image}
          className="flex h-8 w-24 items-center justify-center overflow-hidden rounded border bg-white p-2"
        >
          <Image src={`/brand/${image}`} alt={image} width={100} height={100} />
        </div>
      ))}
    </div>
  );
};

const images = ["vercel.png", "logo2.png", "logo3.png"];
