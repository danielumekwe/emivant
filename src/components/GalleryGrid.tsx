"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/content/gallery";

// Matches the source widget's config: open_lightbox: "yes", 3-column
// masonry via gallery_columns, 30px image_spacing.
export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="columns-1 gap-[30px] sm:columns-2 md:columns-3">
        {images.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img)}
            className="mb-[30px] block w-full break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full rounded-card shadow-card"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
          onClick={() => setActive(null)}
        >
          <Image
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            className="max-h-full max-w-full rounded-card object-contain"
          />
        </div>
      )}
    </>
  );
}
