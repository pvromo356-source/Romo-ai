"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RomoBadge, RomoButton, RomoCard } from "@/components/ui";

const planDetails = {
  starter: {
    name: "Starter",
    price: "$49",
    cadence: "per month",
    description: "Basic business clarity, Google Business connection, and weekly reports.",
    bestFor: "Small businesses starting with basic business intelligence.",
    unlocks: [
      "Google Business connection",
      "Basic Business Brain",
      "Weekly report",
      "Basic recommendations",
    ],
  },
  growth: {
    name: "Growth",
    price: "$149",
    cadence: "per month",
    description: "Revenue, customer, supplier cost, and action recommendations.",
    bestFor: "Owners ready to track more than a website scan.",
    unlocks: [
      "Sales and payment uploads",
      "Monthly business memory",
      "Customer and revenue insights",
      "Supplier and cost tracking",
    ],
  },
  pro: {
    name: "Pro",
    price: "$299",
    cadence: "per month",
    description: "Advanced reports, task approvals, integrations, and agent workflows.",
    bestFor: "Operators who want stronger reports, approvals, and workflows.",
    unlocks: [
      "Multiple integrations",
      "Advanced reports",
      "Task approvals",
      "Agent workflows",
    ],
  },
  business: {
    name: "Business",
    price: "$499",
    cadence: "per month",
    description: "Multiple users, locations, executive reports, and advanced Business Brain.",
    bestFor: "Teams, multi-location businesses, and serious operators.",
    unlocks: [
      "Multiple users",
      "Multiple locations",
      "Executive reports",
      "Higher usage limits",
    ],
  },
};

type PlanKey = keyof typeof planDetails;

function getPlan(plan: string | null) {
  if (plan === "starter" || plan === "growth" || plan === "pro" || plan === "business") {
    return planDetails[plan as PlanKey];
  }

  return planDetails.growth;
}

export function CheckoutPlaceholder() {
  const searchParams = useSearchParams();
  const selectedPlan = getPlan(searchParams.get("plan"));

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
          <div className="mx-auto max-w-4xl text-center">
            <RomoBadge>Checkout Preview</RomoBadge>

            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
              Secure checkout coming next.
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[5.4rem]">
              Unlock {selectedPlan.name}.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/64 md:text-[18px]">
              This page is prepared for Stripe. No payment is collected yet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.82fr]">
            <RomoCard className="p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Rocket className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <RomoBadge tone="warning" className="tracking-[0.2em]">
                  Not Live Yet
                </RomoBadge>
              </div>

              <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                Selected Plan
              </p>

              <div className="mt-5 flex items-end gap-3">
                <p className="text-6xl font-semibold tracking-[-0.055em]">
                  {selectedPlan.price}
                </p>
                <p className="pb-3 text-sm font-medium text-white/42">
                  {selectedPlan.cadence}
                </p>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">
                {selectedPlan.name}
              </h2>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60">
                {selectedPlan.description}
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/45 p-5">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 text-white/55" strokeWidth={2.1} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Best for
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      {selectedPlan.bestFor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                  Unlocks
                </p>

                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {selectedPlan.unlocks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/62">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/55" strokeWidth={2.2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RomoCard>

            <RomoCard tone="light" className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black text-white">
                <CreditCard className="h-5 w-5" strokeWidth={2.2} />
              </div>

              <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.34em] text-black/40">
                Checkout Summary
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Ready for Stripe.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-black/62">
                The checkout experience is ready visually. The next payment mission will create a real Stripe checkout session.
              </p>

              <div className="mt-7 rounded-2xl border border-black/10 bg-black/[0.035] p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-black/65">Plan</p>
                  <p className="text-sm font-bold">{selectedPlan.name}</p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-black/65">Price</p>
                  <p className="text-sm font-bold">
                    {selectedPlan.price} {selectedPlan.cadence}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-black/65">Today</p>
                  <p className="text-sm font-bold">$0 collected</p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <LockKeyhole className="mt-0.5 h-4 w-4 text-black/55" strokeWidth={2.1} />
                  <p className="text-sm leading-6 text-black/62">
                    Secure checkout will be handled by Stripe when payments go live.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-black/55" strokeWidth={2.1} />
                  <p className="text-sm leading-6 text-black/62">
                    After payment, Romo will unlock stronger data connections and better precision.
                  </p>
                </div>
              </div>

              <button
                disabled
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-black bg-black px-6 py-3.5 text-[14px] font-bold text-white opacity-55"
              >
                Stripe Checkout Coming Next
              </button>

              <RomoButton
                href="/pricing"
                variant="secondary"
                size="lg"
                className="mt-3 w-full border-black/10 bg-transparent text-black hover:bg-black/[0.04]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={2.2} />
                Back to Pricing
              </RomoButton>
            </RomoCard>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="text-[13px] font-semibold text-white/45 underline decoration-white/15 underline-offset-4 transition hover:text-white hover:decoration-white/50"
            >
              Start a new scan instead
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}