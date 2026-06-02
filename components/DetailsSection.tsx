"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Cpu, Wind, Flame, Radio } from "lucide-react";

const chapters = [
  {
    index: "01",
    icon: Flame,
    eyebrow: "Power Unit",
    headline: "A combustion engine redefined.",
    body: "The 1.6-litre turbocharged V6 at the heart of every F1 car operates at a thermal efficiency exceeding 50% — a figure that no other internal combustion engine on earth has achieved. Each revolution at 15,000 RPM is a masterclass in controlled explosion.",
    detail: "550 kW · 15,000 RPM · 1.6L V6 Turbo",
    visual: {
      label: "ICE Output",
      bars: [
        { label: "Thermal Efficiency", value: 92 },
        { label: "Power Density", value: 88 },
        { label: "Rev Ceiling", value: 95 },
      ],
    },
    direction: "left" as const,
  },
  {
    index: "02",
    icon: Wind,
    eyebrow: "Aerodynamics",
    headline: "Every surface is a wing.",
    body: "At 300 km/h, a Formula 1 car generates over 1,800 kg of downforce — more than double its own weight. Ground effect tunnels carved beneath the floor create a low-pressure zone so powerful that the car could theoretically drive on the ceiling.",
    detail: "1,800 kg Downforce · 0.78 Cd · 5G Cornering",
    visual: {
      label: "Aero Load",
      bars: [
        { label: "Downforce", value: 95 },
        { label: "Drag Reduction", value: 72 },
        { label: "Ground Effect", value: 89 },
      ],
    },
    direction: "right" as const,
  },
  {
    index: "03",
    icon: Cpu,
    eyebrow: "Energy Recovery",
    headline: "Power harvested from nothing.",
    body: "Two Motor Generator Units — one kinetic, one thermal — harvest energy that would otherwise be wasted in braking and exhaust heat. They store it, then release it as 161 HP of electric power at the exact millisecond the driver needs it.",
    detail: "161 HP ERS · 4 MJ Battery · MGU-K + MGU-H",
    visual: {
      label: "ERS Cycle",
      bars: [
        { label: "Harvest Rate", value: 85 },
        { label: "Deploy Precision", value: 97 },
        { label: "Energy Density", value: 78 },
      ],
    },
    direction: "left" as const,
  },
  {
    index: "04",
    icon: Radio,
    eyebrow: "Telemetry",
    headline: "300 sensors. One car. Zero margins.",
    body: "Over 300 sensors transmit more than 1,000 data points per second to engineers on the pit wall. Tyre temperatures, brake bias, fuel flow, steering angle — all monitored in real time so that decisions are made in milliseconds, not minutes.",
    detail: "300+ Sensors · 1,000 Hz · 50 GB Per Race",
    visual: {
      label: "Data Stream",
      bars: [
        { label: "Sensor Coverage", value: 100 },
        { label: "Latency", value: 94 },
        { label: "Analysis Speed", value: 91 },
      ],
    },
    direction: "right" as const,
  },
];

function VisualCard({
  visual,
  inView,
}: {
  visual: (typeof chapters)[0]["visual"];
  inView: boolean;
}) {
  return (
    <div className="relative p-6 rounded-2xl border border-white/[0.07] bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,4,41,0.06),transparent_60%)]" />
      <div className="text-[10px] tracking-[0.2em] uppercase text-[#D90429]/70 mb-5 font-mono">
        {visual.label}
      </div>
      <div className="flex flex-col gap-4">
        {visual.bars.map((bar, bi) => (
          <div key={bar.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs text-white/40">{bar.label}</span>
              <span className="text-xs text-[#D90429] font-mono">{bar.value}%</span>
            </div>
            <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${bar.value}%` } : { width: 0 }}
                transition={{ duration: 1.4, delay: 0.3 + bi * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[#D90429]/80 to-[#D90429] rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chapter({
  chapter,
}: {
  chapter: (typeof chapters)[0];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const Icon = chapter.icon;
  const isLeft = chapter.direction === "left";

  const textX = isLeft ? -50 : 50;
  const visualX = isLeft ? 50 : -50;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        isLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
      }`}
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: textX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Chapter number */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-mono text-white/20 tracking-[0.3em]">
            {chapter.index}
          </span>
          <div className="h-[1px] w-8 bg-white/10" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D90429]/80">
            {chapter.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-[1.1] mb-6 text-white">
          {chapter.headline}
        </h3>

        {/* Body */}
        <p className="text-white/45 text-base leading-relaxed mb-8">{chapter.body}</p>

        {/* Detail pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D90429]" />
          <span className="text-xs font-mono text-white/35 tracking-wide">{chapter.detail}</span>
        </div>
      </motion.div>

      {/* Visual side */}
      <motion.div
        initial={{ opacity: 0, x: visualX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-5"
      >
        {/* Icon display */}
        <div className="relative h-48 rounded-2xl border border-white/[0.06] bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,4,41,0.07),transparent_70%)]" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center">
              <Icon size={28} className="text-[#D90429]" />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] text-white/20 uppercase">
              {chapter.eyebrow} System
            </span>
          </div>
        </div>

        <VisualCard visual={chapter.visual} inView={inView} />
      </motion.div>
    </div>
  );
}

export default function DetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-32 lg:py-44 bg-[#050505] overflow-hidden">
      {/* Vertical progress line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2">
        <div className="absolute inset-0 bg-white/[0.04]" />
        <motion.div
          style={{ height: lineH }}
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#D90429]/0 via-[#D90429]/40 to-[#D90429]/0"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-28 lg:mb-40"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#D90429]/50" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D90429]/70 font-semibold">
              Technical Deep Dive
            </span>
            <div className="w-8 h-[1px] bg-[#D90429]/50" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
            Every system,
            <br />
            <span className="text-white/40">explained.</span>
          </h2>
        </motion.div>

        {/* Chapters */}
        <div className="flex flex-col gap-32 lg:gap-44">
          {chapters.map((chapter) => (
            <Chapter key={chapter.index} chapter={chapter} />
          ))}
        </div>
      </div>
    </section>
  );
}
