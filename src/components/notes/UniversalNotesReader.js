"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function UniversalNotesReaderInner({ curriculum }) {
  const searchParams = useSearchParams();
  const { subject, units, courseCode, academicYear } = curriculum;

  // Initial unit from query params (defaults to unit 1)
  const initialUnitId = parseInt(searchParams.get("unit") || "1", 10);
  const initialTopicIdx = parseInt(searchParams.get("topic") || "1", 10) - 1;

  const [activeUnitId, setActiveUnitId] = useState(
    units.some((u) => u.id === initialUnitId) ? initialUnitId : units[0]?.id || 1
  );
  const [activeTopicIndex, setActiveTopicIndex] = useState(
    Math.max(0, initialTopicIdx)
  );

  // 3D Book Peek State
  const [book3dOpen, setBook3dOpen] = useState(false);

  // Notes View Mode: "normal" (normal notes) | "visual" (visual & user shared notes)
  const [notesMode, setNotesMode] = useState("normal");

  // Mobile sidebar toggle
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Wikipedia Right Appearance Panel State (Small | Standard | Large)
  const [fontSize, setFontSize] = useState("standard"); // 'small' | 'standard' | 'large'
  const [contentWidth, setContentWidth] = useState("standard"); // 'standard' | 'wide'
  const [colorMode, setColorMode] = useState("light"); // 'light' | 'dark'
  const [isAppearanceOpen, setIsAppearanceOpen] = useState(true);

  // Active unit object
  const activeUnit = useMemo(() => {
    return units.find((u) => u.id === activeUnitId) || units[0];
  }, [units, activeUnitId]);

  // Active unit topics
  const unitTopics = activeUnit?.topics || [];
  const safeTopicIndex = Math.min(
    Math.max(0, activeTopicIndex),
    Math.max(0, unitTopics.length - 1)
  );
  const activeTopicTitle = unitTopics[safeTopicIndex] || "Overview of Chapter";

  // Book cover image mapping
  const bookCoverImage =
    subject.id === "fa"
      ? "/subjects/fa-double-exposure-v1.jpg"
      : subject.id === "mm"
      ? "/subjects/mm-dark-v1.jpg"
      : subject.id === "bl"
      ? "/subjects/bl-editorial-cover.jpg"
      : subject.id === "e-com"
      ? "/subjects/ecom-cover-v1.jpg"
      : subject.image || `/subjects/${subject.id}.jpg`;

  return (
    <div
      className={`min-h-screen font-sans selection:bg-amber-200 selection:text-navy flex flex-col transition-colors ${
        colorMode === "dark" ? "bg-[#101418] text-[#e1e3e5]" : "bg-white text-[#202122]"
      }`}
    >
      {/* ============================================================= */}
      {/* FULL WHITE CONTINUOUS CANVAS (WITHOUT ANY CARD DIVIDES)       */}
      {/* ============================================================= */}
      <div className="flex-1 w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        
        {/* =========================================================== */}
        {/* LEFT COLUMN: WIKIPEDIA TOPIC CONTENTS (CLEAN & ALIGNED)     */}
        {/* (Pure white background, no card box wrapper)                */}
        {/* =========================================================== */}
        <aside
          className={`w-full lg:w-[240px] xl:w-[260px] shrink-0 transition-all ${
            mobileTocOpen
              ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto block shadow-2xl"
              : "hidden lg:block lg:sticky lg:top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-3"
          }`}
        >
          {/* Mobile Close Button */}
          {mobileTocOpen && (
            <div className="lg:hidden flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <span className="font-sans font-bold text-base text-slate-900">Contents</span>
              <button
                onClick={() => setMobileTocOpen(false)}
                className="text-slate-500 hover:text-navy text-sm font-bold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
          )}

          {/* Wikipedia Table of Contents Header */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
            <span className="font-sans font-bold text-[14px] text-slate-900 tracking-tight">
              Contents
            </span>
            <span className="text-[12px] text-[#36c] cursor-pointer hover:underline">
              [hide]
            </span>
          </div>

          {/* Wikipedia Tree View */}
          <nav className="space-y-3.5 text-[13px]">
            {/* (Top) Link */}
            <div>
              <button
                onClick={() => {
                  setActiveTopicIndex(0);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-[13px] text-[#36c] hover:underline cursor-pointer"
              >
                (Top)
              </button>
            </div>

            {units.map((unit) => {
              const isCurrentUnit = unit.id === activeUnitId;
              const topics = unit.topics || [];

              return (
                <div key={unit.id} className="space-y-1.5">
                  {/* Chapter Header (Level 1) */}
                  <button
                    onClick={() => {
                      setActiveUnitId(unit.id);
                      setActiveTopicIndex(0);
                      setMobileTocOpen(false);
                    }}
                    className={`w-full text-left transition-colors flex items-start gap-2 cursor-pointer leading-snug ${
                      isCurrentUnit
                        ? "font-bold text-slate-950 font-serif text-[14px]"
                        : "text-[#36c] hover:underline font-serif text-[13.5px]"
                    }`}
                  >
                    <span className="font-mono text-[12px] shrink-0 text-slate-400 font-bold">
                      {unit.id}
                    </span>
                    <span>{unit.shortTitle || unit.title}</span>
                  </button>

                  {/* Subtopics (Level 2 - Wikipedia Indent) */}
                  <div className="pl-4 ml-1.5 border-l border-slate-200 space-y-1.5 pt-0.5">
                    {topics.map((topic, tIdx) => {
                      const isTopicSelected =
                        isCurrentUnit && tIdx === safeTopicIndex;
                      const topicNumber = `${unit.id}.${tIdx + 1}`;

                      return (
                        <button
                          key={tIdx}
                          onClick={() => {
                            setActiveUnitId(unit.id);
                            setActiveTopicIndex(tIdx);
                            setMobileTocOpen(false);
                          }}
                          className={`w-full text-left text-[12.5px] sm:text-[13px] transition-colors flex items-start gap-1.5 py-0.5 cursor-pointer leading-snug ${
                            isTopicSelected
                              ? "text-slate-950 font-bold"
                              : "text-[#36c] hover:underline"
                          }`}
                        >
                          <span className="font-mono text-[11px] text-slate-400 shrink-0 font-medium">
                            {topicNumber}
                          </span>
                          <span className={isTopicSelected ? "font-bold" : ""}>
                            {topic}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* =========================================================== */}
        {/* CENTER COLUMN: WIKIPEDIA ARTICLE AREA (FULL WHITE, NO CARD) */}
        {/* =========================================================== */}
        <main
          className={`flex-1 min-w-0 transition-all ${
            contentWidth === "wide" ? "max-w-full" : "max-w-3xl xl:max-w-4xl"
          }`}
        >
          {/* Wikipedia Title Header */}
          <div className="pb-2">
            <h1 className="font-serif text-3xl sm:text-[40px] lg:text-[44px] text-[#202122] font-normal tracking-tight leading-tight">
              {activeTopicTitle}
            </h1>

            {/* Wikipedia Tabs Line: Article / Talk ... Read / View history */}
            <div className="flex items-center justify-between text-[13px] sm:text-[13.5px] text-[#36c] border-b border-[#a2a9b1] mt-3 pb-1.5">
              {/* Left Tabs */}
              <div className="flex items-center gap-4">
                <span className="text-[#202122] font-bold border-b-2 border-[#202122] pb-1.5 -mb-[7px] cursor-pointer">
                  Notes
                </span>
                <span className="hover:underline cursor-pointer text-slate-600">
                  Discussion
                </span>
              </div>

              {/* Right Utility Tabs */}
              <div className="flex items-center gap-3 sm:gap-4 text-[12.5px]">
                <span className="text-[#202122] font-semibold cursor-pointer">
                  Read
                </span>
                <span className="hover:underline cursor-pointer text-[#36c] hidden sm:inline">
                  View syllabus
                </span>
                <span className="hover:underline cursor-pointer text-[#36c] hidden sm:inline">
                  Tools
                </span>
                <span className="text-slate-400">★</span>
              </div>
            </div>

            {/* Subtitle taglines */}
            <div className="text-[13px] text-[#54595d] italic mt-2">
              From BBA Easy Notes, the verified curriculum repository
            </div>
            <div className="text-[12.5px] text-slate-500 italic mt-0.5">
              Part of <strong>{subject.title}</strong> &bull; Unit {activeUnit.id}: {activeUnit.title} ({academicYear || "2026 Academic Syllabus"})
            </div>
          </div>

          {/* --------------------------------------------------------- */}
          {/* CLEAN WHITE ARTICLE CANVAS (NO TOPIC NOTES POPULATED YET) */}
          {/* --------------------------------------------------------- */}
          <div
            className={`pt-8 pb-16 ${
              fontSize === "small"
                ? "text-[13.5px] sm:text-[14px] leading-relaxed"
                : fontSize === "large"
                ? "text-[17.5px] sm:text-[18.5px] leading-loose"
                : "text-[15.5px] sm:text-[16.5px] leading-relaxed"
            }`}
          >
            {/* Wikipedia-styled Lead Section Indicator */}
            <div className="border-l-2 border-slate-300 pl-4 py-2.5 my-4 text-sm sm:text-[14.5px] text-slate-700 italic">
              {notesMode === "normal"
                ? `This section corresponds to Chapter ${activeUnit.id}.${safeTopicIndex + 1} (${activeTopicTitle}) in the standard Tribhuvan University, Pokhara University, and Kathmandu University BBA curriculum.`
                : `Visual notes, concept diagrams, and peer-contributed study sheets for Chapter ${activeUnit.id}.${safeTopicIndex + 1} (${activeTopicTitle}).`}
            </div>

            {/* Seamless White Workspace Notice */}
            <div className="py-16 text-center">
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center mx-auto text-slate-400 mb-3 text-lg">
                {notesMode === "normal" ? "✎" : "🖼"}
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-normal text-slate-800">
                {notesMode === "normal" ? "Normal Notes Workspace" : "Visual Notes Workspace"}
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-slate-500 max-w-md mx-auto mt-1.5 leading-relaxed">
                Full white Wikipedia canvas is active. Awaiting your styling guidelines and notes reference to design the reading layout.
              </p>
            </div>
          </div>
        </main>

        {/* =========================================================== */}
        {/* RIGHT COLUMN: 3D BOOK ON TOP OF APPEARANCE PANEL            */}
        {/* =========================================================== */}
        <aside className="hidden xl:flex flex-col w-[240px] xl:w-[260px] 2xl:w-[280px] shrink-0 sticky top-8 text-xs text-slate-700 select-none space-y-6">
          
          {/* 1. The 3D Book on Top of Right Column */}
          <div className="flex flex-col items-center justify-center pb-2">
            <div
              onClick={() => setBook3dOpen(!book3dOpen)}
              className="group relative cursor-pointer select-none transition-transform duration-500 hover:scale-[1.02]"
              title="Click to peek inside the 3D book"
            >
              <div className="book-3d-wrapper relative h-[320px] w-[215px] sm:w-[230px] rounded-r-xl shadow-2xl">
                
                {/* Left Hardcover Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-[#1A1C23] via-[#2D313E] to-[#1E212B] border-y border-l border-slate-700 rounded-l-[4px] z-30 flex flex-col justify-between py-5 shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]">
                  <div className="h-4 w-full border-y border-amber-500/40" />
                  <div className="h-4 w-full border-y border-amber-500/40" />
                </div>

                {/* Back Cover Foundation & Page Thickness */}
                <div className="absolute top-0 bottom-0 left-[12px] right-0 rounded-r-xl bg-[#0B0F19] border-y border-r border-slate-800 shadow-md overflow-hidden z-0">
                  <div className="absolute top-[2px] bottom-[2px] right-[2px] w-4 bg-[#FAF8F5] border-y border-r border-slate-300 rounded-r-[2px] flex flex-row items-stretch justify-around px-[1.5px] shadow-inner overflow-hidden">
                    <div className="absolute -top-[2px] right-0 w-full h-[2px] bg-[#F0EEE8] border-t border-slate-300" />
                    <div className="absolute -bottom-[2px] right-0 w-full h-[2px] bg-[#E8E5DF] border-b border-slate-300" />
                    <span className="w-[1px] h-full bg-slate-300/80" />
                    <span className="w-[1px] h-full bg-slate-200/90" />
                    <span className="w-[1px] h-full bg-slate-300/80" />
                  </div>
                </div>

                {/* Interior First Page */}
                <div className="book-3d-inside-page absolute top-[2px] bottom-[2px] left-[12px] right-[10px] bg-[#FDFBF7] rounded-r-lg border-y border-r border-slate-200 overflow-hidden z-10">
                  <div className="absolute inset-0 p-4 flex flex-col justify-between bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:10px_10px]">
                    <div className="border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        BBA STUDY HUB
                      </span>
                      <span className="text-[8px] font-semibold text-slate-400">
                        {courseCode || "2026"}
                      </span>
                    </div>
                    <div className="space-y-2 my-auto max-w-[90%] select-none">
                      <div className="h-1.5 w-3/4 bg-slate-200 rounded-full" />
                      <div className="h-1.5 w-full bg-slate-200/60 rounded-full" />
                      <div className="py-1">
                        <span className="block font-serif italic text-xs text-slate-700 font-bold line-clamp-2">
                          {subject.title}
                        </span>
                        <span className="text-[9.5px] text-slate-400 font-medium">
                          {units.length} Modules &bull; Complete Notes
                        </span>
                      </div>
                      <div className="h-1.5 w-2/3 bg-slate-200/60 rounded-full" />
                    </div>
                    <div className="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[8px] font-semibold text-slate-400">
                      <span>TU &bull; PU &bull; KU</span>
                      <span className="text-emerald-700 font-bold">VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Front Cover Board (Interactive Hinge) */}
                <div
                  className={`book-3d-cover-hinge absolute top-0 bottom-0 left-[12px] right-[4px] rounded-r-xl border-y border-slate-800 z-20 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-700 ${
                    book3dOpen ? "book-cover-peek-open" : ""
                  }`}
                >
                  <Image
                    src={bookCoverImage}
                    alt={subject.title}
                    fill
                    sizes="260px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent pointer-events-none" />
                  <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20" />

                  {/* Header Title on Cover */}
                  <div className="relative z-10 pt-4 px-3 text-center">
                    <span className="inline-block font-sans text-[10px] font-bold text-white/95 uppercase tracking-[0.2em] drop-shadow-md">
                      {subject.semester?.toUpperCase() || "SEMESTER 1"}
                    </span>
                    <span className="block text-[8px] font-bold text-amber-300 uppercase tracking-[0.2em] mt-0.5">
                      BBA Academic Series
                    </span>
                  </div>

                  {/* Subject Details on Cover */}
                  <div className="relative z-10 p-3.5 pb-4 text-center">
                    <h2 className="font-serif font-bold text-base sm:text-lg text-white tracking-tight drop-shadow-lg leading-tight">
                      {subject.title}
                    </h2>
                    <p className="text-[9.5px] text-slate-300 mt-1 line-clamp-2 drop-shadow-sm font-medium">
                      {subject.description}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8.5px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/20">
                      <span>{units.length} Modules</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="h-3 w-[80%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2.5" />
            </div>
          </div>

          {/* 2. Two Options Directly Down of the Book (Normal Notes vs Visual Notes) */}
          <div className="pb-3 border-b border-slate-200">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2 text-center">
              Study Reading Mode
            </span>

            <div className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1 rounded-lg">
              {/* Option 1: Normal Notes */}
              <button
                onClick={() => setNotesMode("normal")}
                className={`py-2 px-2 rounded text-[12.5px] sm:text-[13px] font-semibold transition-all cursor-pointer text-center ${
                  notesMode === "normal"
                    ? "bg-white text-navy shadow-xs font-bold"
                    : "text-slate-600 hover:text-navy"
                }`}
                title="Normal written lecture notes"
              >
                <span>Normal Notes</span>
              </button>

              {/* Option 2: Visual Notes */}
              <button
                onClick={() => setNotesMode("visual")}
                className={`py-2 px-2 rounded text-[12.5px] sm:text-[13px] font-semibold transition-all cursor-pointer text-center ${
                  notesMode === "visual"
                    ? "bg-white text-navy shadow-xs font-bold"
                    : "text-slate-600 hover:text-navy"
                }`}
                title="Visual notes & notes shared by users"
              >
                <span>Visual Notes</span>
              </button>
            </div>
          </div>

          {/* 3. Wikipedia Appearance Controls (Below the Book & Options) */}
          <div className="text-[13px] text-slate-700">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 mb-3">
              <span className="font-bold text-slate-900 text-[13.5px]">Appearance</span>
              <button
                onClick={() => setIsAppearanceOpen(!isAppearanceOpen)}
                className="text-[#36c] hover:underline text-[12px] cursor-pointer"
              >
                {isAppearanceOpen ? "hide" : "show"}
              </button>
            </div>

            {isAppearanceOpen && (
              <div className="space-y-4">
                {/* Text Size Control */}
                <div>
                  <span className="font-semibold text-slate-500 text-[12px] block mb-1">
                    Text
                  </span>
                  <div className="space-y-1.5">
                    {["small", "standard", "large"].map((s) => (
                      <label
                        key={s}
                        onClick={() => setFontSize(s)}
                        className="flex items-center gap-2 cursor-pointer capitalize text-[13px] hover:text-slate-900"
                      >
                        <input
                          type="radio"
                          name="fontSize"
                          checked={fontSize === s}
                          onChange={() => setFontSize(s)}
                          className="cursor-pointer text-blue-600"
                        />
                        <span>{s}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Width Control */}
                <div>
                  <span className="font-semibold text-slate-500 text-[12px] block mb-1">
                    Width
                  </span>
                  <div className="space-y-1.5">
                    {["standard", "wide"].map((w) => (
                      <label
                        key={w}
                        onClick={() => setContentWidth(w)}
                        className="flex items-center gap-2 cursor-pointer capitalize text-[13px] hover:text-slate-900"
                      >
                        <input
                          type="radio"
                          name="contentWidth"
                          checked={contentWidth === w}
                          onChange={() => setContentWidth(w)}
                          className="cursor-pointer text-blue-600"
                        />
                        <span>{w}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Mode Control */}
                <div>
                  <span className="font-semibold text-slate-500 text-[12px] block mb-1">
                    Color
                  </span>
                  <div className="space-y-1.5">
                    {["light", "dark"].map((c) => (
                      <label
                        key={c}
                        onClick={() => setColorMode(c)}
                        className="flex items-center gap-2 cursor-pointer capitalize text-[13px] hover:text-slate-900"
                      >
                        <input
                          type="radio"
                          name="colorMode"
                          checked={colorMode === c}
                          onChange={() => setColorMode(c)}
                          className="cursor-pointer text-blue-600"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

      </div>

      {/* Floating Mobile Contents Button (Only on mobile, keeping page completely headerless) */}
      <button
        onClick={() => setMobileTocOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-40 bg-navy text-white px-3.5 py-2.5 rounded-full shadow-xl text-xs font-bold flex items-center gap-2 cursor-pointer active:scale-95 border border-white/20"
        aria-label="Open Table of Contents"
      >
        <span className="text-sm">≡</span>
        <span>Contents</span>
      </button>
    </div>
  );
}

export default function UniversalNotesReader({ curriculum }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-slate-500 font-sans text-xs">
          Loading Notes Reader...
        </div>
      }
    >
      <UniversalNotesReaderInner curriculum={curriculum} />
    </Suspense>
  );
}
