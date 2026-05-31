import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { studio } from "@/lib/nav";
import { studioCopy } from "@/lib/data";
import { XIcon } from "@/components/icons/XIcon";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 rounded-t-[2.5rem] mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              {studioCopy.footer.headline} <br />
              <span className="text-neutral-500">
                {studioCopy.footer.headlineEm}
              </span>
            </h2>
            <a
              href={`mailto:${studio.email}`}
              className="inline-flex items-center gap-2 text-base sm:text-lg md:text-xl font-medium border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all break-all"
            >
              {studio.email}{" "}
              <ArrowUpRight size={18} className="shrink-0" />
            </a>
          </div>
          <div className="flex flex-col md:items-end justify-end gap-8">
            <div className="flex gap-6">
              <a
                href={studio.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={studio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={studio.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="p-3 bg-neutral-800 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <XIcon size={18} />
              </a>
            </div>
            <div className="text-neutral-400 max-w-xs md:text-right text-sm">
              {studio.location}
              <br />
              Creative House — By SATEAM Creative Studio
              <br />
              www.sateamcreative.com
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} SATEAM Creative Studio. Member of
            SATEAM GROUP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
