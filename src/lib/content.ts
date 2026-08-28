import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface BusinessInfo {
  name: string;
  website: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  serviceAreas: string[];
  formspreeId: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  image: string;
  order: number;
  featured: boolean;
  descriptionHtml: string;
}

export interface Testimonial {
  slug: string;
  author: string;
  location: string;
  rating: number;
  order: number;
  textHtml: string;
}

export interface AboutContent {
  heading: string;
  foundedYear: number;
  bodyHtml: string;
}

function readMarkdownFiles(dir: string) {
  const fullDir = path.join(CONTENT_DIR, dir);
  return fs
    .readdirSync(fullDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(fullDir, file), "utf8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), data, content };
    });
}

export function getBusinessInfo(): BusinessInfo {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "business.md"), "utf8");
  const { data } = matter(raw);
  return data as BusinessInfo;
}

export function getServices(): Service[] {
  return readMarkdownFiles("services")
    .map(({ slug, data, content }) => ({
      slug,
      title: data.title,
      shortTitle: data.shortTitle,
      icon: data.icon,
      image: data.image,
      order: data.order,
      featured: Boolean(data.featured),
      descriptionHtml: marked.parse(content.trim(), { async: false }) as string,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedServices(): Service[] {
  return getServices().filter((service) => service.featured);
}

export function getTestimonials(): Testimonial[] {
  return readMarkdownFiles("testimonials")
    .map(({ slug, data, content }) => ({
      slug,
      author: data.author,
      location: data.location,
      rating: data.rating,
      order: data.order,
      textHtml: marked.parse(content.trim(), { async: false }) as string,
    }))
    .sort((a, b) => a.order - b.order);
}

export function getAboutContent(): AboutContent {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, "about.md"), "utf8");
  const { data, content } = matter(raw);
  return {
    heading: data.heading,
    foundedYear: data.foundedYear,
    bodyHtml: marked.parse(content.trim(), { async: false }) as string,
  };
}

/**
 * Latest modification time across a set of content paths (files or
 * directories, relative to `content/`) — used to give the sitemap an
 * honest `lastmod` per route instead of stamping every route with the
 * build time on every deploy.
 */
export function getContentLastModified(relativePaths: string[]): Date {
  let latest = 0;

  for (const relativePath of relativePaths) {
    const fullPath = path.join(CONTENT_DIR, relativePath);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      for (const file of fs.readdirSync(fullPath)) {
        const mtime = fs.statSync(path.join(fullPath, file)).mtimeMs;
        if (mtime > latest) latest = mtime;
      }
    } else if (stat.mtimeMs > latest) {
      latest = stat.mtimeMs;
    }
  }

  return new Date(latest);
}
