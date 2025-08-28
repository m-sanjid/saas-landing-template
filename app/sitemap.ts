import { siteConfig } from "@/lib/site-config";

export default async function sitemap() {
  const base = siteConfig.url?.replace(/\/$/, "") || "https://example.com";
  const routes = ["", "/about", "/features", "/pricing", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.6,
    }),
  );
  return routes;
}
