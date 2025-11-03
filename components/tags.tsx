import React from "react";
import { cn } from "@/lib/utils";

const Tags = ({ tags, className }: { tags: string[]; className?: string }) => {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="list"
      aria-label="Technology tags"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-sm border bg-primary/5 px-2 py-px text-[10px] text-muted-foreground backdrop-blur-md md:text-xs"
          role="listitem"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
