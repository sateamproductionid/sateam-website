"use client";

import { motion } from "motion/react";
import { brandPhases } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        <div
          className="absolute inset-0 z-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.25), transparent 50%), radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.2), transparent 50%)",
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <p className="text-sm text-violet-700 uppercase tracking-[0.3em] mb-6">
              The Ecosystem
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.95]">
              Three Phases.
              <br />
              <span className="text-neutral-400">
                The Ultimate Brand Engine.
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed">
              We don&apos;t work on isolated projects. We engineer brand
              ecosystems through three connected phases — from foundation to
              market invasion to footprints competitors cannot replicate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Phases */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-32 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 pt-20">
          {brandPhases.map((phase) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            >
              <div className="lg:col-span-5 flex flex-col gap-3">
                <p className="text-sm text-violet-700 uppercase tracking-[0.3em]">
                  {phase.phase}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
                  {phase.title}
                </h2>
                <p className="text-lg text-neutral-500 mt-2">
                  {phase.tagline}
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-8">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {phase.body}
                </p>

                <div>
                  <p className="text-xs text-violet-700 uppercase tracking-[0.25em] font-medium mb-4">
                    Core Deliverables
                  </p>
                  <ul className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-y-4 gap-x-6">
                    {phase.deliverables.map((d, i) => (
                      <li
                        key={d}
                        className="flex items-center gap-6 text-center"
                      >
                        {i > 0 && (
                          <span
                            aria-hidden="true"
                            className="hidden md:block w-[2px] h-5 bg-violet-600 shrink-0"
                          />
                        )}
                        <span className="text-base text-neutral-800">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-violet-700 uppercase tracking-[0.3em] mb-6">
            Shaping Brands. Building Empires.
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 max-w-4xl mx-auto leading-[0.95]">
            As a team,
            <br />
            <span className="text-neutral-400">we create impact.</span>
          </h2>
          <a
            href="/contact"
            className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </div>
  );
}
