"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const categoryLabel: Record<string, string> = {
  security: "Security",
  fullstack: "Full Stack",
  mobile: "Mobile",
  ai: "AI",
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-16"
        >
          Selected Work
        </motion.p>

        <div>
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group grid grid-cols-[2rem_1fr_auto] gap-6 items-start py-8 border-b border-zinc-900 hover:border-zinc-800 transition-colors cursor-pointer"
            >
              <span className="text-zinc-700 text-xs font-mono mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-zinc-100 font-medium group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5 hidden sm:inline">
                    {categoryLabel[project.category]}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[11px] text-zinc-700 font-mono">
                      {tech}
                    </span>
                  )).reduce((acc: React.ReactNode[], el, idx, arr) => {
                    acc.push(el);
                    if (idx < arr.length - 1) {
                      acc.push(<span key={`sep-${idx}`} className="text-zinc-800 text-[11px]">·</span>);
                    }
                    return acc;
                  }, [])}
                </div>
              </div>

              <span className="text-zinc-800 group-hover:text-zinc-500 transition-colors mt-1 text-sm">
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="https://github.com/HugoDGS"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors"
          >
            All repositories on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
