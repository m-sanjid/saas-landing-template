import type { Metadata } from "next";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Contact the ${siteConfig.name} team.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main id="content" role="main" className="mx-auto max-w-5xl px-6 py-16">
        <header className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
            Get in touch
          </h1>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Fill out the form and we’ll get back to you within 1–2 business
            days.
          </p>
        </header>
        <section className="mt-8">
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
