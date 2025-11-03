"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Tags from "@/components/tags";

type BlogCardProps = {
    slug: string;
    title?: string;
    date?: string;
    tags?: string[];
    image?: string;
    className?: string;
    index?: number;
};

export function BlogCard({
    slug,
    title,
    date,
    tags,
    image,
    className,
    index = 0,
}: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
        >
            <Link
                href={`/blog/${slug}`}
                className={cn(
                    "group border-border/40 bg-background/60 relative flex flex-col overflow-hidden rounded-3xl border shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1",
                    className,
                )}
            >
                {/* Thumbnail */}
                {image && (
                    <motion.div
                        className="relative aspect-[16/9] w-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.img
                            src={image}
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <motion.div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
                    </motion.div>
                )}

                {/* Text Section */}
                <div className="space-y-3 p-6">
                    <h2
                        className={cn(
                            "text-foreground text-base font-semibold tracking-tight md:text-lg",
                            "group-hover:text-primary transition-colors duration-300",
                        )}
                    >
                        {title || ""}
                    </h2>

                    <div className="text-muted-foreground/70 flex flex-wrap items-center gap-2 text-xs">
                        {date && (
                            <span>
                                {new Date(date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        )}
                        {tags && (
                            <>
                                <span className="text-muted-foreground/50">•</span>
                                <Tags tags={tags} />
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
