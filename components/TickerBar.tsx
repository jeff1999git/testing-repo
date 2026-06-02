"use client";

const items = [
  "AERODYNAMICS",
  "HYBRID POWER",
  "CARBON FIBER",
  "GROUND EFFECT",
  "TELEMETRY",
  "DOWNFORCE",
  "ERS SYSTEM",
  "CFD SIMULATION",
  "TURBO V6",
  "RACE ENGINEERING",
];

export default function TickerBar() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-3 bg-[#D90429]/[0.06] border-y border-[#D90429]/20 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-xs font-bold tracking-[0.2em] text-white/40 uppercase"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[#D90429]/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
