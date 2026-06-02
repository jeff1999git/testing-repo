"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "950 HP+", label: "Engine Output", desc: "Combined hybrid power from the ICE and ERS systems" },
  { value: "375 km/h", label: "Top Speed", desc: "Maximum velocity achieved on circuit straights" },
  { value: "1.6L Turbo", label: "Hybrid Engine", desc: "Turbocharged V6 with advanced energy recovery" },
  { value: "10", label: "Constructors", desc: "Elite teams competing at the highest level" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="group relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-[#D90429]/40 hover:bg-[#D90429]/[0.04] transition-all duration-500 overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#D90429]/60 to-transparent" />
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#D90429]/60 to-transparent" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,4,41,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
          {stat.value}
        </div>
        <div className="text-[#D90429] text-xs font-semibold tracking-[0.15em] uppercase mb-2">
          {stat.label}
        </div>
        <div className="text-white/40 text-sm leading-relaxed">{stat.desc}</div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 carbon-fiber opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(217,4,41,0.06),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              About Formula 1
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            The Pinnacle of
            <br />
            <span className="text-white/90">Motorsport Engineering</span>
          </h2>

          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Formula 1 cars are the world&apos;s fastest regulated road-course racing vehicles,
            designed and raced by elite constructors under strict FIA regulations. Each car
            represents thousands of engineering hours, cutting-edge materials science, and
            relentless performance optimization.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}
