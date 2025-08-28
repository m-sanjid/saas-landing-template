export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string };

export type PricingPlan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
};

export const siteConfig = {
  name: "Lumen",
  description:
    "Launch faster with a premium, modern SaaS template. Built for performance, conversions, and customization.",
  url: "https://example.com",
  ogImage: "/open-graph-preview.png",
  brand: {
    // Color system: 1 primary + neutrals + 1 accent (max 5)
    primary: "#0ea5e9", // sky-500
    primaryDark: "#0284c7", // sky-600
    accent: "#14b8a6", // teal-500
    // neutrals are provided via theme tokens
  },
  nav: {
    logo: "Lumen",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ] as NavLink[],
  },
  socials: [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ] as SocialLink[],
  pricing: [
    {
      name: "Starter",
      tagline: "For personal projects",
      monthly: 12,
      yearly: 120,
      features: ["All core features", "Email support", "1 project"],
      ctaLabel: "Get Starter",
    },
    {
      name: "Growth",
      tagline: "For small teams",
      monthly: 29,
      yearly: 290,
      features: [
        "Everything in Starter",
        "Priority support",
        "3 team members",
        "Advanced analytics",
      ],
      ctaLabel: "Choose Growth",
      popular: true,
    },
    {
      name: "Scale",
      tagline: "For growing businesses",
      monthly: 79,
      yearly: 790,
      features: [
        "Everything in Growth",
        "SLA & SSO",
        "Unlimited members",
        "Custom integrations",
      ],
      ctaLabel: "Scale with Lumen",
    },
  ] as PricingPlan[],
  faq: [
    {
      q: "Is this template production-ready?",
      a: "Yes—built with Next.js, TypeScript, Tailwind, shadcn/ui, and Framer Motion. Accessible, responsive, and Core Web Vitals friendly.",
    },
    {
      q: "Can I customize branding?",
      a: "Absolutely. Update site-config.ts and swap assets. Tailwind and tokens make theme updates straightforward.",
    },
    {
      q: "Do you offer updates?",
      a: "Yes—lifetime updates for bug fixes, performance improvements, and compatibility changes.",
    },
    {
      q: "Can I use this commercially?",
      a: "Yes—use for client projects or your SaaS. Resale of the template itself is not allowed.",
    },
  ],
};
