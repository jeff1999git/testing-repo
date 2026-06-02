"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

const FRAME_COUNT = 192;

// position: "top-left" appears under the navbar; "bottom-left" anchors to the bottom
const chapters = [
  {
    position: "top-left" as const,
    eyebrow: "Formula One · Season 2026",
    title: "Engineering\nBeyond Speed",
    titleHighlight: "Beyond Speed", // which part to colour red
    subtitle:
      "The technology behind the world's fastest racing machines — every detail engineered at the limit of physics.",
  },
  {
    position: "bottom-left" as const,
    eyebrow: "Power Unit",
    title: "950+ HP",
    titleHighlight: "950+",
    subtitle:
      "A 1.6-litre turbocharged V6 hybrid. Thermal efficiency no other combustion engine on earth has achieved.",
  },
  {
    position: "top-left" as const,
    eyebrow: "Aerodynamics",
    title: "1,800 kg\nDownforce",
    titleHighlight: "Downforce",
    subtitle:
      "Ground effect tunnels generate more downforce than twice the car's own weight at 300 km/h.",
  },
  {
    position: "bottom-left" as const,
    eyebrow: "Telemetry",
    title: "300+\nSensors",
    titleHighlight: "300+",
    subtitle:
      "Over 1,000 data points per second. Every millisecond tracked, every margin eliminated.",
  },
];

type Chapter = (typeof chapters)[0];

function getFrameUrl(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/images/herosection/frame_${padded}_delay-0.042s.avif`;
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/** Renders the title with the highlight word(s) in red */
function TitleLines({ chapter }: { chapter: Chapter }) {
  return (
    <>
      {chapter.title.split("\n").map((line, li) => {
        const isHighlight = chapter.titleHighlight.includes(line.trim());
        return (
          <motion.span
            key={line}
            initial={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.12 + li * 0.1, ease }}
            className={`block font-black tracking-tight leading-[1.0]
              text-4xl sm:text-5xl lg:text-6xl
              ${isHighlight ? "text-[#D90429]" : "text-white"}
            `}
          >
            {line}
          </motion.span>
        );
      })}
    </>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const activeChapterRef = useRef(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const x = (cw - sw) / 2;
    const y = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, x, y, sw, sh);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload images
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;

    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      setFirstFrameReady(true);
      drawFrame(0);
    };
    images[0] = firstImg;

    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      images[i] = img;
    }
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      Math.round(latest * (FRAME_COUNT - 1)),
      FRAME_COUNT - 1
    );
    currentFrameRef.current = frameIndex;
    drawFrame(frameIndex);

    const newChapter = Math.min(Math.floor(latest * 4), 3);
    if (newChapter !== activeChapterRef.current) {
      activeChapterRef.current = newChapter;
      setActiveChapter(newChapter);
    }
  });

  const chapter = chapters[activeChapter];
  const isTop = chapter.position === "top-left";

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">
        {/* Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Loading overlay */}
        <AnimatePresence>
          {!firstFrameReady && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-[#050505] z-20"
            />
          )}
        </AnimatePresence>

        {/* Vignette — strong left edge + top/bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

        {/* ── Chapter text block ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease }}
            className={`absolute left-8 sm:left-12 lg:left-16 z-10 max-w-xs sm:max-w-sm
              ${isTop ? "top-28 sm:top-32" : "bottom-16 sm:bottom-20"}
            `}
          >
            {/* Red left accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="absolute -left-4 top-0 bottom-0 w-[2px] bg-[#D90429] origin-top"
            />

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease }}
              className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#D90429]/70 font-semibold"
            >
              {chapter.eyebrow}
            </motion.div>

            {/* Title — multi-line, per-line animation */}
            <h2 className="mb-4">
              <TitleLines chapter={chapter} />
            </h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="w-10 h-[1.5px] bg-[#D90429]/60 origin-left mb-4"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}
              className="text-xs sm:text-sm text-white/40 leading-relaxed"
            >
              {chapter.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Chapter progress pills — bottom right */}
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-3 z-10">
          {chapters.map((c, i) => (
            <div key={i} className="flex items-center gap-2">
              <AnimatePresence>
                {i === activeChapter && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[9px] uppercase tracking-[0.2em] text-white/30"
                  >
                    {c.eyebrow}
                  </motion.span>
                )}
              </AnimatePresence>
              <motion.div
                animate={{
                  height: i === activeChapter ? 28 : 6,
                  opacity: i === activeChapter ? 1 : 0.2,
                  backgroundColor: i === activeChapter ? "#D90429" : "#ffffff",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-[2px] rounded-full"
              />
            </div>
          ))}
        </div>

        {/* Scroll hint — visible on chapter 0 only */}
        <AnimatePresence>
          {activeChapter === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
              <div className="relative w-[1px] h-10 bg-white/[0.07] overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#D90429]"
                  animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-white/20">
                Scroll
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
