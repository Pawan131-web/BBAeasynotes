"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { POPULAR_SUBJECTS } from "@/data/homeData";

const UNIVERSITIES = [
  { id: "", label: "All Universities", short: "All Universities", badge: "ALL" },
  { id: "tu", label: "Tribhuvan University (TU)", short: "TU (Tribhuvan)", badge: "TU" },
  { id: "pu", label: "Pokhara University (PU)", short: "PU (Pokhara)", badge: "PU" },
  { id: "ku", label: "Kathmandu University (KU)", short: "KU (Kathmandu)", badge: "KU" },
  { id: "pu-east", label: "Purbanchal University", short: "Purbanchal", badge: "PuU" },
];

const SEMESTERS = [
  { id: "", label: "All Semesters" },
  { id: "1", label: "Semester 1" },
  { id: "2", label: "Semester 2" },
  { id: "3", label: "Semester 3" },
  { id: "4", label: "Semester 4" },
  { id: "5", label: "Semester 5" },
  { id: "6", label: "Semester 6" },
  { id: "7", label: "Semester 7" },
  { id: "8", label: "Semester 8" },
];

const POPULAR_SUBJECT_CHOICES = [
  "Financial Accounting",
  "Principles of Management",
  "Business Statistics",
  "Microeconomics",
  "Macroeconomics",
  "Marketing Management",
  "Business Finance",
  "Business Communication",
  "Human Resource Management",
  "Cost & Management Accounting",
];

const HERO_CARDS = [
  {
    id: "notes",
    title: "450+ Chapter Notes",
    description: "Unit-by-unit concept breakdowns, formula sheets & numerical guides crafted for high GPA.",
    image: "/slide-welcome.jpg",
  },
  {
    id: "questions",
    title: "Past Papers & Solutions",
    description: "Comprehensive 10-year collection of university board exam questions with verified step-by-step solutions.",
    image: "/slide-materials.jpg",
  },
  {
    id: "syllabus",
    title: "Syllabus & Exam Routines",
    description: "Accredited course outlines, credit hour weightings, and real-time university board exam schedules.",
    image: "/slide-announcement.jpg",
  },
  {
    id: "colleges",
    title: "Top Business Colleges",
    description: "Explore verified TU, PU, KU, and Purbanchal affiliated business schools, fee structures and placement stats.",
    image: "/bba-careers.jpg",
  },
  {
    id: "results",
    title: "Board Results & Ledger",
    description: "Direct university board gateways and roll number verification for semester results across Nepal.",
    image: "/results-bg.jpg",
  },
];

// 3-set circular buffer for seamless, infinite looping without rewinding
const EXTENDED_CARDS = [...HERO_CARDS, ...HERO_CARDS, ...HERO_CARDS];

