import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import { galleryHero, galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery | Emivant Interactive Virtual School",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title={galleryHero.title} image={galleryHero.image} />

      <section className="container-site py-16">
        <GalleryGrid images={galleryImages} />
      </section>
    </>
  );
}
