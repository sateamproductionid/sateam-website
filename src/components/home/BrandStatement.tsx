"use client";

import { motion } from "motion/react";
import { studioCopy } from "@/lib/data";

export function BrandStatement() {
  return (
    <section className="bg-neutral-900 text-white py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-violet-500 mb-8">
            {studioCopy.hero.eyebrow}
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] whitespace-pre-line">
            {studioCopy.hero.title}
          </h2>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            {studioCopy.hero.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
