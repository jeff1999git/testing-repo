"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Spectator",
    price: "29",
    period: "/ month",
    headline: "The race, from the grandstand.",
    description:
      "Access live timing data, historical race archives, and driver telemetry summaries. Perfect for fans who want more than a broadcast.",
    features: [
      "Live timing & sector data",
      "Historical race archive (all seasons)",
      "Driver career statistics",
      "Circuit maps & sector breakdowns",
      "Weekly engineering briefings",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Engineer",
    price: "99",
    period: "/ month",
    headline: "Inside the pit wall.",
    description:
      "Full telemetry access, live strategy overlays, and in-depth technical reports written by former race engineers. See what the teams see.",
    features: [
      "Everything in Spectator",
      "Full car telemetry per lap",
      "Live race strategy overlays",
      "Technical setup reports",
      "Tyre degradation models",
      "Post-race debrief access",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Constructor",
    price: "299",
    period: "/ month",
    headline: "Build the future of racing.",
    description:
      "Unrestricted API access, custom analytics dashboards, and direct consultation hours. For teams, researchers, and institutions.",
    features: [
      "Everything in Engineer",
      "Unrestricted telemetry API",
      "Custom analytics dashboards",
      "2 consultation hours / month",
      "Priority data stream access",
      "Dedicated account engineer",
    ],
    highlight: false,
    badge: "Enterprise",
  },
];

function PricingCard({
  tier,
  index,
  inView,
}: {
  tier: (typeof tiers)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 group
        ${
          tier.highlight
            ? "border border-[#D90429]/50 bg-[#0d0505] scale-[1.02] lg:scale-[1.04]"
            : "border border-white/[0.07] bg-[#090909] hover:border-white/15"
        }
      `}
    >
      {/* Highlighted glow */}
      {tier.highlight && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,4,41,0.1),transparent_60%)]" />
      )}

      {/* Top bar accent */}
      {tier.highlight && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D90429] to-transparent" />
      )}

      <div className="relative p-7 lg:p-8 flex flex-col flex-1">
        {/* Badge */}
        {tier.badge && (
          <div className="mb-4 self-start">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase
                ${
                  tier.highlight
                    ? "bg-[#D90429] text-white"
                    : "border border-white/10 text-white/40"
                }
              `}
            >
              {tier.badge}
            </span>
          </div>
        )}

        {/* Tier name */}
        <div className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-2">
          {tier.name}
        </div>

        {/* Price */}
        <div className="flex items-end gap-1 mb-1">
          <span className="text-white/30 text-xl font-light">$</span>
          <span className="text-5xl font-black text-white tracking-tight leading-none">
            {tier.price}
          </span>
          <span className="text-white/30 text-sm mb-1">{tier.period}</span>
        </div>

        {/* Headline */}
        <p className="text-sm text-white/50 mt-3 mb-5 leading-relaxed">{tier.description}</p>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.06] mb-6" />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center
                  ${tier.highlight ? "bg-[#D90429]/20 border border-[#D90429]/40" : "bg-white/[0.05] border border-white/10"}
                `}
              >
                <Check
                  size={9}
                  className={tier.highlight ? "text-[#D90429]" : "text-white/40"}
                />
              </div>
              <span className="text-sm text-white/50 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-8 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300
            ${
              tier.highlight
                ? "bg-[#D90429] text-white hover:bg-[#b0021f]"
                : "border border-white/10 text-white/60 hover:border-white/25 hover:text-white hover:bg-white/[0.04]"
            }
          `}
        >
          {tier.highlight ? "Get Started" : "Choose Plan"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative py-32 lg:py-44 bg-[#080808] overflow-hidden">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(217,4,41,0.04),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#D90429]/50" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D90429]/70 font-semibold">
              Access Levels
            </span>
            <div className="w-8 h-[1px] bg-[#D90429]/50" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
            Choose your
            <br />
            <span className="text-white/35">vantage point.</span>
          </h2>

          <p className="max-w-md mx-auto text-white/35 text-base leading-relaxed">
            From casual fan to embedded engineer — every level of access, at every level of depth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {tiers.map((tier, i) => (
            <PricingCard key={tier.name} tier={tier} index={i} inView={inView} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-white/20 text-xs mt-12 tracking-wide"
        >
          All plans billed monthly. Cancel at any time. Prices in USD.
        </motion.p>
      </div>
    </section>
  );
}
