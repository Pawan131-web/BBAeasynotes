"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BEFORE_YOU_START_FAQS } from "@/data/homeData";

/**
 * 5 Floating Question Marks around the student:
 * - Arranged in a smooth CONVEX CURVE shape (half-circle arc) hugging the student.
 * - Apex at x = 118px, curving from (72, -105) through (118, 0) to (72, 105).
 * - Sits cleanly inside the card without clipping, framing the student character.
 */
const QUESTION_MARKS = [
  {
    id: 1,
    qNum: "Q1",
    label: "Free Access",
    x: 72,
    y: -105,
    tilt: -16,
    scale: 0.95,
  },
  {
    id: 2,
    qNum: "Q2",
    label: "Universities",
    x: 104,
    y: -55,
    tilt: -6,
    scale: 1.05,
  },
  {
    id: 3,
    qNum: "Q3",
    label: "2026 Syllabus",
    x: 118,
    y: 0,
    tilt: 0,
    scale: 1.2,
  },
  {
    id: 4,
    qNum: "Q4",
    label: "Offline PDF",
    x: 104,
    y: 55,
    tilt: 6,
    scale: 1.05,
  },
  {
    id: 5,
    qNum: "Q5",
    label: "Verified Content",
    x: 72,
    y: 105,
    tilt: 16,
    scale: 0.95,
  },
];

/**
 * 3 Curated Slides for the Drawing-Style Hero Showcase Section:
 * - Highlighting BBA Easy Notes' core pillars with polaroid-style image frames and handwritten accents.
 */
const HERO_SHOWCASE_SLIDES = [
  {
    id: 1,
    tag: "Nepal's Student-First Hub",
    badgeColor: "bg-amber-100/90 text-amber-900 border-amber-300",
    title: "Everything BBA Under One Roof",
    description: "Curated semester chapter summaries, TU board paper solutions, and syllabus routines without paywalls or subscriptions.",
    stats: [
      { label: "Universities", value: "4 Major Boards" },
      { label: "Study Files", value: "1,000+ Verified" },
      { label: "Access", value: "100% Free" },
    ],
    accentImage: "/tu-campus.jpg",
    accentLabel: "TU & Affiliated Colleges",
  },
  {
    id: 2,
    tag: "Exam Ready 2026",
    badgeColor: "bg-rose-100/90 text-rose-900 border-rose-300",
    title: "Past Papers & Numerical Solutions",
    description: "Solved board questions crafted by high-scoring seniors and college toppers across accounting, statistics, and finance.",
    stats: [
      { label: "Question Banks", value: "2018 – 2026" },
      { label: "Solutions", value: "Faculty Verified" },
      { label: "Downloads", value: "Instant PDF" },
    ],
    accentImage: "/images/creator/creator-notes.jpg",
    accentLabel: "Chapter Notes & Numericals",
  },
  {
    id: 3,
    tag: "Distraction-Free Learning",
    badgeColor: "bg-blue-100/90 text-blue-900 border-blue-300",
    title: "One-Click Offline Mobile PDFs",
    description: "Read smoothly in your browser or download complete chapter packs to your phone for zero-data revision anywhere.",
    stats: [
      { label: "Format", value: "Mobile Optimized" },
      { label: "Speed", value: "Instant Load" },
      { label: "Experience", value: "Zero Popups" },
    ],
    accentImage: "/pu-campus.jpg",
    accentLabel: "Pokhara University & Colleges",
  },
];

/**
 * Drawing-Style Hero Slideshow Section (Idle Canvas State):
 * - Illustrated sketchbook card positioned between Student and Mentor.
 * - 3 Auto-cycling slides with polaroid-style image frames, washi tape, and doodle accents.
 * - Fades out smoothly when user selects a question, and fades back in when user exits Q&A mode.
 */
