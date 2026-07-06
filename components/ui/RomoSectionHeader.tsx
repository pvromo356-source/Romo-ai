import type { ReactNode } from "react";
import { RomoBadge } from "@/components/ui/RomoBadge";

type RomoSectionHeaderProps = {
  badge?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function RomoSectionHeader({
  badge,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: RomoSectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl text-left"}>
      {badge ? <RomoBadge>{badge}</RomoBadge> : null}

      {eyebrow ? (
        <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.35em] text-white/35">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-7 text-[17px] leading-8 text-white/64 md:text-[18px]">
          {description}
        </p>
      ) : null}

      {children}
    </div>
  );
}