"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BarChart3, LogOut, ExternalLink, Home } from "lucide-react";

const navItems = [{ href: "/admin", label: "Overview", icon: BarChart3 }];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  if (isLogin) return <>{children}</>;

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-neutral-950 text-neutral-100">
      {/* Sidebar */}
      <aside className="w-60 border-r border-neutral-800 flex flex-col p-6 sticky top-0 h-screen">
        <Link
          href="/admin"
          className="text-lg font-bold tracking-wider uppercase mb-10"
        >
          <span className="text-violet-400">S</span>ateam{" "}
          <span className="text-neutral-500 text-xs block tracking-widest mt-1">
            Admin
          </span>
        </Link>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-violet-500/10 text-violet-300"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col gap-1 border-t border-neutral-800 pt-4">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <Home size={16} />
            View site
            <ExternalLink size={12} className="ml-auto" />
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-rose-400 transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>
  );
}
