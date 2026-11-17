"use client";

import Link from "next/link";
import Image from "next/image";

// =========================================================================
// REUSABLE 3D BOOK ANATOMY COMPONENTS
// =========================================================================

// Left Hardcover Spine & Hinge Groove
function BookSpine({ spineColor = "default" }) {
  if (spineColor === "amber") {
    return (
      <div className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4 bg-gradient-to-r from-[#D97706] via-[#FACC15] to-[#EAB308] border-y border-l border-amber-600/80 rounded-l-[5px] z-30 flex flex-col justify-between py-6 shadow-[inset_-2px_0_5px_rgba(0,0,0,0.25)]">
        <div className="h-5 w-full border-y border-amber-900/40" />
        <div className="h-5 w-full border-y border-amber-900/40" />
      </div>
    );
  }
  if (spineColor === "black") {
    return (
      <div className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4 bg-gradient-to-r from-[#030304] via-[#111115] to-[#070709] border-y border-l border-neutral-800 rounded-l-[5px] z-30 flex flex-col justify-between py-6 shadow-[inset_-2px_0_5px_rgba(0,0,0,0.85)]">
        <div className="h-5 w-full border-y border-neutral-700/60" />
        <div className="h-5 w-full border-y border-neutral-700/60" />
      </div>
    );
  }
  return (
    <div className="absolute left-0 top-0 bottom-0 w-3.5 sm:w-4 bg-gradient-to-r from-[#1A1C23] via-[#2D313E] to-[#1E212B] border-y border-l border-slate-700/80 rounded-l-[5px] z-30 flex flex-col justify-between py-6 shadow-[inset_-2px_0_5px_rgba(0,0,0,0.5)]">
      <div className="h-5 w-full border-y border-amber-500/40" />
      <div className="h-5 w-full border-y border-amber-500/40" />
    </div>
  );
}

// Back Cover Foundation & Right-Side Page Edge Stack
function BookBacking({ spineColor = "default" }) {
  const isAmber = spineColor === "amber";
  const isBlack = spineColor === "black";
  return (
    <div
      className={`absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-0 rounded-r-2xl border-y border-r shadow-md overflow-hidden z-0 ${
        isAmber
          ? "bg-[#78350F] border-amber-900/50"
          : isBlack
          ? "bg-[#030304] border-neutral-900"
          : "bg-[#0B0F19] border-slate-800"
      }`}
    >
      {/* Page Block Thickness Stripes on Right Edge */}
      <div className="absolute top-[3px] bottom-[3px] right-[2px] w-4 sm:w-5 bg-[#FAF8F5] border-y border-r border-slate-300 rounded-r-[3px] flex flex-row items-stretch justify-around px-[2px] shadow-[inset_2px_0_4px_rgba(0,0,0,0.1),3px_4px_12px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="absolute -top-[3px] right-0 w-full h-[3px] bg-[#F0EEE8] border-t border-slate-300" />
        <div className="absolute -bottom-[3px] right-0 w-full h-[3px] bg-[#E8E5DF] border-b border-slate-300" />
        <span className="w-[1px] h-full bg-slate-300/80" />
        <span className="w-[1px] h-full bg-slate-200/90" />
        <span className="w-[1px] h-full bg-slate-300/70" />
        <span className="w-[1px] h-full bg-slate-200/90" />
        <span className="w-[1px] h-full bg-slate-300/80" />
        <span className="w-[1px] h-full bg-slate-200/90" />
        <span className="w-[1px] h-full bg-slate-300/80" />
      </div>
    </div>
  );
}

// Interior First Page Sheet (Exposed when front cover lifts open ~15%)
function InsideFirstPage({ title, semester }) {
  return (
    <div className="book-3d-inside-page absolute top-[3px] bottom-[3px] left-[13px] sm:left-[15px] right-[10px] sm:right-[12px] bg-[#FDFBF7] rounded-r-xl border-y border-r border-slate-200/90 overflow-hidden z-10 shadow-xs">
      <div className="absolute inset-0 p-3.5 sm:p-4 flex flex-col justify-between bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:12px_12px]">
        {/* Left Hinge Crease Shadow on Page */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />

        {/* Interior Page Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-200/90 pb-1.5">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
            BBA ACADEMIC CURRICULUM
          </span>
          <span className="text-[9px] font-semibold text-slate-400 tracking-wider">
            PAGE 1
          </span>
        </div>

        {/* Interior Notes Preview Lines */}
        <div className="relative z-10 space-y-2 my-auto max-w-[85%] select-none">
          <div className="h-1.5 w-3/4 bg-slate-200/90 rounded-full" />
          <div className="h-1 w-full bg-slate-200/60 rounded-full" />
          <div className="h-1 w-5/6 bg-slate-200/60 rounded-full" />
          <div className="py-0.5">
            <span className="block font-serif italic text-xs text-slate-600 font-semibold line-clamp-1">
              {title}
            </span>
            <span className="text-[9.5px] text-slate-400 font-medium">
              Complete Subject Notes &bull; {semester || "Curriculum"}
            </span>
          </div>
          <div className="h-1 w-2/3 bg-slate-200/60 rounded-full" />
        </div>

        {/* Interior Page Footer */}
        <div className="relative z-10 border-t border-slate-200/90 pt-2 flex items-center justify-between text-[9px] font-semibold text-slate-400">
          <span>TU &bull; PU &bull; KU &bull; PU-EAST</span>
          <span>BBA EASY NOTES</span>
        </div>
      </div>

      {/* Dynamic Cast Shadow from Open Cover onto Page */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function NotesCard({ note }) {
  // Category-specific pill styling for standard cards
  const getCategoryTheme = (cat) => {
    switch (cat?.toLowerCase()) {
      case "management":
        return "bg-amber-500 text-white";
      case "accounting":
        return "bg-emerald-600 text-white";
      case "finance":
        return "bg-blue-600 text-white";
      case "marketing":
        return "bg-purple-600 text-white";
      case "economics":
        return "bg-teal-600 text-white";
      case "business law":
        return "bg-rose-600 text-white";
      case "information technology":
        return "bg-indigo-600 text-white";
      case "human resources":
        return "bg-orange-600 text-white";
      default:
        return "bg-slate-800 text-white";
    }
  };

  // University short tag labels
  const universityLabels = {
    tu: "TU",
    pu: "PU",
    ku: "KU",
    "pu-east": "PU-East",
  };

  // Special full-bleed cinematic cover for Principles of Management
  const isCinematicCover = note.id === "pom";

  // =========================================================================
  // 1. CINEMATIC NOVEL/TEXTBOOK COVER (PRINCIPLES OF MANAGEMENT)
  // Full-bleed artwork, spaced semester, calligraphic script & serif title
  // =========================================================================
  if (isCinematicCover) {
    return (
      <Link
        href={`/notes/${note.slug}`}
        className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
      >
        {/* 3D HARDCOVER BOOK SHELL */}
        <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
          
          {/* Left Hardcover Spine */}
          <BookSpine />

          {/* Back Cover & Right-Side Page Block */}
          <BookBacking />

          {/* Interior First Page (Exposed underneath when cover opens!) */}
          <InsideFirstPage title="Principles of Management" semester="Semester 1" />

          {/* Full-Bleed Front Book Cover (Hinged Flap opens ~15% on hover) */}
          <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-slate-950 border-y border-slate-800/90 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.25),5px_6px_18px_rgba(0,0,0,0.25)]">
            
            {/* Background Full-Bleed Cover Image */}
            <Image
              src={note.image || `/subjects/${note.id}.jpg`}
              alt={note.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              priority
            />

            {/* Atmospheric Lighting Layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,184,46,0.2)_0%,rgba(14,24,54,0.65)_55%,rgba(5,9,20,0.95)_100%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20" />

            {/* Top Header: "SEMESTER 1" */}
            <div className="relative z-10 pt-4 sm:pt-4.5 px-3.5 text-center">
              <span className="inline-block font-['Cormorant_Garamond',serif] text-[11px] sm:text-xs font-semibold text-white/95 uppercase tracking-[0.35em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                S E M E S T E R &nbsp; 1
              </span>
              <span className="block text-[8.5px] sm:text-[9px] font-bold text-amber-300/80 uppercase tracking-[0.25em] mt-0.5">
                BBA Academic Series
              </span>
            </div>

            {/* Bottom Title & Subtitle */}
            <div className="relative z-10 p-4 sm:p-4.5 pb-4 sm:pb-4.5">
              <div className="leading-none select-none">
                <span className="block font-['Alex_Brush',cursive] text-3xl sm:text-[36px] text-white font-normal tracking-wide drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] -mb-1 group-hover:text-amber-100 transition-colors">
                  Principles of
                </span>
                <span className="block font-['Playfair_Display',serif] italic font-black text-xl sm:text-[23px] text-[#FDE68A] tracking-tight drop-shadow-[0_4px_16px_rgba(245,184,46,0.35)]">
                  Management
                </span>
              </div>

              <p className="font-['Cormorant_Garamond',serif] italic text-[11px] sm:text-[11.5px] text-white/90 leading-snug mt-1.5 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                Introduction to management theories, leadership frameworks & organization structure.
              </p>
            </div>
          </div>

        </div>

        {/* Realistic Book Drop Shadow */}
        <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
      </Link>
    );
  }

  // =========================================================================
  // 2. DOUBLE-EXPOSURE METALLIC COVER (FINANCIAL ACCOUNTING)
  // Inspired directly by book designs/image.png (Native Invisibility)
  // Chrome metallic beveled title, horizontal lens flare, double-exposure art
  // =========================================================================
  if (note.id === "fa") {
    return (
      <Link
        href={`/notes/${note.slug}`}
        className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
      >
        {/* 3D HARDCOVER BOOK SHELL */}
        <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
          
          {/* Left Hardcover Spine */}
          <BookSpine />

          {/* Back Cover & Right-Side Page Block */}
          <BookBacking />

          {/* Interior First Page (Exposed underneath when cover opens!) */}
          <InsideFirstPage title="Financial Accounting" semester="Semester 2" />

          {/* Front Book Cover Board (Hinged Flap opens ~15% on hover) */}
          <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-slate-950 border-y border-slate-800/90 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.25),5px_6px_18px_rgba(0,0,0,0.25)]">
            
            {/* Background Double-Exposure Art */}
            <Image
              src="/subjects/fa-double-exposure-v1.jpg"
              alt="Financial Accounting"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Dark Cinematic Atmospheric Lighting Layers */}
            <div className="absolute inset-0 bg-slate-950/35 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,15,30,0.85)_85%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/90 via-black/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20" />

            {/* Top Header: "SEMESTER 2" */}
            <div className="relative z-10 pt-4 sm:pt-4.5 px-3.5 text-center">
              <span className="inline-block font-sans text-[11px] sm:text-xs font-bold text-white/95 uppercase tracking-[0.4em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                S E M E S T E R &nbsp; 2
              </span>
              <span className="block text-[8.5px] sm:text-[9px] font-bold text-amber-300/80 uppercase tracking-[0.25em] mt-0.5">
                BBA Academic Series
              </span>
            </div>

            {/* Bottom Title Area: Bold, Luminous Chrome Title (Auto-Scales, Never Cuts Off) */}
            <div className="relative z-10 px-3 pb-5 sm:pb-6 flex flex-col items-center justify-center w-full">
              <svg
                viewBox="0 0 320 110"
                className="w-full max-w-[225px] mx-auto select-none overflow-visible drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                aria-label="Financial Accounting"
              >
                <defs>
                  {/* Brilliant White-to-Platinum Chrome Gradient */}
                  <linearGradient id="faLuminousChrome" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="55%" stopColor="#FFFFFF" />
                    <stop offset="80%" stopColor="#F1F5F9" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                  </linearGradient>

                  {/* Horizontal Anamorphic Lens Flare Gradient */}
                  <linearGradient id="faFlareGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                {/* LINE 1: FINANCIAL */}
                <text
                  x="160"
                  y="42"
                  textAnchor="middle"
                  fontFamily="'Bebas Neue', Impact, 'Arial Black', sans-serif"
                  fontSize="42"
                  fontWeight="900"
                  letterSpacing="2.5"
                  fill="url(#faLuminousChrome)"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  strokeOpacity="0.8"
                >
                  FINANCIAL
                </text>

                {/* Horizontal Anamorphic Lens Flare Streak */}
                <line
                  x1="15"
                  y1="51"
                  x2="305"
                  y2="51"
                  stroke="url(#faFlareGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle
                  cx="160"
                  cy="51"
                  r="4"
                  fill="#FFFFFF"
                  opacity="1"
                  filter="drop-shadow(0 0 6px #FDE68A)"
                />

                {/* LINE 2: ACCOUNTING */}
                <text
                  x="160"
                  y="96"
                  textAnchor="middle"
                  fontFamily="'Bebas Neue', Impact, 'Arial Black', sans-serif"
                  fontSize="44"
                  fontWeight="900"
                  letterSpacing="1.8"
                  fill="url(#faLuminousChrome)"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                  strokeOpacity="0.8"
                >
                  ACCOUNTING
                </text>
              </svg>
            </div>
          </div>

        </div>

        {/* Realistic Book Drop Shadow */}
        <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
      </Link>
    );
  }

  // =========================================================================
  // 3. EDITORIAL CLASSIC DARK COVER (MARKETING MANAGEMENT)
  // Inspired directly by book designs/image copy.png (The Idiot / Dostoevsky style)
  // Dark cinematic nocturnal metropolis with glowing digital advertising billboards,
  // Grand Roman serif typography (Cinzel) in pristine bone-white & gold, quote & diamond flourish
  // =========================================================================
  if (note.id === "mm") {
    return (
      <Link
        href={`/notes/${note.slug}`}
        className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
      >
        {/* 3D HARDCOVER BOOK SHELL */}
        <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
          
          {/* Left Hardcover Spine */}
          <BookSpine />

          {/* Back Cover & Right-Side Page Block */}
          <BookBacking />

          {/* Interior First Page (Exposed underneath when cover opens!) */}
          <InsideFirstPage title="Marketing Management" semester="Semester 3" />

          {/* Front Book Cover Board (Hinged Flap opens ~15% on hover) */}
          <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-slate-950 border-y border-slate-800/90 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.25),5px_6px_18px_rgba(0,0,0,0.25)]">
            
            {/* Background Night Commercial Metropolis & Digital Marketing Billboards */}
            <Image
              src="/subjects/mm-dark-v1.jpg"
              alt="Marketing Management"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Dark Cinematic Atmospheric Lighting Overlays */}
            <div className="absolute inset-0 bg-slate-950/25 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,15,30,0.85)_85%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/90 via-black/55 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/60 to-transparent pointer-events-none z-20" />

            {/* TOP HEADER ROW: Peter Drucker Quote (Left) & Semester 3 (Right) */}
            <div className="relative z-10 pt-3.5 sm:pt-4 px-3 sm:px-3.5 flex items-start justify-between gap-2">
              
              {/* Top-Left Literary Quote (Matching "Beauty will save the world" in image copy.png) */}
              <div className="text-left max-w-[125px] sm:max-w-[135px]">
                <p className="font-['Cormorant_Garamond',serif] italic text-[10px] sm:text-[10.5px] leading-[1.15] text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  &ldquo;The aim of marketing is to know the customer.&rdquo;
                </p>
                <span className="block font-['Cinzel',serif] text-[7.5px] sm:text-[8px] font-bold text-amber-300/85 tracking-[0.2em] uppercase mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  &mdash; Peter Drucker
                </span>
              </div>

              {/* Top-Right Semester Tag */}
              <div className="text-right shrink-0">
                <span className="font-['Cinzel',serif] text-[10px] sm:text-[11px] font-black text-white/95 tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] block">
                  SEMESTER 3
                </span>
                <span className="font-['Cinzel',serif] text-[8px] sm:text-[8.5px] font-bold text-amber-300/80 tracking-[0.2em] uppercase block mt-0.5">
                  BBA Series
                </span>
              </div>

            </div>

            {/* BOTTOM TITLE AREA: Grand Roman Serif Typography (Matching "THE IDIOT" style in image copy.png) */}
            <div className="relative z-10 px-3.5 pb-4 sm:pb-5 flex flex-col items-center text-center select-none">
              
              {/* Main Roman Title: MARKETING */}
              <h2 className="font-['Cinzel',serif] text-[23px] sm:text-[26px] leading-[0.95] font-black tracking-[0.2em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] transition-colors group-hover:text-amber-100">
                MARKETING
              </h2>

              {/* Main Roman Title: MANAGEMENT */}
              <h2 className="font-['Cinzel',serif] text-[17px] sm:text-[19px] leading-[1] font-bold tracking-[0.24em] uppercase text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mt-1 group-hover:text-white transition-colors">
                MANAGEMENT
              </h2>

              {/* Classical Diamond Ornament Motif (Matching "— ❖ —" in image copy.png) */}
              <div className="flex items-center justify-center gap-2 my-1.5 opacity-90">
                <span className="w-7 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-amber-300" />
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-amber-300 fill-current drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                </svg>
                <span className="w-7 h-[1px] bg-gradient-to-l from-transparent via-amber-400/60 to-amber-300" />
              </div>

              {/* Academic Label / Author Position (Matching "FYODOR DOSTOEVSKY") */}
              <span className="font-['Cinzel',serif] text-[8.5px] sm:text-[9px] font-bold text-amber-300/85 tracking-[0.28em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] block">
                BBA ACADEMIC CURRICULUM
              </span>

              {/* Edition tag (Matching "A NOVEL" in image copy.png) */}
              <span className="font-['Cinzel',serif] text-[7.5px] sm:text-[8px] font-semibold text-slate-400 tracking-[0.35em] uppercase block mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                2 0 2 6 &nbsp; E D I T I O N
              </span>
            </div>

          </div>

        </div>

        {/* Realistic Book Drop Shadow */}
        <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
      </Link>
    );
  }

  // =========================================================================
  // 4. CYBERPUNK / HIGH-TECH DIGITAL COVER (E-COMMERCE & DIGITAL BUSINESS)
  // Inspired directly by book designs/image copy 3.png (Rise of the Cyborgs style)
  // Electric Cadmium Yellow theme, matching colored spine, high-tech HUD overlay,
  // Dotted global logistics map, analytics telemetry, massive bold black geometric title
  // =========================================================================
  if (note.id === "e-com") {
    return (
      <Link
        href={`/notes/${note.slug}`}
        className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
      >
        {/* 3D HARDCOVER BOOK SHELL */}
        <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
          
          {/* Left Hardcover Spine & Hinge Groove: Color-matched to Yellow/Amber Cover */}
          <BookSpine spineColor="amber" />

          {/* Back Cover & Right-Side Page Block */}
          <BookBacking spineColor="amber" />

          {/* Interior First Page (Exposed underneath when cover opens!) */}
          <InsideFirstPage title="E-Commerce & Digital Business" semester="Semester 7" />

          {/* Front Book Cover Board (Hinged Flap opens ~15% on hover) */}
          <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-[#FACC15] border-y border-amber-400/90 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.2),5px_6px_18px_rgba(0,0,0,0.2)]">
            
            {/* Background Cyber-Tech Eye & Electric Cadmium Yellow Art */}
            <Image
              src="/subjects/ecom-cover-v1.jpg"
              alt="E-Commerce & Digital Business"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Left spine shadow overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-700/35 to-transparent pointer-events-none z-20" />

            {/* High-Tech Vector HUD Overlay (Concentric Scanner, E-Commerce Telemetry & Global Map) */}
            <svg
              viewBox="0 0 340 500"
              className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-visible select-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]"
            >
              {/* Concentric HUD Reticles centered on the eye at cx=230, cy=258 */}
              <g className="text-white stroke-white fill-none">
                {/* Center Crosshairs */}
                <line x1="205" y1="258" x2="255" y2="258" stroke="white" strokeWidth="1.2" opacity="0.85" />
                <line x1="230" y1="233" x2="230" y2="283" stroke="white" strokeWidth="1.2" opacity="0.85" />
                <circle cx="230" cy="258" r="6" stroke="white" strokeWidth="1.5" opacity="0.95" />

                {/* Ring 1: Small Target */}
                <circle cx="230" cy="258" r="28" stroke="white" strokeWidth="1" strokeDasharray="3 3" opacity="0.75" />

                {/* Ring 2: Segmented Arc */}
                <circle cx="230" cy="258" r="54" stroke="white" strokeWidth="1.6" strokeDasharray="18 10 4 10" opacity="0.9" />

                {/* Ring 3: Degree Ticks & Calibration */}
                <circle cx="230" cy="258" r="82" stroke="white" strokeWidth="1.2" strokeDasharray="2 4" opacity="0.7" />
                
                {/* Ring 4: Outer Scanner Arc with telemetry notches */}
                <circle cx="230" cy="258" r="115" stroke="white" strokeWidth="2.2" strokeDasharray="65 15 15 15" opacity="0.9" />
                <circle cx="230" cy="258" r="138" stroke="white" strokeWidth="0.8" strokeDasharray="8 6" opacity="0.55" />
                
                {/* Dynamic Telemetry Brackets around eye */}
                <path d="M 115 180 L 98 180 L 98 335 L 115 335" stroke="white" strokeWidth="1.5" opacity="0.85" />
                <path d="M 315 180 L 332 180 L 332 335 L 315 335" stroke="white" strokeWidth="1.5" opacity="0.85" />
              </g>

              {/* E-Commerce Telemetry Box & Callouts (Left-Mid) */}
              <g transform="translate(16, 200)" opacity="0.95">
                <rect x="0" y="0" width="88" height="15" rx="2" fill="black" fillOpacity="0.45" stroke="white" strokeWidth="0.8" />
                <text x="6" y="11" fill="white" fontSize="7" fontFamily="monospace" fontWeight="bold">CART_ID: #8492</text>
                
                <rect x="0" y="20" width="98" height="15" rx="2" fill="black" fillOpacity="0.45" stroke="white" strokeWidth="0.8" />
                <text x="6" y="31" fill="white" fontSize="7" fontFamily="monospace" fontWeight="bold">GATEWAY: 256-BIT</text>

                <rect x="0" y="40" width="88" height="15" rx="2" fill="black" fillOpacity="0.45" stroke="white" strokeWidth="0.8" />
                <text x="6" y="51" fill="white" fontSize="7" fontFamily="monospace" fontWeight="bold">SSL: ENCRYPTED</text>
              </g>

              {/* Dotted World Map & Analytics Grid (Lower-Left, matching image copy 3) */}
              <g transform="translate(20, 335)" opacity="0.95">
                {/* Telemetry Bar Chart */}
                <line x1="0" y1="45" x2="62" y2="45" stroke="white" strokeWidth="1" opacity="0.6" />
                <rect x="5" y="25" width="5" height="20" fill="white" opacity="0.95" />
                <rect x="14" y="15" width="5" height="30" fill="white" opacity="0.95" />
                <rect x="23" y="10" width="5" height="35" fill="white" opacity="0.95" />
                <rect x="32" y="18" width="5" height="27" fill="white" opacity="0.95" />
                <rect x="41" y="5" width="5" height="40" fill="white" opacity="0.95" />
                <rect x="50" y="12" width="5" height="33" fill="white" opacity="0.95" />
                
                <text x="0" y="57" fill="black" fontSize="8" fontFamily="monospace" fontWeight="900" opacity="0.9">METRICS +48.2%</text>

                {/* Dotted Global Grid Matrix (matching world map in image copy 3) */}
                <g transform="translate(70, 5)" opacity="0.9">
                  <circle cx="5" cy="5" r="1.3" fill="white" />
                  <circle cx="12" cy="4" r="1.3" fill="white" />
                  <circle cx="18" cy="7" r="1.3" fill="white" />
                  <circle cx="25" cy="5" r="1.6" fill="white" />
                  <circle cx="32" cy="8" r="1.3" fill="white" />
                  <circle cx="10" cy="12" r="1.6" fill="white" />
                  <circle cx="16" cy="15" r="1.3" fill="white" />
                  <circle cx="23" cy="14" r="1.6" fill="white" />
                  <circle cx="30" cy="16" r="1.3" fill="white" />
                  <circle cx="38" cy="12" r="1.6" fill="white" />
                  <circle cx="14" cy="22" r="1.3" fill="white" />
                  <circle cx="22" cy="24" r="1.6" fill="white" />
                  <circle cx="29" cy="23" r="1.3" fill="white" />
                  <circle cx="36" cy="25" r="1.6" fill="white" />
                  <circle cx="44" cy="20" r="1.3" fill="white" />
                  
                  <circle cx="23" cy="14" r="5.5" stroke="white" strokeWidth="0.9" fill="none" opacity="0.85" />
                </g>
              </g>
            </svg>

            {/* TOP TITLE AREA: Massive Bold Geometric Black Sans-Serif (Matching "RISE OF THE CYBORGS") */}
            <div className="relative z-20 pt-4 sm:pt-4.5 px-3.5 select-none">
              
              {/* Line 1 & Line 2: Heavy Geometric Sans-Serif in Solid Black */}
              <div className="font-sans font-black tracking-[-0.01em] uppercase leading-[0.88] text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                <span className="block text-[23px] sm:text-[26px] tracking-[0.04em]">
                  E-COMMERCE
                </span>
                <span className="block text-[17px] sm:text-[20px] tracking-[0.06em] mt-0.5">
                  & DIGITAL BUSINESS
                </span>
              </div>

              {/* Subtitle (Matching "PART II IN THE SCI-FI TRILOGY" in image copy 3.png) */}
              <div className="mt-1 flex items-center gap-1.5">
                <span className="font-sans font-black text-[8px] sm:text-[8.5px] tracking-[0.18em] uppercase text-black">
                  BBA DIGITAL CURRICULUM &bull; SEMESTER 7
                </span>
              </div>

            </div>

            {/* BOTTOM AREA: Clean Modern Author / Curriculum (Matching "Marina Gray" in image copy 3.png) */}
            <div className="relative z-20 pb-3.5 px-4 select-none flex items-end justify-between">
              <div>
                <span className="font-sans text-[11px] sm:text-[12px] font-bold text-black tracking-[0.05em] block leading-none">
                  BBA Academic Series
                </span>
                <span className="font-mono text-[7.5px] sm:text-[8px] font-semibold text-black/75 tracking-[0.2em] uppercase block mt-0.5">
                  Omnichannel &bull; Fintech &bull; 2026
                </span>
              </div>

              <div className="text-right">
                <span className="font-mono text-[8.5px] sm:text-[9px] font-black text-black tracking-[0.15em] bg-black/10 px-1.5 py-0.5 rounded">
                  SEM 7
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Realistic Book Drop Shadow */}
        <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
      </Link>
    );
  }

  // =========================================================================
  // 5. EDITORIAL NOIR CLASSIC COVER (BUSINESS LAW)
  // Inspired directly by book designs/image copy 2.png (Space / Olivia Wilson style)
  // Pure pitch black theme, matching obsidian-black spine, Lady Justice & scales in chiaroscuro,
  // Rising atmospheric mist, 3 glowing electric-blue butterflies, monumental serif typography
  // =========================================================================
  if (note.id === "bl") {
    return (
      <Link
        href={`/notes/${note.slug}`}
        className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
      >
        {/* 3D HARDCOVER BOOK SHELL */}
        <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
          
          {/* Left Hardcover Spine: Pure Obsidian Black */}
          <BookSpine spineColor="black" />

          {/* Back Cover & Right-Side Page Block: Pure Obsidian Black */}
          <BookBacking spineColor="black" />

          {/* Interior First Page (Exposed underneath when cover opens!) */}
          <InsideFirstPage title="Business Law" semester="Semester 2" />

          {/* Front Book Cover Board (Hinged Flap opens ~15% on hover) */}
          <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-black border-y border-neutral-900 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.4),5px_6px_20px_rgba(0,0,0,0.45)]">
            
            {/* Background Editorial Art: Lady Justice, Dark Chiaroscuro Mist & Glowing Blue Butterflies */}
            <Image
              src="/subjects/bl-editorial-cover.jpg"
              alt="Business Law"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />

            {/* Left spine shadow overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-20" />

            {/* Top pure black blend gradient to guarantee 100% crisp pitch-black behind typography */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none z-10" />

            {/* TOP TITLE AREA: Monumental High-Contrast Roman Serif (Matching "SPACE" in image copy 2.png) */}
            <div className="relative z-20 pt-4.5 sm:pt-5 px-3.5 select-none text-center">
              
              {/* Main Title: BUSINESS */}
              <h2 className="font-['Cinzel',serif] text-[25px] sm:text-[28px] font-black tracking-[0.24em] uppercase text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-[0.95] transition-colors group-hover:text-cyan-100">
                BUSINESS
              </h2>

              {/* Main Title: LAW */}
              <h2 className="font-['Cinzel',serif] text-[27px] sm:text-[30px] font-black tracking-[0.38em] uppercase text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-[0.95] mt-1 transition-colors group-hover:text-cyan-100">
                LAW
              </h2>

              {/* Subtitle (Matching "BY OLIVIA WILSON" in image copy 2.png) */}
              <div className="mt-2">
                <span className="font-['Cinzel',serif] text-[8.5px] sm:text-[9px] font-semibold text-slate-300 tracking-[0.32em] uppercase block drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  BY BBA ACADEMIC SERIES
                </span>
                <span className="font-sans text-[7.5px] sm:text-[8px] font-bold text-amber-300/80 tracking-[0.25em] uppercase block mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  SEMESTER 2 &bull; CORPORATE & CONTRACT LAW
                </span>
              </div>

            </div>

            {/* BOTTOM AREA: Subtle Editorial Attribution / Seal */}
            <div className="relative z-20 pb-3 px-4 select-none flex items-end justify-between">
              <div>
                <span className="font-['Cinzel',serif] text-[8px] sm:text-[8.5px] font-semibold text-slate-400 tracking-[0.25em] uppercase block leading-none">
                  LEGAL FRAMEWORKS &bull; 2026
                </span>
              </div>

              <div className="text-right">
                <span className="font-mono text-[8px] sm:text-[8.5px] font-bold text-cyan-300/90 tracking-[0.15em] bg-cyan-950/60 border border-cyan-800/50 px-1.5 py-0.5 rounded">
                  SEM 2
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Realistic Book Drop Shadow */}
        <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
      </Link>
    );
  }

  // =========================================================================
  // 6. 3D HARDCOVER BOOK STYLE FOR ALL OTHER SUBJECT CARDS
  // Identical 3D book anatomy (Spine + Inside Page + Cover Flap + Back Block)
  // Clean cover layout: NO "24 files", NO "View Notes" button, entire card clickable
  // =========================================================================
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group relative flex flex-col transition-all duration-500 ease-out hover:-translate-y-4 sm:hover:-translate-y-5 cursor-pointer block select-none w-full max-w-[270px] sm:max-w-[280px] mx-auto"
    >
      {/* 3D HARDCOVER BOOK WRAPPER */}
      <div className="book-3d-wrapper relative h-[395px] sm:h-[415px] w-full rounded-r-2xl select-none">
        
        {/* Left Hardcover Spine & Hinge Groove */}
        <BookSpine />

        {/* Back Cover & Right-Side Page Block */}
        <BookBacking />

        {/* Interior First Page (Exposed underneath when cover opens!) */}
        <InsideFirstPage title={note.title} semester={note.semester} />

        {/* Front Cover Board (Hinged Flap opens ~15% on hover) */}
        <div className="book-3d-cover-hinge absolute top-0 bottom-0 left-[13px] sm:left-[15px] right-[6px] bg-white border-y border-slate-200/90 rounded-r-2xl z-20 flex flex-col justify-between overflow-hidden shadow-[-2px_0_6px_rgba(0,0,0,0.12),5px_6px_18px_rgba(0,0,0,0.1)]">
          
          {/* Hinge groove crease shadow along left edge of cover */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/15 to-transparent pointer-events-none z-20" />

          {/* Top Section: Cover Artwork Framed Inside the Book */}
          <div>
            <div className="p-2 sm:p-2.5 pb-0">
              <div className="relative h-36 sm:h-40 w-full overflow-hidden rounded-xl bg-slate-100 shadow-xs border border-slate-200/60">
                <Image
                  src={note.image || `/subjects/${note.id}.jpg`}
                  alt={note.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/35 group-hover:from-slate-950/90 transition-colors" />

                {/* Top Badges: Category & Semester */}
                <div className="absolute top-2 inset-x-2 flex items-center justify-between gap-1.5 z-10">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-xs ${getCategoryTheme(
                      note.category
                    )}`}
                  >
                    {note.category}
                  </span>

                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow text-navy shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy/80" />
                    <span>{note.semester}</span>
                  </span>
                </div>

                {/* Bottom Badges: Universities & Modules */}
                <div className="absolute bottom-2 inset-x-2 flex items-center justify-between gap-1 z-10">
                  <div className="flex items-center gap-1">
                    {note.universities?.map((u) => (
                      <span
                        key={u}
                        className="px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-white/20 text-white backdrop-blur-md border border-white/20"
                      >
                        {universityLabels[u] || u.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <span className="text-[10px] text-white/95 font-bold bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-1 border border-white/10">
                    <span className="text-yellow font-bold">+</span>
                    <span>{note.modulesCount}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Front Cover Body (Title & Description) */}
            <div className="p-3 sm:p-3.5 pt-2">
              <h3 className="font-bold text-slate-900 text-[15px] sm:text-[16px] leading-snug tracking-tight group-hover:text-syllabus transition-colors line-clamp-1">
                {note.title}
              </h3>

              <p className="text-[11px] sm:text-[11.5px] text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                {note.description}
              </p>
            </div>
          </div>

          {/* Bottom Section: Material Format Micro-Pills */}
          <div className="p-3 sm:p-3.5 pt-0 pb-3">
            <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-slate-100">
              {note.resourceTypes?.includes("notes") && (
                <span className="text-[9.5px] font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60">
                  PDF Notes
                </span>
              )}
              {note.resourceTypes?.includes("past-questions") && (
                <span className="text-[9.5px] font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                  Past Papers
                </span>
              )}
              {note.resourceTypes?.includes("model-papers") && (
                <span className="text-[9.5px] font-semibold text-purple-800 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200/60">
                  Model Sets
                </span>
              )}
              {note.resourceTypes?.includes("syllabus") && (
                <span className="text-[9.5px] font-semibold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">
                  Syllabus
                </span>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Realistic Book Drop Shadow on Ground */}
      <div className="h-3 w-[86%] mx-auto bg-slate-900/25 rounded-full blur-[6px] mt-2 group-hover:w-[94%] group-hover:bg-slate-900/35 group-hover:blur-[10px] group-hover:translate-y-2 transition-all duration-500 ease-out" />
    </Link>
  );
}
