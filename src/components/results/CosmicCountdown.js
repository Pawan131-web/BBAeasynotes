"use client";

import { useState, useEffect } from "react";

/**
 * Cosmic Countdown Component
 * Features:
 * - Live real-time ticking countdown: Days, Hours, Minutes, Seconds
 * - Iconic circular rotating seconds dial (matches the user's reference image!)
 */
export default function CosmicCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 32,
    seconds: 0,
  });

  // Calculate live countdown to a target launch date (or continuous realistic ticking)
  useEffect(() => {
    // Target date: 14 days from now, or live countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    targetDate.setHours(targetDate.getHours() + 8);
    targetDate.setMinutes(targetDate.getMinutes() + 32);

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Fallback live clock seconds
        const s = now.getSeconds();
        const m = now.getMinutes();
        const h = now.getHours();
        setTimeLeft({ days: 0, hours: 23 - h, minutes: 59 - m, seconds: 59 - s });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2Digits = (num) => String(num).padStart(2, "0");

  // Generate 60 numbers for the circular dial: 00 to 59
  const dialNumbers = Array.from({ length: 60 }, (_, i) => i);

  // The rotation angle for the circular seconds dial
  // Each second is 6 degrees (360 / 60 = 6)
  const dialRotation = -(timeLeft.seconds * 6);

  return (
    <div className="relative w-full flex items-center justify-between overflow-visible">
      
      {/* ===================================================================== */}
      {/* LEFT: TIME COUNTER DISPLAY (Exact Match to Reference Image)           */}
      {/* ===================================================================== */}
      <div className="flex flex-col z-20">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase drop-shadow-sm">
            Time Left Until Launching...
          </span>
        </div>

        {/* Big Numbers Row: [54 DAYS] [08 HOURS] [32 MIN] [02 SEC] */}
        <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-wrap">
          
          {/* DAYS */}
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {format2Digits(timeLeft.days)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase">
              Days
            </span>
          </div>

          {/* HOURS */}
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {format2Digits(timeLeft.hours)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase">
              Hours
            </span>
          </div>

          {/* MINUTES */}
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {format2Digits(timeLeft.minutes)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase">
              Min
            </span>
          </div>

          {/* SECONDS (Highlighted) */}
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight drop-shadow-[0_0_24px_rgba(255,255,255,0.7)]">
              {format2Digits(timeLeft.seconds)}
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-amber-300 tracking-wider uppercase">
              Sec
            </span>
          </div>

        </div>

      </div>

      {/* ===================================================================== */}
      {/* RIGHT: ICONIC ROTATING CIRCULAR SECONDS DIAL (FROM REFERENCE IMAGE)    */}
      {/* ===================================================================== */}
      <div className="hidden lg:block absolute -right-28 xl:-right-16 top-1/2 -translate-y-1/2 w-[620px] h-[620px] pointer-events-none select-none z-10">
        
        {/* Rotating Dial Container */}
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotate(${dialRotation}deg)`,
            transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {dialNumbers.map((num) => {
            const angle = num * 6; // 0 to 354 degrees
            const isCurrent = num === timeLeft.seconds;
            const diff = Math.abs(num - timeLeft.seconds);
            const wrappedDiff = Math.min(diff, 60 - diff);

            // Opacity fades as you move further along the arc
            let opacity = 0.12;
            if (wrappedDiff === 0) opacity = 1;
            else if (wrappedDiff === 1) opacity = 0.8;
            else if (wrappedDiff === 2) opacity = 0.65;
            else if (wrappedDiff <= 4) opacity = 0.45;
            else if (wrappedDiff <= 8) opacity = 0.25;

            return (
              <div
                key={num}
                className="absolute top-1/2 left-1/2 origin-[0_0]"
                style={{
                  transform: `rotate(${angle}deg) translate(250px) rotate(90deg)`,
                }}
              >
                <span
                  className={`text-lg xl:text-xl font-bold tracking-tighter transition-all duration-300 block ${
                    isCurrent
                      ? "text-white font-black scale-125 drop-shadow-[0_0_14px_rgba(255,255,255,1)]"
                      : "text-slate-300"
                  }`}
                  style={{ opacity: opacity }}
                >
                  {format2Digits(num)}
                </span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}

