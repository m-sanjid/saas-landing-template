import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { SectionContainer } from "./container";
import { SectionHeader } from "./section-header";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ava M.",
    role: "Founder, Flux",
    quote:
      "We launched in days, not weeks. The attention to detail is incredible and it converts.",
    initials: "AM",
  },
  {
    name: "Noah T.",
    role: "CTO, Prism",
    quote:
      "Performance and polish. This template helped us ship faster with confidence.",
    initials: "NT",
  },
  {
    name: "Liam K.",
    role: "PM, Nova",
    quote: "Clean, modern, and thoughtfully animated. Our users love the UX.",
    initials: "LK",
  },
  {
    name: "Sophia R.",
    role: "Designer, Halo",
    quote:
      "Beautiful defaults and easy to customize. It feels premium out of the box.",
    initials: "SR",
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
        <Card
          key={i}
          className="bg-card/40 max-w-sm min-w-[320px] flex-1 rounded-xl border-muted/40 p-6 text-sm shadow-sm backdrop-blur-md hover:bg-card/60 transition-colors"
        >
          <blockquote className="text-pretty text-base leading-relaxed">
            “{t.quote}”
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-muted/40">
              <AvatarImage src={`https://avatar.vercel.sh/${t.name}`} />
              <AvatarFallback>{t.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-foreground font-medium">{t.name}</span>
              <span className="text-muted-foreground text-xs">{t.role}</span>
            </div>
          </div>
        </Card>
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

      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Row />
        <Row reversed />
      </div>
    </SectionContainer>
  );
}
