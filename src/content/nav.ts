import { services } from "./home";
import type { NavItem } from "./types";

// Source: wp9p_terms term_id=73 ("main_menu"), the menu actually assigned
// to location menu-1 in theme_mods_educavo. A larger unused 29-item menu
// (term_id=69) exists in the DB but isn't wired to any location — skipped.
//
// "Testimonials" pointed at a nonexistent post ID in the stale local
// snapshot, so it didn't render there — but a live screenshot from the
// user confirmed the real production nav does show it (linking to the
// matching section on the homepage), so it's restored here as an anchor
// rather than dropped. "Our Services" now points at its own page
// (src/app/our-services) instead of the homepage anchor.
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Our Services",
    href: "/our-services",
    children: services.map((service) => ({
      label: service.title,
      href: `/our-services#${service.slug}`,
    })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
];

// footer3 widget (nav_menu-1) reuses the main menu under the title
// "Courses" — preserved as configured rather than redesigned.
export const footerNav: NavItem[] = mainNav;

// wp9p_terms term_id=66 ("Copyright Menu"), assigned to sidebars_widgets
// "copy_right" via widget_nav_menu instance 2.
export const copyrightNav: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];
