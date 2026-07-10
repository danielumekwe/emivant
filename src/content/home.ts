import type { IconName } from "./types";

// Source: wp9p_postmeta post_id=12561 (_elementor_data, the real "Main
// Demo" front page, slug "home"). The site's own local DB snapshot had
// this content missing/broken (page_on_front pointed at a nonexistent
// post) — this was reconstructed from a live WXR export the user
// supplied directly, not invented. A full fresh export would still be
// worth diffing this against once production is back up.

// Source: wp9p_revslider_slides, slider_id=15 ("Home New" / alias
// "home-new"), the RevSlider actually attached to the real homepage.
// Confirmed against a live screenshot the user supplied — slide 2's
// headline/eyebrow/button text here matches the live site verbatim
// (the DB snapshot had "Online School..." / "...Emivant Interactive
// school", slightly older wording than the live "Online Tutor..." copy —
// live text wins since it's more current).
export const heroSlides = [
  {
    image: { src: "/images/hero-slide-2.jpg", alt: "Student working on a laptop" },
    eyebrow: "START LEARNING TODAY WITH EMIVANT INTERACTIVE VIRTUAL SCHOOL",
    title: "Online Tutor, Online Exam,\nOnline Result",
    cta: { text: "Get Started", href: "/contact-us" },
  },
  {
    image: { src: "/images/hero-slide-1.jpg", alt: "Student learning online" },
    eyebrow: "Start Learning Today",
    title: "Emivant Interactive Virtual School",
    cta: { text: "Contact us", href: "/contact-us" },
  },
];

export const features = [
  {
    image: "/images/feature-tutoring.png",
    title: "Online Tutoring",
    text: "Engaging and interactive teaching",
  },
  {
    image: "/images/feature-assessment.png",
    title: "Online Assessment",
    text: "Reliable and transparent evaluation",
  },
  {
    image: "/images/feature-results.png",
    title: "Online Results",
    text: "Seamless and timely grading",
  },
];

export const welcomeSection = {
  eyebrow: "Welcome To",
  heading: "Emivant Educational and Technology Services Ltd",
  paragraph:
    'At Emivant Educational and Technology Services Ltd, we are dedicated to using technology to solve educational problems and revolutionize the way students learn. Our name is derived from the words "EMInent" and "VANTage," which embody our commitment to providing students with a comprehensive view of education and a strategic advantage in their studies.',
  cta: { text: "Learn More", href: "/about-us" },
};

export const servicesHeading = "Our Services";

export const services: {
  slug: string;
  icon: IconName;
  image: string;
  title: string;
  text: string;
  detail: string;
}[] = [
  {
    slug: "school-assignment-support",
    icon: "tablet",
    image: "/images/services/school-assignment-support.jpg",
    title: "School Assignment Support",
    text: "Our expert tutors guide students in completing assignments accurately, promoting deep understanding",
    detail:
      "Our expert tutors guide students in completing assignments accurately, promoting deep understanding rather than quick answers. We work alongside students on their actual school homework, walking through the reasoning step by step so they can handle similar problems on their own next time.",
  },
  {
    slug: "group-learning-sessions",
    icon: "users",
    image: "/images/services/group-learning-sessions.jpg",
    title: "Group Learning Sessions",
    text: "Affordable Interactive small-group classes with fun learning activities and competitions",
    detail:
      "Affordable, interactive small-group classes with fun learning activities and friendly competitions. Learning alongside peers keeps students engaged and motivated, while our tutors make sure every child in the group still gets personal attention.",
  },
  {
    slug: "one-on-one-private-tutoring",
    icon: "userFriends",
    image: "/images/services/one-on-one-private-tutoring.jpg",
    title: "One-on-One Private Tutoring",
    text: "Personalized online lessons designed to suit your child's pace and needs",
    detail:
      "Personalized online lessons designed to suit your child's pace and needs. A dedicated tutor focuses entirely on your child, adapting the lesson plan around their strengths, weaknesses and learning style for faster, more confident progress.",
  },
  {
    slug: "online-grade-level-test",
    icon: "browser",
    image: "/images/services/online-grade-level-test.jpg",
    title: "The Online Grade-Level Test",
    text: "We offer comprehensive online assessments to evaluate students' academic proficiency",
    detail:
      "We offer comprehensive online assessments to evaluate students' academic proficiency against their grade level. The results help parents and tutors spot gaps early and plan a learning path that actually addresses them.",
  },
  {
    slug: "educational-technology-consultancy",
    icon: "laptopHouse",
    image: "/images/services/educational-technology-consultancy.jpg",
    title: "Consultancy in Educational Technology",
    text: "We also offer consultancy services to help schools and educators incorporate technology into their teaching practices.",
    detail:
      "We also offer consultancy services to help schools and educators incorporate technology into their teaching practices, from choosing the right tools to structuring an online classroom that keeps students engaged.",
  },
  {
    slug: "video-tutorials-and-assessment",
    icon: "photoVideo",
    image: "/images/services/video-tutorials-and-assessment.jpg",
    title: "Video Tutorials and Assessment",
    text: "Our expertly designed video tutorials offer flexible, self-paced learning opportunities",
    detail:
      "Our expertly designed video tutorials offer flexible, self-paced learning opportunities for students who want to revisit a topic in their own time, paired with assessments that check understanding actually stuck.",
  },
  {
    slug: "exam-preparation-programs",
    icon: "pencilRuler",
    image: "/images/services/exam-preparation-programs.jpg",
    title: "Exam Preparation Programs",
    text: "Focused on teaching for BECE, WAEC, NECO, IGCSE and other school exams",
    detail:
      "Focused on teaching for BECE, WAEC, NECO, IGCSE and other school exams, with structured revision, past-question practice and exam technique so students walk in prepared and confident.",
  },
];

