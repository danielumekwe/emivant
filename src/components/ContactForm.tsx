"use client";

import { useState } from "react";
import { contactFormFields } from "@/content/contact";

// Field structure mirrors the real Contact Form 7 markup (wp9p_posts
// ID=2320). No email backend is wired up yet — full static migration
// dropped WordPress, so this needs a real submission endpoint (API route +
// email service) before going live; for now it just confirms client-side.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="rounded-card bg-section-bg p-6 text-heading">
        Thank you for your message. It has been sent.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      {contactFormFields.map((field) => (
        <input
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.label}
          required={field.required}
          className="rounded-sm border border-form-border px-4 py-3 text-sm focus:border-orange focus:outline-none"
        />
      ))}
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        className="rounded-sm border border-form-border px-4 py-3 text-sm focus:border-orange focus:outline-none sm:col-span-2"
      />
      <div className="sm:col-span-2">
        <button type="submit" className="btn-readon">
          Submit
        </button>
      </div>
    </form>
  );
}
