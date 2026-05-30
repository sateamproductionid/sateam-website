import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import {
  PublicChromeHeader,
  PublicChromeFooter,
} from "@/components/PublicChrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sateamcreative.com"),
  title: {
    default: "SATEAM Creative Studio",
    template: "%s — SATEAM Creative Studio",
  },
  description:
    "A creative studio based in Bandung crafting strategic branding, event visuals, motion graphics, and commercial video.",
  openGraph: {
    title: "SATEAM Creative Studio",
    description:
      "A creative studio based in Bandung crafting strategic branding, event visuals, motion graphics, and commercial video.",
    type: "website",
    siteName: "SATEAM Creative Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white"
      >
        <PublicChromeHeader />
        <main className="flex-grow flex flex-col">{children}</main>
        <PublicChromeFooter />
        <Analytics />
      </body>
    </html>
  );
}
