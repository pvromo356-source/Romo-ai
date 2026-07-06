const plans = [
  {
    name: "Free Scan",
    price: "$0",
    cadence: "forever",
    description: "For businesses that want to see first value before connecting data.",
    cta: "Start Free Scan",
    href: "/",
    highlight: false,
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
    description: "For small businesses that want basic business clarity and local insights.",
    cta: "Start Starter",
    href: "/pricing",
    highlight: false,
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
    description: "For businesses that want Romo to track revenue, customers, costs, and opportunities.",
    cta: "Unlock Growth",
    href: "/pricing",
    highlight: true,
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
    description: "For operators who want stronger reporting, approvals, and agent workflows.",
    cta: "Choose Pro",
    href: "/pricing",
    highlight: false,
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
    href: "/pricing",
    highlight: false,
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
    href: "/pricing",
    highlight: false,
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
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-3xl border p-6 ${
            plan.highlight
              ? "border-white/40 bg-white text-black"
              : "border-white/10 bg-white/[0.03] text-white"
          }`}
        >
          {plan.highlight ? (
            <div className="absolute right-5 top-5 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Most Popular
            </div>
          ) : null}

          <p className={`text-sm uppercase tracking-[0.25em] ${plan.highlight ? "text-black/50" : "text-white/40"}`}>
            {plan.name}
          </p>

          <div className="mt-5 flex items-end gap-2">
            <p className="text-5xl font-semibold">{plan.price}</p>
            <p className={`pb-2 text-sm ${plan.highlight ? "text-black/50" : "text-white/40"}`}>
              {plan.cadence}
            </p>
          </div>

          <p className={`mt-4 min-h-16 text-sm leading-6 ${plan.highlight ? "text-black/65" : "text-white/55"}`}>
            {plan.description}
          </p>

          <a
            href={plan.href}
            className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
              plan.highlight
                ? "bg-black text-white hover:bg-black/80"
                : "bg-white text-black hover:bg-white/80"
            }`}
          >
            {plan.cta}
          </a>

          <div className={`mt-6 h-px ${plan.highlight ? "bg-black/10" : "bg-white/10"}`} />

          <ul className="mt-6 flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className={`text-sm ${plan.highlight ? "text-black/70" : "text-white/60"}`}>
                - {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}