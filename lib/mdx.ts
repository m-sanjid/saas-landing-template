import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Get a single blog post by slug (MDX parsed)
 */
export const getSingleBlog = async (slug: string) => {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = await fs.promises.readFile(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter, slug };
  } catch (error) {
    console.error(`❌ Error reading blog "${slug}":`, error);
    return null;
  }
};

/**
 * Process an MDX string (used for previews or editor input)
 */
export const processBlogMdx = async (source: string) => {
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });
  return { content, frontmatter };
};

/**
 * Get only frontmatter (no MDX compile) — useful for listing blogs
 */
export const getBlogFrontmatterBySlug = async (slug: string) => {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const source = await fs.promises.readFile(filePath, "utf8");

    const { frontmatter } = await compileMDX<Frontmatter>({
      source,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (error) {
    console.error(`⚠️ Error reading frontmatter for "${slug}"`, error);
    return null;
  }
};

/**
 * Get all blogs (sorted by date, newest first)
 */
export const getAllBlogs = async () => {
  try {
    const files = await fs.promises.readdir(BLOG_DIR);
    const blogs = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          const frontmatter = await getBlogFrontmatterBySlug(slug);
          if (!frontmatter) return null;
          return {
            slug,
            ...frontmatter,
          };
        }),
    );

    // Sort by date descending
    return blogs
      .filter(Boolean)
      .sort(
        (a, b) =>
          new Date(b!.date).getTime() - new Date(a!.date).getTime(),
      ) as (Frontmatter & { slug: string })[];
  } catch (error) {
    console.error("⚠️ Error fetching blogs:", error);
    return [];
  }
};
