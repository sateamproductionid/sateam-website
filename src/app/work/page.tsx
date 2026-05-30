"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { allProjects } from "@/lib/data";

const PHASE_FILTERS = [
  "All",
  "Brand Identity",
  "Brand Growth",
  "Visual Experimentation",
] as const;

type PhaseFilter = (typeof PHASE_FILTERS)[number];

export default function WorkPage() {
  const [active, setActive] = useState<PhaseFilter>("All");

  const filtered =
    active === "All"
      ? allProjects
      : allProjects.filter((p) => p.phase === active);

  return (
    <div className="container mx-auto px-6 md:px-12 py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-sm text-violet-700 uppercase tracking-[0.3em] mb-6">
          Selected Work
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
          Projects that move
          <br />
          <span className="text-neutral-400">the needle.</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl">
          A growing archive of collaborations across branding, growth campaigns,
          and large-scale visual experiences.
        </p>
      </motion.div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {PHASE_FILTERS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setActive(p)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
              active === p
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {filtered.map((project, index) => (
          <motion.a
            href="#"
            key={project.title + project.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            className="group cursor-pointer mb-8"
          >
            <div className="overflow-hidden rounded-2xl mb-5 bg-neutral-200 aspect-[16/9] relative">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-700 mb-2">
                  {project.phase}
                </p>
                <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-neutral-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500">{project.category}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-neutral-500 py-20">
          No projects in this phase yet.
        </p>
      ) : null}
    </div>
  );
}
