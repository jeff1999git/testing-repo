"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const specs = [
  {
    value: "950",
    sup: "+",
    unit: "HP",
    label: "Combined Hybrid Output",
    sub: "Internal combustion meets kinetic energy recovery",
  },
  {
    value: "375",
    sup: "",
    unit: "km/h",
    label: "Maximum Velocity",
    sub: "Achieved on the longest straights in motorsport",
  },
  {
    value: "5",
    sup: "",
    unit: "G",
    label: "Lateral Cornering Force",
    sub: "The human limit, reached every lap",
  },
  {
    value: "50",
    sup: "%+",
    unit: "",
    label: "Thermal Efficiency",
    sub: "More efficient than any other combustion engine on earth",
  },
];

// Each spec gets a scroll range: [enter_start, enter_end, exit_start, exit_end]
const ranges: [number, number, number, number][] = [
  [0, 0.12, 0.22, 0.30],
  [0.26, 0.38, 0.48, 0.56],
  [0.52, 0.64, 0.74, 0.82],
  [0.78, 0.88, 0.96, 1.0],
];

function SpecItem({
  spec,
  scrollYProgress,
  range,
}: {
  spec: (typeof specs)[0];
  scrollYProgress: MotionValue<number>;
  range: [number, number, number, number];
}) {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2], range[3]],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2], range[3]],
    [50, 0, 0, -50]
  );
  const scale = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2], range[3]],
    [0.88, 1, 1, 0.88]
  );
  const blur = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2], range[3]],
    [12, 0, 0, 12]
  );
  const filterVal = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      style={{ opacity, y, scale, filter: filterVal }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      {/* Huge number */}
      <div className="flex items-start justify-center leading-none mb-4">
        <span className="text-[22vw] sm:text-[18vw] lg:text-[14vw] font-black text-white tracking-tighter tabular-nums">
          {spec.value}
        </span>
        {spec.sup && (
          <span className="text-[8vw] sm:text-[6vw] lg:text-[5vw] font-black text-[#D90429] mt-[2vw]">
            {spec.sup}
          </span>
        )}
        {spec.unit && (
          <span className="self-end mb-[1.5vw] ml-2 text-[5vw] sm:text-[4vw] lg:text-[3vw] font-bold text-white/40">
            {spec.unit}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#D90429] font-semibold mb-3">
        {spec.label}
      </div>

      {/* Description */}
      <p className="max-w-sm text-white/30 text-sm leading-relaxed">{spec.sub}</p>
    </motion.div>
  );
}

export default function SpecReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Background atmospheric glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(217,4,41,0.06),transparent)]" />
        </div>

        {/* Section label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          <div className="w-6 h-[1px] bg-[#D90429]/40" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/20">
            Performance Figures
          </span>
          <div className="w-6 h-[1px] bg-[#D90429]/40" />
        </div>

        {/* Spec items — stacked, each fades in/out */}
        <div className="relative flex-1">
          {specs.map((spec, i) => (
            <SpecItem
              key={spec.label}
              spec={spec}
              scrollYProgress={scrollYProgress}
              range={ranges[i]}
            />
          ))}
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-white/[0.07]">
          <motion.div
            className="h-full bg-[#D90429]"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Step dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
          {specs.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/15" />
          ))}
        </div>
      </div>
    </div>
  );
}
