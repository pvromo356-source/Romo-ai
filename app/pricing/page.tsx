import Link from "next/link";
import { PricingTable } from "@/components/pricing/PricingTable";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-6 text-center">
          <div className="mx-auto rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
            Romo Business Brain
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-white/35">
            See what matters. Act faster.
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
            Pricing built for businesses that want clarity.
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/60">
            Start with a free scan. Upgrade when you want better precision, connected data,
            business memory, and action recommendations.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
            >
              Start Free Scan
            </Link>

            <Link
              href="/dashboard"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              View Demo Dashboard
            </Link>
          </div>
        </div>

        <PricingTable />

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/35">
            Optional setup
          </p>

          <h2 className="mt-3 text-3xl font-semibold">White Glove Setup - $499 one-time</h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/55">
            For owners who do not want to configure anything. Romo helps set up the first
            business profile, data sources, and initial recommendations.
          </p>
        </div>
      </section>
    </main>
  );
}