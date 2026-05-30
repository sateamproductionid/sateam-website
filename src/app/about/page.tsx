"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { team, studioCopy } from "@/lib/data";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

function withBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function AboutPage() {
  return (
    <div className="bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 py-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-24"
        >
          {/* Welcome — Being seen is easy / Being remembered requires mastery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.05]">
                {studioCopy.about.welcomeHeading}
                <br />
                <span className="text-neutral-400">
                  {studioCopy.about.welcomeHeadingEm}
                </span>
              </h1>
              {studioCopy.about.welcomeBody.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-neutral-700 leading-relaxed"
                >
                  {withBold(p)}
                </p>
              ))}
              <blockquote className="border-l-2 border-violet-500 pl-5 mt-2 text-neutral-800 italic">
                &ldquo;{studioCopy.about.welcomeQuote}&rdquo;
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-200"
            >
              <ImagePlaceholder label="Studio Portrait" />
            </motion.div>
          </div>

          {/* Core Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 order-2 lg:order-1"
            >
              <ImagePlaceholder label="The Core Philosophy" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {studioCopy.about.philosophy.title}
              </h2>
              <p className="text-lg text-neutral-600 font-medium">
                {withBold(studioCopy.about.philosophy.tagline)}
              </p>
              {studioCopy.about.philosophy.body.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-neutral-700 leading-relaxed"
                >
                  {withBold(p)}
                </p>
              ))}
              <p className="text-xl font-bold mt-2 text-neutral-900">
                {studioCopy.about.philosophy.closing}
              </p>
            </motion.div>
          </div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              The Team
            </h2>
            <p className="text-neutral-600 max-w-2xl mb-16">
              Behind every triumphant ecosystem is a collective of strategic
              minds. SATEAM is driven by multidisciplinary professionals who
              have been forged in the battlefields of the creative industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-200 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-violet-700 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
