"use client";

import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 375, suffix: "+", label: "Top Speed", unit: "km/h", desc: "Maximum velocity on track" },
  { value: 2.6, suffix: "s", label: "0–100 km/h", unit: "", desc: "Acceleration benchmark" },
  { value: 5, suffix: "G", label: "Cornering Force", unit: "", desc: "Lateral load on driver" },
  { value: 1000, suffix: "+", label: "Data Points", unit: "/sec", desc: "Telemetry per second" },
];

function AnimatedNumber({
  value,
  suffix,
  unit,
  inView,
  delay,
}: {
  value: number;
  suffix: string;
  unit: string;
  inView: boolean;
  delay: number;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, {
        duration: 1.8,
        delay,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent =
              value < 10
                ? v.toFixed(1)
                : Math.round(v).toLocaleString();
          }
        },
      });
      return controls.stop;
    }
  }, [inView, value, delay, motionVal, spring]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}

export default function PerformanceStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="performance"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-black text-white/[0.015] tracking-tighter select-none">F1</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Performance Figures
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Numbers That
            <br />
            Defy Physics
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col items-center text-center p-10 bg-[#080808] hover:bg-[#0f0608] transition-colors duration-500 overflow-hidden"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,4,41,0.07),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl lg:text-6xl font-black text-white tracking-tight">
                    <AnimatedNumber
                      value={s.value}
                      suffix={s.suffix}
                      unit={s.unit}
                      inView={inView}
                      delay={0.3 + i * 0.1}
                    />
                  </span>
                  <span className="text-3xl font-black text-[#D90429]">{s.suffix}</span>
                  {s.unit && (
                    <span className="text-lg font-semibold text-white/40">{s.unit}</span>
                  )}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-white/35 text-xs">{s.desc}</div>
              </div>

              {/* Top border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D90429]/60 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
