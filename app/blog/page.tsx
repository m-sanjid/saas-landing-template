
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllBlogs } from "@/lib/mdx";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/container";
import { BlogCard } from "@/components/blog-card";

export async function generateMetadata(): Promise<Metadata> {
  const { name, url } = siteConfig;
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
    <main id="content" role="main">
      {/* Header */}
      <PageHeader
        title="Blog"
        subTitle="Thoughts, tutorials, and insights about web development."
      />
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              image={post.image}
              index={index}
            />
          ))}
        </div>

      </Container>
    </main>
  );
}
