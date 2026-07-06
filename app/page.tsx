import Link from "next/link";
import { ArrowRight, CheckCircle2, LineChart, Search, ShieldCheck, Target } from "lucide-react";
import { WebsiteAnalyzerForm } from "@/components/landing/WebsiteAnalyzerForm";
import { RomoBadge, RomoCard, RomoFadeIn, RomoStagger, RomoStaggerItem } from "@/components/ui";

const proofPoints = [
  {
    icon: ShieldCheck,
    text: "No setup required",
  },
  {
    icon: Search,
    text: "Website-only first scan",
  },
  {
    icon: CheckCircle2,
    text: "Better precision with connected data",
  },
];

const steps = [
  {
    label: "Step 1",
    title: "Scan website",
    description: "Start with public business information and first-impression signals.",
    icon: Search,
  },
  {
    label: "Step 2",
    title: "Find weak points",
    description: "Spot revenue leaks, trust gaps, missing data, and operational risks.",
    icon: Target,
  },
  {
    label: "Step 3",
    title: "Get next actions",
    description: "Turn findings into clear recommendations the owner can act on.",
    icon: LineChart,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center px-6 py-14 text-center md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <RomoFadeIn delay={0.02}>
            <RomoBadge>Romo Business Brain</RomoBadge>
          </RomoFadeIn>

          <RomoFadeIn delay={0.08}>
            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
              Stop guessing. Start improving.
            </p>
          </RomoFadeIn>

          <RomoFadeIn delay={0.14} y={18}>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[5.6rem]">
              Find what is costing your business money.
            </h1>
          </RomoFadeIn>

          <RomoFadeIn delay={0.2}>
            <p className="mt-6 max-w-3xl text-[17px] leading-8 text-white/64 md:text-[18px]">
              Romo scans your business, finds weak points, and shows what to fix next.
            </p>
          </RomoFadeIn>

          <RomoStagger className="mt-6 flex flex-wrap justify-center gap-2" delay={0.28}>
            {proofPoints.map((point) => {
              const Icon = point.icon;

              return (
                <RomoStaggerItem key={point.text}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[12px] font-medium text-white/56">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                    {point.text}
                  </span>
                </RomoStaggerItem>
              );
            })}
          </RomoStagger>

          <RomoFadeIn delay={0.38} className="w-full">
            <WebsiteAnalyzerForm />
          </RomoFadeIn>

          <RomoFadeIn delay={0.44}>
            <Link
              href="/pricing"
              className="group mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[13px] font-semibold text-white/58 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
            >
              View pricing
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </RomoFadeIn>

          <RomoStagger className="mt-12 grid w-full max-w-5xl gap-4 md:grid-cols-3" delay={0.5}>
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <RomoStaggerItem key={step.title}>
                  <RomoCard className="h-full text-left">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </div>

                    <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-white/32">
                      {step.label}
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                      {step.title}
                    </h2>

                    <p className="mt-3 text-[14px] leading-7 text-white/54">
                      {step.description}
                    </p>
                  </RomoCard>
                </RomoStaggerItem>
              );
            })}
          </RomoStagger>

          <RomoFadeIn delay={0.62}>
            <div className="mt-10 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-[12px] font-medium text-white/42">
              Built for owners who need clarity, not more dashboards.
            </div>
          </RomoFadeIn>
        </div>
      </section>
    </main>
  );
}