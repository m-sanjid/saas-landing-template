import {
  getAllBlogs,
  getBlogFrontmatterBySlug,
  getSingleBlog,
} from "@/lib/mdx";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import MotionDiv from "@/components/motion-div";
import Tags from "@/components/tags";
import PostNavigation from "@/components/post-navigation";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  if (!blogs) return [];
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const { name, url } = siteConfig;
  const frontmatter = await getBlogFrontmatterBySlug(slug);

  if (!frontmatter) {
    return {
      title: `Blog post not found | ${name}`,
      description: "This blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${frontmatter.title} | ${name}`;
  const description =
    frontmatter.description ||
    `Read this insightful blog post by ${name} about web development, design, and technology.`;
  const blogUrl = `${url}/blog/${slug}`;
  const encodedTitle = encodeURIComponent(frontmatter.title);
  const encodedSubtitle = encodeURIComponent("Blog Post");
  const encodedTagline = encodeURIComponent("Thoughts. Code. Creativity.");
  const ogImageUrl = `${url}/api/og?title=${encodedTitle}&subtitle=${encodedSubtitle}&tagline=${encodedTagline}`;

  // Generate keywords from tags and content
  const keywords = [
    frontmatter.title,
    "blog post",
    name,
    "web development blog",
    ...(frontmatter.tags || []),
    "tutorial",
    "programming",
    "development tips",
  ];

  return {
    title,
    description,
    keywords: keywords.join(", "),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: blogUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: blogUrl,
      siteName: `${name} Blog`,
      title,
      description,
      publishedTime: frontmatter.date,
      modifiedTime: new Date().toISOString(),
      authors: [name],
      section: "Technology",
      tags: frontmatter.tags || [],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${frontmatter.title} - Blog post by ${name}`,
          type: "image/png",
        },
        ...(frontmatter.image
          ? [
            {
              url: frontmatter.image.startsWith("http")
                ? frontmatter.image
                : `${url}${frontmatter.image}`,
              width: 1024,
              height: 576,
              alt: `${frontmatter.title} blog post image`,
            },
          ]
          : []),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          alt: `${frontmatter.title} - Blog post by ${name}`,
        },
      ],
    },
    category: "blog",
  };
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  const { name, url } = siteConfig;

  if (!blog) {
    redirect("/blog");
  }

  // Get all blogs for navigation
  const allBlogs = await getAllBlogs();
  const currentIndex = allBlogs.findIndex((b) => b.slug === slug);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  const { content, frontmatter } = blog;

  // Generate structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/blog/${slug}#post`,
    headline: frontmatter.title,
    description: frontmatter.description,
    url: `${url}/blog/${slug}`,
    datePublished: frontmatter.date,
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      "@id": `${url}/#person`,
      name,
      url,
    },
    publisher: {
      "@type": "Person",
      "@id": `${url}/#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/blog/${slug}`,
    },
    keywords: frontmatter.tags?.join(", ") || "",
    articleSection: "Technology",
    inLanguage: "en-US",
    ...(frontmatter.image && {
      image: {
        "@type": "ImageObject",
        url: frontmatter.image.startsWith("http")
          ? frontmatter.image
          : `${url}${frontmatter.image}`,
        description: `${frontmatter.title} blog post image`,
      },
    }),
    wordCount: content.toString().split(" ").length,
    timeRequired: `PT${Math.max(1, Math.ceil(content.toString().split(" ").length / 200))}M`,
  };

  return (
    <main className="">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <MotionDiv
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <article
          className="mx-auto max-w-[740px] px-5 md:px-8 py-16 text-foreground"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          {/* Hero Image */}
          {frontmatter.image && (
            <MotionDiv
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mx-auto aspect-video mb-12 shadow-md max-w-5xl overflow-hidden rounded-2xl"
            >
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </MotionDiv>
          )}

          {/* Header */}
          <header className="mb-12">
            <h1
              className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground"
              itemProp="headline"
            >
              {frontmatter.title}
            </h1>

            <p
              className="mr-auto mb-6 max-w-2xl text-base text-muted-foreground md:text-lg"
              itemProp="description"
            >
              {frontmatter.description}
            </p>

            <div className="flex flex-wrap justify-start items-center gap-3 text-sm text-muted-foreground/80">
              <time
                dateTime={frontmatter.date}
                itemProp="datePublished"
                className="capitalize"
              >
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>

              <span>•</span>

              <span>
                {Math.max(1, Math.ceil(content.toString().split(' ').length / 200))} min read
              </span>

              {frontmatter.tags && (
                <>
                  <span>•</span>
                  <Tags tags={frontmatter.tags} />
                </>
              )}
            </div>
          </header>

          <div>{content}</div>

          {/* Footer */}
          <footer className="mt-16 border-t border-border/50 pt-8">
            <PostNavigation
              basePath="blog"
              prevPost={
                prevBlog
                  ? {
                    slug: prevBlog.slug,
                    title: prevBlog.title ?? 'Untitled',
                  }
                  : null
              }
              nextPost={
                nextBlog
                  ? {
                    slug: nextBlog.slug,
                    title: nextBlog.title ?? 'Untitled',
                  }
                  : null
              }
            />
          </footer>
        </article>

      </MotionDiv>
    </main>
  );
}
