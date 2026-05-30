"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 sticky top-32">
              What we do best.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-12">
            {homeServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-b border-neutral-200 pb-12"
              >
                <h3 className="text-3xl font-bold mb-4 flex items-center justify-between">
                  {service.title}
                  <ArrowRight
                    size={28}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neutral-400"
                  />
                </h3>
                <p className="text-neutral-600 text-lg max-w-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
