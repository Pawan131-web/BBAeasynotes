"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const STUDY_RESOURCES_DATA = [
  {
    id: "syllabus",
    title: "Syllabus",
    tag: "CURRICULUM & SCHEMES",
    headline: "120+ Curated Files",
    subhead: "Official University Course Outlines",
    quote:
      "Complete semester-wise course outlines, credit hour distributions, marking schemes, and subject objectives verified for 2026 across TU, PU, KU, and PoU.",
    badges: ["All 8 Semesters", "Official Course Outlines", "Marking Schemes"],
    image: "/real-syllabus.jpg",
    imageBadgeTitle: "Syllabus Archive",
    imageBadgeSubtitle: "4 Universities Covered",
    href: "/syllabus",
    cta: "Explore Syllabus",
  },
  {
    id: "notes",
    title: "Chapter Notes",
    tag: "EXAM PREPARATION",
    headline: "450+ Exam Notes",
    subhead: "Handcrafted Summaries & Numericals",
    quote:
      "Unit-by-unit concept breakdowns, formula sheets, and numerical step-by-step solutions compiled by top-ranking BBA scholars and verified by faculty.",
    badges: ["Topper Verified", "Step-by-Step Numericals", "High-Yield Topics"],
    image: "/real-notes.jpg",
    imageBadgeTitle: "Chapter Summaries",
    imageBadgeSubtitle: "Exam Ready Notes",
    href: "/notes",
    cta: "Read Chapter Notes",
  },
  {
    id: "questions",
    title: "Past Questions",
    tag: "QUESTION BANK",
    headline: "300+ Board Papers",
    subhead: "10-Year Question Archive",
    quote:
      "Authentic board question papers organized by semester and subject, highlighting frequently repeated questions and high-weightage topics.",
    badges: ["10-Year Papers", "Repeated Questions", "TU & PU Solved"],
    image: "/real-questions.jpg",
    imageBadgeTitle: "Question Archive",
    imageBadgeSubtitle: "10 Years of Board Exams",
    href: "/past-questions",
    cta: "Solve Past Papers",
  },
  {
    id: "papers",
    title: "Model Papers",
    tag: "MOCK TESTING",
    headline: "85+ Practice Sets",
    subhead: "Mock Exams & Predictions",
    quote:
      "Full-length mock exam papers modeled on recent board question patterns with strict time allocations and marking schemes for self-assessment.",
    badges: ["Exam Pattern 2026", "Time Allocation Guide", "Predicted Sets"],
    image: "/real-papers.jpg",
    imageBadgeTitle: "Model Sets",
    imageBadgeSubtitle: "Timed Mock Tests",
    href: "/model-papers",
    cta: "Practice Model Papers",
  },
  {
    id: "results",
    title: "Exam Results",
    tag: "RESULTS HUB",
    headline: "Live Board Results",
    subhead: "Direct Result Portals & Marksheets",
    quote:
      "Real-time board examination results, grade sheet lookups, re-totaling procedures, and semester result notifications in one central hub.",
    badges: ["TU Result Ledger", "PU Online Grades", "Instant Notifications"],
    image: "/real-results.jpg",
    imageBadgeTitle: "Results Hub",
    imageBadgeSubtitle: "Instant University Portals",
    href: "/results",
    cta: "Check Exam Results",
  },
];

