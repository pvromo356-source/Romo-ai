import { WebsiteAnalyzerForm } from "@/components/landing/WebsiteAnalyzerForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50">
          Romo Business Brain
        </div>

        <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/35">
          Stop guessing. Start improving.
        </p>

        <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Find what is costing your business money.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          See what matters. Act faster. Romo analyzes your business, explains what is happening,
          recommends what to do next, and improves as you connect more data.
        </p>

        <WebsiteAnalyzerForm />

        <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">Step 1</p>
            <h2 className="mt-3 text-lg font-semibold">Enter website</h2>
            <p className="mt-2 text-sm text-white/50">
              Get value with basic public information first.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">Step 2</p>
            <h2 className="mt-3 text-lg font-semibold">See problems</h2>
            <p className="mt-2 text-sm text-white/50">
              Understand revenue, costs, risks, and missing data.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">Step 3</p>
            <h2 className="mt-3 text-lg font-semibold">Approve action</h2>
            <p className="mt-2 text-sm text-white/50">
              Turn insights into recommendations and tasks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}