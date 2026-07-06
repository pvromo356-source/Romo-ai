import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type RomoButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type RomoButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: RomoButtonVariant;
  size?: RomoButtonSize;
  className?: string;
};

type LinkProps = BaseProps & {
  href: string;
  type?: never;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getVariantClass(variant: RomoButtonVariant) {
  if (variant === "secondary") {
    return "border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/10";
  }

  if (variant === "ghost") {
    return "border-transparent bg-transparent text-white/58 hover:bg-white/[0.06] hover:text-white";
  }

  if (variant === "danger") {
    return "border-red-400/25 bg-red-500/10 text-red-100 hover:bg-red-500/15";
  }

  return "border-white bg-white text-black hover:bg-white/85";
}

function getSizeClass(size: RomoButtonSize) {
  if (size === "sm") {
    return "px-4 py-2 text-[13px]";
  }

  if (size === "lg") {
    return "px-6 py-3.5 text-[14px]";
  }

  return "px-5 py-3 text-[14px]";
}

export function RomoButton(props: LinkProps | ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
  } = props;

  const sharedClassName = cn(
    "inline-flex items-center justify-center rounded-full border font-bold tracking-[-0.01em] transition duration-200",
    "focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black",
    getVariantClass(variant),
    getSizeClass(size),
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={sharedClassName}>
        {children}
      </Link>
    );
  }

  const { href, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={sharedClassName}>
      {children}
    </button>
  );
}