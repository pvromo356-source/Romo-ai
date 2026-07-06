import { Suspense } from "react";
import { AnalyzeLoadingExperience } from "@/components/feedback/AnalyzeLoadingExperience";

export default function AnalyzePage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Preparing analysis
          </p>
        </main>
      }
    >
      <AnalyzeLoadingExperience />
    </Suspense>
  );
}