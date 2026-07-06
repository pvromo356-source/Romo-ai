"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RECENT_SCAN_KEY = "romo_recent_scan_website";

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedUrl = normalizeWebsiteUrl(websiteUrl);

    if (!normalizedUrl) {
      setError("Enter a business website to scan.");
      return;
    }

    setError("");

    window.localStorage.setItem(RECENT_SCAN_KEY, normalizedUrl);
    window.dispatchEvent(new Event("romo-recent-scan-updated"));

    router.push(`/analyze?website=${encodeURIComponent(normalizedUrl)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-4">
      <div className="rounded-[1.4rem] border border-white/12 bg-white/[0.035] p-2 shadow-2xl shadow-black/40">
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            value={websiteUrl}
            onChange={(event) => setWebsiteUrl(event.target.value)}
            aria-label="Business website"
            placeholder="yourbusiness.com"
            className="min-h-14 flex-1 rounded-[1rem] border border-white/10 bg-black/70 px-4 text-[15px] font-medium text-white outline-none transition placeholder:text-white/32 focus:border-white/35 focus:bg-black"
          />

          <button
            type="submit"
            className="min-h-14 rounded-[1rem] bg-white px-6 text-[14px] font-bold text-black transition hover:bg-white/85"
          >
            Run Free Scan
          </button>
        </div>
      </div>

      {error ? <p className="text-sm font-medium text-red-300">{error}</p> : null}

      <p className="text-center text-[13px] leading-6 text-white/42">
        No setup required. Start with a website scan. Improve precision when you connect more data.
      </p>
    </form>
  );
}