export default function HeroSection() {
  const router = useRouter();
  const [university, setUniversity] = useState("");
  const [semester, setSemester] = useState("");
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // 'uni' | 'sem' | 'subject' | null
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  // Continuous circular loop carousel state (starts at middle set index = HERO_CARDS.length)
  const [currentIndex, setCurrentIndex] = useState(HERO_CARDS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  // Responsive cards per view tracking
  useEffect(() => {
    function updateCardsPerView() {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setCardsPerView(1);
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(3);
        }
      }
    }
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Seamless circular auto-advance every 4.5s (pauses on hover or active search)
  useEffect(() => {
    if (isSearchActive || isCarouselHovered) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSearchActive, isCarouselHovered]);

  // When instant teleport happens without transition, re-enable transition for subsequent slides
  useEffect(() => {
    if (!isTransitioning) {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }
  }, [isTransitioning]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const jumpToSlide = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(HERO_CARDS.length + idx);
  };

  // Instant seamless teleport on transition end when crossing boundary
  const handleTransitionEnd = () => {
    if (currentIndex >= HERO_CARDS.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - HERO_CARDS.length);
    } else if (currentIndex < HERO_CARDS.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + HERO_CARDS.length);
    }
  };

  const activeDot = ((currentIndex % HERO_CARDS.length) + HERO_CARDS.length) % HERO_CARDS.length;

  // 5-second inactivity timer helper: restores cards if screen is left untouched
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setIsSearchActive(false);
    }, 5000);
  };

  const handleOpenDropdown = (type) => {
    if (openDropdown === type) {
      setOpenDropdown(null);
      resetTimer();
    } else {
      setOpenDropdown(type);
      setIsSearchActive(true);
      resetTimer();
    }
  };

  const selectUniversity = (id) => {
    setUniversity(id);
    setOpenDropdown(null);
    setIsSearchActive(true);
    resetTimer();
  };

  const selectSemester = (id) => {
    setSemester(id);
    setOpenDropdown(null);
    setIsSearchActive(true);
    resetTimer();
  };

  const selectSubject = (subj) => {
    setQuery(subj);
    setOpenDropdown(null);
    setIsSearchActive(true);
    resetTimer();
  };

  // Close open dropdown and restore cards when clicking outside the search capsule
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (timerRef.current) clearTimeout(timerRef.current);
        setOpenDropdown(null);
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault?.();
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(null);
    setIsSearchActive(false);
    const params = new URLSearchParams();
    if (university) params.set("uni", university);
    if (semester) {
      params.set("sem", semester.startsWith("Semester") ? semester : `Semester ${semester}`);
    }
    if (query && query.trim()) {
      params.set("q", query.trim());
    }
    const qs = params.toString();
    router.push(qs ? `/notes?${qs}` : `/notes`);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white -mt-[58px] sm:-mt-[66px] pt-[92px] sm:pt-[110px] lg:pt-[124px] pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 select-none">
      
      {/* Background Image: business.jpg extending all the way behind transparent header */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/business.jpg"
          alt="Business background"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Cinematic Winzy-style moody vignette & smoked overlay */}
        <div className="absolute inset-0 bg-slate-950/45 sm:bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-transparent to-slate-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(2,6,23,0.7)_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ==================== 1. UPPER SECTION (Full Width Centered Header & Search) ==================== */}
        <div className="w-full text-center max-w-4xl mx-auto flex flex-col items-center">

          {/* Main Centered Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            Everything You Need to Ace BBA, in One Place
          </h1>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Syllabus outlines, chapter notes, 10-year past questions, and practice model exams verified for TU, PU, KU, and Purbanchal University.
          </p>

          {/* Full-Width Search Console (Winzy-inspired Liquid Glass Capsule) */}
          <div
            ref={containerRef}
            onMouseMove={() => {
              if (isSearchActive) resetTimer();
            }}
            className="relative z-40 w-full max-w-4xl mx-auto mt-8 sm:mt-10"
          >
            <div className="backdrop-blur-2xl bg-white/[0.12] sm:bg-white/[0.16] hover:bg-white/[0.20] p-1.5 sm:p-2 rounded-full border border-white/30 hover:border-white/45 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),0_15px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-1 sm:gap-4 lg:gap-6 transition-all duration-300">
              
              {/* Item 1: Search university ⌵ */}
              <div className="relative flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => handleOpenDropdown("uni")}
                  className={`w-full flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-white/90 hover:text-white font-medium text-xs sm:text-sm lg:text-[15px] transition-all rounded-full cursor-pointer group ${
                    openDropdown === "uni" ? "bg-white/15 text-white shadow-inner" : "hover:bg-white/10"
                  }`}
                >
                  <span className="truncate">
                    {university
                      ? UNIVERSITIES.find((u) => u.id === university)?.short || "University"
                      : "Search university"}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/70 group-hover:text-white transition-transform duration-200 shrink-0 ${
                      openDropdown === "uni" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* University Dropdown Popover */}
                {openDropdown === "uni" && (
                  <div className="absolute top-full left-0 mt-3 z-50 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] p-2 text-left animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 border-b border-white/10 mb-1">
                      Select University
                    </div>
                    <div className="space-y-1">
                      {UNIVERSITIES.map((u) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => selectUniversity(u.id)}
                          className={`w-full px-3 py-2 rounded-xl text-xs sm:text-sm text-left flex items-center justify-between transition-colors ${
                            university === u.id
                              ? "bg-white/20 text-white font-bold"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-8 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-[10.5px] font-extrabold text-white shrink-0 tracking-wide">
                              {u.badge}
                            </span>
                            <span className="truncate">{u.label}</span>
                          </div>
                          {university === u.id && <span className="text-white text-xs font-bold shrink-0">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 2: Select semester ⌵ */}
              <div className="relative flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => handleOpenDropdown("sem")}
                  className={`w-full flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-white/90 hover:text-white font-medium text-xs sm:text-sm lg:text-[15px] transition-all rounded-full cursor-pointer group ${
                    openDropdown === "sem" ? "bg-white/15 text-white shadow-inner" : "hover:bg-white/10"
                  }`}
                >
                  <span className="truncate">
                    {semester ? `Semester ${semester}` : "Select semester"}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/70 group-hover:text-white transition-transform duration-200 shrink-0 ${
                      openDropdown === "sem" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Semester Dropdown Popover */}
                {openDropdown === "sem" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50 w-72 sm:w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] p-3 text-left animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-white/50 border-b border-white/10 mb-2">
                      Select Semester
                    </div>
                    <button
                      type="button"
                      onClick={() => selectSemester("")}
                      className={`w-full mb-2.5 py-2 px-3 rounded-xl text-xs font-medium text-left flex items-center justify-between transition-colors ${
                        !semester
                          ? "bg-white/20 text-white font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>All Semesters (1 to 8)</span>
                      {!semester && <span className="text-white text-xs font-bold">✓</span>}
                    </button>
                    <div className="grid grid-cols-4 gap-1.5">
                      {SEMESTERS.slice(1).map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => selectSemester(s.id)}
                          className={`py-2 rounded-xl text-xs text-center font-bold transition-all ${
                            semester === s.id
                              ? "bg-white text-slate-950 shadow-md scale-105"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          Sem {s.id}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Item 3: Search subject ⌵ */}
              <div className="relative flex-1 min-w-0">
                <button
                  type="button"
                  onClick={() => handleOpenDropdown("subject")}
                  className={`w-full flex items-center justify-between gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-white/90 hover:text-white font-medium text-xs sm:text-sm lg:text-[15px] transition-all rounded-full cursor-pointer group ${
                    openDropdown === "subject" ? "bg-white/15 text-white shadow-inner" : "hover:bg-white/10"
                  }`}
                >
                  <span className="truncate">
                    {query ? query : "Search subject"}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/70 group-hover:text-white transition-transform duration-200 shrink-0 ${
                      openDropdown === "subject" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Subject Dropdown Popover */}
                {openDropdown === "subject" && (
                  <div className="absolute top-full right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mt-3 z-50 w-72 sm:w-88 bg-slate-900/95 backdrop-blur-2xl border border-white/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] p-3 text-left animate-in fade-in zoom-in-95 duration-150">
                    {/* Search Input inside Dropdown */}
                    <div className="relative mb-2.5">
                      <svg
                        className="w-4 h-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search subject or chapter..."
                        value={query}
                        onChange={(e) => {
                          setQuery(e.target.value);
                          resetTimer();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            setOpenDropdown(null);
                            handleSearch();
                          }
                        }}
                        className="w-full bg-white/10 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 border border-white/15"
                        autoFocus
                      />
                      {query && (
                        <button
                          type="button"
                          onClick={() => {
                            setQuery("");
                            resetTimer();
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-xs px-1"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="px-1 py-1 text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center justify-between border-b border-white/10 mb-1.5">
                      <span>Popular Subjects</span>
                      <span className="text-[10px] text-white/40 lowercase">click to choose</span>
                    </div>

                    <div className="max-h-52 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                      {POPULAR_SUBJECT_CHOICES.map((subj) => (
                        <button
                          key={subj}
                          type="button"
                          onClick={() => selectSubject(subj)}
                          className={`w-full px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition-colors flex items-center justify-between ${
                            query === subj
                              ? "bg-white/20 text-white font-bold"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="truncate">{subj}</span>
                          {query === subj && <span className="text-white text-xs font-bold shrink-0 ml-2">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button: Explore */}
              <button
                type="button"
                onClick={handleSearch}
                className="bg-white hover:bg-white/95 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm lg:text-[15px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
              >
                <span>Explore</span>
              </button>
            </div>
          </div>

          {/* Popular Search Topics (Minimalist Liquid Glass Pills - fades out smoothly when search is active) */}
          <div
            className={`flex flex-wrap items-center justify-center gap-2 mt-5 max-w-3xl relative z-10 transition-all duration-500 ease-in-out ${
              isSearchActive
                ? "opacity-0 -translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span className="text-xs sm:text-sm font-medium text-white/70 mr-1 flex items-center gap-1.5">
              <span>🔥</span> Popular:
            </span>
            {POPULAR_SUBJECTS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.16] border border-white/20 hover:border-white/40 text-white/85 hover:text-white text-xs font-medium backdrop-blur-xl transition-all shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ==================== 2. LOWER SECTION (5 Featured Liquid Glass Showcase Carousel) ==================== */}
        {/* Slideshow with 5 cards, auto-advance, left/right arrows, dot indicators, and on-hover description reveal */}
        <div
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
          className={`relative w-full max-w-6xl mx-auto mt-12 sm:mt-14 lg:mt-16 transition-all duration-500 ease-in-out ${
            isSearchActive
              ? "opacity-0 translate-y-6 pointer-events-none invisible"
              : "opacity-100 translate-y-0 visible"
          }`}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrevSlide}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-slate-900 active:scale-95 backdrop-blur-2xl border border-white/30 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNextSlide}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-slate-900 active:scale-95 backdrop-blur-2xl border border-white/30 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 -mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden w-full rounded-3xl p-1">
            <div
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: isTransitioning ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {EXTENDED_CARDS.map((card, idx) => (
                <div
                  key={`${card.id}-${idx}`}
                  style={{ width: `${100 / cardsPerView}%` }}
                  className="shrink-0 p-2 sm:p-2.5"
                >
                  <div className="relative h-[310px] sm:h-[340px] lg:h-[370px] rounded-3xl overflow-hidden border border-white/20 hover:border-white/50 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:scale-[1.02] backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.12]">
                    {/* Full Background Photograph with Zoom Effect */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Multi-stop Vignette Gradient for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/20" />

                    {/* Bottom Title & Little Description (Clean text directly on card, no inner box) */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                      <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-amber-300 transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        {card.title}
                      </h3>
                      {/* Little description - smoothly reveals on card hover */}
                      <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
                        <p className="text-xs sm:text-[13px] text-white/90 leading-relaxed mt-1.5 font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {HERO_CARDS.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => jumpToSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${card.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDot === idx
                    ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
