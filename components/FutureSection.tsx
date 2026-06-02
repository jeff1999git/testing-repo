"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Cpu, Atom, Globe } from "lucide-react";

const cards = [
  {
    icon: Leaf,
    title: "Sustainable Fuels",
    desc: "Formula 1 is transitioning to 100% sustainable fuels by 2026, with advanced biofuels developed from agricultural waste and synthetic carbon-neutral sources.",
    tag: "2026 Target",
  },
  {
    icon: Cpu,
    title: "AI-Driven Engineering",
    desc: "Machine learning algorithms now optimize car setup configurations across thousands of variables, reducing lap times through data-driven insights no human engineer could compute.",
    tag: "Active Now",
  },
  {
    icon: Atom,
    title: "Next-Gen Materials",
    desc: "Research into graphene-enhanced composites and metal-matrix materials promises components that are simultaneously lighter, stronger, and more thermally stable.",
    tag: "In Development",
  },
  {
    icon: Globe,
    title: "Road Car Technology",
    desc: "Hybrid ERS systems, active aerodynamics, and advanced tire compounds pioneered in F1 directly influence the next generation of hypercars and electric vehicles.",
    tag: "Technology Transfer",
  },
];

export default function FutureSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] rounded-full bg-[#D90429]/[0.04] blur-[100px] pointer-events-none" />

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
              Future of Racing
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5">
            The Future of
            <br />
            High-Performance Engineering
          </h2>
          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            Formula 1 continues to drive innovation in sustainability, efficiency, and advanced
            materials — pushing the boundaries of what&apos;s possible on and off the track.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#D90429]/30 overflow-hidden transition-all duration-500"
              >
                {/* Animated hover overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,4,41,0.07),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Futuristic corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#D90429]/40 to-transparent" />
                  <div className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-l from-[#D90429]/40 to-transparent" />
                </div>

                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center group-hover:bg-[#D90429]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={22} className="text-[#D90429]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-bold text-lg">{c.title}</h3>
                      <span className="px-2.5 py-0.5 text-[10px] font-semibold text-[#D90429] border border-[#D90429]/30 rounded-full bg-[#D90429]/5 tracking-wider uppercase">
                        {c.tag}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
