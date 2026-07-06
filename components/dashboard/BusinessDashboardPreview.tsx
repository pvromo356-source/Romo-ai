"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  LineChart,
  LockKeyhole,
  RefreshCcw,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";
import { mockDashboard } from "@/data";
import { UpgradeBanner } from "@/components/dashboard/UpgradeBanner";
import { RomoBadge, RomoButton, RomoCard, RomoFadeIn, RomoStagger, RomoStaggerItem } from "@/components/ui";

const RECENT_SCAN_KEY = "romo_recent_scan_website";

function getStatusStyle(status: string) {
  if (status === "good") {
    return {
      tone: "success",
      className: "border-emerald-500/25 bg-emerald-500/10 text-emerald-100",
      icon: CheckCircle2,
      label: "Good",
    };
  }

  if (status === "watch") {
    return {
      tone: "warning",
      className: "border-yellow-500/25 bg-yellow-500/10 text-yellow-100",
      icon: AlertTriangle,
      label: "Watch",
    };
  }

  if (status === "at_risk") {
    return {
      tone: "warning",
      className: "border-orange-500/25 bg-orange-500/10 text-orange-100",
      icon: ShieldAlert,
      label: "At Risk",
    };
  }

  if (status === "critical") {
    return {
      tone: "danger",
      className: "border-red-500/25 bg-red-500/10 text-red-100",
      icon: ShieldAlert,
      label: "Critical",
    };
  }

  return {
    tone: "default",
    className: "border-white/10 bg-white/[0.03] text-white",
    icon: BarChart3,
    label: "Metric",
  };
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
  const [recentWebsite, setRecentWebsite] = useState("");

  useEffect(() => {
    if (submittedWebsite) {
      window.localStorage.setItem(RECENT_SCAN_KEY, submittedWebsite);
      window.dispatchEvent(new Event("romo-recent-scan-updated"));
      setRecentWebsite(submittedWebsite);
      return;
    }

    const savedWebsite = window.localStorage.getItem(RECENT_SCAN_KEY) || "";
    setRecentWebsite(savedWebsite);
  }, [submittedWebsite]);

  const activeWebsite = submittedWebsite || recentWebsite;

  const dashboard = mockDashboard;
  const business = dashboard.business;
  const intelligence = dashboard.intelligence;

  const websiteDisplayName = useMemo(() => {
    return getWebsiteDisplayName(activeWebsite);
  }, [activeWebsite]);

  if (!activeWebsite) {
    return (
      <main className="min-h-screen overflow-hidden bg-black text-white">
        <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-14 text-center md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <RomoBadge>Dashboard</RomoBadge>

            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
              No business scan found.
            </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[5.4rem]">
              Your dashboard is waiting for a scan.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[17px] leading-8 text-white/64 md:text-[18px]">
              Start with a business website. Romo will run a Level 0 Website Scan and bring the result back here.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <RomoButton href="/" size="lg" className="gap-2">
                Start First Scan
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </RomoButton>

              <RomoButton href="/pricing" variant="secondary" size="lg">
                View Pricing
              </RomoButton>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Scan",
                  description: "Start with a website-only business scan.",
                  icon: Search,
                },
                {
                  title: "Understand",
                  description: "See weak points, risks, and opportunities.",
                  icon: Target,
                },
                {
                  title: "Improve",
                  description: "Turn insights into clear next actions.",
                  icon: LineChart,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <RomoCard key={item.title} className="text-left">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </div>

                    <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-[14px] leading-7 text-white/54">
                      {item.description}
                    </p>
                  </RomoCard>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }

  const dashboardTitle = websiteDisplayName
    ? `Analysis for ${websiteDisplayName}`
    : business.identity.name;

  const websiteLabel = websiteDisplayName || business.identity.website || "Website not provided";

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_34%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10">
          <RomoFadeIn delay={0.02}>
            <RomoCard className="p-7 md:p-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <RomoBadge>Romo Business Brain</RomoBadge>

                <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
                  Know what&apos;s wrong. Know what to do next.
                </p>

                <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-6xl">
                  {dashboardTitle}
                </h1>

                <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/60">
                  {business.health.summary}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[22rem] lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white/35">
                    Scan Type
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
                    Level 0 Website Scan
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white/35">
                    Website
                  </p>
                  <p className="mt-2 truncate text-lg font-semibold tracking-[-0.03em]">
                    {websiteLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-[1.3rem] border border-yellow-500/20 bg-yellow-500/10 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-yellow-100/75" strokeWidth={2.1} />
                <div>
                  <p className="text-sm font-semibold text-yellow-100">
                    Website-only precision
                  </p>
                  <p className="mt-2 text-sm leading-6 text-yellow-100/68">
                    Romo is using the information available now. Connect sales, reviews, accounting, or supplier data to improve precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <p className="text-sm text-white/40">Website submitted</p>
                <p className="mt-3 truncate text-lg font-semibold tracking-[-0.03em]">
                  {websiteLabel}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <p className="text-sm text-white/40">Scan type</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  Website only
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <p className="text-sm text-white/40">Intelligence</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em]">
                  Level {intelligence.currentLevel.split("_")[1]}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <p className="text-sm text-white/40">Precision</p>
                <p className="mt-3 text-lg font-semibold capitalize tracking-[-0.03em]">
                  {intelligence.precision.replace("_", " ")}
                </p>
              </div>
            </div>
          </RomoCard>
          </RomoFadeIn>

          <RomoFadeIn delay={0.1} className="mt-6">
            <UpgradeBanner />
          </RomoFadeIn>

          <RomoStagger className="mt-6 grid gap-4 md:grid-cols-4" delay={0.16}>
            {dashboard.summaryCards.map((card) => {
              const status = getStatusStyle(card.status);
              const Icon = status.icon;

              return (
                <RomoStaggerItem key={card.id}>
                  <div
                    className={`h-full rounded-[1.4rem] border p-5 shadow-2xl shadow-black/25 ${status.className}`}
                  >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm opacity-75">{card.title}</p>
                    <Icon className="h-4 w-4 opacity-70" strokeWidth={2.1} />
                  </div>

                  <p className="mt-4 text-4xl font-semibold tracking-[-0.055em]">
                    {card.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 opacity-75">
                    {card.changeSummary}
                  </p>
                  </div>
                </RomoStaggerItem>
              );
            })}
          </RomoStagger>

          <RomoFadeIn delay={0.22} className="mt-6">
            <div className="grid gap-6 lg:grid-cols-2">
            <RomoCard>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <BarChart3 className="h-5 w-5" strokeWidth={2.1} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                    What is happening
                  </p>
                  <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
                    Top Insights
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {dashboard.topInsights.map((insight) => (
                  <div
                    key={insight.id}
                    className="rounded-2xl border border-white/10 bg-black/45 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-[-0.03em]">
                        {insight.title}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        {insight.severity}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/58">
                      {insight.summary}
                    </p>

                    <div className="mt-4 grid gap-2">
                      {insight.evidence.map((item) => (
                        <div
                          key={item.label}
                          className="flex justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm"
                        >
                          <span className="text-white/42">{item.label}</span>
                          <span className="font-semibold text-white/85">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RomoCard>

            <RomoCard>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Target className="h-5 w-5" strokeWidth={2.1} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                    What to do next
                  </p>
                  <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
                    Recommendations
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {dashboard.recommendations.map((recommendation) => (
                  <div
                    key={recommendation.id}
                    className="rounded-2xl border border-white/10 bg-black/45 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-[-0.03em]">
                        {recommendation.title}
                      </h3>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        {recommendation.riskLevel} risk
                      </span>
                    </div>

                    <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {recommendation.problem}
                    </p>

                    <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Recommended action
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {recommendation.recommendedAction}
                    </p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <p className="text-sm text-white/40">Estimated impact</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white/82">
                        {recommendation.impact.estimatedImpactSummary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RomoCard>
            </div>
          </RomoFadeIn>

          <RomoFadeIn delay={0.28}>
            <RomoCard className="mt-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Database className="h-5 w-5" strokeWidth={2.1} />
                </div>

                <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.34em] text-white/35">
                  Improve precision
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">
                  Data Requests
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/56">
                  Romo can help with limited information, but results become more precise when the business connects better data sources.
                </p>
              </div>

              <RomoBadge tone="warning" className="tracking-[0.2em]">
                Optional Data
              </RomoBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {dashboard.dataRequests.map((request) => (
                <div
                  key={request.id}
                  className="rounded-2xl border border-white/10 bg-black/45 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-[-0.03em]">
                      {request.title}
                    </h3>

                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {request.priority}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {request.reason}
                  </p>

                  <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Expected improvement
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {request.expectedImprovement}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {request.acceptedSources.map((source) => (
                      <span
                        key={source.label}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/62"
                      >
                        {source.label} - {source.estimatedTimeMinutes} min
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RomoCard>
          </RomoFadeIn>

          <RomoFadeIn delay={0.34}>
            <RomoCard tone="danger" className="mt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/10 text-red-100">
                <RefreshCcw className="h-5 w-5" strokeWidth={2.1} />
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-red-100/55">
                  Executive Action
                </p>
                <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
                  Actions that need approval
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {dashboard.actionPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="rounded-2xl border border-red-400/15 bg-black/30 p-5"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">
                    {prompt.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {prompt.reason}
                  </p>

                  <RomoButton className="mt-5 gap-2">
                    {prompt.primaryActionLabel}
                    <LockKeyhole className="h-4 w-4" strokeWidth={2.2} />
                  </RomoButton>
                </div>
              ))}
            </div>
          </RomoCard>
          </RomoFadeIn>
        </div>
      </section>
    </main>
  );
}