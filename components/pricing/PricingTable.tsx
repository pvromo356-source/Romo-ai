import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  Crown,
  LineChart,
  Rocket,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { RomoBadge, RomoButton, RomoCard } from "@/components/ui";

type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  href: string;
  highlight?: boolean;
  icon: LucideIcon;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Free Scan",
    price: "$0",
    cadence: "forever",
    description: "For owners who want first value before connecting data.",
    cta: "Start Free Scan",
    href: "/",
    icon: ScanSearch,
    features: [
      "Website scan",
      "Level 0 Website Only analysis",
      "Basic business score",
      "Top insights",
      "Data requests",
    ],
  },
  {
    name: "Starter",
    price: "$49",
    cadence: "per month",
    description: "For small businesses that want basic clarity and local insights.",
    cta: "Start Starter",
    href: "/checkout?plan=starter",
    icon: BadgeDollarSign,
    features: [
      "1 business",
      "Website scan",
      "Google Business connection",
      "Basic Business Brain",
      "Weekly report",
      "Basic recommendations",
    ],
  },
  {
    name: "Growth",
    price: "$149",
    cadence: "per month",
    description: "For businesses ready to track revenue, customers, costs, and opportunities.",
    cta: "Unlock Growth",
    href: "/checkout?plan=growth",
    highlight: true,
    icon: Rocket,
    features: [
      "Everything in Starter",
      "Sales and payment uploads",
      "Monthly business memory",
      "Customer and revenue insights",
      "Supplier and cost tracking",
      "Action recommendations",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    cadence: "per month",
    description: "For operators who want stronger reporting, approvals, and workflows.",
    cta: "Choose Pro",
    href: "/checkout?plan=pro",
    icon: LineChart,
    features: [
      "Everything in Growth",
      "Multiple integrations",
      "Advanced reports",
      "Task approvals",
      "Agent workflows",
      "Month-over-month comparisons",
    ],
  },
  {
    name: "Business",
    price: "$499",
    cadence: "per month",
    description: "For teams, multi-location businesses, and serious operators.",
    cta: "Choose Business",
    href: "/checkout?plan=business",
    icon: Building2,
    features: [
      "Multiple users",
      "Multiple locations",
      "Advanced Business Brain",
      "Executive reports",
      "More automation",
      "Higher usage limits",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "contact us",
    description: "For larger businesses that need custom setup, security, and integrations.",
    cta: "Contact Sales",
    href: "#white-glove",
    icon: Crown,
    features: [
      "Custom integrations",
      "Custom reporting",
      "White glove setup",
      "Dedicated support",
      "Security review",
      "Custom workflows",
    ],
  },
];

export function PricingTable() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => {
        const Icon = plan.icon;
        const isHighlighted = Boolean(plan.highlight);

        return (
          <RomoCard
            key={plan.name}
            tone={isHighlighted ? "light" : "default"}
            className={`relative flex min-h-full flex-col p-6 ${
              isHighlighted ? "shadow-white/10" : ""
            }`}
          >
            {isHighlighted ? (
              <div className="absolute right-5 top-5">
                <RomoBadge className="border-black/10 bg-black text-white">
                  Most Popular
                </RomoBadge>
              </div>
            ) : null}

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                isHighlighted
                  ? "border-black/10 bg-black text-white"
                  : "border-white/10 bg-white/[0.04] text-white"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={2.1} />
            </div>

            <p
              className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.34em] ${
                isHighlighted ? "text-black/45" : "text-white/35"
              }`}
            >
              {plan.name}
            </p>

            <div className="mt-5 flex items-end gap-2">
              <p className="text-5xl font-semibold tracking-[-0.055em]">
                {plan.price}
              </p>
              <p
                className={`pb-2 text-sm font-medium ${
                  isHighlighted ? "text-black/45" : "text-white/42"
                }`}
              >
                {plan.cadence}
              </p>
            </div>

            <p
              className={`mt-4 min-h-16 text-[14px] leading-7 ${
                isHighlighted ? "text-black/62" : "text-white/56"
              }`}
            >
              {plan.description}
            </p>

            <div className="mt-6">
              <RomoButton
                href={plan.href}
                size="lg"
                variant={isHighlighted ? "dark" : "primary"}
                className="w-full"
              >
                {plan.cta}
              </RomoButton>
            </div>

            <div
              className={`mt-6 h-px ${
                isHighlighted ? "bg-black/10" : "bg-white/10"
              }`}
            />

            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-3 text-sm leading-6 ${
                    isHighlighted ? "text-black/70" : "text-white/62"
                  }`}
                >
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      isHighlighted ? "text-black" : "text-white/55"
                    }`}
                    strokeWidth={2.2}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {isHighlighted ? (
              <div className="mt-6 rounded-2xl border border-black/10 bg-black/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-black/70" strokeWidth={2.1} />
                  <p className="text-sm leading-6 text-black/62">
                    Recommended for businesses that want Romo to track more than a website scan.
                  </p>
                </div>
              </div>
            ) : null}
          </RomoCard>
        );
      })}
    </div>
  );
}