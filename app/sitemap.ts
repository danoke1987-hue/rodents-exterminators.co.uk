import { getSiteUrl } from "../data/business.ts";

export default async function sitemap() {
  const siteUrl = getSiteUrl();
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
