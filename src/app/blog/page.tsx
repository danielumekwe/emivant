import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | Emivant Interactive Virtual School",
};

// Out of scope for now — live site has real posts (per the July 2025 WXR
// export) that aren't in the local dataset yet. Nav link stays live so the
// route doesn't 404; real listing/pagination comes once that content lands.
export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        image={{ src: "/images/about-hero.jpg", alt: "Emivant blog" }}
      />
      <section className="container-site py-24 text-center">
        <h2>New posts coming soon</h2>
        <p className="mx-auto mt-4 max-w-xl text-body">
          We&apos;re working on bringing our latest articles and updates to
          this page. Check back soon.
        </p>
      </section>
    </>
  );
}