// Helper: Card internal content with 55% text & 45% image layout
function ResourceCardContent({ item }) {
  return (
    <div className="relative w-full h-full flex flex-row items-stretch bg-white select-none">
      {/* 55% Text Column */}
      <div className="w-[55%] h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 min-w-0">
        <div>
          {/* Category Tag */}
          <span className="inline-block text-[10.5px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/80">
            {item.tag}
          </span>

          {/* Stat Headline with Cursive Pencil Font (No truncation) */}
          <h3 className="font-pencil text-2xl sm:text-[28px] lg:text-[32px] font-bold text-slate-900 tracking-tight leading-snug mt-1.5">
            {item.headline}
          </h3>

          {/* Sub-headline with Cursive Pencil Font (No truncation) */}
          <p className="font-pencil text-[14px] sm:text-[16px] font-semibold text-slate-500 mt-0.5">
            {item.subhead}
          </p>

          {/* Quote / Narrative with Cursive Pencil Font */}
          <p className="font-pencil text-[16px] sm:text-[18px] text-slate-700 mt-2 leading-snug line-clamp-3">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>

        {/* Badges & Navigation CTA */}
        <div className="mt-2 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap gap-1 mb-2.5">
            {item.badges.slice(0, 2).map((b) => (
              <span
                key={b}
                className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/70 px-1.5 py-0.5 rounded"
              >
                ✓ {b}
              </span>
            ))}
          </div>

          <Link
            href={item.href}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            <span>{item.cta}</span>
            <span className="text-xs">→</span>
          </Link>
        </div>
      </div>

      {/* 45% Image Column */}
      <div className="relative w-[45%] h-full rounded-xl sm:rounded-2xl m-2 sm:m-2.5 overflow-hidden bg-slate-100 shadow-inner">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 320px"
          priority
        />

        {/* Gradient Vignette Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

        {/* Floating Glass Badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/75 backdrop-blur-md rounded-lg p-2 text-white border border-white/20 shadow-md">
          <p className="text-[11px] font-bold text-white tracking-tight flex items-center justify-between">
            <span className="truncate">{item.imageBadgeTitle}</span>
            <span className="text-[9px] bg-white/20 text-white font-semibold px-1 py-0.2 rounded">
              2026
            </span>
          </p>
          <p className="text-[9.5px] text-white/80 mt-0.5 truncate font-medium">
            ✓ {item.imageBadgeSubtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper: Flanking Connected Capsule Card
function CapsuleCard({ item, onClick, isInner }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`relative group cursor-pointer shrink-0 transition-transform duration-300 hover:scale-105 focus:outline-none ${
        isInner
          ? "w-[50px] sm:w-[65px] lg:w-[78px] h-[250px] sm:h-[290px] lg:h-[330px] rounded-[22px] sm:rounded-[28px]"
          : "hidden sm:block w-[40px] lg:w-[54px] h-[200px] lg:h-[245px] rounded-[18px] sm:rounded-[24px]"
      } overflow-hidden shadow-md hover:shadow-xl border border-white/95 bg-white`}
      aria-label={`Switch to ${item.title}`}
    >
      {/* Connector Nodes */}
      <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-xs border border-slate-200/80 z-20 pointer-events-none" />
      <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-xs border border-slate-200/80 z-20 pointer-events-none" />

      {/* Capsule Image */}
      <div className="relative w-full h-full overflow-hidden pointer-events-none">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          sizes="100px"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Hover Tooltip */}
      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10.5px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap pointer-events-none shadow-md z-30">
        {item.title}
      </span>
    </div>
  );
}

