import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  ADMIN_COOKIE_MAX_AGE,
  getAdminConfig,
  makeSessionToken,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  const { password: input } = (await request.json()) as { password?: string };
  const { password, secret, configured } = getAdminConfig();

  if (!configured) {
    return NextResponse.json(
      { ok: false, error: "ADMIN_PASSWORD and ADMIN_SESSION_SECRET env vars are not set." },
      { status: 500 },
    );
  }
  if (!input || input !== password) {
    return NextResponse.json(
      { ok: false, error: "Wrong password." },
      { status: 401 },
    );
  }

  const token = await makeSessionToken(password!, secret!);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });
  return res;
}
