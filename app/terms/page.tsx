import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function TermsPage() {
  return (
    <main id="content" role="main" tabIndex={-1}>
      <PageHeader
        title="Terms of Service"
        subTitle="Please read these terms carefully before using our service."
      />

      <Container className="py-16">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-4xl">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using {siteConfig.name}, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on {siteConfig.name} for
            personal, non-commercial transitory viewing only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on {siteConfig.name} are provided on an 'as is' basis.{" "}
            {siteConfig.name} makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall {siteConfig.name} or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on {siteConfig.name}, even if{" "}
            {siteConfig.name} or a {siteConfig.name} authorized representative
            has been notified orally or in writing of the possibility of such
            damage.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on {siteConfig.name} could include
            technical, typographical, or photographic errors. {siteConfig.name}{" "}
            does not warrant that any of the materials on its website are
            accurate, complete or current. {siteConfig.name} may make changes to
            the materials contained on its website at any time without notice.
          </p>

          <h2>6. Links</h2>
          <p>
            {siteConfig.name} has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by{" "}
            {siteConfig.name} of the site. Use of any such linked website is at
            the user's own risk.
          </p>

          <h2>7. Modifications</h2>
          <p>
            {siteConfig.name} may revise these terms of service for its website
            at any time without notice. By using this website you are agreeing
            to be bound by the then current version of these Terms of Service.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that state or location.
          </p>

          <div className="bg-muted mt-8 rounded-lg p-4">
            <p className="text-muted-foreground text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground text-sm">
              If you have any questions about these Terms of Service, please
              contact us at legal@{siteConfig.name.toLowerCase()}.com
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
