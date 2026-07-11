export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  logo: { src: string; width: number; height: number };
  contact: {
    address: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
  topbar: {
    email: string;
    location: string;
  };
  social: Partial<
    Record<
      "facebook" | "twitter" | "pinterest" | "instagram" | "googleplus",
      string
    >
  >;
}

export interface BlogPostSummary {
  title: string;
  href: string;
  date: string;
  featuredImage?: string;
}

export type IconName =
  | "video"
  | "school"
  | "browser"
  | "book"
  | "gradCap"
  | "tie"
  | "board"
  | "tablet"
  | "users"
  | "userFriends"
  | "laptopHouse"
  | "photoVideo"
  | "pencilRuler";
