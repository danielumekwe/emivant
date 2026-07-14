import type { Metadata } from "next";
import GalleryTabs from "@/components/GalleryTabs";
import PageHero from "@/components/PageHero";
import { galleryHero, galleryImages, galleryVideos } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery | Emivant Interactive Virtual School",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title={galleryHero.title} image={galleryHero.image} />

      <section className="container-site py-16">
        <GalleryTabs images={galleryImages} videos={galleryVideos} />
      </section>
    </>
  );
}
