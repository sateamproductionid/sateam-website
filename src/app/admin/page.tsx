"use client";

import { useEffect, useMemo, useState } from "react";
import { Eye, Users, Timer, ArrowDownRight, AlertTriangle } from "lucide-react";

type Stats = {
  configured: boolean;
  range: { from: string; to: string };
  totals: {
    visitors: number;
    pageviews: number;
    avgDurationSec: number;
    bounceRate: number;
  };
  topPages: { path: string; views: number }[];
  topReferrers: { source: string; visitors: number }[];
  topCountries: { code: string; name: string; visitors: number }[];
  timeline: { date: string; visitors: number; pageviews: number }[];
};

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
}

function formatPct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => setError("Failed to load stats."));
  }, []);

  const maxVisitors = useMemo(() => {
    if (!stats) return 1;
    return Math.max(...stats.timeline.map((d) => d.visitors));
  }, [stats]);

  return (
    <div className="p-8 md:p-10 max-w-6xl">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Overview
        </h1>
        <p className="text-neutral-400 mt-2">
          Last 30 days · {stats ? `${stats.range.from} → ${stats.range.to}` : "Loading…"}
        </p>
      </header>

      {/* Demo data banner */}
      {stats && !stats.configured ? (
        <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-xl p-4 mb-8">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <div className="text-sm leading-relaxed">
            <strong className="font-semibold">Showing demo data.</strong> Set{" "}
            <code className="text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">
              VERCEL_API_TOKEN
            </code>{" "}
            and{" "}
            <code className="text-xs bg-amber-500/10 px-1.5 py-0.5 rounded">
              VERCEL_PROJECT_ID
            </code>{" "}
            in your Vercel environment to wire real analytics.
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="text-rose-400 mb-8">{error}</div>
      ) : null}

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard
          icon={<Users size={16} />}
          label="Visitors"
          value={stats ? formatNumber(stats.totals.visitors) : "—"}
        />
        <StatCard
          icon={<Eye size={16} />}
          label="Page views"
          value={stats ? formatNumber(stats.totals.pageviews) : "—"}
        />
        <StatCard
          icon={<Timer size={16} />}
          label="Avg. duration"
          value={stats ? formatDuration(stats.totals.avgDurationSec) : "—"}
        />
        <StatCard
          icon={<ArrowDownRight size={16} />}
          label="Bounce rate"
          value={stats ? formatPct(stats.totals.bounceRate) : "—"}
        />
      </div>

      {/* Timeline */}
      <Card title="Visitors over time">
        {stats ? (
          <div className="flex items-end gap-1 h-40 mt-2">
            {stats.timeline.map((d) => {
              const h = Math.max(4, (d.visitors / maxVisitors) * 100);
              return (
                <div
                  key={d.date}
                  className="group flex-1 flex flex-col items-center justify-end relative"
                >
                  <div
                    className="w-full bg-violet-500/60 hover:bg-violet-400 rounded-t-sm transition-colors"
                    style={{ height: `${h}%` }}
                  />
                  <div className="absolute -top-9 hidden group-hover:block bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-xs whitespace-nowrap">
                    <strong>{d.visitors}</strong> · {d.date.slice(5)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <SkeletonBlock className="h-40" />
        )}
      </Card>

      {/* Two-column lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <Card title="Top pages">
          {stats ? (
            <BarList
              items={stats.topPages.map((p) => ({
                label: p.path,
                value: p.views,
              }))}
              suffix="views"
            />
          ) : (
            <SkeletonBlock className="h-40" />
          )}
        </Card>

        <Card title="Top referrers">
          {stats ? (
            <BarList
              items={stats.topReferrers.map((p) => ({
                label: p.source,
                value: p.visitors,
              }))}
              suffix="visitors"
            />
          ) : (
            <SkeletonBlock className="h-40" />
          )}
        </Card>
      </div>

      <div className="mt-4">
        <Card title="Top countries">
          {stats ? (
            <BarList
              items={stats.topCountries.map((c) => ({
                label: `${c.code} · ${c.name}`,
                value: c.visitors,
              }))}
              suffix="visitors"
            />
          ) : (
            <SkeletonBlock className="h-40" />
          )}
        </Card>
      </div>
    </div>
  );
}

/* ── tiny presentational helpers ──────────────────────────────────────── */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
      <div className="flex items-center gap-2 text-neutral-400 text-xs uppercase tracking-wider mb-3">
        {icon}
        {label}
      </div>
      <p className="text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
      <h2 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BarList({
  items,
  suffix,
}: {
  items: { label: string; value: number }[];
  suffix: string;
}) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        const pct = (item.value / max) * 100;
        return (
          <li key={item.label} className="relative">
            <div
              className="absolute inset-y-0 left-0 bg-violet-500/15 rounded"
              style={{ width: `${pct}%` }}
            />
            <div className="relative flex items-center justify-between px-3 py-2 text-sm">
              <span className="font-mono text-neutral-200">{item.label}</span>
              <span className="text-neutral-400 text-xs">
                {item.value.toLocaleString()} {suffix}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`bg-neutral-800/40 animate-pulse rounded ${className}`} />;
}
