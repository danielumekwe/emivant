import Link from "next/link";
import { copyrightNav, footerNav } from "@/content/nav";
import { footerBlurb, site } from "@/content/site";
import type { BlogPostSummary } from "@/content/types";

// Source: sidebars_widgets footer1-4 + copy_right (see wp9p_options).
// footer4 (Recent Posts, wpb_widget) has no real posts locally yet — the
// live site's blog was empty at audit time; recentPosts stays optional
// until a fresh content export supplies real entries.
export default function Footer({
  recentPosts = [],
}: {
  recentPosts?: BlogPostSummary[];
}) {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-site grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-sm leading-relaxed">{footerBlurb}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                aria-label={platform}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs uppercase hover:border-orange hover:text-orange"
              >
                {platform.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-white">Address</h6>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.contact.address}</li>
            <li>
              <a href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                {site.contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white">Courses</h6>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-white">Recent Posts</h6>
          {recentPosts.length > 0 ? (
            <ul className="mt-4 space-y-3 text-sm">
              {recentPosts.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="hover:text-orange">
                    {post.title}
                  </Link>
                  <div className="text-xs text-white/50">{post.date}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-white/50">
              New posts coming soon.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights
            reserved.
          </span>
          <div className="flex gap-5">
            {copyrightNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-orange">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
