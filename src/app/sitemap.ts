import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://www.stricklandpressurewashing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
