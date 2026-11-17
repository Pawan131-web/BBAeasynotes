"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/**
 * Real-Time Cosmic Clock Component
 * Exact 1:1 match to the reference image:
 * - NO two seconds showing: The active second IS the focal point of the cosmic arc!
 * - Real current local time (Hours : Minutes : Seconds)
 * - The circular arc passes seamlessly through the seconds position right beside the minutes
 * - Label "Sec" sits right beside the active second
 * - Left side: Minimalist Stopwatch logo + BBA EASY NOTES
 * - Above: "Coming Soon..."
 * - Below: "Welcome!", message, quote, social icons, copyright
 */
export default function RealTimeCosmicClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateClock = () => {
      const current = new Date();
      const h = String(current.getHours()).padStart(2, "0");
      const m = String(current.getMinutes()).padStart(2, "0");
      const s = String(current.getSeconds()).padStart(2, "0");
      setTime({ hours: h, minutes: m, seconds: s });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const format2Digits = (num) => String(num).padStart(2, "0");
  const currentSecInt = parseInt(time.seconds, 10) || 0;

  // Arc deltas: 8 numbers above and 8 numbers below the active second
  const arcDeltas = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  const RADIUS = 540; // Majestic gentle curve matching the reference photo
  const STEP_DEG = 5.8; // Degrees between each consecutive second on the arc

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-8 sm:py-12 select-none overflow-hidden z-10">
      
      {/* ===================================================================== */}
      {/* TOP HEADER: SUBTLE BACK BUTTON & STATUS                               */}
      {/* ===================================================================== */}
      <div className="w-full flex items-center justify-between z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-medium text-white transition-all cursor-pointer"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        <span className="text-xs sm:text-sm font-light text-slate-300/80 tracking-widest uppercase">
          Semester Results Portal
        </span>
      </div>

      {/* ===================================================================== */}
      {/* MAIN ROW: [LOGO] [HOURS] [MIN] [UNIFIED SECONDS COSMIC ARC]           */}
      {/* ===================================================================== */}
      <div className="relative w-full my-auto flex flex-col justify-center z-20">
        
        {/* Above Timer: "Coming Soon..." (Aligned with the time numbers) */}
        <div className="mb-4 sm:mb-6 pl-0 sm:pl-[240px] lg:pl-[280px]">
          <span className="text-sm sm:text-base font-light text-slate-200 tracking-wide drop-shadow-sm">
            Coming Soon...
          </span>
        </div>

        {/* Central Numbers Bar */}
        <div className="flex items-center gap-6 sm:gap-10 lg:gap-14 flex-wrap relative">
          
          {/* LEFT: Stopwatch Logo & Brand Name (Exact ERA Style) */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 sm:w-[220px] lg:w-[240px]">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]"
              >
                <circle cx="24" cy="27" r="16.5" strokeWidth="2.4" />
                <path d="M24 10.5V5M20 5H28" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M35.5 15.5L38.5 12.5" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M12.5 15.5L9.5 12.5" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="24" cy="27" r="2.2" fill="currentColor" />
                <path d="M24 20V27L28.5 29.5" strokeWidth="2.2" strokeLinecap="round" />
                <circle cx="24" cy="14" r="1.2" fill="currentColor" />
                <circle cx="37" cy="27" r="1.2" fill="currentColor" />
                <circle cx="24" cy="40" r="1.2" fill="currentColor" />
                <circle cx="11" cy="27" r="1.2" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-white tracking-[0.16em] uppercase leading-none drop-shadow-md">
                BBA
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-[0.25em] uppercase leading-tight mt-0.5">
                Easy Notes
              </span>
            </div>
          </div>

          {/* RIGHT: Clock Numbers (Hours, Minutes, and the Unified Seconds Cosmic Arc!) */}
          <div className="flex items-baseline gap-6 sm:gap-10 lg:gap-14">
            
            {/* HOURS */}
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] tabular-nums">
                {time.hours}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-300 tracking-wider uppercase">
                Hours
              </span>
            </div>

            {/* MINUTES */}
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] tabular-nums">
                {time.minutes}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-300 tracking-wider uppercase">
                Min
              </span>
            </div>

            {/* UNIFIED SECONDS WITH COSMIC ARC (No Duplicate Seconds!) */}
            {/* The active second sits in-flow, while surrounding seconds curve gracefully above & below */}
            <div className="relative flex items-baseline gap-2 shrink-0">
              
              {/* Anchor wrapper for active second and its radial arc */}
              <div className="relative inline-flex items-center justify-center">
                
                {/* ACTIVE SECOND: The focal point of the cosmic circle */}
                <span className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight drop-shadow-[0_0_28px_rgba(255,255,255,0.85)] tabular-nums">
                  {time.seconds}
                </span>

                {/* THE ROTATING COSMIC ARC NUMBERS (TABLET & DESKTOP) */}
                {/* Positioned with mathematical precision relative to the active second */}
                <div className="hidden md:block absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none select-none">
                  {arcDeltas.map((delta) => {
                    const num = (currentSecInt + delta + 60) % 60;
                    const thetaDeg = delta * STEP_DEG;
                    const thetaRad = (thetaDeg * Math.PI) / 180;
                    const x = RADIUS * (1 - Math.cos(thetaRad));
                    const y = -RADIUS * Math.sin(thetaRad);
                    const tilt = -thetaDeg;
                    const dist = Math.abs(delta);

                    // Smooth opacity decay along the curve
                    let opacity = 0.03;
                    if (dist === 1) opacity = 0.68;
                    else if (dist === 2) opacity = 0.48;
                    else if (dist === 3) opacity = 0.34;
                    else if (dist === 4) opacity = 0.22;
                    else if (dist === 5) opacity = 0.14;
                    else if (dist === 6) opacity = 0.08;
                    else if (dist === 7) opacity = 0.05;

                    return (
                      <div
                        key={delta}
                        className="absolute pointer-events-none select-none transition-all duration-300 ease-out"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
                          opacity,
                        }}
                      >
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 tracking-tight font-sans">
                          {format2Digits(num)}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* SEC LABEL: Placed cleanly right next to the active second */}
              <span className="text-xs sm:text-sm font-bold text-slate-300 tracking-wider uppercase pl-1 sm:pl-2">
                Sec
              </span>

            </div>

          </div>

        </div>

        {/* Below Timer: Welcome & Message (Exact Position & Alignment from Picture) */}
        <div className="mt-8 sm:mt-12 pl-0 sm:pl-[240px] lg:pl-[280px] max-w-xl space-y-3 z-20">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
            Welcome!
          </h2>

          <p className="text-sm sm:text-base text-slate-200/90 font-light leading-relaxed drop-shadow-sm">
            Gracias for visiting our site. Our live semester results &amp; grade verification portal is almost ready. Please, come back later and we&apos;ll surprise you!
          </p>

          <p className="text-xs sm:text-sm text-slate-300/80 italic font-light pt-1">
            &ldquo;Great things take a little time to craft. Every note verified, every result connected.&rdquo;
          </p>

          {/* Social Icons Row (Exact Match to Reference Image Row) */}
          <div className="flex items-center gap-3 pt-4 text-white/80">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              f
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              in
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-[10px] transition-colors cursor-pointer"
            >
              ▶
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              ig
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 rounded-full border border-white/40 hover:border-white hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
            >
              gh
            </a>
          </div>

          {/* Copyright Line from Reference */}
          <div className="pt-2">
            <span className="text-[10.5px] sm:text-[11px] text-slate-400 font-light tracking-wide">
              © 2026 BBA Easy Notes Studio. An Initiative of bbaeasynotes.com
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
