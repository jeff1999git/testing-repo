import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecReveal from "@/components/SpecReveal";
import DetailsSection from "@/components/DetailsSection";
import AerodynamicsSection from "@/components/AerodynamicsSection";
import MaterialsSection from "@/components/MaterialsSection";
import PowerUnitSection from "@/components/PowerUnitSection";
import ElectronicsSection from "@/components/ElectronicsSection";
import PerformanceStats from "@/components/PerformanceStats";
import PricingSection from "@/components/PricingSection";
import Timeline from "@/components/Timeline";
import FutureSection from "@/components/FutureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 1 — Hero: full-screen, no buttons, cinematic */}
        <HeroSection />

        {/* 2 — Spec Reveal: Apple-style sticky scroll specs */}
        <SpecReveal />

        {/* 3 — Details: chapter-by-chapter deep dive */}
        <DetailsSection />

        {/* 4 — Aerodynamics: split layout */}
        <AerodynamicsSection />

        {/* 5 — Materials & Construction */}
        <MaterialsSection />

        {/* 6 — Power Unit */}
        <PowerUnitSection />

        {/* 7 — Electronics & Telemetry */}
        <ElectronicsSection />

        {/* 8 — Animated performance counters */}
        <PerformanceStats />

        {/* 9 — Pricing / Access Levels */}
        <PricingSection />

        {/* 10 — Development Timeline */}
        <Timeline />

        {/* 11 — Future of Racing */}
        <FutureSection />

        {/* 12 — CTA */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
