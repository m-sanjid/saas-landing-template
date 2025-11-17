"use client";

import { IconTemplate } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const FeatureSection = () => {
  const [tabs, setTabs] = useState<"templates" | "ui blocks" | "ui kit">(
    "templates",
  );

  const handleTabs = (tab: "templates" | "ui blocks" | "ui kit") => {
    setTabs(tab);
  };

  return (
    <div className="mx-auto w-full max-w-5xl bg-neutral-100">
      <div className="flex">
        <Tabs
          title="Templates"
          description="Visually stunning easy to customize site templates build with React and Nextjs"
          icon={<IconTemplate />}
          onClick={() => handleTabs("templates")}
          isActive={tabs === "templates"}
        />
        <Tabs
          title="UI Blocks"
          description="Over 500+ professionally designed,fully responsive, expertly crafted components"
          icon={<IconTemplate />}
          onClick={() => handleTabs("ui blocks")}
          isActive={tabs === "ui blocks"}
        />
        <Tabs
          title="UI Kit"
          description="A starter kit for building your own component systems with React and Tailwind CSS"
          icon={<IconTemplate />}
          onClick={() => handleTabs("ui kit")}
          isActive={tabs === "ui kit"}
        />
      </div>
      <div className="m-2 h-[80vh] overflow-hidden rounded-2xl">
        {tabs === "templates" && (
          <div className="relative">
            <Templates />
          </div>
        )}
        {tabs === "ui blocks" && <p>UI Blocks</p>}
        {tabs === "ui kit" && <p>UI Kit</p>}
      </div>
    </div>
  );
};

export default FeatureSection;

const Tabs = ({
  title,
  description,
  icon,
  onClick,
  isActive,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-muted flex w-full flex-col items-center justify-center gap-2 border p-2 lg:flex-row",
        isActive && "bg-white",
      )}
    >
      <div>{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground hidden lg:block">{description}</p>
      </div>
    </button>
  );
};

const Templates = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="absolute -left-[150%] md:-left-[100%] lg:-left-[70%] xl:-left-[50%] 2xl:-left-[40%]">
        {/* 3D Grid with marquee */}
        <div className="animate-marquee3d grid origin-top-left scale-110 rotate-x-[55deg] -rotate-z-[45deg] grid-cols-3 gap-6 transform-3d">
          {[...Array(6)].map((_, i) => (
            <Image
              key={i}
              src="/ui/hero.png"
              alt={`template-${i}`}
              width={450}
              height={2156}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
