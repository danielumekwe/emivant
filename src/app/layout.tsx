import type { Metadata } from "next";
import { Nunito, Rubik } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

// Matches the original Educavo theme's Google Fonts weight sets exactly
// (see phase 1 audit: headings on Nunito 700/600, body on Rubik 300-900).
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Emivant Interactive Virtual School",
  description: "Integrity, Innovation and Creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${rubik.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