export const whoWeAre = {
  image: { src: "/images/founder-segun.jpg", alt: "Mr. Segun Oladele" },
  heading: "Who we are?",
  // Paragraph 1 is the original homepage copy; paragraph 2 is reused
  // verbatim from src/content/about.ts `aboutStory.paragraphs[0]` (the
  // real "About us" Elementor copy) rather than invented.
  paragraphs: [
    "Emivant Interactive Virtual School was established in March 2020 as a direct response to the emergence of the COVID-19 pandemic. With a commitment to educating Nigerian students online, Mr. Segun Oladele took the responsibility of providing free interactive and engaging lessons using tools such as Zoom and other cutting-edge educational technology.",
    "We are proud to say that Emivant is the most effective online school in Nigeria, as attested to by our satisfied parents and students. As a result of the declining quality of education delivery in schools over the years, we have made it our mission to create educational content that utilizes the latest technology to engage and inspire the next generation of learners.",
  ],
  cta: { text: "Read more", href: "/about-us" },
};

export const faqSection = {
  eyebrow: "FAQ's",
  heading: "Frequently Asked Questions",
  image: { src: "/images/hero-slide-1.jpg", alt: "Student learning online" },
  items: [
    {
      question: "What age groups does Emivant cater for?",
      answer:
        "We teach students from primary school through secondary school, with lessons tailored to each student's grade level and learning pace.",
    },
    {
      question: "How do the online classes work?",
      answer:
        "Classes hold live over Zoom and other video tools, led by dedicated tutors. Sessions are interactive, with room for questions, practice problems and one-on-one attention.",
    },
    {
      question: "Do you prepare students for BECE, WAEC, NECO and IGCSE?",
      answer:
        "Yes. We run dedicated exam preparation programs covering BECE, WAEC, NECO, IGCSE and other major school exams, alongside our regular tutoring.",
    },
    {
      question: "What if my child misses a class?",
      answer:
        "Missed sessions can be rescheduled, and where recordings are available, students can catch up in their own time before the next class.",
    },
    {
      question: "How do I enroll my child?",
      answer:
        "Reach out through our Contact Us page or send us an email, and our team will guide you through enrollment, scheduling and pricing.",
    },
  ],
};

export const testimonialsHeading = {
  eyebrow: "Testimonials",
  title: "What Students Saying",
};

// Sample/placeholder cards — the real blog listing (see
// src/app/blog/page.tsx) is intentionally empty pending the real posts
// from the July 2025 WXR export. These are illustrative only, styled
// with existing site imagery, until that content lands.
export const blogHeading = {
  eyebrow: "Our Blog",
  title: "From the Blog",
};

export const blogPosts = [
  {
    image: { src: "/images/feature-tutoring.png", alt: "Student studying online" },
    title: "5 Tips for Effective Online Learning",
    excerpt:
      "Simple habits that help students stay focused, organized, and motivated in a virtual classroom.",
    href: "/blog",
  },
  {
    image: { src: "/images/feature-assessment.png", alt: "Student preparing for exams" },
    title: "How to Prepare for WAEC and NECO",
    excerpt:
      "A practical revision plan for exam season, from past questions to time management on the day.",
    href: "/blog",
  },
  {
    image: { src: "/images/feature-results.png", alt: "Tutor and student one-on-one" },
    title: "The Benefits of One-on-One Tutoring",
    excerpt:
      "Why personalized attention helps students grasp difficult concepts faster than group classes alone.",
    href: "/blog",
  },
];
