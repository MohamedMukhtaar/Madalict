import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/data/siteData";

const baseUrl = "https://madalict.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/blog", "/faq", "/contact", "/privacy", "/terms"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
