"use client";

import { motion } from "framer-motion";
import { MessageCircle, Globe, Play, Link2, Share2 } from "lucide-react";

const navGroups = [
  {
    title: "Technology",
    links: ["Aerodynamics", "Power Unit", "Electronics", "Materials"],
  },
  {
    title: "Engineering",
    links: ["Chassis Design", "CFD Simulation", "Wind Tunnel", "Manufacturing"],
  },
  {
    title: "Performance",
    links: ["Statistics", "Telemetry", "Race Data", "Track Records"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
];

const socialLinks = [
  { icon: MessageCircle, label: "Twitter / X", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: Share2, label: "Share", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.05] overflow-hidden">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-[#D90429] rounded-sm rotate-12" />
                <div className="absolute inset-[2px] bg-[#030303] rounded-sm rotate-12 flex items-center justify-center">
                  <span className="text-[#D90429] font-bold text-xs -rotate-12">F1</span>
                </div>
              </div>
              <span className="font-semibold text-white tracking-wider text-sm uppercase">
                Formula<span className="text-[#D90429]">One</span>
              </span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              The pinnacle of motorsport engineering. Discover the technology that drives the
              world&apos;s fastest racing machines.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[#D90429] hover:border-[#D90429]/30 transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-4">
                {group.title}
              </div>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Formula One Engineering. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/25 text-xs hover:text-white/60 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#D90429]/20 to-transparent" />
    </footer>
  );
}
