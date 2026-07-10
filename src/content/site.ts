import type { SiteConfig } from "./types";

// Source: wp9p_options (educavo_option.logo, widget_contact_widget,
// widget_medvillsocialiconwi_widget). Social links are literally "#" in
// the source data — never configured with real URLs, preserved as-is.
export const site: SiteConfig = {
  name: "Emivant Interactive Virtual School",
  tagline: "Integrity, Innovation and Creativity",
  logo: { src: "/images/logo.png", width: 548, height: 173 },
  contact: {
    address: "Virtual",
    email: "info@emivant.com.ng",
    phone: "+234 813 085 6747",
    whatsapp: "+234 813 085 6747",
  },
  // Topbar strip above the main header (confirmed via rendered output).
  topbar: {
    email: "info@emivant.com.ng",
    location: "Lagos, Nigeria",
  },
  social: {
    facebook: "#",
    twitter: "#",
    pinterest: "#",
    instagram: "#",
  },
};

// footer1 widget (text-2)
export const footerBlurb =
  "Welcome to Emivant Virtual School, where we are dedicated to using technology to solve educational problems and revolutionize the way students learn.";
