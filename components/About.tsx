"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Projects built" },
  { value: "6", label: "Months of activity" },
  { value: "3", label: "Security tools" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-gray-400 leading-relaxed"
          >
            <p>
              I&apos;m a Full Stack developer finishing my studies in France, with hands-on
              experience building web, mobile and security applications from scratch.
            </p>
            <p>
              I started with React and Node.js, expanded into Python and FastAPI, and
              developed a strong interest in application security — building tools
              around encryption, intrusion detection and security auditing.
            </p>
            <p>
              I care about clean architecture, real-world usability and writing code
              that solves actual problems. Looking for my first professional opportunity.
            </p>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/hugo-gomes-duarte-05038b273"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
              >
                Connect on LinkedIn
                <span>→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-[#0f1117] border border-[#1e2433] rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-indigo-400 mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
