import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import PageHeader from "@/components/page-header";

export default function CookiesPage() {
  return (
    <main id="content" role="main" tabIndex={-1}>
      <PageHeader
        title="Cookie Policy"
        subTitle="How we use cookies and similar technologies on our website."
      />

      <Container className="py-16">
        <div className="prose prose-gray dark:prose-invert mx-auto max-w-4xl">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you
            visit our website. They help us provide you with a better experience
            and allow us to improve our site.
          </p>

          <h2>How We Use Cookies</h2>
          <p>We use cookies for several purposes:</p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly.
            They enable basic functions like page navigation, access to secure
            areas, and form submissions.
          </p>

          <h3>Performance Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our
            website by collecting and reporting information anonymously. This
            helps us improve our website's performance.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization,
            such as remembering your preferences and settings.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how our website is used and
            to improve our services. This information is collected anonymously.
          </p>

          <h2>Types of Cookies We Use</h2>

          <h3>Session Cookies</h3>
          <p>
            These cookies are temporary and are deleted when you close your
            browser. They are used to maintain your session while you browse our
            website.
          </p>

          <h3>Persistent Cookies</h3>
          <p>
            These cookies remain on your device for a set period or until you
            delete them. They help us remember your preferences and settings.
          </p>

          <h3>Third-Party Cookies</h3>
          <p>
            Some cookies are placed by third-party services that appear on our
            pages. These services may include analytics, advertising, and social
            media platforms.
          </p>

          <h2>Specific Cookies We Use</h2>

          <h3>Authentication Cookies</h3>
          <ul>
            <li>next-auth.session-token - Manages your login session</li>
            <li>next-auth.csrf-token - Protects against CSRF attacks</li>
          </ul>

          <h3>Analytics Cookies</h3>
          <ul>
            <li>_ga - Google Analytics tracking</li>
            <li>_gid - Google Analytics session tracking</li>
            <li>_gat - Google Analytics throttling</li>
          </ul>

          <h3>Preference Cookies</h3>
          <ul>
            <li>theme - Remembers your theme preference</li>
            <li>language - Remembers your language preference</li>
          </ul>

          <h2>Managing Your Cookie Preferences</h2>
          <p>You can control and manage cookies in several ways:</p>

          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to manage cookies through their
            settings. You can:
          </p>
          <ul>
            <li>View what cookies are stored on your device</li>
            <li>Delete cookies individually or all at once</li>
            <li>Block cookies from specific websites</li>
            <li>Block third-party cookies</li>
          </ul>

          <h3>Our Cookie Banner</h3>
          <p>
            When you first visit our website, you'll see a cookie banner that
            allows you to accept or decline non-essential cookies.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use several third-party services that may place cookies on your
            device:
          </p>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to understand how our website is used.
            Google Analytics uses cookies to collect information about your use
            of our website.
          </p>

          <h3>Social Media</h3>
          <p>
            Social media platforms may place cookies when you interact with
            social media features on our website.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this cookie policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact
            us:
          </p>
          <ul>
            <li>Email: privacy@{siteConfig.name.toLowerCase()}.com</li>
            <li>Subject: Cookie Policy Inquiry</li>
          </ul>

          <div className="bg-muted mt-8 rounded-lg p-4">
            <p className="text-muted-foreground text-sm">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            <p className="text-muted-foreground text-sm">
              This cookie policy is effective as of the date listed above and
              will remain in effect except with respect to any changes in its
              provisions in the future.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
