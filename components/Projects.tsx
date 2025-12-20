"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const categoryColor: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  security: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20", dot: "bg-red-400" },
  fullstack: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", dot: "bg-indigo-400" },
  mobile: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", dot: "bg-violet-400" },
  ai: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400" },
};

const categoryLabel: Record<string, string> = {
  security: "Security",
  fullstack: "Full Stack",
  mobile: "Mobile",
  ai: "AI",
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => {
            const c = categoryColor[project.category];
            return (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="glow-card group flex items-start gap-5 p-5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 backdrop-blur-sm transition-all cursor-pointer"
              >
                <div className="mt-1 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-2.5 h-2.5 rounded-full ${c.dot}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-white font-semibold group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${c.bg} ${c.text} ${c.border}`}>
                      {categoryLabel[project.category]}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-[11px] text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.span
                  className="text-zinc-700 group-hover:text-indigo-400 transition-colors text-lg flex-shrink-0 mt-0.5"
                  whileHover={{ x: 3 }}
                >
                  ↗
                </motion.span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors"
          >
            All repositories on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
