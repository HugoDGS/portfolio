"use client";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-600/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          {...fade(0)}
          className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-6"
        >
          Available for opportunities
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          <span className="text-white">Hugo </span>
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Gomes Duarte
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.2)}
          className="text-xl md:text-2xl text-gray-400 font-light mb-4"
        >
          Full Stack Developer — Web, Mobile & Security
        </motion.p>

        <motion.p
          {...fade(0.3)}
          className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build complete applications from database to UI with a strong interest in
          cybersecurity. Currently finishing my studies and looking for my first opportunity.
        </motion.p>

        <motion.div {...fade(0.4)} className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-600/25"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-gomes-duarte-05038b273"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 border border-[#1e2433] hover:border-indigo-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="px-7 py-3 border border-[#1e2433] hover:border-gray-600 text-gray-500 hover:text-gray-300 font-semibold rounded-lg transition-all"
          >
            View Projects ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-indigo-500 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
