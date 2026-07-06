import type { ReactNode } from "react";

type RomoBadgeTone = "default" | "success" | "warning" | "danger";

type RomoBadgeProps = {
  children: ReactNode;
  tone?: RomoBadgeTone;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getToneClass(tone: RomoBadgeTone) {
  if (tone === "success") {
    return "border-emerald-400/25 bg-emerald-500/10 text-emerald-100";
  }

  if (tone === "warning") {
    return "border-yellow-400/25 bg-yellow-500/10 text-yellow-100";
  }

  if (tone === "danger") {
    return "border-red-400/25 bg-red-500/10 text-red-100";
  }

  return "border-white/10 bg-white/[0.035] text-white/55";
}

export function RomoBadge({ children, tone = "default", className }: RomoBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em]",
        getToneClass(tone),
        className,
      )}
    >
      {children}
    </span>
  );
}