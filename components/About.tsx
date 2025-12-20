"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Projects built", color: "from-indigo-500 to-violet-500" },
  { value: "6 mo", label: "Consistent activity", color: "from-violet-500 to-purple-500" },
  { value: "3", label: "Security tools", color: "from-red-500 to-orange-500" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-sm text-zinc-400 leading-relaxed"
          >
            <p>
              I&apos;m a Full Stack developer finishing my studies in France, with experience
              building web, mobile and security applications from scratch.
            </p>
            <p>
              I started with React and Node.js, expanded into Python and FastAPI, and developed
              a strong interest in application security — encryption, intrusion detection
              and security auditing.
            </p>
            <p>
              I care about clean architecture and writing code that solves actual problems.
            </p>
            <a
              href="https://www.linkedin.com/in/hugo-gomes-duarte-05038b273"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              Connect on LinkedIn ↗
            </a>
          </motion.div>

          <div className="space-y-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                  {s.value}
                </div>
                <div className="text-sm text-zinc-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
