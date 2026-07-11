import type { IconName } from "./types";

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: IconName;
  title: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  avatar: string;
  rating: number;
}

// Source: wp9p_postmeta post_id=1999 (_elementor_data), decoded from the
// real Elementor JSON. Reproduced verbatim, including document order —
// the blockquote intro appears after the service list in the source too.
export const aboutHero = {
  title: "About Us",
  image: { src: "/images/about-hero.jpg", alt: "Student learning online" },
};

export const aboutLead =
  "We are proud to say that Emivant is the most effective online school in Nigeria, as attested to by our satisfied parents and students.";

export const aboutStory = {
  image: {
    src: "/images/about-testimonial-screenshot.png",
    alt: "Parent feedback screenshot",
  },
  paragraphs: [
    "About us",
    "We are proud to say that Emivant is the most effective online school in Nigeria, as attested to by our satisfied parents and students. As a result of the declining quality of education delivery in schools over the years, we have made it our mission to create educational content that utilizes the latest technology to engage and inspire the next generation of learners. Our goal is to provide teachers with the tools and knowledge they need to deliver exceptional content to their students.",
    "Emivant Interactive Virtual School was established in March 2020 in response to the COVID-19 pandemic. Mr. Segun Oladele took it upon himself to teach Nigerian students online for free using Zoom and other cutting-edge educational tools, delivering interactive and engaging lessons that quickly gained a following. Within just five weeks, we had over 100 students, prompting us to develop strategies to control class size and improve our use of technology.",
  ],
};

export const stats: Stat[] = [
  { value: "320+", label: "Courses" },
  { value: "7.5k+", label: "Students" },
  { value: "3.50", label: "Average CGPA" },
  { value: "95%", label: "Certified" },
];

export const services: ServiceItem[] = [
  { icon: "video", title: "Video Tutorials and Assessment" },
  { icon: "school", title: "Developing educational content for schools" },
  { icon: "browser", title: "One-on-one online sessions" },
  { icon: "book", title: "School Assignment support" },
  { icon: "gradCap", title: "Online sessions for 5 students" },
  { icon: "tie", title: "One-on-one online sessions" },
  { icon: "board", title: "The Online Grade-Level Test" },
];

export const servicesIntro =
  "Emivant Virtual Interactive School offers a range of services aimed at providing a comprehensive and effective learning experience for students. Our services include:";

export const missionText = {
  heading: "AT EMIVANT INTERACTIVE VIRTUAL SCHOOL",
  intro:
    "We are committed to leveraging technology in delivering exceptional content that helps solve educational problems, and our team of qualified teachers are equipped with the knowledge of the latest educational tools to ensure a strategic advantage in teaching and learning. We are committed to bridging the gap between qualified teachers and parents in solving educational problems and delivering exceptional content using technology. Thank you for choosing Emivant Virtual School, where learning never stops",
  vision: {
    icon: "browser" as const,
    image: { src: "/images/gallery/emivant.png", alt: "Student learning online" },
    heading: "OUR VISION",
    text: "Our vision at Emivant Interactive Virtual School is to cultivate an online platform that promotes passion and ingenuity among our students. We strive to enable holistic growth and advancement, encompassing cognitive, affective, and psychomotor domains. Our commitment is to produce well-rounded individuals who can make significant contributions to society and succeed in their chosen endeavors. We aim to achieve this through the innovative use of technology, a robust curriculum, and a team of highly skilled and passionate educators.",
  },
  mission: {
    icon: "gradCap" as const,
    image: { src: "/images/gallery-hero.jpg", alt: "Team collaborating" },
    heading: "OUR MISSION",
    text: "At Emivant Interactive Virtual School, our mission is to equip students with the necessary tools to thrive in a constantly evolving world. We strive to develop critical thinking skills, a global mindset, and instill core values of honesty, loyalty, perseverance, and compassion. Our goal is to prepare students for success in both their personal and professional lives by nurturing their intellectual, emotional, and physical growth.",
  },
  principles: {
    icon: "book" as const,
    image: { src: "/images/contact-hero.jpg", alt: "Group of students" },
    heading: "GUIDING PRINCIPLES",
    intro:
      "Emivant Interactive Virtual School operates on a set of guiding principles, which include:",
    items: [
      {
        title: "Personalized Learning",
        text: "We recognize the unique needs of every child and provide customized learning experiences to help each one reach their full potential.",
      },
      {
        title: "Critical Thinking and Creativity",
        text: "We encourage the development of critical thinking skills, while also fostering creativity and innovation.",
      },
      {
        title: "Strong Connections",
        text: "We strive to build strong and positive connections with our students, creating a safe and welcoming learning platform where everyone is valued and respected.",
      },
      {
        title: "Pathways to Success",
        text: "We provide students with the tools and resources they need to achieve success, identifying their gifts and talents and nurturing them.",
      },
      {
        title: "Open Communication",
        text: "We maintain regular communication with parents, providing feedback on student progress and working collaboratively to ensure the best possible outcomes for each child.",
      },
      {
        title: "Social Responsibility and Personal Growth",
        text: "We empower students to meet current and future challenges, fostering social awareness, civic responsibility, and personal growth.",
      },
    ],
  },
};

