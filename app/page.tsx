import { SiteNavbar } from "@/components/site-navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main id="content" role="main" tabIndex={-1}>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  );
}
