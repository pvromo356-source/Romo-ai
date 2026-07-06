"use client";

import { useState } from "react";
import UrlInput from "./UrlInput";
import AnalyzeButton from "./AnalyzeButton";
import Loading from "./Loading";

export default function Hero() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  function handleAnalyze() {
    if (!url) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  }

  if (isAnalyzing) {
    return <Loading />;
  }

  return (
    <section className="max-w-4xl w-full text-center">
      <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">
        ROMO AI
      </p>

      <h1 className="text-6xl font-bold mb-6">AI Business Scanner</h1>

      <p className="text-zinc-400 text-xl mb-12">
        Discover why businesses lose customers online and how AI can help fix it.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <UrlInput value={url} onChange={setUrl} />
        <AnalyzeButton onClick={handleAnalyze} />
      </div>
    </section>
  );
}