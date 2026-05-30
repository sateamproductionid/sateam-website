import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12 pt-40 pb-24 max-w-4xl">
        <p className="text-sm text-violet-700 uppercase tracking-[0.3em] mb-6">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.0]">
          {title}
        </h1>
        <p className="text-sm text-neutral-500 mb-16">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                {String(i + 1).padStart(2, "0")}. {s.heading}
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4 prose-headings:font-bold">
                {s.body}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
          <p>
            This document is provided as a starting template. SATEAM Creative
            Studio recommends having it reviewed by qualified legal counsel
            before relying on it for any specific situation.
          </p>
        </div>
      </div>
    </div>
  );
}
