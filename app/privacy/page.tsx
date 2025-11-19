import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export default function PrivacyPage() {
  return (
    <main id="content" role="main" tabIndex={-1}>
      <PageHeader
        title="Privacy Policy"
        subTitle="How we collect, use, and protect your personal information."
      />

      <Container className="py-16">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-4xl">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, subscribe to our newsletter, or contact us for
            support.
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Name and email address</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>

          <h3>Usage Information</h3>
          <ul>
            <li>Log data and device information</li>
            <li>Usage patterns and preferences</li>
            <li>Performance data and error reports</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Develop new products and services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy.
          </p>

          <h3>Service Providers</h3>
          <p>
            We may share your information with trusted third-party service
            providers who assist us in operating our website, conducting
            business, or servicing you.
          </p>

          <h3>Legal Requirements</h3>
          <p>
            We may disclose your information if required to do so by law or in
            response to valid requests by public authorities.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            provide our services and fulfill the purposes outlined in this
            policy.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>

          <h2>7. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience and analyze usage patterns.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            Our service may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these third
            parties.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>10. International Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact
            us:
          </p>
          <ul>
            <li>Email: privacy@{siteConfig.name.toLowerCase()}.com</li>
            <li>Address: [Your Company Address]</li>
            <li>Phone: [Your Phone Number]</li>
          </ul>

          <div className="bg-muted mt-8 rounded-lg p-4">
            <p className="text-muted-foreground text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground text-sm">
              This privacy policy is effective as of the date listed above and
              will remain in effect except with respect to any changes in its
              provisions in the future.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
