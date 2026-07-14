import { placeholderBlogPosts } from "./home";
import type { BlogTeaserPost } from "./types";

// blog.emivant.com.ng runs on Blogger (custom domain), not WordPress —
// confirmed via the `server: GSE` response header. Blogger exposes posts
// publicly at this JSON feed endpoint, no API key needed.
const FEED_URL = "https://blog.emivant.com.ng/feeds/posts/default?alt=json";

// Cycled across live posts in order, since none of the live Blogger
// posts carry a featured image or thumbnail (checked: zero <img> tags,
// no media$thumbnail in the feed entries).
const FALLBACK_IMAGES = placeholderBlogPosts.map((post) => post.image);

interface BloggerFeedEntry {
  title: { $t: string };
  published: { $t: string };
  content?: { $t: string };
  link: { rel: string; href: string }[];
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function toExcerpt(html: string, maxLength = 150): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, text.lastIndexOf(" ", maxLength))}…`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function getLatestBlogPosts(
  limit = 3,
): Promise<BlogTeaserPost[]> {
  try {
    const res = await fetch(`${FEED_URL}&max-results=${limit}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return placeholderBlogPosts;

    const data = await res.json();
    const entries: BloggerFeedEntry[] = data.feed?.entry ?? [];
    if (entries.length === 0) return placeholderBlogPosts;

    return entries.map((entry, i) => ({
      title: entry.title["$t"],
      excerpt: toExcerpt(entry.content?.["$t"] ?? ""),
      href:
        entry.link.find((l) => l.rel === "alternate")?.href ??
        "https://blog.emivant.com.ng",
      date: formatDate(entry.published["$t"]),
      image: FALLBACK_IMAGES[i % FALLBACK_IMAGES.length],
    }));
  } catch {
    return placeholderBlogPosts;
  }
}
