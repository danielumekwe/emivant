import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactIcon from "@/components/ContactIcon";
import PageHero from "@/components/PageHero";
import { contactCards, contactHero } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact Us | Emivant Interactive Virtual School",
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero title={contactHero.title} image={contactHero.image} />

      <section className="container-site py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="rounded-card bg-navy p-8 text-center text-white shadow-card"
            >
              <ContactIcon label={card.label} />
              <h6 className="mt-4 text-white">{card.label}</h6>
              <p className="mt-1 font-semibold text-orange">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center">Get in Touch</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
