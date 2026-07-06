import type { ReactNode } from "react";

type RomoCardTone = "default" | "solid" | "light" | "warning" | "danger";

type RomoCardProps = {
  children: ReactNode;
  tone?: RomoCardTone;
  className?: string;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getToneClass(tone: RomoCardTone) {
  if (tone === "solid") {
    return "border-white/10 bg-black/45";
  }

  if (tone === "light") {
    return "border-white bg-white text-black";
  }

  if (tone === "warning") {
    return "border-yellow-500/20 bg-yellow-500/10";
  }

  if (tone === "danger") {
    return "border-red-500/20 bg-red-500/10";
  }

  return "border-white/10 bg-white/[0.03]";
}

export function RomoCard({ children, tone = "default", className }: RomoCardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.6rem] border p-6 shadow-2xl shadow-black/30",
        getToneClass(tone),
        className,
      )}
    >
      {children}
    </div>
  );
}