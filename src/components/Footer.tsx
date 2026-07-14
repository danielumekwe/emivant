import Image from "next/image";
import Link from "next/link";
import { copyrightNav, footerNav } from "@/content/nav";
import { footerBlurb, site } from "@/content/site";
import type { BlogPostSummary } from "@/content/types";

// Source: sidebars_widgets footer1-4 + copy_right (see wp9p_options).
export default function Footer({
  recentPosts = [],
}: {
  recentPosts?: BlogPostSummary[];
}) {
  return (
    <footer className="relative overflow-hidden bg-navy text-white/80">
      <Image
        src="/images/gallery-hero.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/92" />

      <div className="relative container-site grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-sm leading-relaxed">{footerBlurb}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                aria-label={platform}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-orange hover:text-orange"
              >
                <SocialIcon platform={platform} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h6 className="text-white">Address</h6>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
                {site.contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-white">Quick Links</h6>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 bg-orange" aria-hidden />
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
            <ul className="mt-4 space-y-4 text-sm">
              {recentPosts.map((post) => (
                <li key={post.title} className="flex items-start gap-3">
                  {post.featuredImage && (
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={post.featuredImage}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </span>
                  )}
                  <span>
                    <Link href={post.href} className="hover:text-orange">
                      {post.title}
                    </Link>
                    <span className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
                      <CalendarIcon className="h-3 w-3" />
                      {post.date}
                    </span>
                  </span>
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

      <div className="relative border-t border-white/10">
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

      <a
        href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Welcome to Emivant! How may we help you ?",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-6 bottom-24 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:brightness-110"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>

      <a
        href="#top"
        aria-label="Back to top"
        className="fixed right-6 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white shadow-card hover:bg-navy"
      >
        <ArrowUpIcon className="h-4 w-4" />
      </a>
    </footer>
  );
}

function SocialIcon({
  platform,
  className,
}: {
  platform: string;
  className?: string;
}) {
  switch (platform) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M14.5 8.5H16V6h-1.5C12.6 6 11 7.6 11 9.7V11H9v3h2v7h3v-7h2.1l.4-3H14v-1.1c0-.5.3-.9.5-.9Z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={className}
          aria-hidden
        >
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <path d="M12 2a7 7 0 0 0-7 7c0 3.9 2.6 8.1 5.3 10.6.4.4 1 .1 1-.5-.1-.9-.2-2.3 0-3.3l1-4.3s-.3-.6-.3-1.4c0-1.3.8-2.3 1.7-2.3.8 0 1.2.6 1.2 1.4 0 .8-.5 2.1-.8 3.3-.2.9.5 1.7 1.4 1.7 1.7 0 2.9-2.1 2.9-4.7 0-2-1.3-3.4-3.7-3.4-2.7 0-4.4 2-4.4 4.2 0 .8.2 1.3.6 1.8.2.2.2.3.1.5l-.2.8c-.1.3-.3.4-.6.2-1-.4-1.5-1.6-1.5-2.9 0-2.2 1.9-4.8 5.5-4.8 3 0 4.9 2.1 4.9 4.4 0 3-1.7 5.3-4.1 5.3-.8 0-1.6-.4-1.9-.9l-.5 2.1c-.2.8-.6 1.6-.9 2.2.7.2 1.5.3 2.3.3a7 7 0 0 0 0-14Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.3.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
