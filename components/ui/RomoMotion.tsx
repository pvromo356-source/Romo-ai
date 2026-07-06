"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type RomoFadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

type RomoStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RomoFadeIn({
  children,
  className,
  delay = 0,
  y = 14,
}: RomoFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RomoStagger({ children, className, delay = 0.12 }: RomoStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.08,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RomoStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}