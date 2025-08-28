import React from "react";
import { cn } from "@/lib/utils";
import { TextReveal } from "./text-animations";
import MotionDiv from "./motion-div";

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
  className?: string;
  badge?: string;
}

export const SectionHeader = ({
  title,
  subTitle,
  className,
  badge,
}: SectionHeaderProps) => {
  return (
    <header
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center",
        className,
      )}
    >
      {badge && (
        <MotionDiv
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-primary/10 mb-3 rounded-full px-2 py-1 text-xs font-medium tracking-wide backdrop-blur-md md:px-3"
        >
          {badge}
        </MotionDiv>
      )}
      <TextReveal
        text={title}
        className="text-3xl font-semibold text-balance md:text-4xl lg:text-[clamp(2.25rem,4vw,3rem)]"
        delayPerWord={0.05}
      />
      {subTitle && (
        <TextReveal
          text={subTitle}
          duration={0.4}
          delayPerWord={0.02}
          className="text-muted-foreground mt-4 max-w-2xl text-sm md:mt-5 md:text-base"
        />
      )}
    </header>
  );
};
