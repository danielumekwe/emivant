export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const galleryHero = {
  title: "Gallery",
  image: { src: "/images/gallery-hero.jpg", alt: "Emivant gallery" },
};

// Source: wp9p_postmeta post_id=3089 (_elementor_data, image-gallery
// widget, 8 images, 3-column masonry, lightbox enabled).
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery_12.jpg",
    width: 1240,
    height: 700,
    alt: "Emivant gallery photo",
  },
  {
    src: "/images/gallery/emivant.png",
    width: 1024,
    height: 1024,
    alt: "Emivant brand image",
  },
  {
    src: "/images/gallery/ChatGPT-Image-Jun-23-2025-09_03_31-PM.png",
    width: 1536,
    height: 1024,
    alt: "Emivant promotional graphic",
  },
  {
    src: "/images/gallery/ChatGPT-Image-Jun-23-2025-08_53_24-PM.png",
    width: 1024,
    height: 1024,
    alt: "Emivant promotional graphic",
  },
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
