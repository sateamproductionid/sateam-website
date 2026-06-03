"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { studioCopy } from "@/lib/data";
import { Typewriter } from "@/components/Typewriter";

export function BrandStatement() {
  const [inView, setInView] = useState(false);
  const [titleDone, setTitleDone] = useState(false);

  return (
    <section className="bg-neutral-900 text-white py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.5 }}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-violet-500 mb-8 font-mono">
            {studioCopy.hero.eyebrow}
          </p>

          {/* Title — typewriter */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] whitespace-pre-line min-h-[2em]">
            <Typewriter
              text={studioCopy.hero.title}
              start={inView}
              speed={55}
              delay={250}
              onDone={() => setTitleDone(true)}
            />
          </h2>

          {/* Description — fades in after typewriter completes */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed"
          >
            {studioCopy.hero.desc}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
