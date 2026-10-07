import type { MetadataRoute } from "next";
import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { getBusinessInfo } from "@/lib/content";

export const dynamic = "force-static";

// Last real change to any of the given repo-relative paths: the latest git
// commit date, or the file's mtime if it has uncommitted edits. Falls back to
// mtimes when git isn't available (e.g. a build from a plain file copy).
function lastModified(paths: string[]): Date {
  let latest = 0;

  try {
    const committed = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...paths],
      { encoding: "utf8" },
    ).trim();
    if (committed) latest = new Date(committed).getTime();

    const dirty = execFileSync(
      "git",
      ["status", "--porcelain", "--", ...paths],
      { encoding: "utf8" },
    )
      .split("\n")
      .filter(Boolean)
      .map((line) => line.slice(3).replace(/^.* -> /, ""));
    for (const file of dirty) {
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        latest = Math.max(latest, fs.statSync(file).mtimeMs);
      }
    }
    if (latest) return new Date(latest);
  } catch {
    // git not available; use mtimes below
  }

  for (const p of paths) {
    const files = fs.statSync(p).isDirectory()
      ? fs.readdirSync(p).map((f) => path.join(p, f))
      : [p];
    for (const file of files) latest = Math.max(latest, fs.statSync(file).mtimeMs);
  }
  return new Date(latest);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { website } = getBusinessInfo();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    sources: string[];
  }[] = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
      sources: [
        "src/app/page.tsx",
        "content/business.md",
        "content/services",
        "content/testimonials",
      ],
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "monthly",
      sources: ["src/app/services/page.tsx", "content/services"],
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly",
      sources: [
        "src/app/contact/page.tsx",
        "src/components/ContactForm.tsx",
        "content/business.md",
      ],
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly",
      sources: [
        "src/app/about/page.tsx",
        "content/about.md",
        "content/testimonials",
      ],
    },
  ];

  return routes.map((route) => ({
    url: `${website}${route.path}`,
    lastModified: lastModified(route.sources),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
