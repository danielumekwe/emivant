export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
}

export const galleryHero = {
  title: "Gallery",
  image: { src: "/images/gallery-hero.jpg", alt: "Emivant gallery" },
};

// Source: wp9p_postmeta post_id=3089 (_elementor_data, image-gallery
// widget, 3-column masonry, lightbox enabled). Originally 8 images; the 4
// generic stock/promo photos were dropped in favor of the Videos tab.
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/ddff-731x1024-1.png",
    width: 731,
    height: 1024,
    alt: "Emivant student feedback",
  },
  {
    src: "/images/gallery/FOUNDER.png",
    width: 422,
    height: 591,
    alt: "Emivant founder, Mr. Segun Oladele",
  },
  {
    src: "/images/gallery/did-a-great-job-683x1024-1.png",
    width: 683,
    height: 1024,
    alt: "Parent feedback screenshot",
  },
  {
    src: "/images/gallery/fireshot-capture.png",
    width: 696,
    height: 497,
    alt: "Emivant website capture",
  },
];

// Titles fetched from each video's YouTube oEmbed metadata (channel:
// Segun Oladele / Mathematics_Online_Tutor).
export const galleryVideos: GalleryVideo[] = [
  { id: "R3A7kiPNC88", title: "SAMPLE" },
  { id: "REECk_Ssbys", title: "PIE CHART Emivant Online School" },
  { id: "NR1sHgxEwAI", title: "Angles and Bearing" },
  {
    id: "l51RcpAWiVI",
    title:
      "JSS 3 BECE Mathematics Past Questions Solved | Exam Preparation with Students",
  },
  {
    id: "JjNodcQvS6k",
    title: "MATH AND BASIC SCIENCE BECE 2026 Past Questions",
  },
];
