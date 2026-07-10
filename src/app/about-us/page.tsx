import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import StarRating from "@/components/StarRating";
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

          <h4 className="mt-10 text-orange">{missionText.vision.heading}</h4>
          <p className="mt-3 text-white/80">{missionText.vision.text}</p>

          <h4 className="mt-10 text-orange">{missionText.mission.heading}</h4>
          <p className="mt-3 text-white/80">{missionText.mission.text}</p>

          <h4 className="mt-10 text-orange">
            {missionText.principles.heading}
          </h4>
          <p className="mt-3 text-white/80">{missionText.principles.intro}</p>
          <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {missionText.principles.items.map((item) => (
              <li key={item.title}>
                <span className="font-semibold text-white">
                  {item.title}:
                </span>{" "}
                <span className="text-white/80">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site py-16">
        <h3 className="text-center text-orange">{founder.heading}</h3>
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          {founder.bio.map((p, i) => (
            <p key={i} className="text-body">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="testimonials" className="bg-section-bg py-16">
        <div className="container-site">
          <h2 className="text-center">What Our Clients are saying</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-card bg-white p-6 shadow-card"
              >
                <StarRating value={t.rating} />
                <p className="mt-4 text-sm text-body">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={84}
                    height={84}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-heading">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">
                      {t.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
