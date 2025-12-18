"use client";
import { motion } from "framer-motion";

const item = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div {...item(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs text-zinc-400 border border-zinc-700 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          {...item(0.08)}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.08] mb-6"
        >
          Hugo Gomes Duarte
        </motion.h1>

        <motion.p
          {...item(0.14)}
          className="text-xl text-zinc-300 font-light mb-4 max-w-lg leading-relaxed"
        >
          Full Stack Developer — Web, Mobile & Security.
        </motion.p>

        <motion.p
          {...item(0.2)}
          className="text-zinc-500 max-w-md mb-14 leading-relaxed text-sm"
        >
          Building complete applications from database to UI with a strong interest in
          cybersecurity. Currently finishing my studies and looking for a first opportunity.
        </motion.p>

        <motion.div {...item(0.26)} className="flex items-center gap-6 flex-wrap">
          <a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            GitHub
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="https://www.linkedin.com/in/hugo-gomes-duarte-05038b273"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            LinkedIn
            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
          </a>
          <span className="text-zinc-700">·</span>
          <a href="#projects" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            View work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
