"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3 } from "lucide-react";

function navClass(isActive: boolean) {
  return `rounded-full border px-4 py-2.5 text-[13px] font-semibold transition ${
    isActive
      ? "border-white bg-white text-black"
      : "border-white/10 bg-white/[0.02] text-white/68 hover:border-white/25 hover:bg-white/10 hover:text-white"
  }`;
}

export function AppNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isDashboard = pathname.startsWith("/dashboard");
  const isPricing = pathname.startsWith("/pricing") || pathname.startsWith("/checkout");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white transition group-hover:bg-white group-hover:text-black">
            <BarChart3 className="h-5 w-5" strokeWidth={2.2} />
          </div>

          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-[0.34em] text-white">
              ROMO
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38 sm:block">
              Business Brain
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/" className={navClass(isHome)}>
            New Scan
          </Link>

          <Link href="/dashboard" className={`${navClass(isDashboard)} hidden sm:inline-flex`}>
            Dashboard
          </Link>

          <Link href="/pricing" className={navClass(isPricing)}>
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  );
}