"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Pages whose hero is dark — header should render in light mode (white text + light logo) at top.
  const DARK_HERO_PAGES = ["/"];
  const isDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerTone = isScrolled
    ? "bg-white/90 backdrop-blur-md py-4 shadow-sm text-neutral-900"
    : isDarkHero
      ? "bg-transparent py-6 text-white"
      : "bg-transparent py-6 text-neutral-900";

  const onLightSurface = isScrolled || !isDarkHero;
  const linkHover = onLightSurface ? "hover:text-neutral-500" : "hover:text-white/70";
  const underline = onLightSurface ? "bg-neutral-900" : "bg-white";
  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerTone}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            aria-label="SATEAM Creative Studio — Home"
            className="z-50 relative flex items-center"
          >
            <Image
              src={onLightSurface ? "/images/logo-dark.png" : "/images/logo.png"}
              alt="SATEAM Creative Studio"
              width={180}
              height={62}
              priority
              className="h-11 md:h-13 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors relative group ${linkHover}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all group-hover:w-full ${underline}`}
                />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-neutral-900" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-4xl font-bold tracking-tighter hover:text-neutral-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
