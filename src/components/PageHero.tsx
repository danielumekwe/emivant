import Image from "next/image";
import Link from "next/link";

// "Page-title" banner used on inner pages (About/Contact/Gallery). Source:
// per-page postmeta banner_image / select-bread / select-title on wp9p_postmeta
// (e.g. post 1999 "About Us") — dark-overlaid photo with white title + breadcrumb,
// sitting directly under the transparent Header.
export default function PageHero({
  title,
  image,
}: {
  title: string;
  image: { src: string; alt: string };
}) {
  return (
    <div className="relative flex h-[420px] items-end overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="container-site relative pb-16 text-white">
        <h1 className="text-white">{title}</h1>
        <p className="mt-2 text-sm">
          <Link href="/" className="hover:text-orange">
            Emivant Interactive Virtual School
          </Link>{" "}
          / {title}
        </p>
      </div>
    </div>
  );
}
