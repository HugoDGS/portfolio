"use client";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "hugo24750@icloud.com",
    href: "mailto:hugo24750@icloud.com",
    color: "group-hover:text-indigo-300",
  },
  {
    label: "GitHub",
    value: "github.com/HugoDGS",
    href: "https://github.com/HugoDGS",
    color: "group-hover:text-violet-300",
  },
  {
    label: "LinkedIn",
    value: "hugo-gomes-duarte",
    href: "https://www.linkedin.com/in/hugo-gomes-duarte-05038b273",
    color: "group-hover:text-blue-300",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Open to new opportunities.
          </h2>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
            Available for full-stack and security roles. Feel free to reach out.
          </p>
        </motion.div>

        <div className="space-y-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel={l.label !== "Email" ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ x: 6 }}
              className="group glow-card flex items-center justify-between p-5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 transition-all"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-zinc-600 w-14">{l.label}</span>
                <span className={`text-sm text-zinc-300 transition-colors ${l.color}`}>
                  {l.value}
                </span>
              </div>
              <span className="text-zinc-700 group-hover:text-indigo-400 transition-colors">↗</span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-zinc-800 text-xs mt-20"
        >
          Built with Next.js 15 & Tailwind CSS — 2025
        </motion.p>
      </div>
    </section>
  );
}
