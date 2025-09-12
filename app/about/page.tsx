import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SectionHeader } from "@/components/section-header";
import { Users, Target, Rocket } from "lucide-react";
import PageHeader from "@/components/page-header";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, our mission, and the team behind the product.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

const title = `About — ${siteConfig.name}`;

export default function AboutPage() {
  return (
    <main id="content" role="main">
      {/* Hero */}
      <PageHeader
        title={title}
        subTitle="We’re on a mission to help founders and teams build, launch, and scale SaaS products with speed and confidence — without reinventing the wheel."
      />

      {/* Mission */}
      <Container>
        <SectionHeader
          title="Our Mission"
          subTitle="What drives us every single day."
          badge="Mission"
          className="text-center"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="bg-muted/40 rounded-2xl p-6 shadow-sm transition hover:shadow-md">
            <Rocket className="h-8 w-8 text-cyan-500" />
            <h3 className="mt-4 text-lg font-semibold">Faster Launches</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Cut development time in half with production-ready templates built
              on modern best practices.
            </p>
          </div>
          <div className="bg-muted/40 rounded-2xl p-6 shadow-sm transition hover:shadow-md">
            <Target className="h-8 w-8 text-cyan-500" />
            <h3 className="mt-4 text-lg font-semibold">
              Design for Conversion
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Beautiful, accessible UI components crafted to maximize engagement
              and signups.
            </p>
          </div>
          <div className="bg-muted/40 rounded-2xl p-6 shadow-sm transition hover:shadow-md">
            <Users className="h-8 w-8 text-cyan-500" />
            <h3 className="mt-4 text-lg font-semibold">Built for Teams</h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Empower product teams to collaborate and deliver without the
              technical overhead.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mt-24 text-center">
          <SectionHeader
            title="Why We Exist"
            subTitle="Our story and the problem we set out to solve."
            badge="Story"
          />
          <p className="text-muted-foreground mx-auto mt-6 max-w-3xl leading-relaxed">
            We noticed founders wasting months on boilerplate setup instead of
            focusing on the unique value of their product. {siteConfig.name} was
            born to remove those roadblocks. Today, it’s trusted by early-stage
            startups, indie makers, and product teams to get from idea → launch
            faster than ever.
          </p>
        </section>
      </Container>
    </main>
  );
}
