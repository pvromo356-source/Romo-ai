"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { mockDashboard } from "@/data";

function getStatusStyle(status: string) {
  if (status === "good") {
    return "border-emerald-500/40 bg-emerald-500/10 text-emerald-200";
  }

  if (status === "watch") {
    return "border-yellow-500/40 bg-yellow-500/10 text-yellow-200";
  }

  if (status === "at_risk") {
    return "border-orange-500/40 bg-orange-500/10 text-orange-200";
  }

  if (status === "critical") {
    return "border-red-500/40 bg-red-500/10 text-red-200";
  }

  return "border-white/10 bg-white/5 text-white";
}

function getWebsiteDisplayName(website: string | null) {
  if (!website) {
    return "";
  }

  try {
    const url = new URL(website);
    return url.hostname.replace("www.", "");
  } catch {
    return website.replace("https://", "").replace("http://", "").replace("www.", "");
  }
}

export function BusinessDashboardPreview() {
  const searchParams = useSearchParams();
  const submittedWebsite = searchParams.get("website");

  const dashboard = mockDashboard;
  const business = dashboard.business;
  const intelligence = dashboard.intelligence;

  const websiteDisplayName = useMemo(() => {
    return getWebsiteDisplayName(submittedWebsite);
  }, [submittedWebsite]);

  const dashboardTitle = websiteDisplayName
    ? `Analysis for ${websiteDisplayName}`
    : business.identity.name;

  const websiteLabel = websiteDisplayName || business.identity.website || "Website not provided";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Romo Business Brain
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/35">
            Know what&apos;s wrong. Know what to do next.
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {dashboardTitle}
          </h1>

          <p className="mt-3 max-w-3xl text-white/60">
            {business.health.summary}
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
            <p className="text-sm font-medium text-yellow-100">
              Level 0 Website Scan
            </p>
            <p className="mt-1 text-sm text-yellow-100/70">
              Romo is using the website available now. Connect sales, reviews, accounting,
              or supplier data to improve precision.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/40">Website submitted</p>
              <p className="mt-2 truncate text-lg font-medium">{websiteLabel}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/40">Scan type</p>
              <p className="mt-2 text-lg font-medium">Website only</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/40">Intelligence</p>
              <p className="mt-2 text-lg font-medium">
                Level {intelligence.currentLevel.split("_")[1]}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/40">Precision</p>
              <p className="mt-2 text-lg font-medium capitalize">
                {intelligence.precision.replace("_", " ")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {dashboard.summaryCards.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl border p-5 ${getStatusStyle(card.status)}`}
            >
              <p className="text-sm opacity-70">{card.title}</p>
              <p className="mt-3 text-3xl font-semibold">{card.value}</p>
              <p className="mt-2 text-sm opacity-70">{card.changeSummary}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              What is happening
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Top Insights</h2>

            <div className="mt-5 flex flex-col gap-4">
              {dashboard.topInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{insight.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-white/50">
                      {insight.severity}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/60">{insight.summary}</p>

                  <div className="mt-4 flex flex-col gap-2">
                    {insight.evidence.map((item) => (
                      <div key={item.label} className="flex justify-between gap-4 text-sm">
                        <span className="text-white/40">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              What to do next
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Recommendations</h2>

            <div className="mt-5 flex flex-col gap-4">
              {dashboard.recommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{recommendation.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-white/50">
                      {recommendation.riskLevel} risk
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/50">Problem</p>
                  <p className="mt-1 text-sm text-white/80">{recommendation.problem}</p>

                  <p className="mt-4 text-sm text-white/50">Recommended action</p>
                  <p className="mt-1 text-sm text-white/80">
                    {recommendation.recommendedAction}
                  </p>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/40">Estimated impact</p>
                    <p className="mt-1 text-sm font-medium">
                      {recommendation.impact.estimatedImpactSummary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Improve precision
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Data Requests</h2>
          <p className="mt-2 max-w-3xl text-sm text-white/50">
            Romo can help with limited information, but results become more precise
            when the business connects better data sources.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {dashboard.dataRequests.map((request) => (
              <div
                key={request.id}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{request.title}</h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-white/50">
                    {request.priority}
                  </span>
                </div>

                <p className="mt-3 text-sm text-white/60">{request.reason}</p>

                <p className="mt-4 text-sm text-white/40">Expected improvement</p>
                <p className="mt-1 text-sm text-white/80">{request.expectedImprovement}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {request.acceptedSources.map((source) => (
                    <span
                      key={source.label}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/70"
                    >
                      {source.label} - {source.estimatedTimeMinutes} min
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-red-200/60">
            Executive Action
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {dashboard.actionPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="rounded-2xl border border-red-500/20 bg-black/30 p-5"
              >
                <h3 className="text-lg font-semibold">{prompt.title}</h3>
                <p className="mt-2 text-sm text-white/60">{prompt.reason}</p>

                <button className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/80">
                  {prompt.primaryActionLabel}
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}