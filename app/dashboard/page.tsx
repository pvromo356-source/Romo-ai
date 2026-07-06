import { Suspense } from "react";
import { BusinessDashboardPreview } from "@/components/dashboard/BusinessDashboardPreview";

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Loading business dashboard
          </p>
        </main>
      }
    >
      <BusinessDashboardPreview />
    </Suspense>
  );
}