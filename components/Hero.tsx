export default function Hero() {
  return (
    <section className="max-w-4xl w-full text-center">

      <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">
        ROMO AI
      </p>

      <h1 className="text-6xl font-bold mb-6">
        AI Business Scanner
      </h1>

      <p className="text-zinc-400 text-xl mb-12">
        Discover why businesses lose customers online and how AI can help fix it.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <input
          type="url"
          placeholder="https://yourbusiness.com"
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-6 py-4 text-white outline-none focus:border-blue-500"
        />

        <button
          className="bg-blue-600 hover:bg-blue-500 transition rounded-xl px-8 py-4 font-semibold"
        >
          Analyze
        </button>

      </div>

    </section>
  );
}