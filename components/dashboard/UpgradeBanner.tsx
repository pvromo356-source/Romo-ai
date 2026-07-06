import Link from "next/link";

export function UpgradeBanner() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white text-black p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-black/45">
            Unlock Full Business Brain
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            Get better precision with connected data.
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-black/60">
            Your free scan gives first value. Upgrade when you want revenue tracking,
            customer insights, supplier cost monitoring, reports, and action recommendations.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-black/80"
          >
            View Pricing
          </Link>

          <Link
            href="/pricing"
            className="rounded-full border border-black/10 px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-black/5"
          >
            Unlock Growth
          </Link>
        </div>
      </div>
    </section>
  );
}