import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";

const testimonials = [
  {
    name: "Ava M.",
    role: "Founder, Flux",
    quote:
      "We launched in days, not weeks. The attention to detail is incredible and it converts.",
  },
  {
    name: "Noah T.",
    role: "CTO, Prism",
    quote:
      "Performance and polish. This template helped us ship faster with confidence.",
  },
  {
    name: "Liam K.",
    role: "PM, Nova",
    quote: "Clean, modern, and thoughtfully animated. Our users love the UX.",
  },
  {
    name: "Sophia R.",
    role: "Designer, Halo",
    quote:
      "Beautiful defaults and easy to customize. It feels premium out of the box.",
  },
];

function Row({ reversed = false }: { reversed?: boolean }) {
  return (
    <InfiniteSlider
      speed={18}
      speedOnHover={0.2}
      reverse={reversed}
      className="my-4"
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <figure
          key={i}
          className="bg-card/60 max-w-sm min-w-[320px] flex-1 rounded-lg border p-4 text-sm shadow-sm backdrop-blur"
        >
          <blockquote className="text-pretty">“{t.quote}”</blockquote>
          <figcaption className="text-muted-foreground mt-3">
            <span className="text-foreground font-medium">{t.name}</span> —{" "}
            {t.role}
          </figcaption>
        </figure>
      ))}
    </InfiniteSlider>
  );
}

export function Testimonials() {
  return (
    <SectionContainer>
      <SectionHeader
        title="What customers say"
        subTitle="Trusted by founders, designers, and engineers to ship high-quality SaaS faster."
        badge="Trusted by 1,000+ developers"
      />

      <div className="mt-8 overflow-hidden mask-r-from-95% mask-l-from-95%">
        <Row />
        <Row reversed />
      </div>
    </SectionContainer>
  );
}
