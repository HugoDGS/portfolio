"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-zinc-800 bg-[#0e0e14]/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-sm tracking-tight">
          Hugo<span className="text-indigo-400">.</span>
        </a>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-zinc-400 hover:text-white text-sm transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
