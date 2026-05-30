import { NextResponse } from "next/server";

type StatPayload = {
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

function generateMockStats(): StatPayload {
  const now = new Date();
  const from = new Date(now);
  from.setDate(from.getDate() - 30);

  // Deterministic-ish "random" so chart looks plausible & stable across reloads
  const seed = now.getUTCDate();
  const rand = (i: number, max: number, min = 0) =>
    Math.floor(((Math.sin(i * 12.9898 + seed * 78.233) + 1) / 2) * (max - min) + min);

  const timeline = Array.from({ length: 30 }).map((_, i) => {
    const d = new Date(from);
    d.setDate(d.getDate() + i);
    const visitors = rand(i, 180, 40);
    return {
      date: d.toISOString().slice(0, 10),
      visitors,
      pageviews: Math.floor(visitors * (1.6 + (rand(i + 1, 60, 0) / 100))),
    };
  });

  const totals = timeline.reduce(
    (acc, d) => ({
      visitors: acc.visitors + d.visitors,
      pageviews: acc.pageviews + d.pageviews,
    }),
    { visitors: 0, pageviews: 0 },
  );

  return {
    configured: false,
    range: { from: from.toISOString().slice(0, 10), to: now.toISOString().slice(0, 10) },
    totals: {
      visitors: totals.visitors,
      pageviews: totals.pageviews,
      avgDurationSec: 142,
      bounceRate: 0.41,
    },
    topPages: [
      { path: "/", views: 1842 },
      { path: "/work", views: 1267 },
      { path: "/services", views: 892 },
      { path: "/about", views: 654 },
      { path: "/contact", views: 412 },
    ],
    topReferrers: [
      { source: "Direct", visitors: 1421 },
      { source: "instagram.com", visitors: 612 },
      { source: "google.com", visitors: 548 },
      { source: "linkedin.com", visitors: 287 },
      { source: "x.com", visitors: 134 },
    ],
    topCountries: [
      { code: "ID", name: "Indonesia", visitors: 2104 },
      { code: "MY", name: "Malaysia", visitors: 312 },
      { code: "SG", name: "Singapore", visitors: 198 },
      { code: "US", name: "United States", visitors: 142 },
      { code: "AU", name: "Australia", visitors: 87 },
    ],
    timeline,
  };
}

/**
 * Fetch real stats from Vercel Web Analytics REST API.
 * Requires env: VERCEL_API_TOKEN, VERCEL_PROJECT_ID, optionally VERCEL_TEAM_ID
 * Docs: https://vercel.com/docs/rest-api/reference/endpoints/projects/get-project-web-analytics
 *
 * NOTE: When NOT configured, we return mock data so the dashboard is usable for design preview.
 */
async function fetchVercelStats(): Promise<StatPayload | null> {
  const token = process.env.VERCEL_API_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  if (!token || !projectId) return null;

  // Placeholder: in a real integration we'd hit Vercel REST endpoints here.
  // Kept as TODO so the dashboard works out of the box with mock data,
  // and you can wire in real fetches once you have an API token.
  void teamId;
  return null;
}

export async function GET() {
  const real = await fetchVercelStats();
  if (real) return NextResponse.json(real);

  const mock = generateMockStats();
  return NextResponse.json(mock);
}
