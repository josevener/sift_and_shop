import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/disclosure`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(product.publishedAt),
      changeFrequency: "weekly" as const,
      priority: product.featured ? 0.9 : 0.7,
    })),
  ];
}
