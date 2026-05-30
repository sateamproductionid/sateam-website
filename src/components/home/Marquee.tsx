"use client";

import { motion } from "motion/react";
import { marqueeWords } from "@/lib/data";

export function Marquee() {
  return (
    <section className="py-10 border-y border-neutral-200 bg-white overflow-hidden flex whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex gap-12 items-center text-lg font-medium uppercase tracking-wider text-neutral-400"
          >
            {marqueeWords.map((w) => (
              <span key={w} className="flex items-center gap-12">
                <span>{w}</span>
                <span className="w-2 h-2 rounded-full bg-violet-500" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
