"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = params.get("error");
    if (code === "not_configured") {
      setError(
        "Admin is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET environment variables, then redeploy.",
      );
    }
  }, [params]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Login failed.");
        setLoading(false);
        return;
      }
      const next = params.get("next") ?? "/admin";
      router.replace(next);
    } catch {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-10">
          <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-5">
            <Lock size={22} className="text-violet-400" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">SATEAM Admin</h1>
          <p className="text-sm text-neutral-500 mt-2">
            Studio-only access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Password
            </span>
            <input
              type="password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-violet-500 transition-colors"
            />
          </label>

          {error ? (
            <p className="text-sm text-rose-400 leading-relaxed">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading || !password}
            className="bg-violet-500 hover:bg-violet-400 disabled:bg-neutral-700 disabled:cursor-not-allowed text-white font-medium px-4 py-3 rounded-lg transition-colors"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="text-xs text-neutral-600 text-center mt-10">
          Not a studio member?{" "}
          <a href="/" className="text-violet-400 hover:underline">
            Back to website
          </a>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginInner />
    </Suspense>
  );
}
