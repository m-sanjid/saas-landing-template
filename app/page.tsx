import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";

export default function HomePage() {
  return (
    <main id="content" role="main" tabIndex={-1}>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CtaBanner />
    </main>
  );
}
