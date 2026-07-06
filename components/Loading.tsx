export default function Loading() {
  const steps = [
    "Connecting to website...",
    "Scanning page structure...",
    "Checking conversion signals...",
    "Looking for AI opportunities...",
    "Preparing business report...",
  ];

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 shadow-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-blue-500">
        ROMO AI
      </p>

      <h2 className="mb-8 text-3xl font-bold text-white">
        Analyzing Website
      </h2>

      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-500" />
      </div>

      <div className="space-y-4 text-left">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-black/40 px-4 py-3"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-sm text-blue-400">
              {index + 1}
            </span>

            <p className="text-zinc-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}