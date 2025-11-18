import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo Gomes Duarte — Full Stack Developer",
  description:
    "Full Stack Developer with a focus on cybersecurity. Building with React, Next.js, Python, FastAPI, and more.",
  openGraph: {
    title: "Hugo Gomes Duarte — Full Stack Developer",
    description:
      "Full Stack Developer with a focus on cybersecurity.",
    type: "website",
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
