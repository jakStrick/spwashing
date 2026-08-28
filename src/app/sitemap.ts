import type { MetadataRoute } from "next";
import { getBusinessInfo, getContentLastModified } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const { website } = getBusinessInfo();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    contentPaths: string[];
  }[] = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
      contentPaths: ["business.md", "services", "testimonials"],
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly",
      contentPaths: ["services"],
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
      contentPaths: ["business.md"],
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly",
      contentPaths: ["about.md", "testimonials"],
    },
  ];

  return routes.map((route) => ({
    url: `${website}${route.path}`,
    lastModified: getContentLastModified(route.contentPaths),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
