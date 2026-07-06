"use client";

import Link from "next/link";

export function AppNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.25em] text-white/80">
          ROMO
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            New Scan
          </Link>

          <Link
            href="/dashboard"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Dashboard
          </Link>

          <Link
            href="/pricing"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            Pricing
          </Link>
        </div>
      </nav>
    </header>
  );
}