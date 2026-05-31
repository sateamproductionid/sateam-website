"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { studio } from "@/lib/nav";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-20 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            <span className="text-violet-500">Nice to</span>
            <br />
            e-meet you!!!
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-md">
            Whether you have a specific project in mind or just want to say
            hello, we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-50 rounded-full">
                <Mail size={24} className="text-violet-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <a
                  href={`mailto:${studio.email}`}
                  className="text-neutral-600 hover:text-violet-700 transition-colors"
                >
                  {studio.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-50 rounded-full">
                <Phone size={24} className="text-violet-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone</h3>
                <p className="text-neutral-600">
                  <a
                    href={`tel:${studio.phoneID.replace(/[\s-]/g, "")}`}
                    className="hover:text-violet-700 transition-colors"
                  >
                    {studio.phoneID}
                  </a>{" "}
                  (ID)
                  <br />
                  <a
                    href={`tel:${studio.phoneMY.replace(/[\s-]/g, "")}`}
                    className="hover:text-violet-700 transition-colors"
                  >
                    {studio.phoneMY}
                  </a>{" "}
                  (MY)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-50 rounded-full">
                <MapPin size={24} className="text-violet-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Office</h3>
                <p className="text-neutral-600 max-w-xs">
                  Creative House
                  <br />
                  By SATEAM Creative Studio
                  <br />
                  {studio.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-neutral-50 p-8 md:p-12 rounded-3xl flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            Start a conversation
          </h2>
          <p className="text-neutral-600">
            Pick the channel that works for you — we usually reply within one
            business day.
          </p>

          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-900 transition-colors"
          >
            <div className="flex items-center gap-3 text-violet-700 mb-3">
              <MessageCircle size={20} />
              <span className="text-sm uppercase tracking-wider font-medium">
                WhatsApp
              </span>
            </div>
            <p className="text-2xl font-bold tracking-tight flex items-center gap-2">
              Chat with us
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </p>
            <p className="text-neutral-500 mt-2 text-sm">
              Fastest channel for project briefs and quick questions.
            </p>
          </a>

          <a
            href={`mailto:${studio.email}`}
            className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-900 transition-colors"
          >
            <div className="flex items-center gap-3 text-violet-700 mb-3">
              <Mail size={20} />
              <span className="text-sm uppercase tracking-wider font-medium">
                Email
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 break-all">
              {studio.email}
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0"
              />
            </p>
            <p className="text-neutral-500 mt-2 text-sm">
              For detailed briefs, RFPs, and partnership inquiries.
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
