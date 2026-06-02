"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 lg:py-40 bg-[#050505] overflow-hidden"
    >
      {/* Carbon background */}
      <div className="absolute inset-0 carbon-fiber opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Red gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(217,4,41,0.07),transparent)] pointer-events-none" />

      {/* Vertical accent lines */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D90429]/10 to-transparent pointer-events-none" />
      <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D90429]/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#D90429]" />
            <span className="text-[#D90429] text-xs font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="w-10 h-[2px] bg-[#D90429]" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.92] mb-6">
            Experience
            <br />
            <span className="text-[#D90429]">Engineering</span>
            <br />
            Excellence
          </h2>

          <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Join us at the frontier of motorsport engineering. Whether you&apos;re a passionate
            fan, aspiring engineer, or industry partner — there&apos;s a place for you here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D90429] text-white font-semibold rounded-sm hover:bg-[#a00320] transition-colors duration-300"
            >
              Learn More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <motion.a
              href="mailto:team@formula1.engineering"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-sm hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <Mail size={16} className="text-[#D90429]" />
              Contact Team
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {["Innovation", "Performance", "Precision"].map((word) => (
            <div
              key={word}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border border-white/[0.05] bg-white/[0.02]"
            >
              <div className="w-1 h-1 rounded-full bg-[#D90429]" />
              <span className="text-white/25 text-[10px] tracking-[0.15em] uppercase">{word}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
