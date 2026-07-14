"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryImage, GalleryVideo } from "@/content/gallery";

export default function GalleryTabs({
  images,
  videos,
}: {
  images: GalleryImage[];
  videos: GalleryVideo[];
}) {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);

  return (
    <div>
      <div className="mb-10 flex justify-center gap-4">
        {(["photos", "videos"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={`rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
              tab === t
                ? "bg-orange text-white"
                : "bg-[var(--color-section-bg)] text-heading hover:bg-navy/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "photos" ? (
        <GalleryGrid images={images} />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group relative block aspect-video w-full overflow-hidden rounded-card shadow-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white">
                    <PlayIcon className="h-5 w-5" />
                  </span>
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-sm font-semibold text-white">
                  {video.title}
                </span>
              </button>
            ))}
          </div>

          {activeVideo && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
              onClick={() => setActiveVideo(null)}
            >
              <div
                className="aspect-video w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full rounded-card"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
