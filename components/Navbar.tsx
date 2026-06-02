"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Technology", href: "#technology" },
  { label: "Aerodynamics", href: "#aerodynamics" },
  { label: "Engineering", href: "#engineering" },
  { label: "Performance", href: "#performance" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#D90429] rounded-sm rotate-12 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-[2px] bg-[#050505] rounded-sm rotate-12 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
                <span className="text-[#D90429] font-bold text-xs -rotate-12 group-hover:-rotate-6 transition-transform duration-300">F1</span>
              </div>
            </div>
            <span className="font-semibold text-white tracking-wider text-sm uppercase">
              Formula<span className="text-[#D90429]">One</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-[#D90429] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#technology"
              className="relative px-5 py-2.5 text-sm font-medium text-white border border-[#D90429]/60 rounded-sm overflow-hidden group transition-all duration-300 hover:border-[#D90429]"
            >
              <span className="absolute inset-0 bg-[#D90429] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Explore Engineering</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-sm text-white/70 hover:text-white border-b border-white/[0.05] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#technology"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-3 py-3 text-sm font-medium text-white bg-[#D90429] text-center rounded-sm"
              >
                Explore Engineering
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
