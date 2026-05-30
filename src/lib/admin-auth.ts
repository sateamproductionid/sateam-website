/**
 * Simple single-user admin auth using HTTP-only cookie.
 * Password is hashed with the session secret to produce a session token.
 * Not a full auth system — fine for one studio admin.
 */

const encoder = new TextEncoder();

export const ADMIN_COOKIE = "sateam_admin";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

export async function makeSessionToken(
  password: string,
  secret: string,
): Promise<string> {
  const data = encoder.encode(`${password}|${secret}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifySessionToken(
  token: string | undefined,
  password: string,
  secret: string,
): Promise<boolean> {
  if (!token) return false;
  const expected = await makeSessionToken(password, secret);
  return token === expected;
}

export function getAdminConfig() {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  return {
    password,
    secret,
    configured: Boolean(password && secret),
  };
}
