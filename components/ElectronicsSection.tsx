"use client";

import { motion, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Radio, Sliders, Zap, Activity, Cpu, BarChart2 } from "lucide-react";

const systems = [
  { icon: Radio, title: "Sensor Network", value: "300+", unit: "Sensors", desc: "Monitoring every subsystem" },
  { icon: Sliders, title: "Brake Bias", value: "0.1%", unit: "Precision", desc: "Adjustable front/rear balance" },
  { icon: Zap, title: "Energy Recovery", value: "161", unit: "HP", desc: "Real-time ERS deployment" },
  { icon: Activity, title: "Live Telemetry", value: "1000+", unit: "Data/sec", desc: "Continuous stream to pit wall" },
  { icon: Cpu, title: "Steering Controls", value: "25+", unit: "Functions", desc: "Driver-adjustable parameters" },
  { icon: BarChart2, title: "Lap Analysis", value: "50 GB", unit: "Per Race", desc: "Post-race data processing" },
];

function AnimatedChart({ inView }: { inView: boolean }) {
  const bars = [65, 82, 48, 91, 73, 88, 55, 95, 67, 79, 84, 61];
  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={inView ? { height: `${h}%` } : { height: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: "easeOut" }}
          className="flex-1 bg-gradient-to-t from-[#D90429] to-[#D90429]/30 rounded-sm"
        />
      ))}
    </div>
  );
}

function LiveValue({ label, value }: { label: string; value: string }) {
  const [display, setDisplay] = useState(value);
  useAnimationFrame((t) => {
    if (Math.floor(t / 800) % 2 === 0) {
      setDisplay(value);
    } else {
      const delta = (Math.random() * 4 - 2).toFixed(1);
      const num = parseFloat(value);
      if (!isNaN(num)) setDisplay((num + parseFloat(delta)).toFixed(1));
    }
  });
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
      <span className="text-white/40 text-xs font-mono">{label}</span>
      <span className="text-[#D90429] text-xs font-mono font-bold">{display}</span>
    </div>
  );
}

export default function ElectronicsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="technology"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 carbon-fiber opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(217,4,41,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Electronics & Telemetry
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            Real-Time Data
            <br />
            at 300+ km/h
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Hundreds of sensors continuously monitor vehicle performance, transmitting live
            telemetry to engineers who make split-second decisions from the pit wall.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Dashboard panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative p-6 rounded-2xl border border-[#D90429]/20 bg-[#0a0505] overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,4,41,0.08),transparent_60%)] pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-5">
              <div>
                <div className="text-xs text-[#D90429] font-mono tracking-widest uppercase mb-1">
                  Telemetry Feed
                </div>
                <div className="text-white font-semibold">Live Data Stream</div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D90429]/10 border border-[#D90429]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D90429] animate-pulse" />
                <span className="text-[#D90429] text-xs font-mono">LIVE</span>
              </div>
            </div>

            {/* Chart */}
            <div className="relative mb-4">
              <div className="text-xs text-white/30 font-mono mb-2 uppercase tracking-widest">Speed Trace</div>
              <AnimatedChart inView={inView} />
            </div>

            {/* Live values */}
            <div className="relative">
              <div className="text-xs text-white/30 font-mono mb-2 uppercase tracking-widest">Real-Time Sensors</div>
              <LiveValue label="Speed (km/h)" value="287.4" />
              <LiveValue label="Throttle (%)" value="94.7" />
              <LiveValue label="Brake Temp (°C)" value="681.2" />
              <LiveValue label="ERS Deploy (%)" value="87.3" />
              <LiveValue label="G-Force (lat)" value="3.8" />
            </div>

            {/* Scan line */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(217,4,41,0.015)_2px,rgba(217,4,41,0.015)_4px)] pointer-events-none rounded-2xl" />
          </motion.div>

          {/* System cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08 }}
                  className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#D90429]/30 hover:bg-[#D90429]/[0.03] transition-all duration-400 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center group-hover:bg-[#D90429]/20 transition-colors duration-300">
                    <Icon size={18} className="text-[#D90429]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{s.title}</div>
                    <div className="text-white/40 text-xs">{s.desc}</div>
                  </div>
                  <div className="mt-auto pt-3 border-t border-white/[0.05] flex items-baseline gap-1">
                    <span className="text-[#D90429] font-bold text-xl leading-none">{s.value}</span>
                    <span className="text-white/40 text-xs">{s.unit}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
