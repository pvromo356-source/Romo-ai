import { ArrowRight, Database, LineChart, ShieldCheck } from "lucide-react";
import { RomoButton, RomoCard } from "@/components/ui";

const unlockPoints = [
  {
    label: "Revenue tracking",
    icon: LineChart,
  },
  {
    label: "Connected data",
    icon: Database,
  },
  {
    label: "Better precision",
    icon: ShieldCheck,
  },
];

export function UpgradeBanner() {
  return (
    <RomoCard tone="light" className="overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
        <div className="p-6 md:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-black/38">
            Unlock Full Business Brain
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-black">
            Get better precision with connected data.
          </h2>

          <p className="mt-3 max-w-3xl text-[14px] leading-7 text-black/58">
            Your free scan gives first value. Upgrade when you want revenue tracking,
            customer insights, supplier cost monitoring, reports, and action recommendations.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {unlockPoints.map((point) => {
              const Icon = point.icon;

              return (
                <span
                  key={point.label}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.035] px-3 py-2 text-[12px] font-semibold text-black/58"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                  {point.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 border-t border-black/10 p-6 md:p-7 lg:min-w-[20rem] lg:border-l lg:border-t-0">
          <RomoButton href="/pricing" variant="dark" size="lg" className="w-full gap-2">
            View Pricing
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </RomoButton>

          <RomoButton
            href="/checkout?plan=growth"
            variant="secondary"
            size="lg"
            className="w-full border-black/10 bg-transparent text-black hover:bg-black/[0.04]"
          >
            Unlock Growth
          </RomoButton>
        </div>
      </div>
    </RomoCard>
  );
}