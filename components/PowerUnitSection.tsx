"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Wind, Battery, Cpu, Zap, Settings } from "lucide-react";

const components = [
  {
    icon: Flame,
    title: "Internal Combustion Engine",
    desc: "1.6L turbocharged V6 producing ~550 kW at 15,000 RPM",
    perf: 73,
    unit: "550 kW",
  },
  {
    icon: Wind,
    title: "Turbocharger",
    desc: "Single turbo compresses intake air to increase power output",
    perf: 62,
    unit: "3.5 Bar",
  },
  {
    icon: Zap,
    title: "ERS-K System",
    desc: "Motor Generator Unit-Kinetic harvests braking energy",
    perf: 85,
    unit: "120 kW",
  },
  {
    icon: Battery,
    title: "ERS-H System",
    desc: "Motor Generator Unit-Heat recovers turbo exhaust energy",
    perf: 55,
    unit: "120 kW",
  },
  {
    icon: Battery,
    title: "Battery Technology",
    desc: "Lithium-ion energy store with 4 MJ capacity per lap",
    perf: 68,
    unit: "4 MJ",
  },
  {
    icon: Cpu,
    title: "Power Management",
    desc: "ECU coordinates power delivery across all systems in real time",
    perf: 90,
    unit: "1ms",
  },
];

function PerformanceBar({
  value,
  inView,
  delay,
}: {
  value: number;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="relative h-1 bg-white/[0.07] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-[#D90429] to-[#ff1744] rounded-full"
      />
    </div>
  );
}

export default function PowerUnitSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="power-unit"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Power Unit
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            950 Horsepower
            <br />
            Hybrid Engineering
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Modern Formula 1 power units combine a turbocharged V6 engine with advanced energy
            recovery systems, achieving unprecedented thermal efficiency.
          </p>
        </motion.div>

        {/* Total output display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto max-w-xl mb-14 p-6 rounded-2xl glass-red overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,4,41,0.1),transparent)] pointer-events-none" />
          <div className="relative">
            <div className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-1">
              950<span className="text-[#D90429]">+</span>
            </div>
            <div className="text-white/50 text-sm tracking-[0.2em] uppercase">
              Combined Horsepower
            </div>
            <div className="mt-3 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-white font-semibold">ICE</div>
                <div className="text-white/40 text-xs">~740 HP</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div className="text-center">
                <div className="text-white font-semibold">ERS</div>
                <div className="text-white/40 text-xs">~161 HP</div>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div className="text-center">
                <div className="text-white font-semibold">Efficiency</div>
                <div className="text-[#D90429] text-xs font-bold">50%+</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Component cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {components.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.08 }}
                className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#D90429]/30 hover:bg-[#D90429]/[0.03] transition-all duration-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center group-hover:bg-[#D90429]/20 transition-colors duration-300">
                    <Icon size={18} className="text-[#D90429]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-snug mb-0.5">
                      {c.title}
                    </h4>
                    <p className="text-white/40 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>

                {/* Performance bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <PerformanceBar value={c.perf} inView={inView} delay={0.4 + i * 0.08} />
                  </div>
                  <span className="text-[#D90429] text-xs font-mono font-bold flex-shrink-0">
                    {c.unit}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
