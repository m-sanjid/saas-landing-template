import React from "react";
import { cn } from "@/lib/utils";

export const Container = ({ children,className }: { children: React.ReactNode ,className?:string}) => {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-16 md:py-20",className)}>{children}</div>
  );
};

export const SectionContainer = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn("mx-auto max-w-6xl px-4 py-16 md:py-20", className)}
    >
      {children}
    </div>
  );
};
