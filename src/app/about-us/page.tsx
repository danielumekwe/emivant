import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import MissionTabs from "@/components/MissionTabs";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import TestimonialSlider from "@/components/TestimonialSlider";
import {
  aboutHero,
  aboutLead,
  aboutStory,
  founder,
  missionText,
  servicesIntro,
  services,
  stats,
  testimonials,
} from "@/content/about";

export const metadata: Metadata = {
  title: "About Us | Emivant Interactive Virtual School",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero title={aboutHero.title} image={aboutHero.image} />

      <section className="container-site py-16 text-center">
        <p className="mx-auto max-w-3xl text-2xl leading-snug font-bold text-heading">
          {aboutLead}
        </p>
      </section>

      <section className="bg-section-bg py-12">
        <div className="container-site grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold text-navy">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
        <Image
          src={aboutStory.image.src}
          alt={aboutStory.image.alt}
          width={683}
          height={1024}
          className="mx-auto h-auto w-full max-w-sm rounded-card shadow-card"
        />
        <div>
          {aboutStory.paragraphs.map((p, i) => (
            <p
              key={i}
              className={i === 0 ? "text-sm font-semibold text-orange uppercase" : "mt-4 text-body"}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <p className="mx-auto max-w-2xl text-center text-lg font-semibold text-heading">
          {servicesIntro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-card border border-form-border p-6 text-center shadow-card"
            >
              <ServiceIcon
                icon={service.icon}
                className="mx-auto h-10 w-10 text-orange"
              />
              <h6 className="mt-4">{service.title}</h6>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-site max-w-4xl text-center">
          <h3 className="text-white">{missionText.heading}</h3>
          <p className="mt-4 text-white/80">{missionText.intro}</p>
        </div>
      </section>

      <section className="container-site py-16">
        <MissionTabs
          tabs={[
            {
              key: "vision",
              label: "Vision",
              icon: missionText.vision.icon,
              image: missionText.vision.image,
              heading: missionText.vision.heading,
              text: missionText.vision.text,
            },
            {
              key: "mission",
              label: "Mission",
              icon: missionText.mission.icon,
              image: missionText.mission.image,
              heading: missionText.mission.heading,
              text: missionText.mission.text,
            },
            {
              key: "principles",
              label: "Principles",
              icon: missionText.principles.icon,
              image: missionText.principles.image,
              heading: missionText.principles.heading,
              text: missionText.principles.intro,
              items: missionText.principles.items,
            },
          ]}
        />
      </section>

      <section className="container-site py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-orange">{founder.heading}</h3>
            <div className="mt-6 space-y-4">
              {founder.bio.map((p, i) => (
                <p key={i} className="text-body">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="order-1 lg:sticky lg:top-24 lg:order-2">
            <div className="relative aspect-3/4 overflow-hidden rounded-card shadow-card">
              <Image
                src={founder.image.src}
                alt={founder.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative overflow-hidden py-16">
        <Image
          src="/images/blog/one-on-one-tutoring-benefits.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="container-site relative text-center">
          <span className="text-sm font-bold tracking-wide text-orange uppercase">
            Testimonials
          </span>
          <h2 className="text-white">What Our Clients are saying</h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-orange py-16 text-center">
        <div className="container-site">
          <h2 className="text-white">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Reach out and let&apos;s talk about how Emivant can support your
            child&apos;s learning journey.
          </p>
          <Link href="/contact-us" className="btn-readon mt-8 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