function HeroShowcaseSection({ isVisible }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slideshow every 5.5s
  useEffect(() => {
    if (!isVisible || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SHOWCASE_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isVisible, isPaused]);

  const slide = HERO_SHOWCASE_SLIDES[currentSlide];

  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 md:pl-36 md:pr-36 lg:pl-44 lg:pr-44 xl:pl-48 xl:pr-48
        transition-all duration-400 ease-in-out
        ${isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full max-w-3xl bg-gradient-to-br from-amber-50/40 via-white to-blue-50/30 rounded-3xl border-2 border-slate-300/80 p-5 sm:p-6 md:p-7 shadow-xs overflow-hidden">
        
        {/* Doodle Washi Tape on Top Center */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-28 h-5 bg-amber-200/80 border border-amber-300/90 -rotate-1 shadow-2xs z-20 pointer-events-none" />

        {/* Decorative Doodle Stars in Corners */}
        <div className="absolute top-3 right-4 text-amber-400 font-bold text-lg select-none pointer-events-none">✦</div>
        <div className="absolute bottom-3 left-4 text-blue-400 font-bold text-sm select-none pointer-events-none">★</div>

        {/* 2-Column Responsive Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
          
          {/* Left Column: Headline, Description & Stat Badges (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            
            {/* Hand-Drawn Doodle Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[11px] font-comic-bubble font-bold tracking-wide shadow-2xs -rotate-1 ${slide.badgeColor}`}>
                <span>✦</span>
                <span>{slide.tag}</span>
              </span>
            </div>

            {/* Title with Doodle Accent */}
            <h2 className="font-comic-bubble font-bold text-slate-900 text-lg sm:text-2xl lg:text-[23px] leading-snug tracking-tight">
              {slide.title}
            </h2>

            {/* Pink Marker Highlighter Stroke under Title */}
            <div className="mt-1 mb-2">
              <svg viewBox="0 0 160 6" className="w-28 sm:w-36 h-1.5 text-rose-400 overflow-visible" fill="none">
                <path d="M 2 3 C 45 1, 95 5, 158 2" stroke="#FB7185" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3">
              {slide.description}
            </p>

            {/* 3 Hand-Drawn Stat Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {slide.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-[10.5px] sm:text-[11px] font-semibold shadow-2xs"
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="font-bold text-slate-900">{s.value}</span>
                  <span className="text-slate-400">· {s.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hand-Drawn Polaroid Showcase (5 cols) */}
          <div className="hidden md:flex md:col-span-5 items-center justify-center">
            <div className="relative bg-white p-2.5 pb-3.5 rounded-2xl border-2 border-slate-800 shadow-md rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-[200px]">
              
              {/* Pushpin Doodle */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-rose-500 border border-slate-900 shadow-2xs z-10" />

              {/* Image Frame */}
              <div className="relative w-full h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={slide.accentImage}
                  alt={slide.accentLabel}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>

              {/* Handwritten Caption */}
              <div className="mt-2 text-center">
                <p className="font-comic-bubble italic text-[10.5px] font-bold text-slate-700 leading-tight">
                  {slide.accentLabel}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Row: Navigation Dots & "Ask Questions" Doodle Hint */}
        <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
          
          {/* Doodle Arrow pointing left to the Student's question marks */}
          <div className="flex items-center gap-1.5 text-slate-500 font-comic-bubble text-xs">
            <span className="text-rose-500 font-bold text-sm">⤹</span>
            <span className="italic font-semibold text-[11px] sm:text-xs">Click any ? around the student to explore FAQs</span>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {HERO_SHOWCASE_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  currentSlide === i
                    ? "w-5 h-2 bg-slate-900"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

/**
 * Comic Speech Bubble Dialogue Section (Matching user reference mockup):
 * - Left Bubble: Student Question (warm peach/cream, self-drawing organic stroke, tail pointing down-left to student, perched 'QUESTION' badge, pink marker highlight).
 * - Right Bubble: Mentor Answer (cool mint/cyan, self-drawing organic stroke, tail pointing down-right to mentor, perched 'ANSWER' & 'Verified Response' badges).
 * - Staggered Height: Question bubble sits higher (up), Answer bubble sits lower (down).
 * - Playful curved dashed connecting doodle arrows between the two bubbles.
 */
function DialogueSection({ activeFaq, onClose }) {
  const [displayedQuestion, setDisplayedQuestion] = useState("");
  const [isQuestionWriting, setIsQuestionWriting] = useState(true);

  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const [isAnswerWriting, setIsAnswerWriting] = useState(true);

  // Typewriter effect for Question
  useEffect(() => {
    let index = 0;
    const fullText = activeFaq.question;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayedQuestion(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(interval);
          setIsQuestionWriting(false);
        }
      }, 16);

      return () => clearInterval(interval);
    }, 40);

    return () => clearTimeout(timer);
  }, [activeFaq]);

  // Typewriter effect for Answer (flows in naturally as question finishes)
  useEffect(() => {
    let index = 0;
    const fullText = activeFaq.answer;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        index += 2; // Write 2 chars per tick for smooth, lively reading flow
        setDisplayedAnswer(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(interval);
          setIsAnswerWriting(false);
        }
      }, 16);

      return () => clearInterval(interval);
    }, 240);

    return () => clearTimeout(timer);
  }, [activeFaq]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-4 sm:px-6 md:pl-36 md:pr-36 lg:pl-44 lg:pr-44 xl:pl-48 xl:pr-48">
      {/* Dialogue Bubbles Container: Question (closer to student) & Answer (closer to mentor) */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6 pointer-events-auto">

        {/* ============================================================ */}
        {/* QUESTION BUBBLE (LEFT, STAGGERED UP, COMFORTABLE BUFFER)    */}
        {/* ============================================================ */}
        <div className="relative w-full max-w-[330px] sm:max-w-[350px] md:-translate-y-6 lg:-translate-y-8 transition-transform duration-300">
          
          {/* Perched 'QUESTION' Capsule Badge */}
          <div className="absolute -top-3.5 left-6 z-20">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#FCECD7] border-2 border-[#A66F33] text-[#38200B] font-comic-bubble font-bold text-[11px] sm:text-xs tracking-wider shadow-2xs -rotate-2 select-none">
              QUESTION
            </span>
          </div>

          {/* Hand-Drawn Self-Drawing SVG Bubble Background with Tail */}
          <svg
            viewBox="0 0 350 155"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none drop-shadow-xs"
          >
            {/* Single continuous hand-drawn path: Tail points down at x=44, never poking character */}
            <path
              d="M 28 10 C 110 7, 240 9, 322 10 C 338 12, 342 24, 340 38 C 338 72, 342 104, 340 120 C 338 132, 328 136, 312 136 C 230 137, 120 136, 65 136 C 54 145, 48 152, 44 160 C 47 152, 51 144, 55 136 C 36 136, 18 130, 14 114 C 10 85, 8 48, 12 30 C 14 16, 18 11, 28 10 Z"
              fill="#FFF8E7"
              stroke="#A66F33"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-bubble-border animate-bubble-fill"
            />
          </svg>

          {/* Question Bubble Inner Content */}
          <div className="relative z-10 px-6 pt-6 pb-6 sm:px-7 sm:pt-7 sm:pb-7 flex flex-col justify-center min-h-[135px] sm:min-h-[145px]">
            <h3 className="font-comic-bubble italic font-bold text-slate-900 text-base sm:text-lg lg:text-[19px] leading-snug tracking-tight select-none">
              &ldquo;{displayedQuestion}&rdquo;
              {isQuestionWriting && (
                <span className="inline-block w-1.5 h-4 ml-1 bg-amber-700 animate-pulse rounded-full align-middle" />
              )}
            </h3>

            {/* Pink Marker Highlighter Underline */}
            {!isQuestionWriting && displayedQuestion.length > 0 && (
              <div className="mt-2 opacity-90">
                <svg
                  viewBox="0 0 180 8"
                  className="w-32 sm:w-40 h-2.5 pointer-events-none text-rose-500 overflow-visible"
                  fill="none"
                >
                  <path
                    d="M 2 4 C 45 2, 95 6, 178 3"
                    stroke="#FB7185"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="animate-scribble-draw"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* ============================================================ */}
        {/* CENTER DOODLE ARROWS (Always Visible, Never Hides, Q <-> A)   */}
        {/* ============================================================ */}
        <div className="hidden md:flex relative flex-col items-center justify-center w-28 lg:w-36 h-40 pointer-events-none self-center z-20 shrink-0 mx-2 lg:mx-3">
          <svg
            viewBox="0 0 140 130"
            fill="none"
            className="w-full h-full overflow-visible"
          >
            {/* Top Arrow: Self-drawn from Question (left) to Answer (right) */}
            <g>
              <path
                d="M 10 38 C 45 10, 88 12, 126 44"
                stroke="#64748B"
                strokeWidth="2.4"
                strokeDasharray="4 4"
                strokeLinecap="round"
                className="animate-arrow-draw-top"
              />
              <polygon
                points="132,48 120,43 125,35"
                fill="#64748B"
                className="animate-arrowhead-top"
              />
            </g>

            {/* Bottom Arrow: Self-drawn from Answer (right) to Question (left) */}
            <g>
              <path
                d="M 130 92 C 95 124, 52 122, 14 90"
                stroke="#64748B"
                strokeWidth="2.4"
                strokeDasharray="4 4"
                strokeLinecap="round"
                className="animate-arrow-draw-bottom"
              />
              <polygon
                points="8,86 20,91 16,99"
                fill="#64748B"
                className="animate-arrowhead-bottom"
              />
            </g>
          </svg>
        </div>

        {/* ============================================================ */}
        {/* ANSWER BUBBLE (RIGHT, STAGGERED DOWN, COMFORTABLE BUFFER)    */}
        {/* ============================================================ */}
        <div className="relative w-full max-w-[380px] sm:max-w-[420px] md:translate-y-5 lg:translate-y-7 transition-transform duration-300">
          
          {/* Perched 'ANSWER' and 'Verified Response' Badges */}
          <div className="absolute -top-3.5 left-6 flex items-center gap-2 z-20">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-[#D4ECE9] border-2 border-[#3D6865] text-[#132E2C] font-comic-bubble font-bold text-[11px] sm:text-xs tracking-wider shadow-2xs -rotate-1 select-none">
              ANSWER
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E2F8EC] border border-[#7EC899] text-[#1E6B37] font-comic-bubble font-semibold text-[10.5px] sm:text-[11px] tracking-wide shadow-2xs rotate-1 select-none">
              <span>Verified Response</span>
            </span>
          </div>

          {/* Hand-Drawn Self-Drawing SVG Bubble Background with Tail */}
          <svg
            viewBox="0 0 420 175"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none drop-shadow-xs"
          >
            {/* Single continuous hand-drawn path: Tail points down at x=376, comfortable buffer */}
            <path
              d="M 28 10 C 140 8, 290 7, 394 10 C 408 12, 412 24, 410 40 C 408 76, 411 112, 409 136 C 407 148, 398 154, 382 154 C 376 162, 382 170, 390 178 C 380 172, 372 164, 364 154 C 270 155, 130 154, 48 154 C 28 154, 14 146, 12 128 C 10 90, 8 50, 12 32 C 14 16, 18 11, 28 10 Z"
              fill="#EDF7F6"
              stroke="#3D6865"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-bubble-border animate-bubble-fill"
            />
          </svg>

          {/* Answer Bubble Inner Content */}
          <div className="relative z-10 px-6 pt-6 pb-6 sm:px-7 sm:pt-7 sm:pb-7 flex flex-col justify-center min-h-[145px] sm:min-h-[155px]">
            <p className="font-comic-bubble italic font-medium text-slate-800 text-xs sm:text-[14px] lg:text-[15px] leading-relaxed select-none">
              &ldquo;{displayedAnswer}&rdquo;
              {isAnswerWriting && (
                <span className="inline-block w-1.5 h-3.5 ml-1 bg-teal-700 animate-pulse rounded-full align-middle" />
              )}
            </p>
          </div>
        </div>

        {/* Back to overview / Exit Q&A mode button */}
        {onClose && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-white border border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-comic-bubble font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              title="Close dialogue and return to overview"
            >
              <span className="text-rose-500 font-bold">✕</span>
              <span>Back to overview</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function BeforeYouStartSection() {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  // Selected question: null by default so no question shows until clicked
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [hoveredMarkId, setHoveredMarkId] = useState(null);

  const activeFaq = BEFORE_YOU_START_FAQS.find((f) => f.id === selectedQuestionId);

  // Both characters peek out if hovered OR if a question mark is actively selected
  const isCharacterActive = isLeftHovered || selectedQuestionId !== null;
  const isMentorActive = isRightHovered || selectedQuestionId !== null;

  const handleMarkClick = (id) => {
    // If clicking already selected mark, toggle close; otherwise select new
    setSelectedQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-border select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Box Card Canvas */}
        <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-sm min-h-[580px] sm:min-h-[620px] flex items-center overflow-hidden">
          
          {/* Subtle Canvas Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* =============================================================== */}
          {/* LEFT-MIDDLE: WALL-ANCHORED STUDENT CHARACTER                     */}
          {/* =============================================================== */}
          <div
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer py-12 pr-6"
            aria-label="Peeking student character"
          >
            {/* The Animated Character Body - Anchored directly to the left wall */}
            <div
              className={`
                transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-[0_130px]
                ${
                  isCharacterActive
                    ? "rotate-[10deg] -translate-x-[34%] sm:-translate-x-[32%]"
                    : "rotate-[18deg] -translate-x-[64%] sm:-translate-x-[62%]"
                }
              `}
            >
              {/* Vector Peeking Student (Left fingers & body touch x = 0) */}
              <svg
                viewBox="0 0 190 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-40 h-52 sm:w-52 sm:h-64 md:w-56 md:h-72 drop-shadow-sm select-none"
              >
                {/* FINGERS GRIPPING FLUSH ON THE LEFT WALL (x = 0) */}
                <g>
                  {/* Upper Hand fingers wrapping around wall edge at x = 0 */}
                  <path
                    d="M 0 106 C 12 104, 24 106, 24 114 C 24 122, 10 124, 0 122"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />
                  <path
                    d="M 0 118 C 14 116, 26 118, 26 126 C 26 134, 10 136, 0 134"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />
                  <path
                    d="M 0 130 C 12 128, 24 130, 24 138 C 24 146, 10 148, 0 146"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />
                  <path
                    d="M 0 142 C 10 140, 20 142, 20 149 C 20 156, 8 157, 0 156"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />

                  {/* Lower Hand fingers gripping wall edge at x = 0 */}
                  <path
                    d="M 0 178 C 10 176, 20 178, 20 185 C 20 192, 8 194, 0 193"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />
                  <path
                    d="M 0 188 C 12 186, 22 188, 22 195 C 22 202, 8 204, 0 203"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF1EE"
                  />
                </g>

                {/* TORSO & HOODIE (Flush with wall at x = 0) */}
                <path
                  d="M 0 158 C 22 148, 52 144, 86 148 C 122 152, 144 170, 148 202 L 152 248 C 152 250, 0 250, 0 248 Z"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#FEE2E2"
                />

                {/* Hoodie drawstrings */}
                <path d="M 82 158 C 80 176, 76 188, 76 194" stroke="#EF4444" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M 98 158 C 100 176, 104 188, 104 194" stroke="#EF4444" strokeWidth="2.4" strokeLinecap="round" />

                {/* HEAD & HAIR */}
                <path
                  d="M 54 84 C 40 68, 50 38, 80 36 C 110 34, 132 50, 128 78 C 137 64, 126 44, 106 38 C 80 32, 58 54, 54 84 Z"
                  fill="#1E293B"
                />
                <path
                  d="M 64 54 C 74 44, 98 42, 118 52 C 126 56, 132 66, 128 80 C 122 72, 114 68, 100 66 C 80 64, 68 72, 64 80"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Face Contour */}
                <path
                  d="M 58 80 C 56 102, 64 130, 92 132 C 120 134, 128 104, 126 80"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="#FFF1EE"
                />

                {/* Ears */}
                <path d="M 57 94 C 50 92, 50 106, 57 106" stroke="#0F172A" strokeWidth="2.4" fill="#FFF1EE" />
                <path d="M 126 94 C 133 92, 133 106, 126 106" stroke="#0F172A" strokeWidth="2.4" fill="#FFF1EE" />

                {/* Round Glasses */}
                <circle cx="78" cy="93" r="11.5" stroke="#0F172A" strokeWidth="2.6" fill="#FFFFFF" fillOpacity="0.9" />
                <circle cx="106" cy="93" r="11.5" stroke="#0F172A" strokeWidth="2.6" fill="#FFFFFF" fillOpacity="0.9" />
                <path d="M 89.5 93 L 94.5 93" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M 66.5 91 L 59 89" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 117.5 91 L 124 89" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />

                {/* Inquisitive Eyes Looking Across into the Card */}
                <circle cx="82" cy="92" r="3" fill="#0F172A" />
                <circle cx="110" cy="92" r="3" fill="#0F172A" />
                <circle cx="83.5" cy="90.5" r="1.1" fill="#FFFFFF" />
                <circle cx="111.5" cy="90.5" r="1.1" fill="#FFFFFF" />

                {/* Eyebrows */}
                <path d="M 69 78 C 74 74, 83 75, 87 78" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M 98 75 C 104 70, 114 72, 118 78" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />

                {/* Nose & Friendly Curious Smile */}
                <path d="M 93 98 C 94 104, 91 106, 88 106" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M 82 116 C 89 123, 101 123, 106 115"
                  stroke="#0F172A"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />

                {/* Soft Blush */}
                <circle cx="68" cy="105" r="4.5" fill="#FDA4AF" fillOpacity="0.65" />
                <circle cx="116" cy="105" r="4.5" fill="#FDA4AF" fillOpacity="0.65" />

                {/* Neck */}
                <path d="M 82 132 L 82 148" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 100 132 L 100 148" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />

                {/* BBA Notebook */}
                <rect
                  x="116"
                  y="178"
                  width="32"
                  height="44"
                  rx="4"
                  transform="rotate(16 116 178)"
                  stroke="#0F172A"
                  strokeWidth="2.4"
                  fill="#FFFFFF"
                />
                <path d="M 126 190 L 140 194" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 124 198 L 138 202" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 122 206 L 134 209" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                <text x="120" y="222" fill="#EF4444" fontSize="8" fontWeight="bold" transform="rotate(16 116 178)">
                  BBA
                </text>
              </svg>
            </div>

          </div>

          {/* =============================================================== */}
          {/* THE 5 FLOATING '?' MARKS (DETACHED FROM WALL, NEVER CLIPPED)     */}
          {/* Arranged in a C-shaped arc around the student's head (min x 120px)*/}
          {/* =============================================================== */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none scale-90 sm:scale-100 origin-left">
            {QUESTION_MARKS.map((mark) => {
              const isSelected = selectedQuestionId === mark.id;
              const isHovered = hoveredMarkId === mark.id;
              const isHighlighted = isSelected || isHovered;

              return (
                <div
                  key={mark.id}
                  onClick={() => handleMarkClick(mark.id)}
                  onMouseEnter={() => {
                    setHoveredMarkId(mark.id);
                    setIsLeftHovered(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredMarkId(null);
                    setIsLeftHovered(false);
                  }}
                  style={{
                    transform: `translate(${mark.x}px, ${mark.y}px) rotate(${mark.tilt}deg) scale(${
                      isSelected ? mark.scale * 1.2 : isHovered ? mark.scale * 1.15 : mark.scale
                    })`,
                    transformOrigin: "center center",
                  }}
                  className="absolute cursor-pointer pointer-events-auto transition-all duration-300 ease-out select-none group/mark"
                  title={`Click to ask ${mark.qNum}`}
                >
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-11 h-11 sm:w-13 sm:h-13 drop-shadow-2xs overflow-visible"
                  >
                    {/* Radiating 3 Curiosity Rays on the left pointing toward the student (\ - /) */}
                    {isHighlighted && (
                      <g className="transition-opacity duration-300 animate-in fade-in duration-200">
                        {/* Upper ray (\) */}
                        <path
                          d="M 18 20 L 7 13"
                          stroke="#F43F5E"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                        {/* Middle ray (-) */}
                        <path
                          d="M 15 29 L 4 29"
                          stroke="#F43F5E"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                        {/* Lower ray (/) */}
                        <path
                          d="M 18 38 L 7 45"
                          stroke="#F43F5E"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                        />
                      </g>
                    )}

                    {/* Hand-Drawn Question Mark '?' Path */}
                    <path
                      d="M 22 22 C 22 13, 44 13, 44 24 C 44 32, 33 35, 33 43"
                      stroke={isSelected ? "#E11D48" : isHovered ? "#E11D48" : "#0F172A"}
                      strokeWidth={isSelected ? "3.6" : "3.0"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200"
                    />
                    {/* Question Mark Dot */}
                    <circle
                      cx="33"
                      cy="51"
                      r={isSelected ? "2.8" : "2.4"}
                      fill={isSelected ? "#E11D48" : isHovered ? "#E11D48" : "#0F172A"}
                      className="transition-colors duration-200"
                    />

                    {/* Sleek Number Badge (1, 2, 3, 4, 5) positioned beside the dot */}
                    <g transform="translate(47, 47)">
                      <circle
                        cx="0"
                        cy="0"
                        r="6.5"
                        fill={isSelected ? "#E11D48" : isHovered ? "#E11D48" : "#0F172A"}
                        className="transition-colors duration-200 shadow-2xs"
                      />
                      <text
                        x="0"
                        y="2.8"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="7"
                        fontWeight="bold"
                        className="font-sans select-none"
                      >
                        {mark.id}
                      </text>
                    </g>
                  </svg>

                  {/* Floating Micro-Tooltip on hover */}
                  <div
                    className={`
                      absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900 text-white text-[10px] font-semibold tracking-wide whitespace-nowrap shadow-sm pointer-events-none transition-all duration-200
                      ${isHovered && !isSelected ? "opacity-100 scale-100 -translate-y-1" : "opacity-0 scale-75 translate-y-0 pointer-events-none"}
                    `}
                  >
                    Ask {mark.qNum}
                  </div>
                </div>
              );
            })}
          </div>

          {/* =============================================================== */}
          {/* HERO SHOWCASE SLIDESHOW (IDLE MODE: DRAWING-STYLE HERO SECTION)  */}
          {/* =============================================================== */}
          <HeroShowcaseSection isVisible={!activeFaq} />

          {/* =============================================================== */}
          {/* DIALOGUE: QUESTION (STUDENT) & ANSWER (BBA EASY NOTES MENTOR)   */}
          {/* =============================================================== */}
          {activeFaq && (
            <DialogueSection
              key={activeFaq.id}
              activeFaq={activeFaq}
              onClose={() => setSelectedQuestionId(null)}
            />
          )}

          {/* =============================================================== */}
          {/* RIGHT-MIDDLE: WALL-ANCHORED BBA EASY NOTES MENTOR (THE ANSWERER) */}
          {/* =============================================================== */}
          <div
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer py-12 pl-6"
            aria-label="Peeking BBA Easy Notes Mentor (Answerer)"
          >
            {/* The Animated Mentor Body - Anchored directly to the right wall */}
            <div
              className={`
                transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-[190px_130px]
                ${
                  isMentorActive
                    ? "rotate-[-10deg] translate-x-[34%] sm:translate-x-[32%]"
                    : "rotate-[-18deg] translate-x-[64%] sm:translate-x-[62%]"
                }
              `}
            >
              {/* Floating Doodle Badge (Pops up when active or hovered) */}
              <div
                className={`
                  absolute -top-6 right-20 sm:right-24 transition-all duration-400 pointer-events-none
                  ${isMentorActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-75"}
                `}
              >
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-wider shadow-2xs rotate-[8deg] whitespace-nowrap">
                  ✓ Verified Guide
                </span>
              </div>

              {/* Vector Peeking Mentor (Right fingers & body touch x = 190) */}
              <svg
                viewBox="0 0 190 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-40 h-52 sm:w-52 sm:h-64 md:w-56 md:h-72 drop-shadow-sm select-none"
              >
                {/* Wisdom Spark Doodles (Top left of head) */}
                <path d="M 38 42 L 26 32" stroke="#3B82F6" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M 30 56 L 16 52" stroke="#3B82F6" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M 36 68 L 24 72" stroke="#3B82F6" strokeWidth="2.6" strokeLinecap="round" />

                {/* Hand-Drawn Sparkle Star */}
                <path
                  d="M 22 96 L 24 88 L 26 96 L 34 98 L 26 100 L 24 108 L 22 100 L 14 98 Z"
                  fill="#F59E0B"
                />

                {/* FINGERS GRIPPING FLUSH ON THE RIGHT WALL (x = 190) */}
                <g>
                  {/* Upper Hand fingers wrapping around right wall edge at x = 190 */}
                  <path
                    d="M 190 106 C 178 104, 166 106, 166 114 C 166 122, 180 124, 190 122"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />
                  <path
                    d="M 190 118 C 176 116, 164 118, 164 126 C 164 134, 180 136, 190 134"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />
                  <path
                    d="M 190 130 C 178 128, 166 130, 166 138 C 166 146, 180 148, 190 146"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />
                  <path
                    d="M 190 142 C 180 140, 170 142, 170 149 C 170 156, 182 157, 190 156"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />

                  {/* Lower Hand fingers gripping right wall edge at x = 190 */}
                  <path
                    d="M 190 178 C 180 176, 170 178, 170 185 C 170 192, 182 194, 190 193"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />
                  <path
                    d="M 190 188 C 178 186, 168 188, 168 195 C 168 202, 182 204, 190 203"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    fill="#FFF5EB"
                  />
                </g>

                {/* TORSO & BLAZER (Flush with right wall at x = 190) */}
                <path
                  d="M 190 158 C 168 148, 138 144, 104 148 C 68 152, 46 170, 42 202 L 38 248 C 38 250, 190 250, 190 248 Z"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#DBEAFE"
                />

                {/* Blazer Collar */}
                <path d="M 108 158 L 96 178 L 84 158" stroke="#0F172A" strokeWidth="2.4" fill="#FFFFFF" />

                {/* Verified Green Badge on Lapel */}
                <circle cx="70" cy="186" r="8" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
                <path
                  d="M 67 186 L 69.5 188.5 L 73.5 183.5"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* HEAD & FACE (Looking LEFT toward student) */}
                {/* Face Contour */}
                <path
                  d="M 132 80 C 134 102, 126 130, 98 132 C 70 134, 62 104, 64 80"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="#FFF5EB"
                />

                {/* Ears */}
                <path d="M 133 94 C 140 92, 140 106, 133 106" stroke="#0F172A" strokeWidth="2.4" fill="#FFF5EB" />
                <path d="M 64 94 C 57 92, 57 106, 64 106" stroke="#0F172A" strokeWidth="2.4" fill="#FFF5EB" />

                {/* Smiling Eyes Looking LEFT toward the student */}
                <path d="M 104 92 C 102 87, 94 87, 92 92" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 76 92 C 74 87, 66 87, 64 92" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />

                {/* Friendly Eyebrows */}
                <path d="M 106 82 C 101 78, 92 79, 88 82" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M 78 82 C 73 78, 64 79, 60 82" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />

                {/* Nose & Big Friendly Reassuring Smile */}
                <path d="M 97 98 C 96 104, 99 106, 102 106" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M 108 116 C 101 124, 89 124, 84 116"
                  stroke="#0F172A"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="#FFFFFF"
                />

                {/* Soft Cheerful Blush */}
                <circle cx="122" cy="105" r="4.5" fill="#FDE68A" fillOpacity="0.8" />
                <circle cx="74" cy="105" r="4.5" fill="#FDE68A" fillOpacity="0.8" />

                {/* Neck */}
                <path d="M 108 132 L 108 148" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M 90 132 L 90 148" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />

                {/* GRADUATION CAP (MORTARBOARD) - BBA Easy Notes Signature */}
                <path
                  d="M 95 32 L 140 46 L 95 60 L 50 46 Z"
                  stroke="#0F172A"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                  fill="#1E3A8A"
                />
                <path
                  d="M 70 54 L 70 68 C 70 78, 120 78, 120 68 L 120 54"
                  stroke="#0F172A"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                  fill="#172554"
                />
                <circle cx="95" cy="46" r="3" fill="#F59E0B" />
                <path
                  d="M 95 46 C 80 46, 58 52, 52 66 L 50 80"
                  stroke="#F59E0B"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path d="M 47 80 L 53 80 L 51 88 L 45 88 Z" fill="#D97706" />

                {/* Verified Scroll / Folder In Hand */}
                <g>
                  <rect
                    x="42"
                    y="178"
                    width="32"
                    height="44"
                    rx="4"
                    transform="rotate(-16 42 178)"
                    stroke="#0F172A"
                    strokeWidth="2.4"
                    fill="#FFFFFF"
                  />
                  <path d="M 48 194 L 62 190" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M 50 202 L 64 198" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M 52 210 L 66 206" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