export const founder = {
  heading: "MEET THE FOUNDER",
  image: { src: "/images/founder-segun.jpg", alt: "Mr. Segun Oladele" },
  bio: [
    "Allow me to introduce Oladele Kayode Segun, a highly motivated and results-driven educator with strong academic credentials and real-world business experience. He has a diverse background of extra-curricular activities and interests, making him a well-rounded professional. Oladele is an ambitious individual with a strong desire to solve problems and impart positivity in life. Oladele holds a Bachelor of Science in Mathematics Education, with an outstanding CGPA of 4.42/5.0 from Tai Solarin University of Education, Ogun State. He also possesses a diploma in System Data Management and Computer Technician from Quality Computer Training Centre in Africa. Additionally, he has international accreditation in Health, Safety and Environment I & II from Joint Professionals Training & Support International. As a seasoned Mathematics Teacher with over 7 years of experience, Oladele has worked with leading educational institutions such as Mind Smith Limited and Government Secondary School, where he prepared students for qualifications and external examinations, organized extra classes for students, and monitored students' responses. He is highly proficient in both Nigerian and British curricula, and his ability to drive learners to maximum academic achievement has made him a respected figure in the education sector.",
    "With extensive experience as a Mathematics tutor and classroom teacher, Oladele has an exceptional track record of delivering top-quality education. His experience includes serving as an Education Officer at Kings College Lagos, where he is responsible for Mathematics tutoring, classroom teaching, hostel managing, coordinating the Mathematics Club, organizing internal and external competitions, and supervising external examinations. Oladele has also worked as a Mathematics Teacher at Mind Smith Limited, Africa's leading Education consulting firm, and Government Secondary School in Kotangora, where he was also the ICT Coordinator. At Adeola Odutola College, he served as a Mathematics Teacher and Assistant HOD. In addition to his academic qualifications and work experience, Oladele boasts an impressive range of professional skills, including Oracle 11g (Oracle Certified Associate), CCNA (Cisco Certified Networking Associate), CompTIA A+ (Professional Computer Engineering), PMP (Project Management Professional), and ITIL (Information Technology Infrastructure Library). Oladele has also achieved numerous extra-curricular accomplishments throughout his career. He was named the Best Mathematics Student of the Year four times by NAMSSN and was the best graduating student in Mathematics Department at Tai Solarin University of Education. He has also held leadership positions in various student organizations, including the Federation of Ekiti State Students and the National Association of Mathematics Science Students in Nigeria. Oladele possesses excellent communication skills and a strong ability to use a variety of teaching methods and technologies to help students understand complex mathematical concepts. He is committed to creating an inclusive and supportive learning environment that meets the needs of diverse students. With his assessment and evaluation skills, Oladele is adept at monitoring student progress and providing feedback to improve learning outcomes. With his exceptional qualifications, professional skills, and extra-curricular accomplishments, Oladele is an asset to any educational institution.",
  ],
};

// Source: wp9p_posts post_type='testimonials' (5 rows, all tagged the
// "Recipes" testimonial-category — a leftover demo category name, but the
// only one in use, so it's effectively "the" testimonials feed).
export const testimonials: Testimonial[] = [
  {
    quote:
      "I used to struggle a lot with math, but ever since I started attending Emivant, I've seen a significant improvement in my grades. The teachers are very patient and they use really innovative methods to help us understand the concepts better. The interactive classes are really engaging and fun-filled, making learning math a lot easier and enjoyable. I'm really grateful for Emivant and would highly recommend it to any student looking to improve their math skills. Thank you Mr. Segun Oladele",
    name: "Fuwa Jesuloba",
    designation: "Student · Abuja",
    avatar: "/images/avatar-generic.jpg",
    rating: 5,
  },
  {
    quote:
      "As a parent, I am pleased with the progress my child has made in mathematics since enrolling in Emivant Interactive Virtual School. The school's online platform has made it easy for my child to access quality mathematics education from the comfort of our home. Mr. Segun, the Mathematics tutor, has been instrumental in my child's academic success in mathematics.",
    name: "Mr. Obi Paul",
    designation: "Parent · Lekki",
    avatar: "/images/avatar-lady.png",
    rating: 4.5,
  },
  {
    quote:
      "I must commend Mr. Segun, the Mathematics tutor at Emivant Interactive Virtual School, for his exceptional teaching skills. He has transformed my child's attitude towards mathematics from that of fear and confusion to one of excitement and confidence.",
    name: "Claudia",
    designation: "Student · Ireland",
    avatar: "/images/avatar-generic.jpg",
    rating: 4.5,
  },
  {
    quote:
      "As a parent, I am delighted to have found Emivant Interactive Virtual School for my child's mathematics education. The online school provides a conducive and interactive learning platform for students to learn and excel in mathematics.",
    name: "Mrs. Olaosun Comfort",
    designation: "Student · Ibadan",
    avatar: "/images/avatar-generic.jpg",
    rating: 4.5,
  },
  {
    quote:
      "I've been attending Emivant for the past few months and I can honestly say that it's been one of the best decisions I've made. The teachers are experts in their field and are really passionate about teaching math.",
    name: "Tressure",
    designation: "Student · Port-Harcourt",
    avatar: "/images/avatar-generic.jpg",
    rating: 4.5,
  },
];
