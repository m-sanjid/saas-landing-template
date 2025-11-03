import { HighlightCode } from "@/components/highlight-code";
import * as React from "react";

export const mdxComponents = {
  pre: ({ children, ...props }: any) => {
    const codeElement = children?.props || {};
    const language =
      codeElement.className?.replace("language-", "") || "tsx";
    const code = codeElement.children || "";

    return (
      <HighlightCode className={`language-${language}`} {...props}>
        {code}
      </HighlightCode>
    );
  },

  code: (props: any) => (
    <code
      {...props}
      className={`rounded-md bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground/90 ${props.className ?? ""}`}
    />
  ),

  // Better inline images inside MDX
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className={`my-6 rounded-lg border bg-muted/20 shadow-sm ${props.className ?? ""}`}
    />
  ),

  // Links with subtle underline
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className={`text-primary underline decoration-[.075rem] underline-offset-[3px] transition-colors hover:text-primary/80 ${props.className ?? ""}`}
    />
  ),

  // Blockquote style
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      {...props}
      className={`border-l-2 pl-4 italic text-muted-foreground ${props.className ?? ""}`}
    />
  ),

  // Table styling
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-lg border">
      <table {...props} className={`w-full ${props.className ?? ""}`} />
    </div>
  ),
};
