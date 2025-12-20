"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-600 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs text-indigo-300 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Hugo Gomes</span>
          <br />
          <span className="gradient-text">Duarte</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-zinc-300 font-light mb-4 max-w-lg leading-relaxed"
        >
          Full Stack Developer — Web, Mobile & Security.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-500 max-w-md mb-12 leading-relaxed text-sm"
        >
          Building complete applications from database to UI with a strong interest in
          cybersecurity. Currently finishing my studies and looking for a first opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <motion.a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-indigo-900/40"
          >
            GitHub ↗
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hugo-gomes-duarte-05038b273"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white text-sm font-semibold rounded-lg transition-all"
          >
            LinkedIn ↗
          </motion.a>
          <a href="#projects" className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors ml-2">
            View work ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
