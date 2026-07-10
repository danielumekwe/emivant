import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/content/home";

export const metadata: Metadata = {
  title: "Our Services | Emivant Interactive Virtual School",
};

export default function OurServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        image={{ src: "/images/hero-slide-2.jpg", alt: "Student learning online" }}
      />

      <section className="container-site py-16">
        <div className="flex flex-col gap-16 sm:gap-20">
          {services.map((service, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div
                  className={`relative aspect-4/3 overflow-hidden rounded-card shadow-card ${
                    imageFirst ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={imageFirst ? "md:order-2" : "md:order-1"}>
                  <ServiceIcon
                    icon={service.icon}
                    className="h-12 w-12 text-orange"
                  />
                  <h2 className="mt-4">{service.title}</h2>
                  <p className="mt-4 text-muted">{service.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-orange py-16 text-center">
        <div className="container-site">
          <h2 className="text-white">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Reach out and let&apos;s talk about which of these services is
            the right fit for your child.
          </p>
          <Link href="/contact-us" className="btn-readon mt-8 inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
