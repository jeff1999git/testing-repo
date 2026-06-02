"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Layers, Zap, Weight } from "lucide-react";

const materials = [
  {
    icon: Layers,
    title: "Carbon Fiber Monocoque",
    desc: "The chassis survival cell is a single-piece carbon fiber structure, providing exceptional rigidity and crash protection while weighing under 50 kg.",
    accent: "Strength-to-Weight",
    accentValue: "5× Steel",
  },
  {
    icon: Shield,
    title: "Composite Body Panels",
    desc: "Every body panel is hand-laid carbon fiber prepreg, autoclaved at precise temperatures for optimal fiber alignment and resin distribution.",
    accent: "Material Weight",
    accentValue: "1.6 g/cm³",
  },
  {
    icon: Zap,
    title: "Impact Resistant Structure",
    desc: "Crash structures are engineered to absorb energy progressively, protecting drivers in impacts exceeding 50G deceleration forces.",
    accent: "Impact Energy",
    accentValue: "≥ 150 kJ",
  },
  {
    icon: Weight,
    title: "Ultra-Lightweight Components",
    desc: "Titanium fasteners, magnesium alloy components, and carbon ceramic brakes contribute to the minimum 798 kg total car weight.",
    accent: "Car Weight",
    accentValue: "798 kg Min",
  },
];

export default function MaterialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="engineering"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden"
    >
      {/* Carbon fiber texture */}
      <div className="absolute inset-0 carbon-fiber opacity-50 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(217,4,41,0.04),transparent)] pointer-events-none" />

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
              Materials & Construction
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            Built From Aerospace
            <br />
            Technology
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Formula 1 cars are constructed primarily from carbon fiber composites, combining
            incredible strength with minimal weight.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {materials.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#D90429]/35 hover:bg-[#D90429]/[0.03] transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,4,41,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-5 w-11 h-11 rounded-xl bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center group-hover:bg-[#D90429]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-[#D90429]" />
                </div>

                <h3 className="relative text-white font-semibold text-base mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="relative text-white/40 text-sm leading-relaxed mb-4">{m.desc}</p>

                {/* Accent badge */}
                <div className="relative flex items-center gap-2 pt-4 border-t border-white/[0.05]">
                  <span className="text-white/30 text-xs">{m.accent}:</span>
                  <span className="text-[#D90429] text-xs font-bold">{m.accentValue}</span>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-[#D90429]/40 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-l from-[#D90429]/40 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
