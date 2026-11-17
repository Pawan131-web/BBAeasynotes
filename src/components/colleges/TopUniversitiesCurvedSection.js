"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopUniversitiesCurvedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [poppedIndex, setPoppedIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const popTimerRef = useRef(null);

  // Subtle scroll-driven fade out as user scrolls toward the colleges gallery
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const p = Math.min(1, Math.max(0, (scrollY - 40) / 420));
          setScrollProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 6 Top Universities & Campuses with HD Architectural Imagery & Clean Data
  const universities = [
    {
      id: "tu",
      name: "Tribhuvan University",
      short: "TU",
      est: "Est. 1959",
      subline: "60+ BBA Colleges · CMAT Entrance",
      logo: "/tu-logo.svg",
      image: "/universities/tu-hd.jpg",
      href: "/universities/tu",
    },
    {
      id: "pu",
      name: "Pokhara University",
      short: "PU",
      est: "Est. 1997",
      subline: "40+ Business Schools · PU Entrance",
      logo: "/pu-logo.jpg",
      image: "/universities/pu-hd.jpg",
      isRoundLogo: true,
      href: "/universities/pu",
    },
    {
      id: "ku",
      name: "Kathmandu University",
      short: "KU",
      est: "Est. 1991",
      subline: "KUSOM & Premier Centers · KUMAT",
      logo: "/ku-logo.svg",
      image: "/universities/ku-hd.jpg",
      href: "/universities/ku",
    },
    {
      id: "purbanchal",
      name: "Purbanchal University",
      short: "PU-East",
      est: "Est. 1993",
      subline: "30+ Regional Centers · University Entrance",
      logo: "/purbanchal-logo.png",
      image: "/universities/purbanchal-hd.jpg",
      isRoundLogo: true,
      href: "/universities/purbanchal",
    },
    {
      id: "kusom",
      name: "KUSOM",
      short: "KU School of Mgmt",
      est: "Est. 1993",
      subline: "Executive BBA Hub · KUMAT & GD",
      logo: "/ku-logo.svg",
      image: "/universities/kusom-hd.jpg",
      href: "/universities/ku",
    },
    {
      id: "sdc",
      name: "Shanker Dev Campus",
      short: "SDC - TU",
      est: "Est. 1951",
      subline: "Flagship TU Campus · Top CMAT Cut-off",
      logo: "/tu-logo.svg",
      image: "/universities/sdc-hd.jpg",
      href: "/universities/tu",
    },
  ];

  const total = universities.length;

  // Auto-shift carousel like a slideshow every 3.8 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  // Clean up pop timer
  useEffect(() => {
    return () => {
      if (popTimerRef.current) clearTimeout(popTimerRef.current);
    };
  }, []);

  // When hovering any card: pops to front for a moment, then eases back to position!
  const handleCardHover = (idx) => {
    setPoppedIndex(idx);

    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    popTimerRef.current = setTimeout(() => {
      setPoppedIndex(null);
    }, 850);
  };

  const handleCardLeave = () => {
    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    setPoppedIndex(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      className="relative py-12 sm:py-16 bg-white overflow-hidden select-none transition-all duration-300 ease-out"
      style={{
        opacity: Math.max(0.12, 1 - scrollProgress * 0.88),
        transform: `translateY(-${scrollProgress * 24}px)`,
      }}
    >
      
      {/* ========================================================================= */}
      {/* HEADER: JUST "Universities in Nepal"                                      */}
      {/* ========================================================================= */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-slate-900 tracking-[-0.02em] leading-tight">
          Universities in Nepal
        </h1>
      </div>

      {/* ========================================================================= */}
      {/* 3D CONCAVE PANORAMA (FILLS COMPLETELY LEFT TO RIGHT, REDUCED HEIGHT)      */}
      {/* ========================================================================= */}
      <div
        className="relative w-full py-4 sm:py-8 flex items-center justify-center overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleCardLeave();
        }}
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 55%",
        }}
      >
        {/* Full-bleed stage filling left to right */}
        <div
          className="relative w-full max-w-[1520px] h-[300px] sm:h-[340px] md:h-[370px] lg:h-[390px] flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {universities.map((uni, idx) => {
            // Compute circular relative offset (-2, -1, 0, 1, 2)
            let offset = idx - activeIndex;
            if (offset < -total / 2) offset += total;
            if (offset > total / 2) offset -= total;

            // Visible arc limit
            const isVisible = Math.abs(offset) <= 2;
            const isCenter = offset === 0;
            const isPopped = poppedIndex === idx;

            // CONCAVE CYLINDRICAL BACK-CURVE (Exact match to art-gallery reference):
            // - Center card is recessed into the back: -80px
            // - Left & right panels curve forward toward the viewer: +35px
            // - Angled inward toward center: rotateY tilts left panels right, right panels left
            // - Backward pitch: rotateX(-3deg) tilts the top slightly back like wall panels
            const angleY = offset * -21; // Inward angle towards center
            const pitchX = -2.5; // Subtle backward tilt
            const xTranslate = offset * 285; // Spreads across full width left to right
            const baseZ = (Math.abs(offset) * Math.abs(offset) * 28) - 80;
            const zTranslate = baseZ + (isPopped ? 140 : 0);
            const scale = isPopped ? 1.06 : 1 + Math.abs(offset) * 0.015;
            const opacity = !isVisible ? 0 : 1 - Math.abs(offset) * 0.1;
            const zIndex = isPopped ? 70 : 20 + Math.abs(offset) * 5;

            return (
              <div
                key={uni.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => handleCardHover(idx)}
                onMouseLeave={handleCardLeave}
                className={`absolute top-0 w-[270px] sm:w-[320px] md:w-[355px] lg:w-[385px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[370px] rounded-2xl lg:rounded-[22px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isPopped
                    ? "ring-4 ring-blue-500/40 shadow-2xl shadow-blue-900/30"
                    : isCenter
                    ? "shadow-xl shadow-slate-900/15"
                    : "shadow-md shadow-slate-900/10 hover:opacity-100"
                }`}
                style={{
                  transform: `translateX(${xTranslate}px) translateZ(${zTranslate}px) rotateY(${angleY}deg) rotateX(${pitchX}deg) scale(${scale})`,
                  transformStyle: "preserve-3d",
                  zIndex: zIndex,
                  opacity: opacity,
                  visibility: isVisible ? "visible" : "hidden",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* High-Resolution Architectural Campus Image */}
                <div className="absolute inset-0 w-full h-full bg-slate-200">
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isPopped ? "scale-108" : "scale-100"
                    }`}
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 350px, 400px"
                    priority={isCenter}
                  />

                  {/* Clean Dark Vignette for Readability (No Clutter) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/15" />
                </div>

                {/* Top Bar: Minimal Logo Badge & Est. Pill */}
                <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/95 backdrop-blur-md p-1 shadow-md flex items-center justify-center shrink-0 border border-white/50">
                    <div className="relative w-full h-full">
                      <Image
                        src={uni.logo}
                        alt={uni.short}
                        fill
                        className={`object-contain ${uni.isRoundLogo ? "rounded-full" : ""}`}
                      />
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">
                    {uni.est}
                  </span>
                </div>

                {/* Bottom Bar: Clean University Name & Single Subline (No unnecessary text) */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 text-white flex flex-col justify-end">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white leading-snug drop-shadow-sm">
                    {uni.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium mt-1 tracking-tight drop-shadow-xs">
                    {uni.subline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous University"
          className="absolute left-2 sm:left-6 lg:left-8 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next University"
          className="absolute right-2 sm:right-6 lg:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white border border-slate-200/80 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* CAROUSEL PAGINATION PILLS                                                 */}
      {/* ========================================================================= */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
        {universities.map((uni, idx) => (
          <button
            key={uni.id}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to ${uni.name}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === idx
                ? "w-7 h-2 bg-slate-900"
                : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
