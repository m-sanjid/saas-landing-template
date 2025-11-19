import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import FlowForm from "@/components/flow-form";
import { IconBrandGithub, IconBrandX, IconMail } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Have a question, project idea, or just want to say hi? Contact the ${siteConfig.name} team.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <main id="content" role="main">
      <PageHeader
        title="Let’s build something together"
        subTitle="Got a project idea, collaboration request, or just want to connect? Fill out the form and we’ll get back to you within 1–2 business days."
      />

      <Container className="grid items-start gap-12 md:grid-cols-3 md:gap-4">
        <div className="p-1 md:col-span-2">
          <FlowForm />
        </div>

        <div className="m-1 w-full gap-6 rounded-2xl border p-4 md:col-span-1">
          <div>
            <h3 className="mb-2 text-lg font-medium">Other ways to connect</h3>
            <p className="text-muted-foreground text-sm">
              Not a fan of forms? Reach out directly via email or socials — we’d
              love to hear from you.
            </p>
          </div>

          <div className="text-muted-foreground space-y-6 text-sm">
            <a
              href={siteConfig.socials[3].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 px-2 py-3 transition-colors"
            >
              <IconMail className="h-4 w-4" /> {siteConfig.socials[3].label}
            </a>
            <a
              href={siteConfig.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 px-2 py-3 transition-colors"
            >
              <IconBrandX className="h-4 w-4" /> {siteConfig.socials[0].label}
            </a>
            <a
              href={siteConfig.socials[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary flex items-center gap-2 px-2 py-3 transition-colors"
            >
              <IconBrandGithub className="h-4 w-4" />{" "}
              {siteConfig.socials[1].label}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
