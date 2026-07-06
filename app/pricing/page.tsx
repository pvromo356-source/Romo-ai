import { PricingTable } from "@/components/pricing/PricingTable";
import { RomoBadge, RomoButton, RomoFadeIn, RomoStagger, RomoStaggerItem } from "@/components/ui";

const trustPoints = [
  "Start free",
  "Upgrade when value is clear",
  "More connected data improves precision",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <RomoFadeIn delay={0.02}>
              <RomoBadge>Pricing</RomoBadge>
            </RomoFadeIn>

            <RomoFadeIn delay={0.08}>
              <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
                Simple plans. Better business clarity.
              </p>
            </RomoFadeIn>

            <RomoFadeIn delay={0.14} y={18}>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[5.4rem]">
                Choose how much business intelligence you need.
              </h1>
            </RomoFadeIn>

            <RomoFadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/64 md:text-[18px]">
                Start with a free scan. Upgrade when you want Romo to connect more data, improve precision, and turn findings into actions.
              </p>
            </RomoFadeIn>

            <RomoStagger className="mt-6 flex flex-wrap justify-center gap-2" delay={0.28}>
              {trustPoints.map((point) => (
                <RomoStaggerItem key={point}>
                  <span className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[12px] font-medium text-white/56">
                    {point}
                  </span>
                </RomoStaggerItem>
              ))}
            </RomoStagger>
          </div>

          <RomoFadeIn delay={0.34} className="mt-12">
            <PricingTable />
          </RomoFadeIn>

          <RomoFadeIn delay={0.44}>
            <div
              id="white-glove"
              className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                    Optional setup
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                    White Glove Setup
                  </h2>
                  <p className="mt-3 max-w-3xl text-[14px] leading-7 text-white/56">
                    A one-time setup option for owners who want help connecting data, setting up their first Business Brain, and getting the first report ready.
                  </p>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/45 p-5 md:min-w-[17rem]">
                  <div className="text-left md:text-right">
                    <p className="text-4xl font-semibold tracking-[-0.05em]">$499</p>
                    <p className="mt-1 text-sm text-white/42">one-time setup</p>
                  </div>

                  <RomoButton href="/checkout?plan=white-glove" size="lg" className="w-full">
                    Add White Glove Setup
                  </RomoButton>
                </div>
              </div>
            </div>
          </RomoFadeIn>
        </div>
      </section>
    </main>
  );
}