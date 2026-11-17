"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: "welcome",
    eyebrow: "Learn. Prepare. Excel.",
    titleLine1: "Your BBA",
    titleLine2: "Journey",
    titleHighlight: "Starts Here",
    description:
      "Access all-in-one syllabus guides, chapter notes, and exam solutions crafted specifically for BBA students in Nepal.",
    action: {
      label: "Explore Resources",
      href: "/notes",
    },
    featureBadge: {
      icon: "briefcase",
      line1: "Build a",
      line2: "Successful Career",
    },
    image: "/slide-welcome.jpg",
    imageAlt: "Students studying together in university library",
  },
  {
    id: "materials",
    eyebrow: "Learn Smart. Score Higher.",
    titleLine1: "Semester 5",
    titleLine2: "Past Papers",
    titleHighlight: "& Notes",
    description:
      "Freshly added past examination questions, model answers, and concise revision summaries for upcoming board exams.",
    action: {
      label: "Explore Materials",
      href: "/past-questions?sem=5",
    },
    featureBadge: {
      icon: "document",
      line1: "Topper Verified",
      line2: "Exam Solutions",
    },
    image: "/slide-materials.jpg",
    imageAlt: "Student writing exam revision notes with notebook and pen",
  },
  {
    id: "sponsored",
    eyebrow: "Admissions. Scholarships. Future.",
    titleLine1: "Accelerate Your",
    titleLine2: "MBA & Career",
    titleHighlight: "Pathways",
    description:
      "Connect with certified education counselors for international MBA admissions, internship placements, and scholarship opportunities.",
    action: {
      label: "Learn More",
      href: "/contact?ref=sponsored",
    },
    featureBadge: {
      icon: "academic",
      line1: "Connect With",
      line2: "Global Counselors",
    },
    image: "/slide-sponsored.jpg",
    imageAlt: "Professional education counseling and student discussion",
  },
  {
    id: "announcements",
    eyebrow: "TU · PU · KU Updates.",
    titleLine1: "University Exam",
    titleLine2: "Routines",
    titleHighlight: "Released",
    description:
      "Check the latest semester exam schedules, center notifications, and guidelines issued for TU, PU, and KU students.",
    action: {
      label: "View Routine",
      href: "/notices",
    },
    featureBadge: {
      icon: "bell",
      line1: "Latest Campus",
      line2: "Notice Archive",
    },
    image: "/slide-announcement.jpg",
    imageAlt: "University library book shelves with academic materials",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-advance every 6 seconds, paused on hover
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  // Helper to render feature badge icons
  const renderBadgeIcon = (iconType) => {
    switch (iconType) {
      case "briefcase":
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case "document":
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        );
      case "academic":
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        );
      case "bell":
      default:
        return (
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        );
    }
  };

  const currentSlide = SLIDES[current];

  return (
    <div
      className="relative w-full h-full min-h-[500px] sm:min-h-[540px] lg:min-h-full flex flex-col justify-end select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero Highlights Slideshow"
    >
      {/* Hidden SVG Definition for Smooth Responsive Curvature Clip-Path */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-curved-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.12,0 C 0.07,0.14 0.015,0.30 0.015,0.48 C 0.015,0.66 0.07,0.86 0.22,1.0 L 1,1 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* CLIPPED INNER CONTAINER (Desktop uses responsive SVG curvature, mobile uses smooth rounded container) */}
      <div className="relative w-full h-full lg:[clip-path:url(#hero-curved-clip)] overflow-hidden flex flex-col justify-between">
        
        {/* Background Slides with Multi-Stop Navy Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                {/* Full-bleed background photograph */}
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                {/* Dark Navy Multi-Stop Gradient Vignette for Maximum Contrast & Cohesion */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1838] via-[#0E1E45]/80 to-[#0A1838]/40" />
                <div className="absolute inset-0 bg-[#0E1E45]/30 mix-blend-multiply" />
              </div>
            );
          })}
        </div>

        {/* Slide Content Layer matching reference layout and typography */}
        <div className="relative z-20 w-full h-full p-6 sm:p-8 lg:pt-14 lg:pb-10 lg:pl-20 xl:pl-26 lg:pr-8 xl:pr-14 flex flex-col justify-between">
          
          {/* Top/Middle: Eyebrow + Multi-line Heading + Action */}
          <div className="space-y-3 sm:space-y-4 max-w-lg pt-2 lg:pt-4">
            
            {/* Eyebrow with yellow vertical bar */}
            <div className="flex items-center gap-2.5 text-white/95 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-1.5 h-4 sm:h-5 bg-yellow rounded-full inline-block shrink-0 shadow-xs" />
              <span>{currentSlide.eyebrow}</span>
            </div>

            {/* Editorial Heading matching reference (Your BBA / Journey / Starts Here) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black tracking-tight text-white leading-[1.08] select-none">
              <span className="block">{currentSlide.titleLine1}</span>
              <span className="block font-serif italic font-bold text-white/95">{currentSlide.titleLine2}</span>
              <span className="block text-yellow font-black tracking-tight mt-0.5">{currentSlide.titleHighlight}</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md line-clamp-2 pt-1 font-medium">
              {currentSlide.description}
            </p>

            {/* Explore Resources Pill Button (White Outline style as in reference image) */}
            <div className="pt-2 sm:pt-3">
              <Link
                href={currentSlide.action.href}
                className="inline-flex items-center justify-center border-2 border-white/85 hover:border-white hover:bg-white/10 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all shadow-md backdrop-blur-xs cursor-pointer group"
              >
                <span>{currentSlide.action.label}</span>
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Feature Badge (Briefcase + Build a Successful Career) + Arrows & Dots */}
          <div className="pt-6 flex items-end justify-between gap-4">
            
            {/* Feature Badge matching reference */}
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 text-white shadow-xs">
                {renderBadgeIcon(currentSlide.featureBadge.icon)}
              </div>
              <div className="text-xs sm:text-sm leading-tight">
                <p className="text-white/75 font-medium">{currentSlide.featureBadge.line1}</p>
                <p className="font-extrabold text-white text-[13px] sm:text-sm tracking-tight">
                  {currentSlide.featureBadge.line2}
                </p>
              </div>
            </div>

            {/* Slideshow Controls: Navigation Arrows & Pagination Dots */}
            <div className="flex flex-col items-end gap-2.5 shrink-0">
              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-xs cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20 backdrop-blur-xs cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {SLIDES.map((slide, idx) => {
                  const isActive = idx === current;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive ? "w-6 sm:w-7 bg-yellow" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAY: Illuminated Electric-Blue Curvature Border (Desktop Only, No Bottom Line) */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-30 overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <filter id="hero-blue-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Outer Blue Glow */}
        <path
          d="M 12 0 C 7 14, 1.5 30, 1.5 48 C 1.5 66, 7 86, 22 100"
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="2.8"
          opacity="0.6"
          strokeLinecap="round"
        />

        {/* Main Illuminated Electric-Blue Border */}
        <path
          d="M 12 0 C 7 14, 1.5 30, 1.5 48 C 1.5 66, 7 86, 22 100"
          fill="none"
          stroke="url(#hero-blue-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#hero-blue-glow)"
        />

        {/* Bright Core Cyan Highlight Line */}
        <path
          d="M 12 0 C 7 14, 1.5 30, 1.5 48 C 1.5 66, 7 86, 22 100"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="0.45"
          opacity="0.95"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
