import { PageHeader } from "@/components/page-header";
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  Sparkles,
  BarChart,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <PageHeader title="Everything you need to scale faster" subTitle="Our platform combines powerful tools, seamless integrations, and beautiful design so your team can move from idea to launch — without friction." />

      {/* Core Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Zap className="h-8 w-8 text-cyan-500" />,
              title: "Blazing Fast",
              desc: "Optimized architecture and CDN-powered delivery ensures millisecond load times.",
            },
            {
              icon: <Shield className="h-8 w-8 text-cyan-500" />,
              title: "Enterprise-Grade Security",
              desc: "SOC2 compliant, GDPR-ready, and encrypted at every level.",
            },
            {
              icon: <Users className="h-8 w-8 text-cyan-500" />,
              title: "Collaboration Built In",
              desc: "Invite your whole team, assign roles, and ship projects together.",
            },
            {
              icon: <Sparkles className="h-8 w-8 text-cyan-500" />,
              title: "AI-Powered",
              desc: "Automations and smart suggestions help you save time and focus on growth.",
            },
            {
              icon: <BarChart className="h-8 w-8 text-cyan-500" />,
              title: "Analytics That Matter",
              desc: "Real-time insights and reporting dashboards tailored to your KPIs.",
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-cyan-500" />,
              title: "No-Code Customization",
              desc: "Drag-and-drop editor lets you design workflows without touching code.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl bg-neutral-50 p-6 shadow-sm transition hover:shadow-md dark:bg-neutral-900"
            >
              <div>{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="relative bg-gradient-to-br from-cyan-500 to-purple-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Designed for modern teams
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            From startups to enterprises, our tools adapt to your workflows and
            scale with your growth.
          </p>
        </div>
      </section>

      {/* Comparison / Why Us */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold">Why choose us?</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-neutral-50 p-6 shadow-sm dark:bg-neutral-900">
            <h3 className="text-xl font-semibold">Before</h3>
            <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-400">
              <li>❌ Slow and clunky workflows</li>
              <li>❌ Manual tasks eating your time</li>
              <li>❌ Data scattered across tools</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-indigo-50 p-6 shadow-md dark:bg-indigo-900/40">
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
              After
            </h3>
            <ul className="mt-4 space-y-3 text-neutral-800 dark:text-neutral-200">
              <li>✅ Speed and automation built-in</li>
              <li>✅ AI handles repetitive work</li>
              <li>✅ Unified dashboard for everything</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
