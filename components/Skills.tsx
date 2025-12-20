"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const groupAccent: Record<string, string> = {
  Frontend: "text-indigo-400",
  Backend: "text-violet-400",
  "Database & DevOps": "text-blue-400",
  Security: "text-red-400",
};

const pillColor: Record<string, string> = {
  Frontend: "border-indigo-500/20 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20",
  Backend: "border-violet-500/20 text-violet-300 bg-violet-500/10 hover:bg-violet-500/20",
  "Database & DevOps": "border-blue-500/20 text-blue-300 bg-blue-500/10 hover:bg-blue-500/20",
  Security: "border-red-500/20 text-red-300 bg-red-500/10 hover:bg-red-500/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${groupAccent[group.label]}`}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.04 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={`text-sm px-3 py-1.5 rounded-lg border cursor-default transition-colors ${pillColor[group.label]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
