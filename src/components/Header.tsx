import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/content/nav";
import { site } from "@/content/site";

// Overlays transparently on top of whatever dark hero/banner the page
// renders beneath it (navy hero on the homepage, dark page-title image on
// inner pages) — matches the rendered theme, which floats the header over
// the hero rather than stacking a separate solid bar above it.
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="border-b border-white/15 bg-navy/40">
        <div className="container-site flex h-10 items-center gap-6 text-xs">
          <span className="flex items-center gap-2">
            <MailIcon />
            {site.topbar.email}
          </span>
          <span className="h-4 w-px bg-white/25" aria-hidden />
          <span className="flex items-center gap-2">
            <PinIcon />
            {site.topbar.location}
          </span>
        </div>
      </div>

      <div className="container-site flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src={site.logo.src}
            alt={site.name}
            width={140}
            height={44}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-semibold tracking-wide uppercase hover:text-orange"
                >
                  {item.label}
                  <ChevronDownIcon className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-card bg-white py-2 text-heading shadow-card">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-medium normal-case hover:bg-[var(--color-section-bg)] hover:text-orange"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-wide uppercase hover:text-orange"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            className="hover:text-orange"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="flex flex-col gap-1.5 sm:hidden"
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
