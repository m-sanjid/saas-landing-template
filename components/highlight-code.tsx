"use client";

import React from "react";
import { Highlight, themes, Language } from "prism-react-renderer";
import { CopyButton } from "./copy-button";
import { useTheme } from "next-themes";

export interface HighlightCodeProps {
  className?: string;
  children: React.ReactNode;
}

export const HighlightCode = ({
  className = "",
  children,
}: HighlightCodeProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const language = (className?.replace("language-", "") || "tsx") as Language;
  const code = typeof children === "string" ? children.trim() : "";

  return (
    <div className="not-prose my-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
      <div className="group relative overflow-hidden rounded-lg">
        <CopyButton text={code} />
        <div className="overflow-x-auto">
          <Highlight
            theme={
              !mounted
                ? themes.oneLight
                : resolvedTheme === "dark"
                  ? themes.oneDark
                  : themes.oneLight
            }
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} relative text-sm leading-relaxed px-4 py-3`}
                style={style}
                aria-label={`Code snippet in ${language}`}
                tabIndex={0}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="mr-4 inline-block w-8 select-none text-right text-xs text-neutral-400 dark:text-neutral-600">
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};
