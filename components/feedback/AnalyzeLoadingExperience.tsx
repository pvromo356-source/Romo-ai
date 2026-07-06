"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const analysisSteps = [
  {
    title: "Scanning website",
    description: "Checking first impression, positioning, and trust signals.",
  },
  {
    title: "Checking business risks",
    description: "Looking for revenue, reputation, and operational weak points.",
  },
  {
    title: "Finding opportunities",
    description: "Identifying fast improvements from the data available now.",
  },
  {
    title: "Preparing recommendations",
    description: "Turning findings into clear actions for the business owner.",
  },
];

export function AnalyzeLoadingExperience() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const website = searchParams.get("website") || "";
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(10);

  const displayWebsite = useMemo(() => {
    if (!website) {
      return "your business";
    }

    try {
      const url = new URL(website);
      return url.hostname.replace("www.", "");
    } catch {
      return website;
    }
  }, [website]);

  useEffect(() => {
    if (!website) {
      router.replace("/");
      return;
    }

    const progressTimer = window.setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress >= 96) {
          return currentProgress;
        }

        return currentProgress + 6;
      });
    }, 320);

    const stepTimer = window.setInterval(() => {
      setActiveStep((currentStep) => {
        if (currentStep >= analysisSteps.length - 1) {
          return currentStep;
        }

        return currentStep + 1;
      });
    }, 850);

    const redirectTimer = window.setTimeout(() => {
      router.push(`/dashboard?website=${encodeURIComponent(website)}`);
    }, 4500);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(stepTimer);
      window.clearTimeout(redirectTimer);
    };
  }, [router, website]);

  const currentStep = analysisSteps[activeStep];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="relative z-10 flex w-full flex-col items-center">
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
            Romo Business Analysis
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/35">
            Website only scan
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Analyzing {displayWebsite}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
            Romo is building the first business scan using the information available now.
            More connected data will improve precision later.
          </p>

          <div className="mt-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                  Current step
                </p>
                <p className="mt-2 text-lg font-semibold">{currentStep.title}</p>
              </div>

              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/60">
                {Math.min(progress, 100)}%
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {analysisSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <div
                    key={step.title}
                    className={`rounded-2xl border p-4 transition-all duration-300 ${
                      isActive
                        ? "border-white/35 bg-white/[0.08] shadow-lg shadow-white/5"
                        : isComplete
                          ? "border-emerald-500/30 bg-emerald-500/[0.08]"
                          : "border-white/10 bg-black/40"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                          isComplete
                            ? "border-emerald-400 bg-emerald-400 text-black"
                            : isActive
                              ? "border-white bg-white text-black"
                              : "border-white/20 bg-white/[0.03] text-white/35"
                        }`}
                      >
                        {isComplete ? "✓" : index + 1}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="font-semibold">{step.title}</h2>

                          {isActive ? (
                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/45">
                              In progress
                            </span>
                          ) : null}
                        </div>

                        <p className="mt-1 text-sm leading-6 text-white/50">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-sm text-white/45">
              First value now. Better precision as you connect more data.
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              No full setup required
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}