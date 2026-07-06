import Link from "next/link";
import { WebsiteAnalyzerForm } from "@/components/landing/WebsiteAnalyzerForm";

const proofPoints = [
  "No setup required",
  "Website-only first scan",
  "Better precision with connected data",
];

const steps = [
  {
    label: "Step 1",
    title: "Scan website",
    description: "Start with public business information and first-impression signals.",
  },
  {
    label: "Step 2",
    title: "Find weak points",
    description: "Spot revenue leaks, trust gaps, missing data, and operational risks.",
  },
  {
    label: "Step 3",
    title: "Get next actions",
    description: "Turn findings into clear recommendations the owner can act on.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-6 py-16 text-center md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
            Romo Business Brain
          </div>

          <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
            Stop guessing. Start improving.
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Find what is costing your business money.
          </h1>

          <p className="mt-7 max-w-3xl text-[17px] leading-8 text-white/64 md:text-[18px]">
            Romo scans your business, finds weak points, and shows what to fix next.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[12px] font-medium text-white/52"
              >
                {point}
              </span>
            ))}
          </div>

          <WebsiteAnalyzerForm />

          <Link
            href="/pricing"
            className="mt-3 text-[13px] font-semibold text-white/50 underline decoration-white/15 underline-offset-4 transition hover:text-white hover:decoration-white/50"
          >
            View pricing
          </Link>

          <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 text-left shadow-2xl shadow-black/30"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-white/32">
                  {step.label}
                </p>

                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                  {step.title}
                </h2>

                <p className="mt-3 text-[14px] leading-7 text-white/54">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-[12px] font-medium text-white/38">
            Built for owners who need clarity, not more dashboards.
          </div>
        </div>
      </section>
    </main>
  );
}