"use client";

import Link from "next/link";
import MotionDiv from "@/components/motion-div";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface NavItem {
  slug: string;
  title: string;
}

interface PostNavigationProps {
  prevPost: NavItem | null;
  nextPost: NavItem | null;
  basePath: "craft" | "blog" | "projects";
}

export default function PostNavigation({
  prevPost,
  nextPost,
  basePath,
}: PostNavigationProps) {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mx-auto mt-12 max-w-2xl border-t pt-8 sm:mt-16 sm:pt-12"
      aria-label="Post navigation"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {prevPost ? (
          <Tooltip>
            <TooltipTrigger>

              <Link
                href={`/${basePath}/${prevPost.slug}`}
                className="group flex flex-1 items-center gap-3 rounded-lg border bg-background/50 p-4 transition-all duration-200 hover:border-primary/20 hover:bg-muted/50"
              >
                <IconArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 ease-in-out group-hover:-translate-x-1 group-hover:text-foreground" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-left text-muted-foreground no-underline">
                    Previous
                  </span>
                  <span className="flex flex-wrap text-sm font-medium text-foreground group-hover:text-primary">
                    {prevPost.title.slice(0, 20).concat("...")}
                  </span>
                </div>
              </Link>
              <TooltipContent className="max-w-40 md:max-w-60">
                {prevPost.title}
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        ) : (
          <div className="hidden sm:block sm:flex-1" />
        )}

        {nextPost && (
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={`/${basePath}/${nextPost.slug}`}
                className="group flex flex-1 items-center justify-end gap-3 rounded-lg border bg-background/50 p-4 text-right transition-all duration-200 hover:border-primary/20 hover:bg-muted/50"
              >
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs text-muted-foreground">Next</span>
                  <span className="flex flex-wrap text-sm font-medium text-foreground group-hover:text-primary">
                    {nextPost.title.slice(0, 20).concat("...")}
                  </span>
                </div>
                <IconArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 ease-in-out group-hover:translate-x-1 group-hover:text-foreground" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="max-w-40 md:max-w-60">
              {nextPost.title}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </MotionDiv>
  );
}
