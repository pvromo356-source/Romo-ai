"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function normalizeWebsiteUrl(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "";
  }

  if (trimmedValue.startsWith("http://") || trimmedValue.startsWith("https://")) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

export function WebsiteAnalyzerForm() {
  const router = useRouter();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedUrl = normalizeWebsiteUrl(websiteUrl);

    if (!normalizedUrl) {
      setError("Enter a business website to analyze.");
      return;
    }

    setError("");

    router.push(`/dashboard?website=${encodeURIComponent(normalizedUrl)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-2xl flex-col gap-4">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 md:flex-row">
        <input
          value={websiteUrl}
          onChange={(event) => setWebsiteUrl(event.target.value)}
          placeholder="https://yourbusiness.com"
          className="min-h-14 flex-1 rounded-xl border border-white/10 bg-black px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-white/30"
        />

        <button
          type="submit"
          className="min-h-14 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/80"
        >
          Analyze
        </button>
      </div>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}

      <p className="text-sm text-white/40">
        Start with a website. Romo AI gives value first, then improves as you connect more data.
      </p>
    </form>
  );
}