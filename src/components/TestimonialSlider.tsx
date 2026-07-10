"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/content/about";

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mx-auto h-10 w-10 text-orange"
      aria-hidden
    >
      <path d="M9.5 6C6.5 7.5 5 10 5 13c0 2.8 1.9 5 4.5 5 2.2 0 4-1.8 4-4s-1.6-3.8-3.6-3.8c-.3 0-.6 0-.9.1.4-1.6 1.9-2.9 3.5-3.6L9.5 6ZM19 6c-3 1.5-4.5 4-4.5 7 0 2.8 1.9 5 4.5 5 2.2 0 4-1.8 4-4s-1.6-3.8-3.6-3.8c-.3 0-.6 0-.9.1.4-1.6 1.9-2.9 3.5-3.6L19 6Z" />
    </svg>
  );
}

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export default function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const pages = chunk(testimonials, 2);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % pages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [pages.length]);

  return (
    <div className="relative mx-auto mt-10 max-w-5xl text-left">
      <div className="relative min-h-[360px] sm:min-h-[300px]">
        {pages.map((pair, i) => (
          <div
            key={pair.map((t) => t.name).join("-")}
            className={`grid grid-cols-1 gap-6 transition-opacity duration-700 sm:grid-cols-2 ${
              i === index
                ? "relative opacity-100"
                : "absolute inset-0 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            {pair.map((t) => (
              <div
                key={t.name}
                className="rounded-card bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <QuoteIcon />
                <p className="mt-5 text-sm text-white/85 italic">{t.quote}</p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={84}
                    height={84}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30"
                  />
                  <div className="mt-3 font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/60">
                    {t.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {pages.map((pair, i) => (
            <button
              key={pair.map((t) => t.name).join("-")}
              type="button"
              aria-label={`Go to testimonial page ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-orange" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
