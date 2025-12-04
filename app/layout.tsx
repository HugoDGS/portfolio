import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo Gomes Duarte — Full Stack Developer",
  description:
    "Full Stack Developer with a focus on cybersecurity. Building with React, Next.js, Python, FastAPI, and more.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Python", "FastAPI", "Cybersecurity", "Portfolio"],
  authors: [{ name: "Hugo Gomes Duarte" }],
  openGraph: {
    title: "Hugo Gomes Duarte — Full Stack Developer",
    description:
      "Full Stack Developer with a focus on cybersecurity — React, Next.js, Python, FastAPI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
