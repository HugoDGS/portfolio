"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const categoryColor: Record<string, string> = {
  security: "text-red-400 bg-red-400/10 border-red-400/20",
  fullstack: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  mobile: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  ai: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

const categoryLabel: Record<string, string> = {
  security: "Security",
  fullstack: "Full Stack",
  mobile: "Mobile",
  ai: "AI",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col bg-[#0f1117] border border-[#1e2433] rounded-xl p-6 hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColor[project.category]}`}
                >
                  {categoryLabel[project.category]}
                </span>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-indigo-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-500 bg-[#1e2433] px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-indigo-400 text-sm transition-colors"
          >
            View all repositories on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
