"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const groupColor: Record<string, string> = {
  Frontend: "text-indigo-400",
  Backend: "text-emerald-400",
  "Database & DevOps": "text-blue-400",
  Security: "text-red-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0d16]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3">
            Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className={`text-xs font-mono font-semibold tracking-widest uppercase mb-4 ${groupColor[group.label]}`}>
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-gray-300 bg-[#0f1117] border border-[#1e2433] px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
