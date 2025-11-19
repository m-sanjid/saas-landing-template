import React from "react";
import { cn } from "@/lib/utils";
import { TextReveal } from "./text-animations";

export function PageHeader({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) {
  return (
    <div className="relative overflow-hidden mask-t-from-95% mask-b-from-90% py-10">
      <div className="absolute -right-20 -bottom-20 h-80 w-20 bg-sky-500 blur-3xl dark:opacity-60"></div>
      <div className="absolute -bottom-20 -left-20 h-80 w-20 bg-sky-500 blur-3xl dark:opacity-60"></div>
      <div className="absolute inset-x-0 -bottom-0 mx-auto h-4 w-1/2 bg-sky-500 blur-3xl dark:opacity-60"></div>
      <div
        className={cn(
          "mx-auto max-w-5xl flex-col items-start justify-center gap-2 px-4 py-16 md:py-20",
          className,
        )}
      >
        <div>
          <TextReveal
            text={title}
            className="block text-4xl font-bold tracking-tight md:text-5xl"
          />
        </div>

        <TextReveal
          duration={0.4}
          delayPerWord={0.02}
          text={subTitle}
          className="text-muted-foreground mt-4 mr-auto block max-w-2xl leading-relaxed text-pretty"
        />
      </div>
    </div>
  );
}
