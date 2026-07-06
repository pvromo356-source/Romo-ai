import { Suspense } from "react";
import { CheckoutPlaceholder } from "@/components/checkout/CheckoutPlaceholder";

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-black text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Preparing checkout
          </p>
        </main>
      }
    >
      <CheckoutPlaceholder />
    </Suspense>
  );
}