export default function StudyResourcesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Chapter Notes (index 1)
  const [prevIndex, setPrevIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next"); // "next" | "prev"
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const isTransitioningRef = useRef(false);
  const transitionTimeoutRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Smooth slide navigation
  const goToSlide = useCallback((targetIndex, direction = "next") => {
    if (isTransitioningRef.current || targetIndex === activeIndexRef.current) return;

    isTransitioningRef.current = true;
    setIsTransitioning(true);
    setPrevIndex(activeIndexRef.current);
    setActiveIndex(targetIndex);
    setSlideDirection(direction);

    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 500);
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndexRef.current + 1) % STUDY_RESOURCES_DATA.length;
    goToSlide(nextIdx, "next");
  }, [goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndexRef.current - 1 + STUDY_RESOURCES_DATA.length) % STUDY_RESOURCES_DATA.length;
    goToSlide(prevIdx, "prev");
  }, [goToSlide]);

  // Restart 5-second countdown on manual interaction
  const restartAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
  }, [isHovered, handleNext]);

  const onManualNext = () => {
    handleNext();
    restartAutoPlay();
  };

  const onManualPrev = () => {
    handlePrev();
    restartAutoPlay();
  };

  const onManualSelect = (targetIndex, direction) => {
    goToSlide(targetIndex, direction);
    restartAutoPlay();
  };

  // Clean transition timer on unmount only
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  // Auto-play slideshow every 5 seconds unless hovered
  useEffect(() => {
    if (isHovered) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, handleNext]);

  // Derive flanking capsule items relative to activeIndex
  const total = STUDY_RESOURCES_DATA.length;
  const outerLeftIndex = (activeIndex - 2 + total) % total;
  const innerLeftIndex = (activeIndex - 1 + total) % total;
  const innerRightIndex = (activeIndex + 1) % total;
  const outerRightIndex = (activeIndex + 2) % total;

  return (
    <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 border-b border-border overflow-hidden bg-gradient-to-b from-[#f4f8fe] via-[#faf6ff] to-white">
      {/* Subtle Ambient Mesh Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[650px] h-[360px] bg-gradient-to-br from-blue-300/25 to-indigo-200/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 translate-x-1/2 w-[580px] h-[340px] bg-gradient-to-bl from-purple-300/25 to-pink-200/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Clean Centered Title with Generous Bottom Spacing) */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-syllabus mb-1.5">
            Study Resources
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Real materials. Real results.
          </h2>
        </div>

        {/* Connected Accordion / Carousel Row */}
        <div 
          className="relative w-full pt-1 pb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Horizontal Track Area with Continuous Connector Wire */}
          <div className="relative w-full flex items-center justify-center gap-2 sm:gap-3 lg:gap-4.5 py-4">
            
            {/* Continuous Horizontal Connector Wire */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/80 shadow-xs pointer-events-none z-0" />

            {/* 1. Outer Left Capsule */}
            <CapsuleCard
              item={STUDY_RESOURCES_DATA[outerLeftIndex]}
              onClick={() => onManualSelect(outerLeftIndex, "prev")}
              isInner={false}
            />

            {/* 2. Inner Left Capsule */}
            <CapsuleCard
              item={STUDY_RESOURCES_DATA[innerLeftIndex]}
              onClick={onManualPrev}
              isInner={true}
            />

            {/* 3. Center Active Slide Card */}
            <div className="relative z-10 w-[310px] sm:w-[440px] md:w-[520px] lg:w-[580px] xl:w-[630px] 2xl:w-[670px] h-[390px] sm:h-[420px] md:h-[442px] lg:h-[458px] rounded-[24px] sm:rounded-[30px] bg-white border border-white/95 shadow-[0_18px_45px_rgba(20,30,70,0.12)] overflow-hidden shrink-0">
              {/* Left Connector Node */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-xs border border-slate-200/80 z-30 pointer-events-none" />

              {/* Right Connector Node */}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-xs border border-slate-200/80 z-30 pointer-events-none" />

              {/* Dual-layer Sliding Viewport for Smooth Slide In / Slide Out */}
              <div className="relative w-full h-full overflow-hidden">
                {/* Outgoing Card Layer */}
                {prevIndex !== null && (
                  <div
                    key={`outgoing-${prevIndex}`}
                    className={`absolute inset-0 w-full h-full z-10 ${
                      slideDirection === "next"
                        ? "animate-card-slide-out-left"
                        : "animate-card-slide-out-right"
                    }`}
                  >
                    <ResourceCardContent item={STUDY_RESOURCES_DATA[prevIndex]} />
                  </div>
                )}

                {/* Incoming / Active Card Layer */}
                <div
                  key={`incoming-${activeIndex}`}
                  className={`absolute inset-0 w-full h-full ${
                    prevIndex !== null
                      ? slideDirection === "next"
                        ? "animate-card-slide-in-right z-20"
                        : "animate-card-slide-in-left z-20"
                      : "z-10"
                  }`}
                >
                  <ResourceCardContent item={STUDY_RESOURCES_DATA[activeIndex]} />
                </div>
              </div>
            </div>

            {/* 4. Inner Right Capsule */}
            <CapsuleCard
              item={STUDY_RESOURCES_DATA[innerRightIndex]}
              onClick={onManualNext}
              isInner={true}
            />

            {/* 5. Outer Right Capsule */}
            <CapsuleCard
              item={STUDY_RESOURCES_DATA[outerRightIndex]}
              onClick={() => onManualSelect(outerRightIndex, "next")}
              isInner={false}
            />

          </div>

          {/* Carousel Bottom Navigation Dots & Prev/Next Chevrons (Centered in Card Section) */}
          <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
            {/* Prev Button */}
            <button
              type="button"
              onClick={onManualPrev}
              disabled={isTransitioning}
              className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 shadow-xs hover:shadow-sm border border-slate-200/70 flex items-center justify-center transition-all hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous resource"
            >
              <span className="text-xs font-bold">←</span>
            </button>

            {/* 5 Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {STUDY_RESOURCES_DATA.map((res, idx) => (
                <button
                  key={res.id}
                  type="button"
                  onClick={() => {
                    if (idx === activeIndex || isTransitioning) return;
                    onManualSelect(idx, idx > activeIndex ? "next" : "prev");
                  }}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-7 h-1.5 rounded-full bg-slate-900"
                      : "w-1.5 h-1.5 rounded-full bg-slate-300/80 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to ${res.title}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={onManualNext}
              disabled={isTransitioning}
              className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-slate-900 shadow-xs hover:shadow-sm border border-slate-200/70 flex items-center justify-center transition-all hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next resource"
            >
              <span className="text-xs font-bold">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
