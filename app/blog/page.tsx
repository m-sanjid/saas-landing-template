
import PageHeader from "@/components/page-header";
import MotionDiv from "@/components/motion-div";
import Tags from "@/components/tags";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getAllBlogs } from "@/lib/mdx";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const {name, url} = siteConfig;
  const title = `Blog | ${name}`;
  const description =
    "Thoughts, tutorials, and insights about web development.";

  const encodedTitle = encodeURIComponent("Blog");
  const encodedSubtitle = encodeURIComponent(name);
  const encodedTagline = encodeURIComponent("Thoughts. Code. Creativity.");

  const ogImageUrl = `${url}/api/og?title=${encodedTitle}&subtitle=${encodedSubtitle}&tagline=${encodedTagline}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${url}/blog`,
      siteName: name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Blog OG Image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogs();
  if (!blogPosts) {
    return (
      <div className="py-20">
        <div className="space-y-8">
          <PageHeader
            title="Blog"
            subTitle="Thoughts, tutorials, and insights about web development."
          />
          <div className="space-y-12 divide-y">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-md" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20">
      <div className="space-y-8">
        {/* Header */}
        <PageHeader
          title="Blog"
          subTitle="Thoughts, tutorials, and insights about web development."
        />

        {/* Blog posts list */}
        <div className="space-y-12 divide-y">
          {blogPosts.map((post, index) => (
            <MotionDiv
              key={post.slug}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group mt-4 block space-y-4"
              >
                <h2 className="text-base md:text-lg">{post.title}</h2>
                <p className="text-xs text-muted-foreground transition-colors duration-200 group-hover:text-primary md:text-base">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>
                    {post.date &&
                      new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </span>
                  <span className="mx-2">•</span>
                  {post.tags && <Tags tags={post.tags} />}
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
