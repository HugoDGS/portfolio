"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-16"
        >
          Background
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {[
              { value: "9+", label: "Projects built" },
              { value: "6 mo", label: "Consistent activity" },
              { value: "3", label: "Security tools" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-zinc-700 pl-5">
                <div className="text-2xl font-semibold text-white mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
