export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">

        <p className="text-blue-400 uppercase tracking-[0.4em] text-sm mb-6">
          ROMO AI
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          AI Business Scanner
        </h1>

        <p className="text-xl text-zinc-400 mb-12">
          Discover why businesses lose customers online and how AI can help fix it.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="url"
            placeholder="https://yourbusiness.com"
            className="flex-1 max-w-2xl rounded-xl px-6 py-4 text-black text-lg"
          />

          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-500 transition">
            Analyze
          </button>

        </div>

      </div>
    </main>
  );
}