import type { MetadataRoute } from "next";
import { getBusinessInfo } from "@/lib/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const { website } = getBusinessInfo();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/flyer", "/pamphlet"],
    },
    sitemap: `${website}/sitemap.xml`,
  };
}
