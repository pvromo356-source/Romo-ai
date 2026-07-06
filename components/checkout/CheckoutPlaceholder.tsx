"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const planDetails = {
  starter: {
    name: "Starter",
    price: "$49",
    cadence: "per month",
    description: "Basic business clarity, Google Business connection, and weekly reports.",
  },
  growth: {
    name: "Growth",
    price: "$149",
    cadence: "per month",
    description: "Revenue, customer, supplier cost, and action recommendations.",
  },
  pro: {
    name: "Pro",
    price: "$299",
    cadence: "per month",
    description: "Advanced reports, task approvals, integrations, and agent workflows.",
  },
  business: {
    name: "Business",
    price: "$499",
    cadence: "per month",
    description: "Multiple users, locations, executive reports, and advanced Business Brain.",
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
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-20">
        <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="text-center">
            <div className="mx-auto inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Romo Business Brain
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/35">
              Checkout Preview
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Unlock {selectedPlan.name}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
              This checkout page is ready for Stripe integration. No payment is collected yet.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                Selected plan
              </p>

              <div className="mt-5 flex items-end gap-2">
                <p className="text-5xl font-semibold">{selectedPlan.price}</p>
                <p className="pb-2 text-sm text-white/40">{selectedPlan.cadence}</p>
              </div>

              <h2 className="mt-5 text-2xl font-semibold">{selectedPlan.name}</h2>

              <p className="mt-3 text-sm leading-6 text-white/55">
                {selectedPlan.description}
              </p>

              <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                <p className="text-sm font-medium text-yellow-100">
                  Stripe not connected yet
                </p>
                <p className="mt-1 text-sm leading-6 text-yellow-100/70">
                  Next mission will connect this page to a real checkout session.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white text-black p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-black/45">
                What happens next
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div>
                  <p className="font-semibold">1. Confirm plan</p>
                  <p className="mt-1 text-sm text-black/60">
                    User chooses the plan that matches their business needs.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">2. Stripe checkout</p>
                  <p className="mt-1 text-sm text-black/60">
                    We will create a secure checkout session in the next payment mission.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">3. Unlock Business Brain</p>
                  <p className="mt-1 text-sm text-black/60">
                    After payment, the account unlocks more data connections and precision.
                  </p>
                </div>
              </div>

              <button
                disabled
                className="mt-8 w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white opacity-50"
              >
                Stripe Checkout Coming Next
              </button>

              <Link
                href="/pricing"
                className="mt-3 inline-flex w-full justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Back to Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}