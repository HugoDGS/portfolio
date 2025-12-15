"use client";
import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-16"
        >
          Stack
        </motion.p>

        <div className="space-y-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-6 items-baseline"
            >
              <span className="text-xs text-zinc-600 font-medium">{group.label}</span>
              <span className="text-sm text-zinc-400 leading-relaxed">
                {group.skills.join(", ")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
