"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Wind, Monitor, Factory, Flag } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Chassis Design",
    phase: "Phase 01",
    desc: "Engineers create detailed CAD models of the monocoque, optimizing for rigidity, weight distribution, and driver ergonomics.",
    duration: "4 months",
  },
  {
    icon: Wind,
    title: "Wind Tunnel Testing",
    phase: "Phase 02",
    desc: "Scale models are tested at 50% in wind tunnels running thousands of configurations to validate aerodynamic predictions.",
    duration: "2 months",
  },
  {
    icon: Monitor,
    title: "CFD Simulation",
    phase: "Phase 03",
    desc: "Computational Fluid Dynamics software simulates airflow over every surface with sub-millimeter precision and millions of mesh points.",
    duration: "Ongoing",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    phase: "Phase 04",
    desc: "Carbon fiber layup technicians hand-build each component, with autoclaves curing parts to aerospace specification tolerances.",
    duration: "3 months",
  },
  {
    icon: Flag,
    title: "Track Validation",
    phase: "Phase 05",
    desc: "The complete car is validated over thousands of kilometers on private test circuits before its first race appearance.",
    duration: "2 months",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#050505] overflow-hidden"
    >
      <div className="absolute inset-0 carbon-fiber opacity-30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Development Process
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            From Concept
            <br />
            to Circuit
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Building a Formula 1 car is a year-long engineering marathon involving hundreds of
            specialists across design, simulation, manufacturing, and testing.
          </p>
        </motion.div>

        {/* Timeline - horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(10%+28px)] right-[calc(10%+28px)] h-[2px] bg-white/[0.06]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#D90429]/60 via-[#D90429] to-[#D90429]/60 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="relative flex flex-col items-center text-center lg:px-2"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 mb-6 w-14 h-14 rounded-full border-2 border-[#D90429]/40 bg-[#D90429]/10 flex items-center justify-center group-hover:border-[#D90429] transition-colors duration-300">
                    <Icon size={22} className="text-[#D90429]" />
                    {/* Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#D90429]/30"
                      animate={inView ? { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] } : {}}
                      transition={{ duration: 2, delay: 0.8 + i * 0.15, repeat: Infinity }}
                    />
                  </div>

                  <div className="text-[#D90429] text-xs font-mono tracking-[0.15em] mb-2">
                    {step.phase}
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{step.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed mb-3">{step.desc}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
                    <span className="w-1 h-1 rounded-full bg-[#D90429]" />
                    <span className="text-white/40 text-xs">{step.duration}</span>
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
