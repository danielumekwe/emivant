import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import HeroSlider from "@/components/HeroSlider";
import ServiceIcon from "@/components/ServiceIcon";
import TestimonialSlider from "@/components/TestimonialSlider";
import { testimonials } from "@/content/about";
import {
  blogHeading,
  blogPosts,
  faqSection,
  features,
  heroSlides,
  services,
  servicesHeading,
  testimonialsHeading,
  welcomeSection,
  whoWeAre,
} from "@/content/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <HeroSlider slides={heroSlides} />

        {/* Feature cards overlap the bottom edge of the slider — matches
            the real page (a separate Elementor section with -200px top
            margin layered on top of the RevSlider). */}
        <div className="absolute inset-x-0 -bottom-16 z-10 hidden sm:block">
          <div className="container-site grid grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 rounded-card bg-navy p-5 shadow-card"
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  width={44}
                  height={44}
                  className="shrink-0"
                />
                <div>
                  <h4 className="text-base text-white">{f.title}</h4>
                  <p className="mt-1 text-xs text-white/70 italic">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-24" />

      {/* Same feature cards, stacked in normal flow for small screens
          where the absolute overlap above is hidden */}
      <div className="container-site -mt-8 mb-8 grid grid-cols-1 gap-4 sm:hidden">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-card bg-navy p-5 shadow-card"
          >
            <Image
              src={f.image}
              alt={f.title}
              width={44}
              height={44}
              className="shrink-0"
            />
            <div>
              <h4 className="text-base text-white">{f.title}</h4>
              <p className="mt-1 text-xs text-white/70 italic">{f.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome */}
      <section className="container-site py-16 text-center">
        <span className="text-sm font-bold tracking-wide text-orange uppercase">
          {welcomeSection.eyebrow}
        </span>
        <h2 className="mt-2">{welcomeSection.heading}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-muted">
          {welcomeSection.paragraph}
        </p>
        <Link href={welcomeSection.cta.href} className="btn-readon mt-8 inline-block">
          {welcomeSection.cta.text}
        </Link>
      </section>

      {/* Services */}
      <section id="services" className="container-site py-16 text-center">
        <span className="text-sm font-bold tracking-wide text-orange uppercase">
          Top Categories
        </span>
        <h2 className="mt-2">{servicesHeading}</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/our-services#${service.slug}`}
              className="group relative aspect-4/3 block overflow-hidden rounded-card shadow-card"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/85 to-navy/75" />
              <div className="absolute inset-x-0 bottom-0 flex items-start gap-4 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <ServiceIcon
                  icon={service.icon}
                  className="h-11 w-11 shrink-0 rounded-full border border-orange p-2.5 text-orange"
                />
                <div className="overflow-hidden pt-1.5">
                  <h5 className="text-white">{service.title}</h5>
                  <p className="max-h-0 text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                    {service.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 sm:h-80 md:h-auto">
          <Image
            src={whoWeAre.image.src}
            alt={whoWeAre.image.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-navy px-8 py-16 sm:px-16">
          <div>
            <h2 className="text-white">{whoWeAre.heading}</h2>
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-white/70">
                {paragraph}
              </p>
            ))}
            <Link
              href={whoWeAre.cta.href}
              className="mt-8 inline-block bg-orange px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase"
            >
              {whoWeAre.cta.text}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-site py-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-sm font-bold tracking-wide text-orange uppercase">
              {faqSection.eyebrow}
            </span>
            <h2 className="mt-2">{faqSection.heading}</h2>
            <div className="mt-8">
              <FaqAccordion items={faqSection.items} />
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-card shadow-card">
            <Image
              src={faqSection.image.src}
              alt={faqSection.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative overflow-hidden py-16">
        <Image
          src="/images/gallery/ChatGPT-Image-Jun-23-2025-09_03_31-PM.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-site relative text-center">
          <span className="text-sm font-bold tracking-wide text-orange uppercase">
            {testimonialsHeading.eyebrow}
          </span>
          <h2 className="text-white">{testimonialsHeading.title}</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" className="container-site py-16 text-center">
        <span className="text-sm font-bold tracking-wide text-orange uppercase">
          {blogHeading.eyebrow}
        </span>
        <h2>{blogHeading.title}</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-card bg-white shadow-card"
            >
              <div className="relative h-48 bg-[var(--color-section-bg)]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="p-6">
                <h5>{post.title}</h5>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="mt-4 inline-block text-sm font-semibold tracking-wide text-orange uppercase hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
