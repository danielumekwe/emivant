// Source: wp9p_postmeta post_id=2222 (_elementor_data, 3x rs-contact-box +
// rs-cf7 form 2320). The email/phone boxes carry stale demo placeholder
// text in `tab_content` ("228-5 Main Street, Georgia, USA") that the
// widget doesn't actually render for those types — the real values live in
// contact_label_email / contact_label_phone, used here instead.
export const contactHero = {
  title: "Contact Us",
  image: { src: "/images/contact-hero.jpg", alt: "Contact Emivant" },
};

export const contactCards = [
  { label: "Address", value: "Virtual" },
  { label: "Email Address", value: "info@emivant.com.ng" },
  { label: "Phone Number", value: "+234 813 085 6747" },
];

// Source: wp9p_posts ID=2320 ("Contact 01", Contact Form 7 field markup).
export const contactFormFields = [
  { name: "full-name", label: "Name", type: "text", required: true },
  { name: "your-email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "text", required: true },
  { name: "subject", label: "Subject", type: "text", required: true },
] as const;
