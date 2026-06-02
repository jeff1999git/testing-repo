"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, ArrowDown, Layers, Gauge } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Front Wing Optimization",
    desc: "Multi-element front wings precisely calibrated to manage airflow and generate optimal downforce at all speeds.",
  },
  {
    icon: ArrowDown,
    title: "Rear Wing Efficiency",
    desc: "Adaptive DRS-equipped rear wings balance straight-line drag reduction with high-speed cornering stability.",
  },
  {
    icon: Layers,
    title: "Ground Effect Tunnels",
    desc: "Venturi tunnels beneath the floor create a low-pressure zone that sucks the car to the track surface.",
  },
  {
    icon: Gauge,
    title: "Airflow Management",
    desc: "Every surface — from bargeboards to sidepod inlets — is sculpted to guide airflow with surgical precision.",
  },
];

function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: typeof features[0];
  index: number;
  inView: boolean;
}) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.3 + index * 0.12, ease: "easeOut" }}
      className="group flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#D90429]/30 hover:bg-[#D90429]/[0.03] transition-all duration-400 cursor-default"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center group-hover:bg-[#D90429]/20 transition-colors duration-300">
        <Icon size={18} className="text-[#D90429]" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-white transition-colors">
          {feature.title}
        </h4>
        <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AerodynamicsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="aerodynamics"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Aerodynamics
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            The Science of
            <br />
            <span className="text-white/90">Downforce</span>
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Modern Formula 1 cars are shaped like upside-down aircraft wings. Every aerodynamic
            surface is engineered to generate downforce, increasing grip and allowing extreme
            cornering speeds.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Technical illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0d0d0d] aspect-[4/3]">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                {/* Stylized F1 car top-view SVG */}
                <svg viewBox="0 0 400 200" className="w-full max-w-sm opacity-60" fill="none">
                  {/* Front wing */}
                  <rect x="170" y="10" width="60" height="8" rx="2" fill="#D90429" opacity="0.8" />
                  <rect x="140" y="12" width="30" height="5" rx="1" fill="#D90429" opacity="0.5" />
                  <rect x="230" y="12" width="30" height="5" rx="1" fill="#D90429" opacity="0.5" />
                  {/* Nose */}
                  <path d="M185 18 L200 40 L215 18" fill="#3a3a3a" />
                  {/* Monocoque */}
                  <rect x="175" y="40" width="50" height="100" rx="6" fill="#2a2a2a" />
                  {/* Sidepods */}
                  <rect x="140" y="50" width="35" height="70" rx="4" fill="#222" />
                  <rect x="225" y="50" width="35" height="70" rx="4" fill="#222" />
                  {/* Engine cover */}
                  <rect x="178" y="45" width="44" height="90" rx="3" fill="#1a1a1a" />
                  {/* Rear wing */}
                  <rect x="168" y="150" width="64" height="10" rx="2" fill="#D90429" opacity="0.8" />
                  <rect x="172" y="140" width="56" height="12" rx="2" fill="#D90429" opacity="0.4" />
                  {/* Wheels */}
                  <ellipse cx="155" cy="65" rx="14" ry="16" fill="#1a1a1a" stroke="#D90429" strokeWidth="1.5" strokeOpacity="0.5" />
                  <ellipse cx="245" cy="65" rx="14" ry="16" fill="#1a1a1a" stroke="#D90429" strokeWidth="1.5" strokeOpacity="0.5" />
                  <ellipse cx="155" cy="135" rx="14" ry="16" fill="#1a1a1a" stroke="#D90429" strokeWidth="1.5" strokeOpacity="0.5" />
                  <ellipse cx="245" cy="135" rx="14" ry="16" fill="#1a1a1a" stroke="#D90429" strokeWidth="1.5" strokeOpacity="0.5" />
                  {/* Airflow arrows */}
                  <path d="M80 80 L130 80" stroke="#D90429" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow)" strokeDasharray="4 2" />
                  <path d="M80 100 L130 100" stroke="#D90429" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 2" />
                  <path d="M80 120 L130 120" stroke="#D90429" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />
                  <path d="M270 80 L320 80" stroke="#D90429" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 2" />
                  <path d="M270 100 L320 100" stroke="#D90429" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 2" />
                  <path d="M270 120 L320 120" stroke="#D90429" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 2" />
                </svg>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D90429]/60 animate-pulse" />
                  <span className="text-white/25 text-xs font-mono uppercase tracking-widest">
                    Technical Diagram — Top View
                  </span>
                </div>
              </div>

              {/* Data overlays */}
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                {[
                  { label: "Downforce", value: "1800 kg" },
                  { label: "Drag Coeff.", value: "0.78 Cd" },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-2 px-2.5 py-1.5 rounded bg-black/60 border border-white/[0.06]">
                    <span className="text-[10px] text-white/40 font-mono">{d.label}:</span>
                    <span className="text-[10px] text-[#D90429] font-mono font-bold">{d.value}</span>
                  </div>
                ))}
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none" />
            </div>

            {/* Below illustration: key metric */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { v: "1800 kg", l: "Downforce" },
                { v: "330+", l: "km/h Corners" },
                { v: "5G", l: "Lateral G" },
              ].map((m) => (
                <div key={m.l} className="p-3 rounded-lg border border-white/[0.05] bg-white/[0.02] text-center">
                  <div className="text-white font-bold text-base">{m.v}</div>
                  <div className="text-white/35 text-xs mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
