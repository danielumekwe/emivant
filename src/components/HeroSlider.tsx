"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Slide {
  image: { src: string; alt: string };
  eyebrow: string;
  title: string;
  cta: { text: string; href: string };
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <div className="relative h-[560px] overflow-hidden sm:h-[680px]">
      {slides.map((s, i) => (
        <Image
          key={s.image.src}
          src={s.image.src}
          alt={s.image.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-navy/55" />

      <div className="relative flex h-full items-center justify-center text-center">
        <div className="container-site">
          <p className="mx-auto max-w-2xl text-sm font-bold tracking-wide text-orange uppercase">
            {slide.eyebrow}
          </p>
          <h1 className="mt-4 text-white whitespace-pre-line">
            {slide.title}
          </h1>
          <Link href={slide.cta.href} className="btn-rs mt-8 inline-block">
            {slide.cta.text}
          </Link>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
