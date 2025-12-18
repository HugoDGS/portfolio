"use client";
import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "hugo24750@icloud.com", href: "mailto:hugo24750@icloud.com" },
  { label: "GitHub", value: "github.com/HugoDGS", href: "https://github.com/HugoDGS" },
  { label: "LinkedIn", value: "hugo-gomes-duarte", href: "https://www.linkedin.com/in/hugo-gomes-duarte-05038b273" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-16"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 max-w-sm leading-tight"
        >
          Open to new opportunities.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-zinc-400 mb-14 max-w-sm leading-relaxed"
        >
          Available for full-stack and security roles. Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel={l.label !== "Email" ? "noreferrer" : undefined}
              className="group grid grid-cols-[5rem_1fr_auto] items-center gap-4 py-4 border-b border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <span className="text-xs text-zinc-600">{l.label}</span>
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                {l.value}
              </span>
              <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-sm">↗</span>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-zinc-700 text-xs mt-20"
        >
          Built with Next.js 15 & Tailwind CSS — 2025
        </motion.p>
      </div>
    </section>
  );
}
