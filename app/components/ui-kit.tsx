"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export function usePerformanceMode() {
  const [isPerformanceMode, setIsPerformanceMode] = React.useState(false);

  React.useEffect(() => {
    const updatePreference = () => {
      const params = new URLSearchParams(window.location.search);

      const isStandMode = params.get("mode") === "stand";

      const isMobile = window.matchMedia(
        "(max-width: 767px), (pointer: coarse)"
      ).matches;

      // Ativa em TV/monitor grande
      const isVeryLargeScreen = window.innerWidth >= 2000;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      setIsPerformanceMode(
        isStandMode || isMobile || isVeryLargeScreen || prefersReducedMotion
      );
    };

    updatePreference();

    window.addEventListener("resize", updatePreference);

    return () => window.removeEventListener("resize", updatePreference);
  }, []);

  return isPerformanceMode;
}

export const useMobilePerformanceMode = usePerformanceMode;

// --- 1. REVEAL (ATUALIZADO) ---
// Faz o elemento aparecer de baixo para cima suavemente ao rolar
export function Reveal({
  children,
  delay = 0,
  width = "fit-content",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
}) {
  const isPerformanceMode = usePerformanceMode();

  if (isPerformanceMode) {
    return (
      <div style={{ width }} className={className}>
        <div className="h-full">{children}</div>
      </div>
    );
  }

  return (
    <div style={{ width }} className={className}>
      <motion.div
        className="h-full"
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.45,
          delay: Math.min(delay, 0.12),
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// --- 2. ANIMATED IMAGE FRAME (MELHORADO COM ZOOM) ---
export function AnimatedImageFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isPerformanceMode = usePerformanceMode();

  if (isPerformanceMode) {
    return (
      <div className={`relative overflow-hidden rounded-3xl ${className}`}>
        <div className="h-full w-full">{children}</div>
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </div>
    );
  }

  return (
    <div className={`group relative overflow-hidden rounded-3xl ${className}`}>
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="h-full w-full"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
          {children}
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
    </div>
  );
}

// --- 3. CONTAINER (MANTIDO) ---
// Essencial para o layout não quebrar nas laterais
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

// --- 4. SECTION (MANTIDO) ---
// Base para o espaçamento das seções
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

// --- 5. FEATURE CARD (MANTIDO) ---
// Usado na seção de benefícios
export function FeatureCard({
  icon: Icon,
  title,
  desc,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full" width="100%">
      <div className="relative flex h-full min-h-[16rem] cursor-default flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50/70 md:min-h-[19rem] md:p-8">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
          <Icon size={24} />
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="mb-3 text-xl font-bold text-slate-900 md:min-h-[3.5rem]">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </Reveal>
  );
}
