"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// =========================================================================
// BOTANICAL LEAF & LINE ORNAMENTS (SITE BRAND COLORS: NAVY & AMBER)
// =========================================================================

// Botanical Leaf & Line Victorian Corner Filigree
function LeafCornerFiligree({ position = "top-left" }) {
  const rotation =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
      ? "rotate-180"
      : position === "bottom-left"
      ? "-rotate-90"
      : "";

  return (
    <div
      className={`absolute w-10 h-10 pointer-events-none opacity-35 text-navy ${rotation} ${
        position.includes("top") ? "top-3 sm:top-4" : "bottom-3 sm:bottom-4"
      } ${position.includes("left") ? "left-3 sm:left-4" : "right-3 sm:right-4"}`}
    >
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-full h-full">
        <path d="M 12 12 Q 40 12 55 28 Q 28 55 12 12 Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M 10 10 L 85 10 M 10 10 L 10 85" strokeWidth="2.5" />
        <path d="M 16 16 L 70 16 M 16 16 L 16 70" strokeWidth="1" strokeDasharray="3,3" />
        <path d="M 28 28 Q 45 35 55 22 Q 35 45 28 28" fill="currentColor" fillOpacity="0.22" />
        <path d="M 28 28 Q 35 45 22 55 Q 45 35 28 28" fill="currentColor" fillOpacity="0.22" />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
        <circle cx="85" cy="10" r="2" fill="currentColor" />
        <circle cx="10" cy="85" r="2" fill="currentColor" />
      </svg>
    </div>
  );
}

// Ornate Botanical Leaf Divider
function LeafDivider() {
  return (
    <div className="flex items-center justify-center my-2 text-navy/40">
      <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-navy/30 to-navy/40" />
      <span className="mx-2 text-sm text-amber-600/90 select-none">❦</span>
      <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-navy/30 to-navy/40" />
    </div>
  );
}

// Classical Scholar Bust Line Engraving (Clean Vector Art)
function ScholarEngraving() {
  return (
    <div className="w-28 h-36 bg-slate-50 border border-slate-300 p-1.5 rounded-lg shadow-2xs float-right ml-4 mb-2 select-none">
      <div className="w-full h-full border border-slate-200 rounded flex flex-col items-center justify-center p-1 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:6px_6px]">
        <svg viewBox="0 0 100 120" className="w-full h-24 text-navy/85" stroke="currentColor" fill="none">
          <ellipse cx="50" cy="42" rx="20" ry="24" strokeWidth="2" fill="#f8fafc" />
          <path d="M 32 35 Q 50 20 68 35 Q 50 25 32 35" strokeWidth="2.5" fill="#12264F" />
          <path d="M 32 38 Q 28 50 32 60 Q 40 72 50 72 Q 60 72 68 60 Q 72 50 68 38" strokeWidth="2" fill="#12264F" fillOpacity="0.15" />
          <path d="M 40 45 L 46 45 M 54 45 L 60 45" strokeWidth="2.5" />
          <path d="M 50 43 L 50 54 L 46 56" strokeWidth="2" />
          <path d="M 44 62 Q 50 65 56 62" strokeWidth="2" />
          <path d="M 22 85 Q 50 70 78 85 L 84 115 L 16 115 Z" strokeWidth="2" fill="#f1f5f9" />
          <path d="M 35 78 Q 45 95 40 115" strokeWidth="1.8" />
          <path d="M 50 75 Q 60 92 56 115" strokeWidth="1.8" />
          <path d="M 65 80 Q 72 95 70 115" strokeWidth="1.8" />
          <line x1="26" y1="92" x2="34" y2="105" strokeWidth="1" opacity="0.6" />
          <line x1="68" y1="92" x2="76" y2="105" strokeWidth="1" opacity="0.6" />
        </svg>
        <span className="text-[8px] font-sans uppercase tracking-widest text-navy/70 font-bold mt-1 text-center leading-tight">
          Classical Scholar
        </span>
      </div>
    </div>
  );
}

// Grand Library Vault Engraving (Clean Vector Art)
function GrandLibraryEngraving() {
  return (
    <div className="w-36 h-28 bg-slate-50 border border-slate-300 p-1.5 rounded-lg shadow-2xs float-right ml-4 mb-2 select-none">
      <div className="w-full h-full border border-slate-200 rounded flex flex-col items-center justify-center p-1 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:6px_6px]">
        <svg viewBox="0 0 120 85" className="w-full h-20 text-navy/85" stroke="currentColor" fill="none">
          <path d="M 10 75 L 45 35 Q 60 20 75 35 L 110 75 Z" strokeWidth="2" fill="#f8fafc" />
          <path d="M 45 35 L 45 75 M 75 35 L 75 75" strokeWidth="2" />
          <path d="M 20 75 L 45 50 M 100 75 L 75 50" strokeWidth="1.5" />
          <rect x="12" y="45" width="28" height="30" strokeWidth="1.5" />
          <line x1="12" y1="55" x2="40" y2="55" strokeWidth="1" />
          <line x1="12" y1="65" x2="40" y2="65" strokeWidth="1" />
          <rect x="80" y="45" width="28" height="30" strokeWidth="1.5" />
          <line x1="80" y1="55" x2="108" y2="55" strokeWidth="1" />
          <line x1="80" y1="65" x2="108" y2="65" strokeWidth="1" />
          <circle cx="60" cy="22" r="3" fill="#12264F" />
          <line x1="60" y1="22" x2="52" y2="40" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="60" y1="22" x2="68" y2="40" strokeWidth="1" strokeDasharray="2,2" />
        </svg>
        <span className="text-[7.5px] font-sans uppercase tracking-widest text-navy/70 font-bold text-center leading-tight">
          Grand Academic Vault
        </span>
      </div>
    </div>
  );
}

// =========================================================================
// CURATED SINGLE-PAGE CHAPTER SUMMARIES (PRINCIPLES OF MANAGEMENT)
// Small conclusion-type summarization in a clean, non-scrollable single page
// =========================================================================

const POM_CHAPTER_SUMMARIES = {
  1: {
    leadChar: "M",
    paragraph1:
      "anagement is the universal art and science of coordinating human, financial, and material resources to accomplish organizational objectives economically and effectively. Operating as a continuous and dynamic discipline, it harmonizes the core functions of planning, organizing, leading, and controlling within an evolving socio-economic environment.",
    paragraph2:
      "This foundational chapter establishes the critical distinction between administrative policy-making and operational execution. It highlights Henry Mintzberg's ten managerial roles across interpersonal, informational, and decisional spheres, alongside Robert Katz's skill hierarchy—demonstrating how technical, human, and conceptual proficiencies distribute across managerial ranks from frontline supervision to executive leadership.",
    conclusion:
      "In summary, modern management balances operational efficiency with strategic environmental adaptation to navigate emerging corporate challenges.",
  },
  2: {
    leadChar: "T",
    paragraph1:
      "he evolution of modern management thought reflects a progressive shift from early industrial task standardization toward comprehensive administrative frameworks and human-centric systems. Understanding these classical milestones provides essential context for modern organizational governance.",
    paragraph2:
      "This chapter synthesizes F.W. Taylor's Scientific Management—which revolutionized shop-floor productivity through standardized workflows and time-and-motion studies—with Henri Fayol's 14 Universal Principles of Operational Management. It further evaluates Max Weber's bureaucratic model of rational hierarchy and Elton Mayo's Hawthorne Studies, proving that informal peer relations and psychological recognition motivate workers far beyond financial incentives alone.",
    conclusion:
      "In conclusion, classical efficiency models combined with behavioral insights form the bedrock of contemporary contingency and systems management.",
  },
  3: {
    leadChar: "P",
    paragraph1:
      "lanning serves as the fundamental bridge between an organization's present standing and its future aspirations. By forecasting environmental conditions and establishing deliberate courses of action, formal planning minimizes operational uncertainty and directs resource allocation toward strategic priorities.",
    paragraph2:
      "This chapter details the sequential eight-stage planning sequence, contrasting long-range strategic roadmaps with tactical and operational targets. Students evaluate environmental scanning through the PESTEL framework, examine Peter Drucker's Management by Objectives (MBO) collaborative goal system, and analyze decision-making models under real-world cognitive and behavioral constraints.",
    conclusion:
      "Ultimately, rigorous planning establishes the measurable benchmarks without which managerial direction and organizational control cannot function.",
  },
  4: {
    leadChar: "O",
    paragraph1:
      "rganizing translates strategic vision into coordinated collective performance by grouping enterprise activities, assigning specific responsibilities, and establishing clear lines of formal authority and accountability across departments.",
    paragraph2:
      "This unit examines classical functional and divisional structures alongside dynamic matrix designs, evaluating the balance between specialization and cross-functional flexibility. It explores span of management (tall versus flat hierarchies), the imperative of parity between authority and responsibility, and effective delegation strategies for overcoming managerial bottlenecks in scaling enterprises.",
    conclusion:
      "In essence, effective organization design aligns structural relationships with institutional goals to ensure seamless operational execution.",
  },
  5: {
    leadChar: "L",
    paragraph1:
      "eading inspires and mobilizes human capability toward organizational goals, while controlling completes the management feedback loop by verifying that operating results conform to predetermined standards.",
    paragraph2:
      "This chapter investigates autocratic, democratic, and laissez-faire leadership styles alongside foundational motivation models—including Maslow's Need Hierarchy, Herzberg's Two-Factor hygiene-motivator theory, and McGregor's Theory X and Theory Y. It concludes with the four-phase cybernetic control process: establishing benchmarks, measuring performance, analyzing variances, and executing corrective actions.",
    conclusion:
      "Together, visionary leadership and proactive control ensure sustained employee motivation, organizational stability, and goal attainment.",
  },
};

function getChapterSummary(unit) {
  if (unit?.id && POM_CHAPTER_SUMMARIES[unit.id]) {
    return POM_CHAPTER_SUMMARIES[unit.id];
  }
  const intro =
    unit?.lectureNotes?.introduction ||
    "This unit establishes the core theoretical foundation for BBA students across Nepal.";
  return {
    leadChar: intro.charAt(0) || "T",
    paragraph1: intro.slice(1),
    paragraph2: (unit?.summaryPoints || []).slice(0, 3).join(" "),
    conclusion:
      "In conclusion, mastering these core principles is essential for analytical problem-solving and university examinations.",
  };
}

// =========================================================================
// SECTION LOGOS (OFFICIAL CLEAN SVG VECTOR LOGOS - NO EMOJIS)
// =========================================================================

function PracticeExamLogo({ className = "w-4 h-4 text-blue-600" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12l.75.75 1.5-1.5" />
    </svg>
  );
}

function VerifiedNotesLogo({ className = "w-4 h-4 text-emerald-600" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function PastPapersLogo({ className = "w-4 h-4 text-amber-600" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function SummaryLogo({ className = "w-4 h-4 text-yellow-600" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function PdfHandoutsLogo({ className = "w-4 h-4 text-rose-600" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5h6m-6 3h4.5" />
    </svg>
  );
}

function FullscreenLogo({ isFullscreen = false, className = "w-5 h-5 text-current" }) {
  if (isFullscreen) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}

function BookOpenLogo({ className = "w-4 h-4 text-current" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function QuillLogo({ className = "w-4 h-4 text-current" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.71 2.29a1 1 0 0 0-1.05-.24c-2.48.83-7.51 2.87-11.45 6.81A12.35 12.35 0 0 0 5.7 13.91L2.29 17.32a1 1 0 0 0-.29.71v3a1 1 0 0 0 1 1h3a1 1 0 0 0 .71-.29l3.41-3.41c1.68 1.48 3.32 2.22 5.05 2.22 4.18 0 7.83-4.22 8.54-16.71a1 1 0 0 0-.25-.85zM4 19.59l2.59-2.59 1.41 1.41L5.41 21H4v-1.41zm11-1.63c-1.35 0-2.73-.67-4.14-2.01l7.15-7.15a1 1 0 0 0-1.41-1.41L9.45 14.54C8.06 13.06 7.42 11.63 7.42 10.3c0-3.3 3.65-6.85 9.42-8.3-1.45 5.77-5 9.42-8.3 9.42z" />
    </svg>
  );
}

function ShieldLogo({ className = "w-4 h-4 text-current" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function CameraLogo({ className = "w-4 h-4 text-current" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

// Book-Style Study Menu Component for the top portion of the right page
function BookStyleStudyMenu({
  activeRightTab,
  setActiveRightTab,
  communityNotesCount = 0,
}) {
  const menuItems = [
    {
      id: "quiz",
      label: "Practice Exam",
      title: "Practice Exam (Interactive Knowledge Check)",
      logo: (isActive) => (
        <PracticeExamLogo
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive ? "text-amber-400" : "text-blue-600"
          }`}
        />
      ),
    },
    {
      id: "community",
      label: "Verified Notes",
      title: "Faculty & Teacher Verified Extra Notes",
      badge: communityNotesCount,
      logo: (isActive) => (
        <VerifiedNotesLogo
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive ? "text-amber-400" : "text-emerald-600"
          }`}
        />
      ),
    },
    {
      id: "past-questions",
      label: "Past Papers",
      title: "TU & PU Past 10-Year Board Exam Papers",
      logo: (isActive) => (
        <PastPapersLogo
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive ? "text-amber-400" : "text-amber-600"
          }`}
        />
      ),
    },
    {
      id: "summary",
      label: "Summary",
      title: "Night-Before High-Yield Exam Summary & Formulas",
      logo: (isActive) => (
        <SummaryLogo
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive ? "text-amber-400" : "text-yellow-600"
          }`}
        />
      ),
    },
    {
      id: "downloads",
      label: "PDF Handouts",
      title: "Official PDF Lecture Slides & Handouts",
      logo: (isActive) => (
        <PdfHandoutsLogo
          className={`w-4 h-4 shrink-0 transition-colors ${
            isActive ? "text-amber-400" : "text-rose-600"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="relative z-20 pb-3 mb-2 border-b border-slate-200/90 select-none">
      <div className="bg-[#FAF7EE] border border-[#E3D9C3] rounded-xl p-1 sm:p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] flex items-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none">
        {menuItems.map((item) => {
          const isActive = activeRightTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveRightTab(item.id)}
              className={`flex-1 min-w-max lg:min-w-0 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-navy text-white shadow-xs font-bold ring-1 ring-navy/20"
                  : "text-slate-600 hover:text-navy hover:bg-[#F2ECE0] font-bold"
              }`}
              title={item.title}
            >
              {item.logo(isActive)}
              <span className="truncate">{item.label}</span>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? "bg-amber-400 text-navy"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Convert number to Roman Numeral
function getRomanNumeral(num) {
  const map = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X" };
  return map[num] || String(num);
}

// Helper: Fallback generator for Image Notes
function getUnitImageNotes(unit) {
  if (unit?.imageNotes && unit.imageNotes.length > 0) return unit.imageNotes;
  const topic1 = unit?.topics?.[0] || "Foundational Principles";
  const topic2 = unit?.topics?.[1] || "Core Conceptual Architecture";
  return [
    {
      id: `img-${unit.id}-1`,
      title: `Topper's Handwritten Classroom Notes — ${topic1}`,
      contributor: "Aayush Sharma (Shanker Dev Campus, TU)",
      verified: true,
      verifiedBy: "Faculty Verified",
      imageUrl: "/real-notes.jpg",
      pageNumber: "Sheet 1 of 3",
      caption: `Handwritten lecture notes on ${topic1} with exam definitions, key distinctions, and concept mind-map.`,
    },
    {
      id: `img-${unit.id}-2`,
      title: `Visual Framework Architecture & Flowchart — ${topic2}`,
      contributor: "Pooja Shrestha (Nepal Commerce Campus - NCC)",
      verified: true,
      verifiedBy: "Faculty Verified",
      imageUrl: "/real-papers.jpg",
      pageNumber: "Sheet 2 of 3",
      caption: `Color-coded diagram detailing ${topic2} with real-world Nepalese corporate case applications.`,
    },
    {
      id: `img-${unit.id}-3`,
      title: `Board Exam Rapid Revision Summary Sheet — Unit ${unit.id}`,
      contributor: "Rohan Adhikari (Quest International College, PU)",
      verified: true,
      verifiedBy: "Faculty Verified",
      imageUrl: "/slide-materials.jpg",
      pageNumber: "Sheet 3 of 3",
      caption: `High-yield one-page revision diagram for rapid preparation before university semester board examinations.`,
    },
  ];
}

// Helper: Fallback generator for Quiz Questions
function getUnitQuiz(unit) {
  if (unit?.quiz && unit.quiz.length > 0) return unit.quiz;
  const top1 = unit?.topics?.[0] || "Key Academic Framework";
  const top2 = unit?.topics?.[1] || "Practical Application";
  return [
    {
      id: 1,
      question: `In modern BBA curriculum in Nepal, what is the core significance of ${top1}?`,
      options: [
        { key: "A", text: "Establishes systematic framework for analytical managerial decision making" },
        { key: "B", text: "Replaces the requirement for formal corporate accounting records" },
        { key: "C", text: "Applies exclusively to public government monopolies" },
        { key: "D", text: "Mandates daily verbal directives without written documentation" },
      ],
      correct: "A",
      explanation: `${top1} provides foundational conceptual rigor, enabling managers to systematically analyze complex business situations and make informed decisions.`,
    },
    {
      id: 2,
      question: `When applying ${top2} in Nepalese commercial enterprises, managers must prioritize:`,
      options: [
        { key: "A", text: "Aligning internal operational capability with regulatory and market realities" },
        { key: "B", text: "Eliminating all cross-functional communication" },
        { key: "C", text: "Relying purely on ad-hoc intuition rather than data" },
        { key: "D", text: "Ignoring consumer demand fluctuations" },
      ],
      correct: "A",
      explanation: `Operational success in emerging markets like Nepal requires matching internal organizational strengths with external regulatory compliance and consumer expectations.`,
    },
    {
      id: 3,
      question: `In university board examinations (TU/PU), a high-scoring answer regarding this unit must include:`,
      options: [
        { key: "A", text: "Clear academic definitions, structured diagrams, and real corporate examples" },
        { key: "B", text: "Unformatted continuous blocks of text without headings" },
        { key: "C", text: "Personal opinions without any theoretical references" },
        { key: "D", text: "Only bullet points without explanatory context" },
      ],
      correct: "A",
      explanation: `Examiners reward structured answers featuring recognized author definitions, neat conceptual diagrams, and relevant Nepalese corporate case applications.`,
    },
  ];
}

// Helper: Fallback generator for Community Uploads
function getUnitCommunityUploads(unit) {
  if (unit?.communityUploads && unit.communityUploads.length > 0) return unit.communityUploads;
  return [
    {
      id: `comm-${unit.id}-1`,
      title: `Unit ${unit.id} Topper's Comprehensive Handwritten Notebook`,
      author: "Suman Karki",
      campus: "Shanker Dev Campus (TU)",
      semester: "Batch 2024-2028",
      pagesCount: "12 Pages",
      fileSize: "3.8 MB PDF",
      downloads: 1420 + unit.id * 105,
      rating: 4.9,
      status: "verified",
      badge: "Faculty Verified",
      previewThumb: "/real-notes.jpg",
      description: `Complete handwritten lecture notes covering all unit sub-topics with past 5 years board question answer blueprints.`,
    },
    {
      id: `comm-${unit.id}-2`,
      title: `Concept Mind Maps & Nepal Corporate Case Flashcards`,
      author: "Prakriti Thapa",
      campus: "KUSOM (Kathmandu University)",
      semester: "Spring 2025",
      pagesCount: "7 Pages",
      fileSize: "2.5 MB PDF",
      downloads: 980 + unit.id * 85,
      rating: 4.8,
      status: "verified",
      badge: "Faculty Verified",
      previewThumb: "/slide-materials.jpg",
      description: `Visual flashcards and real Nepalese corporate examples (Chaudhary Group, Nabil Bank) for descriptive board questions.`,
    },
    {
      id: `comm-${unit.id}-3`,
      title: `Exam Night Rapid Handwritten Formulas & Mnemonics`,
      author: "Bikash Shrestha",
      campus: "Nepal Commerce Campus (NCC)",
      semester: "Fall 2024",
      pagesCount: "5 Pages",
      fileSize: "1.7 MB PDF",
      downloads: 2150 + unit.id * 120,
      rating: 5.0,
      status: "verified",
      badge: "Faculty Verified",
      previewThumb: "/real-papers.jpg",
      description: `High-yield memory hooks, bullet-point outlines, and distinction tables for scoring 10/10 in board questions.`,
    },
  ];
}

export default function SubjectDetailClient({ curriculum }) {
  const { subject, units } = curriculum;

  // Active Unit & Workspace State
  const [activeUnitId, setActiveUnitId] = useState(units?.[0]?.id || 1);
  const [completedUnits, setCompletedUnits] = useState([]);

  // Animated "My Lessons" Parchment Flyout State
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  // Full Screen Reading Mode State & Font Size Preference
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [readingFontSize, setReadingFontSize] = useState("normal"); // 'small' | 'normal' | 'large'

  // Left Page View Mode: 'text' (written notes) | 'images' (scanned handwritten image notes)
  const [leftPageViewMode, setLeftPageViewMode] = useState("text");
  const [activeImageNoteIndex, setActiveImageNoteIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Right Page Active Tab: 'quiz' | 'community' | 'past-questions' | 'summary' | 'downloads'
  const [activeRightTab, setActiveRightTab] = useState("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState({});

  // Mobile navigation tabs
  const [mobileTab, setMobileTab] = useState("lesson"); // 'lesson' | 'quiz' | 'menu'

  // Upload Modal State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFormData, setUploadFormData] = useState({
    name: "",
    campus: "",
    noteType: "Handwritten Scanned Sheets",
    description: "",
  });
  const [uploadSubmittedMessage, setUploadSubmittedMessage] = useState(false);
  const [localUploads, setLocalUploads] = useState([]);

  // Find active unit
  const activeUnit = useMemo(() => {
    return units.find((u) => u.id === activeUnitId) || units[0];
  }, [units, activeUnitId]);

  // Previous and Next units
  const currentIndex = units.findIndex((u) => u.id === activeUnitId);
  const prevUnit = currentIndex > 0 ? units[currentIndex - 1] : null;
  const nextUnit = currentIndex < units.length - 1 ? units[currentIndex + 1] : null;

  // Active Unit Image Notes, Quiz & Community Uploads
  const activeImageNotes = useMemo(() => getUnitImageNotes(activeUnit), [activeUnit]);
  const currentImageNote = activeImageNotes[activeImageNoteIndex] || activeImageNotes[0];
  const activeQuiz = useMemo(() => getUnitQuiz(activeUnit), [activeUnit]);
  const currentQuestion = activeQuiz[currentQuestionIndex] || activeQuiz[0];

  const allCommunityUploads = useMemo(() => {
    const base = getUnitCommunityUploads(activeUnit);
    const extraForThisUnit = localUploads.filter((u) => u.unitId === activeUnitId);
    return [...extraForThisUnit, ...base];
  }, [activeUnit, localUploads, activeUnitId]);

  // Handle Full Screen Reading Mode
  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      try {
        if (typeof document !== "undefined" && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } catch {}
    } else {
      setIsFullscreen(false);
      try {
        if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      } catch {}
    }
  }, [isFullscreen]);

  // Listen for native Fullscreen changes and ESC key to exit
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (typeof document !== "undefined" && !document.fullscreenElement && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
          try {
            if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
              document.exitFullscreen().catch(() => {});
            }
          } catch {}
        }
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isFullscreen]);

  // Handle Quiz interaction
  const handleSelectOption = (qId, optionKey) => {
    if (submittedQuestions[qId]) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optionKey,
    }));
  };

  const handleSubmitQuestion = (qId) => {
    if (!selectedAnswers[qId]) return;
    setSubmittedQuestions((prev) => ({
      ...prev,
      [qId]: true,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Handle Upload Form Submit
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadFormData.name.trim() || !uploadFormData.campus.trim()) {
      alert("Please enter your name and college campus.");
      return;
    }

    const newNote = {
      id: `user-up-${Date.now()}`,
      unitId: activeUnitId,
      title: `${uploadFormData.noteType} — ${activeUnit?.shortTitle || activeUnit?.title}`,
      author: uploadFormData.name,
      campus: uploadFormData.campus,
      semester: "Batch 2025",
      pagesCount: "Uploaded Just Now",
      fileSize: "Pending Scan",
      downloads: 0,
      rating: 5.0,
      status: "under-review",
      badge: "Faculty Review In Progress",
      previewThumb: "/real-notes.jpg",
      description: uploadFormData.description || "Submitted by student. Awaiting faculty verification.",
    };

    setLocalUploads((prev) => [newNote, ...prev]);
    setUploadSubmittedMessage(true);
    setTimeout(() => {
      setUploadSubmittedMessage(false);
      setIsUploadModalOpen(false);
      setUploadFormData({
        name: "",
        campus: "",
        noteType: "Handwritten Scanned Sheets",
        description: "",
      });
      setActiveRightTab("community");
    }, 2000);
  };

  // Category Pill Theme
  const getCategoryTheme = (cat) => {
    switch (cat?.toLowerCase()) {
      case "management":
        return "bg-amber-500/10 text-amber-800 border-amber-300";
      case "accounting":
        return "bg-emerald-500/10 text-emerald-800 border-emerald-300";
      case "finance":
        return "bg-blue-500/10 text-blue-800 border-blue-300";
      case "marketing":
        return "bg-purple-500/10 text-purple-800 border-purple-300";
      case "economics":
        return "bg-teal-500/10 text-teal-800 border-teal-300";
      case "business law":
        return "bg-rose-500/10 text-rose-800 border-rose-300";
      default:
        return "bg-slate-500/10 text-slate-800 border-slate-300";
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-16 selection:bg-amber-200 selection:text-navy">
      


      {/* =================================================================== */}
      {/* MAIN OPEN BOOK WORKSPACE                                            */}
      {/* =================================================================== */}
      <section
        id="book-workspace"
        className={
          isFullscreen
            ? "fixed inset-0 z-50 bg-[#070F1E] w-screen h-screen overflow-y-auto flex flex-col p-2 sm:p-4 lg:p-6"
            : "max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 pt-6 sm:pt-8"
        }
      >
        {/* Fullscreen Reading Top Control Bar */}
        {isFullscreen && (
          <div className="w-full max-w-[1720px] mx-auto flex items-center justify-between pb-3 px-2 text-white select-none shrink-0 border-b border-white/10 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-serif font-bold text-sm sm:text-base flex items-center gap-2">
                <BookOpenLogo className="w-4 h-4 text-amber-400" />
                <span>BBA Easy Notes</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 truncate max-w-xs sm:max-w-md">
                {subject.title} &mdash; Unit {activeUnit.id}: {activeUnit.title}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Text Size Adjustment */}
              <div className="flex items-center gap-1 bg-white/10 border border-white/15 px-2 py-1 rounded-xl text-xs">
                <span className="text-[11px] text-slate-300 hidden md:inline mr-1 font-semibold">Text Size:</span>
                <button
                  onClick={() => setReadingFontSize("small")}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    readingFontSize === "small" ? "bg-amber-400 text-navy font-bold" : "text-white hover:bg-white/10"
                  }`}
                  title="Small Text Size"
                >
                  A-
                </button>
                <button
                  onClick={() => setReadingFontSize("normal")}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    readingFontSize === "normal" ? "bg-amber-400 text-navy font-bold" : "text-white hover:bg-white/10"
                  }`}
                  title="Normal Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => setReadingFontSize("large")}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    readingFontSize === "large" ? "bg-amber-400 text-navy font-bold" : "text-white hover:bg-white/10"
                  }`}
                  title="Large Text Size"
                >
                  A+
                </button>
              </div>

              {/* Exit Full Screen Button */}
              <button
                onClick={toggleFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-navy font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Exit Full Screen Mode (or press Esc)"
              >
                <FullscreenLogo isFullscreen={true} className="w-4 h-4 text-navy" />
                <span>Exit</span>
                <kbd className="hidden sm:inline bg-navy/20 px-1.5 py-0.5 rounded text-[10px] font-mono">
                  ESC
                </kbd>
              </button>
            </div>
          </div>
        )}

        {/* Normal Mode Top Bar: Minimalist with Fullscreen Logo */}
        {!isFullscreen && (
          <div className="flex items-center justify-between mb-4 px-2 relative z-40">
            {/* Minimal Back to Library link */}
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-bold text-slate-600 hover:text-navy hover:border-navy/30 transition-all shadow-2xs group"
              title="Return to Library"
            >
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-navy transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span>Library</span>
              <span className="text-slate-300">/</span>
              <span className="text-navy font-serif font-bold">{subject.title}</span>
            </Link>

            {/* Right Side: Fullscreen Logo */}
            <div className="relative flex items-center gap-2">
              <button
                onClick={toggleFullscreen}
                className="relative z-50 w-10 h-10 rounded-xl flex items-center justify-center bg-white hover:bg-navy text-navy hover:text-white border border-slate-300 hover:border-navy transition-all cursor-pointer shadow-xs hover:shadow-md group"
                title={isFullscreen ? "Exit Full Screen" : "Full Screen Reading"}
                aria-label="Full Screen"
              >
                <FullscreenLogo isFullscreen={isFullscreen} className="w-5 h-5 text-navy group-hover:text-amber-400 transition-colors" />
              </button>
            </div>
          </div>
        )}



        {/* Mobile Horizontal Tabs Bar */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none px-2">
          {/* Quick Syllabus Drawer Button on Mobile */}
          <button
            onClick={() => setIsSyllabusOpen((prev) => !prev)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 border bg-amber-400 text-navy border-navy shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpenLogo className="w-3.5 h-3.5" />
            <span>Lessons</span>
          </button>
          {units.map((u) => {
            const isActive = u.id === activeUnitId;
            const isDone = completedUnits.includes(u.id);
            return (
              <button
                key={u.id}
                onClick={() => {
                  setActiveUnitId(u.id);
                  setCurrentQuestionIndex(0);
                  setActiveImageNoteIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 border transition-all ${
                  isActive
                    ? "bg-navy text-white border-navy shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span>Unit {u.id}</span>
                {isDone && <span className="ml-1 text-emerald-400">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Mobile Sub-Tab Switcher (Between Left Reading Page & Right Quiz Page) */}
        <div className="lg:hidden flex items-center justify-around bg-white rounded-xl border border-slate-200 p-1.5 mb-6 text-xs shadow-xs">
          <button
            onClick={() => setMobileTab("lesson")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1.5 ${
              mobileTab === "lesson" ? "bg-navy text-white" : "text-slate-600"
            }`}
          >
            <BookOpenLogo className="w-4 h-4 text-current" />
            <span>Reading Page</span>
          </button>
          <button
            onClick={() => setMobileTab("quiz")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1.5 ${
              mobileTab === "quiz" ? "bg-navy text-white" : "text-slate-600"
            }`}
          >
            <PracticeExamLogo className="w-4 h-4 text-current" />
            <span>Check & Notes</span>
          </button>
        </div>

        {/* THE GRAND FULL-WIDTH OPEN BOOK CONTAINER */}
        <div className="relative pl-0 lg:pl-11 xl:pl-12">
          
          {/* --------------------------------------------------------------- */}
          {/* LEFT-EDGE INDEX TABS (IMAGE 4 & IMAGE 1)                        */}
          {/* Protruding vertically along the outer edge of the book casing    */}
          {/* --------------------------------------------------------------- */}
          <div className="hidden lg:flex flex-col gap-2 absolute left-0 top-12 bottom-12 z-30 select-none">
            
            {/* Table of Contents / "My Lessons" Tab (BEFORE UNIT 1) */}
            <button
              onClick={() => setIsSyllabusOpen((prev) => !prev)}
              className={`flex items-center justify-center rounded-l-xl transition-all cursor-pointer font-serif ${
                isSyllabusOpen
                  ? "w-11 xl:w-12 py-4 bg-amber-400 text-navy font-bold border-y-2 border-l-2 border-navy -translate-x-2.5 shadow-lg z-30 ring-1 ring-navy/10"
                  : "w-9 xl:w-10 py-3.5 bg-[#DCE2ED] hover:bg-white text-navy font-bold border-y border-l border-slate-300 shadow-xs hover:-translate-x-1"
              }`}
              title="Click to view My Lessons & Syllabus"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 [writing-mode:vertical-rl] rotate-180">
                <span className="text-[10px] xl:text-[11px] font-sans font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <BookOpenLogo className="w-3.5 h-3.5" />
                  <span>Lessons</span>
                </span>
              </div>
            </button>
            {units.map((u) => {
              const isActive = u.id === activeUnitId;
              const isDone = completedUnits.includes(u.id);
              const shortLabel = u.shortTitle || `Unit ${u.id}`;

              return (
                <div key={u.id} className="relative group">
                  <button
                    onClick={() => {
                      setActiveUnitId(u.id);
                      setCurrentQuestionIndex(0);
                      setActiveImageNoteIndex(0);
                    }}
                    className={`flex items-center justify-center rounded-l-xl transition-all cursor-pointer font-serif ${
                      isActive
                        ? "w-11 xl:w-12 py-4 bg-white text-navy font-bold border-y-2 border-l-2 border-navy -translate-x-2.5 shadow-lg z-30 ring-1 ring-navy/10"
                        : "w-9 xl:w-10 py-3.5 bg-[#E9ECF2] hover:bg-white text-slate-600 hover:text-navy border-y border-l border-slate-300 shadow-xs hover:-translate-x-1"
                    }`}
                    title={`Unit ${u.id}: ${u.title}`}
                  >
                    {/* Vertical Chapter Label: Only Unit 1, Unit 2, Unit 3... (no chapter name) */}
                    <div className="flex flex-col items-center justify-center [writing-mode:vertical-rl] rotate-180">
                      <span className="text-[11px] xl:text-[12px] font-sans font-bold tracking-wider whitespace-nowrap">
                        Unit {u.id}
                      </span>
                    </div>

                    {/* Completion indicator */}
                    {isDone ? (
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px] font-bold shadow-xs">
                        ✓
                      </span>
                    ) : isActive ? (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-navy" />
                    ) : null}
                  </button>

                  {/* Floating Hover Card */}
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col p-3 bg-navy text-white text-xs rounded-xl shadow-2xl w-56 z-40 pointer-events-none transition-all border border-white/20">
                    <div className="flex items-center justify-between text-[10px] text-amber-300 font-bold mb-1">
                      <span>UNIT {String(u.id).padStart(2, "0")}</span>
                      <span>{u.examMarks}</span>
                    </div>
                    <span className="font-bold leading-snug">{u.title}</span>
                    <span className="text-[10.5px] text-slate-300 mt-1">{u.duration || "8 Lecture Hours"} &bull; {u.readTime || "25 min"}</span>
                    {isDone && <span className="text-[10px] text-emerald-300 font-bold mt-1">✓ Completed</span>}
                  </div>
                </div>
              );
            })}

            {/* Quick Upload Action Tab at Bottom of Left Tabs */}
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="w-9 xl:w-10 py-3 rounded-l-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 border-y border-l border-amber-500/40 flex flex-col items-center justify-center cursor-pointer transition-all hover:-translate-x-1 mt-auto shadow-xs"
              title="Upload / Contribute notes for this chapter"
            >
              <span className="text-xs font-bold">+</span>
              <span className="text-[9px] font-bold uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180 mt-1">
                Upload
              </span>
            </button>
          </div>

          {/* Top Silk Bookmark Ribbons (Hanging over Center Spine - Matching Image 1) */}
          <div className="hidden lg:block absolute -top-4 left-[46%] -translate-x-full w-6 h-12 bg-gradient-to-b from-navy via-navy to-[#0a1630] rounded-t-sm shadow-md z-30 pointer-events-none">
            <div className="absolute bottom-0 inset-x-0 h-2 bg-[#060c1c] clip-v-tail" />
          </div>
          <div className="hidden lg:block absolute -top-4 left-[54%] w-5 h-10 bg-gradient-to-b from-[#F5B82E] via-amber-400 to-amber-500 rounded-t-sm shadow-md z-30 pointer-events-none">
            <div className="absolute bottom-0 inset-x-0 h-2 bg-amber-600 clip-v-tail" />
          </div>


          {/* ============================================================= */}
          {/* ANIMATED "MY LESSONS" PARCHMENT FLYOUT (EXACT IMAGE 2 STYLE)   */}
          {/* Opens when clicking the 'Contents' tab before Unit 1           */}
          {/* Disappears automatically after clicking any chapter or outside */}
          {/* ============================================================= */}
          {isSyllabusOpen && (
            <>
              {/* Click-outside backdrop (disappears after clicking anywhere) */}
              <div
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] transition-opacity"
                onClick={() => setIsSyllabusOpen(false)}
              />

              {/* The Parchment Scroll Flap (Image 2) */}
              <div
                className="absolute left-10 lg:left-14 top-6 sm:top-10 z-50 w-72 sm:w-80 max-w-[92vw] bg-[#FDFBF7] border-2 border-[#D8C7A5] rounded-2xl shadow-[0_25px_60px_rgba(18,38,79,0.38)] p-5 sm:p-6 animate-parchment-in select-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botanical Corner Filigrees on Parchment */}
                <LeafCornerFiligree position="top-left" />
                <LeafCornerFiligree position="top-right" />
                <LeafCornerFiligree position="bottom-left" />
                <LeafCornerFiligree position="bottom-right" />

                {/* Parchment Inner Ruled Border */}
                <div className="absolute inset-2.5 border border-[#E8DFC9] rounded-xl pointer-events-none" />

                {/* Top Close Button (✕) */}
                <button
                  onClick={() => setIsSyllabusOpen(false)}
                  className="absolute top-3 right-3 text-slate-400 hover:text-navy text-sm font-bold w-6 h-6 rounded-full hover:bg-slate-200/50 flex items-center justify-center transition-colors cursor-pointer z-10"
                  title="Close Syllabus"
                >
                  ✕
                </button>

                {/* Header: "My Lessons" with Botanical Flourish (Image 2) */}
                <div className="text-center pt-1 pb-2 relative z-10">
                  <h3 className="font-serif font-bold text-2xl text-navy tracking-tight">
                    My Lessons
                  </h3>

                  {/* Ornate Divider Flourish (Image 2) */}
                  <div className="flex items-center justify-center gap-2 my-2 text-navy/40">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C4B290] to-[#C4B290]" />
                    <span className="text-xs text-[#A88E60] select-none">❦</span>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C4B290] to-[#C4B290]" />
                  </div>
                </div>

                {/* Lessons Chapter List (Exact to Image 2) */}
                <div className="space-y-0.5 relative z-10 my-1">
                  {units.map((u) => {
                    const isActive = u.id === activeUnitId;
                    const unitNumber = String(u.id).padStart(2, "0");

                    return (
                      <div
                        key={u.id}
                        onClick={() => {
                          setActiveUnitId(u.id);
                          setCurrentQuestionIndex(0);
                          setActiveImageNoteIndex(0);
                          setIsSyllabusOpen(false); // Disappears immediately after clicking!
                        }}
                        className={`group relative flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all cursor-pointer font-serif ${
                          isActive
                            ? "bg-[#EFE8D6] border-y border-[#D6C4A1] text-navy font-bold shadow-2xs"
                            : "hover:bg-[#F4EFE3] text-slate-800 hover:text-navy border-b border-[#EDE4D2]/80"
                        }`}
                      >
                        {/* Quill Icon for Active Lesson (Exact Image 2) */}
                        {isActive ? (
                          <QuillLogo className="w-4 h-4 shrink-0 text-navy drop-shadow-xs" />
                        ) : (
                          <span className="w-4" />
                        )}

                        {/* Chapter Number & Title */}
                        <div className="flex-1 text-[13.5px] sm:text-[14px] leading-snug">
                          <span className="font-bold mr-1.5 opacity-90">{unitNumber}:</span>
                          <span className={`${isActive ? "font-bold underline decoration-amber-500/60 underline-offset-2" : "font-normal group-hover:underline"}`}>
                            {u.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Ornate Divider Flourish & Ink Accents (Image 2) */}
                <div className="pt-3 mt-1 text-center relative z-10">
                  <div className="flex items-center justify-center gap-2 text-navy/30">
                    <div className="h-[1px] w-10 bg-[#D4C3A3]" />
                    <span className="text-xs text-[#B5A07A]">❧</span>
                    <div className="h-[1px] w-10 bg-[#D4C3A3]" />
                  </div>

                  {/* Subtle Ink Speckles */}
                  <div className="flex justify-end pr-3 pt-1 opacity-25 pointer-events-none select-none">
                    <span className="text-[9px] text-navy font-mono tracking-widest">&bull; &bull; &bull;</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* THE OPEN BOOK HARDCOVER CASING (NAVY WITH STACKED PAGES) */}
          <div className="relative bg-[#0F1E3D] border-4 border-[#1E3A70] rounded-2xl p-2.5 sm:p-3 lg:p-4 shadow-[0_22px_50px_rgba(18,38,79,0.22)]">
            <div className="absolute inset-1 border border-white/10 rounded-xl pointer-events-none" />

            {/* The Two Open Pages (50/50 Full Width) */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-inner border border-slate-200">
              
              {/* Center Book Valley Spine Crease Shadow */}
              <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-14 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent z-20 pointer-events-none" />
              <div className="hidden lg:block absolute inset-y-0 left-1/2 w-[1px] bg-slate-300 z-20 pointer-events-none" />

              {/* ======================================================= */}
              {/* PAGE 1: THE LEFT LESSON READING PAGE                    */}
              {/* ======================================================= */}
              <div
                className={`p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between ${
                  isFullscreen ? "min-h-[76vh] lg:min-h-[82vh]" : "min-h-[660px]"
                } bg-[#FCFDFD] ${
                  mobileTab === "quiz" ? "hidden lg:flex" : "flex"
                }`}
              >
                {/* Botanical Leaf Corner Filigrees in 4 Corners */}
                <LeafCornerFiligree position="top-left" />
                <LeafCornerFiligree position="top-right" />
                <LeafCornerFiligree position="bottom-left" />
                <LeafCornerFiligree position="bottom-right" />

                {/* Double-Ruled Page Border Line (Matching Image 1) */}
                <div className="absolute inset-3 sm:inset-4.5 border border-slate-200/90 rounded-lg pointer-events-none" />
                <div className="absolute inset-4 sm:inset-5.5 border border-slate-100 rounded-md pointer-events-none" />

                {/* Top Chapter Header & Mode Toggle */}
                <div className="relative z-10 pb-3">
                  <div className="flex items-center justify-center">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-navy bg-navy/10 px-2.5 py-0.5 rounded">
                      CHAPTER {getRomanNumeral(activeUnit?.id)}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold italic text-navy mt-2 leading-tight tracking-tight text-center">
                    {activeUnit?.title}
                  </h2>

                  {/* Botanical Leaf Divider Rule */}
                  <LeafDivider />
                </div>

                {/* ----------------------------------------------------- */}
                {/* MODE A: SMALL CONCLUSION-TYPE SUMMARY (SINGLE PAGE)   */}
                {/* ----------------------------------------------------- */}
                {leftPageViewMode === "text" && (() => {
                  const summary = getChapterSummary(activeUnit);
                  return (
                    <div className="relative z-10 flex-1 flex flex-col justify-between py-2 text-slate-800">
                      {/* Classical scholar engraving floating right */}
                      <div>
                        <ScholarEngraving />

                        {/* Summary Prose - Single Page, No Scroll, Elegant Book Typography */}
                        <div className="text-justify font-serif text-slate-700 leading-relaxed text-xs sm:text-[13.5px] lg:text-[14.5px] space-y-3.5 pt-1">
                          <p>
                            <span className="float-left text-4xl sm:text-5xl font-serif font-bold leading-none pr-2 pt-0.5 text-navy">
                              {summary.leadChar}
                            </span>
                            {summary.paragraph1}
                          </p>

                          <p>
                            {summary.paragraph2}
                          </p>

                          <p className="italic text-slate-600 border-l-2 border-amber-600/70 pl-3 py-0.5 font-serif text-xs sm:text-[13px]">
                            {summary.conclusion}
                          </p>
                        </div>
                      </div>

                      {/* At the end: Get Full Notes (Simple and clear, no unnecessary box or card) */}
                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                        <span className="text-[11.5px] text-slate-500 font-sans italic">
                          Want the complete chapter with in-depth theory, tables & past papers?
                        </span>

                        <a
                          href={`/notes/${subject?.slug || "principles-of-management"}/read?unit=${activeUnit?.id || 1}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-navy hover:bg-navy-dark text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer group"
                          title="Open full study notes in new tab"
                        >
                          <span>Get Full Notes</span>
                          <svg
                            className="w-3.5 h-3.5 text-amber-300 transition-transform group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  );
                })()}

                {/* ----------------------------------------------------- */}
                {/* MODE B: VISUAL & HANDWRITTEN IMAGE NOTES             */}
                {/* ----------------------------------------------------- */}
                {leftPageViewMode === "images" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1 py-2">
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl mb-2 flex items-center justify-between text-xs">
                      <div className="truncate mr-2">
                        <span className="font-bold text-navy block truncate">
                          {currentImageNote?.title}
                        </span>
                        <span className="text-[10.5px] text-slate-500">
                          By {currentImageNote?.contributor}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shrink-0">
                        ✓ {currentImageNote?.verifiedBy}
                      </span>
                    </div>

                    {/* Image Viewer Container */}
                    <div
                      className="relative w-full h-[320px] sm:h-[360px] bg-slate-100 border border-slate-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center group cursor-pointer"
                      onClick={() => setLightboxImage(currentImageNote?.imageUrl)}
                      title="Click to view full-screen image"
                    >
                      <Image
                        src={currentImageNote?.imageUrl || "/real-notes.jpg"}
                        alt={currentImageNote?.title || "Handwritten Note"}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-2xs">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                        <span>Click to Zoom / Expand</span>
                      </div>
                    </div>

                    {/* Sheet Pagination Controls */}
                    <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setActiveImageNoteIndex((prev) => Math.max(0, prev - 1))}
                        disabled={activeImageNoteIndex === 0}
                        className={`font-bold ${
                          activeImageNoteIndex === 0 ? "text-slate-300 cursor-not-allowed" : "text-navy hover:underline cursor-pointer"
                        }`}
                      >
                        ❮ Prev Sheet
                      </button>

                      <div className="flex items-center gap-1.5">
                        {activeImageNotes.map((note, idx) => (
                          <button
                            key={note.id}
                            onClick={() => setActiveImageNoteIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === activeImageNoteIndex ? "bg-navy scale-125" : "bg-slate-300 hover:bg-slate-400"
                            }`}
                            title={`View Sheet ${idx + 1}`}
                          />
                        ))}
                        <span className="text-[11px] text-slate-500 font-bold ml-1.5">
                          Sheet {activeImageNoteIndex + 1} of {activeImageNotes.length}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveImageNoteIndex((prev) => Math.min(activeImageNotes.length - 1, prev + 1))}
                        disabled={activeImageNoteIndex === activeImageNotes.length - 1}
                        className={`font-bold ${
                          activeImageNoteIndex === activeImageNotes.length - 1 ? "text-slate-300 cursor-not-allowed" : "text-navy hover:underline cursor-pointer"
                        }`}
                      >
                        Next Sheet ❯
                      </button>
                    </div>
                  </div>
                )}

                {/* Left Page Bottom Pager */}
                <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs relative z-10">
                  {prevUnit ? (
                    <button
                      onClick={() => {
                        setActiveUnitId(prevUnit.id);
                        setCurrentQuestionIndex(0);
                        setActiveImageNoteIndex(0);
                      }}
                      className="inline-flex items-center gap-1 font-bold text-navy hover:underline transition-colors cursor-pointer"
                    >
                      <span>❮ Prev Chapter</span>
                    </button>
                  ) : (
                    <span className="text-slate-400 italic">First Chapter</span>
                  )}

                  <span className="text-[11px] text-slate-400 font-medium">
                    Page {activeUnit?.id * 2 - 1}
                  </span>
                </div>
              </div>

              {/* ======================================================= */}
              {/* PAGE 2: THE RIGHT INTERACTIVE WORKSPACE                 */}
              {/* ======================================================= */}
              <div
                className={`p-6 sm:p-8 lg:p-10 relative flex flex-col justify-between ${
                  isFullscreen ? "min-h-[76vh] lg:min-h-[82vh]" : "min-h-[660px]"
                } bg-white border-t lg:border-t-0 lg:border-l border-slate-200 ${
                  mobileTab === "lesson" ? "hidden lg:flex" : "flex"
                }`}
              >
                {/* Botanical Leaf Corner Filigrees in 4 Corners */}
                <LeafCornerFiligree position="top-left" />
                <LeafCornerFiligree position="top-right" />
                <LeafCornerFiligree position="bottom-left" />
                <LeafCornerFiligree position="bottom-right" />

                {/* Double-Ruled Page Border Line (Matching Image 1) */}
                <div className="absolute inset-3 sm:inset-4.5 border border-slate-200/90 rounded-lg pointer-events-none" />
                <div className="absolute inset-4 sm:inset-5.5 border border-slate-100 rounded-md pointer-events-none" />

                {/* Book-Style Study Menu in Top Portion */}
                <BookStyleStudyMenu
                  activeRightTab={activeRightTab}
                  setActiveRightTab={setActiveRightTab}
                  communityNotesCount={allCommunityUploads.length}
                />

                {/* ----------------------------------------------------- */}
                {/* TAB 1: INTERACTIVE KNOWLEDGE CHECK QUIZ               */}
                {/* ----------------------------------------------------- */}
                {activeRightTab === "quiz" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1">
                    <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-100">
                      <span className="font-serif font-bold text-xs uppercase tracking-wider text-navy">
                        Lesson {activeUnit?.id} &bull; Knowledge Check
                      </span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        Question {currentQuestionIndex + 1} of {activeQuiz.length}
                      </span>
                    </div>

                    <div className="my-auto py-3">
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-2xs">
                        
                        <div className="flex items-center justify-between pb-2">
                          <span className="font-bold text-xs uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                            Test Your Knowledge
                          </span>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                            ✓ University Exam Format
                          </span>
                        </div>

                        <div className="mt-3">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                            Question {currentQuestionIndex + 1} of {activeQuiz.length}:
                          </span>
                          <h3 className="font-bold text-sm sm:text-[15px] text-navy leading-snug">
                            {currentQuestion?.question}
                          </h3>
                        </div>

                        {/* Options Radio List */}
                        <div className="mt-4 space-y-2">
                          {currentQuestion?.options.map((opt) => {
                            const isSelected = selectedAnswers[currentQuestion.id] === opt.key;
                            const isSubmitted = submittedQuestions[currentQuestion.id];
                            const isCorrect = opt.key === currentQuestion.correct;

                            let optionBg = "bg-white hover:bg-slate-100 text-slate-800 border-slate-200";
                            if (isSelected && !isSubmitted) {
                              optionBg = "bg-navy/5 text-navy border-navy font-bold shadow-2xs";
                            }
                            if (isSubmitted) {
                              if (isCorrect) {
                                optionBg = "bg-emerald-50 text-emerald-950 border-emerald-500 font-bold";
                              } else if (isSelected && !isCorrect) {
                                optionBg = "bg-rose-50 text-rose-950 border-rose-400 font-bold";
                              }
                            }

                            return (
                              <label
                                key={opt.key}
                                onClick={() => handleSelectOption(currentQuestion.id, opt.key)}
                                className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer text-xs sm:text-[13px] ${optionBg}`}
                              >
                                <div
                                  className={`w-4 h-4 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${
                                    isSelected ? "border-navy bg-navy" : "border-slate-300 bg-white"
                                  }`}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>

                                <div className="flex-1 leading-snug">
                                  <span className="font-bold mr-1.5">{opt.key})</span>
                                  <span>{opt.text}</span>
                                </div>
                              </label>
                            );
                          })}
                        </div>

                        {/* Immediate Feedback */}
                        {submittedQuestions[currentQuestion?.id] && (
                          <div
                            className={`mt-3.5 p-3 rounded-xl text-xs leading-relaxed border ${
                              selectedAnswers[currentQuestion?.id] === currentQuestion?.correct
                                ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                                : "bg-amber-50 border-amber-300 text-amber-900"
                            }`}
                          >
                            <div className="font-bold mb-1">
                              {selectedAnswers[currentQuestion?.id] === currentQuestion?.correct ? (
                                <span className="text-emerald-700">✓ Correct Answer!</span>
                              ) : (
                                <span className="text-rose-700">✕ Incorrect &bull; Correct option is {currentQuestion?.correct}</span>
                              )}
                            </div>
                            <p className="text-[11.5px] text-slate-700">
                              {currentQuestion?.explanation}
                            </p>
                          </div>
                        )}

                        {/* Navigation & Submit Buttons */}
                        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                          <button
                            onClick={handlePrevQuestion}
                            disabled={currentQuestionIndex === 0}
                            className={`text-xs font-bold ${
                              currentQuestionIndex === 0 ? "text-slate-300 cursor-not-allowed" : "text-navy hover:underline cursor-pointer"
                            }`}
                          >
                            ❮ Prev
                          </button>

                          {!submittedQuestions[currentQuestion?.id] ? (
                            <button
                              onClick={() => handleSubmitQuestion(currentQuestion?.id)}
                              disabled={!selectedAnswers[currentQuestion?.id]}
                              className={`relative group px-6 py-2 rounded-xl font-serif font-bold text-xs uppercase tracking-widest transition-all border-2 ${
                                selectedAnswers[currentQuestion?.id]
                                  ? "bg-white hover:bg-navy text-navy hover:text-white border-navy shadow-md cursor-pointer -translate-y-0.5 active:translate-y-0"
                                  : "bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed"
                              }`}
                            >
                              <span className="relative z-10 flex items-center gap-1.5">
                                <span className="text-amber-600 text-xs">✦</span>
                                <span>SUBMIT TEST</span>
                                <span className="text-amber-600 text-xs">✦</span>
                              </span>
                              {/* Stamped double border line effect (Image 1 style) */}
                              <div className="absolute inset-0.5 border border-dashed border-current opacity-30 rounded-lg pointer-events-none" />
                            </button>
                          ) : (
                            <button
                              onClick={handleNextQuestion}
                              disabled={currentQuestionIndex === activeQuiz.length - 1}
                              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-navy font-bold text-xs uppercase cursor-pointer"
                            >
                              {currentQuestionIndex === activeQuiz.length - 1 ? "Quiz Finished" : "Next Question ❯"}
                            </button>
                          )}

                          <button
                            onClick={handleNextQuestion}
                            disabled={currentQuestionIndex === activeQuiz.length - 1}
                            className={`text-xs font-bold ${
                              currentQuestionIndex === activeQuiz.length - 1 ? "text-slate-300 cursor-not-allowed" : "text-navy hover:underline cursor-pointer"
                            }`}
                          >
                            Next ❯
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}



                {/* ----------------------------------------------------- */}
                {/* TAB 2: COMMUNITY CONTRIBUTED & VERIFIED EXTRA NOTES   */}
                {/* ----------------------------------------------------- */}
                {activeRightTab === "community" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <VerifiedNotesLogo className="w-4 h-4 text-emerald-600" />
                          <span className="font-bold text-xs sm:text-sm uppercase text-navy">
                            Student Uploads & Verified Extra Notes
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          Unit {activeUnit?.id} &bull; {allCommunityUploads.length} Resources Available
                        </span>
                      </div>

                      <button
                        onClick={() => setIsUploadModalOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-navy hover:bg-navy-dark text-white text-xs font-bold shadow-xs cursor-pointer flex items-center gap-1"
                      >
                        <span className="font-bold">+</span>
                        <span>Upload Notes</span>
                      </button>
                    </div>

                    <div className="my-2.5 p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center gap-2">
                      <VerifiedNotesLogo className="w-4 h-4 text-blue-600 shrink-0" />
                      <p className="text-[11px] leading-relaxed">
                        <strong>Faculty Quality Review:</strong> All community notes are verified by subject teachers before receiving the verified badge to ensure TU/PU syllabus accuracy.
                      </p>
                    </div>

                    <div className="space-y-2.5 overflow-y-auto max-h-[400px] pr-1 scrollbar-thin">
                      {allCommunityUploads.map((item) => (
                        <div
                          key={item.id}
                          className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-2xs space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-bold text-xs sm:text-[13px] text-navy leading-tight">
                                {item.title}
                              </h4>
                              <span className="text-[10.5px] text-slate-500 block mt-0.5">
                                By {item.author} &bull; <span className="font-semibold text-navy">{item.campus}</span>
                              </span>
                            </div>

                            <span
                              className={`px-2 py-0.5 rounded text-[9.5px] font-bold shrink-0 ${
                                item.status === "verified" ? "bg-emerald-600 text-white" : "bg-amber-600 text-white"
                              }`}
                            >
                              {item.status === "verified" ? "✓ Verified" : "⏳ Under Review"}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-600 italic leading-snug">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between text-[10.5px] text-slate-500 pt-2 border-t border-slate-200">
                            <span>
                              {item.pagesCount} &bull; {item.fileSize} &bull; ⭐ {item.rating}
                            </span>

                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  setLeftPageViewMode("images");
                                  setActiveImageNoteIndex(0);
                                }}
                                className="px-2 py-0.5 bg-white hover:bg-slate-100 text-navy rounded border border-slate-300 font-bold cursor-pointer"
                              >
                                Preview Sheet
                              </button>
                              <button
                                onClick={() => alert(`Downloading verified PDF: ${item.title}`)}
                                className="px-2 py-0.5 bg-navy hover:bg-navy-dark text-white rounded font-bold cursor-pointer"
                              >
                                Download PDF
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------- */}
                {/* TAB 3: TU PAST 10-YEARS QUESTIONS & MODEL ANSWERS     */}
                {/* ----------------------------------------------------- */}
                {activeRightTab === "past-questions" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <PastPapersLogo className="w-4 h-4 text-amber-600" />
                        <span className="font-bold text-xs sm:text-sm uppercase text-navy">
                          TU & PU Past Board Exam Questions
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        Unit {activeUnit?.id} &bull; {activeUnit?.examMarks}
                      </span>
                    </div>

                    <div className="my-3 space-y-3 overflow-y-auto max-h-[460px] pr-2 scrollbar-thin">
                      {activeUnit?.pastQuestions?.map((pq, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl shadow-2xs">
                          <div className="flex items-center justify-between text-xs font-bold text-navy mb-1">
                            <span>{pq.university} &bull; {pq.year}</span>
                            <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                              {pq.marks} Marks
                            </span>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-navy leading-snug">
                            &ldquo;{pq.question}&rdquo;
                          </h4>
                          <div className="mt-2.5 pt-2 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
                            <span className="font-bold block text-navy uppercase text-[9.5px] tracking-wider mb-0.5">
                              Model Answer Blueprint:
                            </span>
                            <p className="whitespace-pre-line italic text-[11.5px]">
                              {pq.answerOutline}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------- */}
                {/* TAB 4: EXAM SUMMARY & FLASHPOINTS                     */}
                {/* ----------------------------------------------------- */}
                {activeRightTab === "summary" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <SummaryLogo className="w-4 h-4 text-yellow-600" />
                        <span className="font-bold text-xs sm:text-sm uppercase text-navy">
                          Night-Before Exam Summary & Formulas
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-bold">
                        High-Yield Points
                      </span>
                    </div>

                    <div className="my-3 space-y-2 overflow-y-auto max-h-[460px] pr-2 scrollbar-thin text-xs text-slate-700 leading-relaxed">
                      {activeUnit?.summaryPoints?.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                          <span className="text-amber-500 font-bold text-sm shrink-0">✦</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ----------------------------------------------------- */}
                {/* TAB 5: PDF DOWNLOADS                                  */}
                {/* ----------------------------------------------------- */}
                {activeRightTab === "downloads" && (
                  <div className="relative z-10 flex flex-col justify-between flex-1">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <PdfHandoutsLogo className="w-4 h-4 text-rose-600" />
                        <span className="font-bold text-xs sm:text-sm uppercase text-navy">
                          Handouts & Official PDF Materials
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-bold">
                        Free Access
                      </span>
                    </div>

                    <div className="my-3 space-y-2.5 overflow-y-auto max-h-[460px] pr-2 scrollbar-thin">
                      {activeUnit?.resources?.map((res, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl">
                          <div>
                            <h4 className="font-bold text-xs text-navy">
                              {res.name}
                            </h4>
                            <span className="text-[10px] text-slate-500">
                              {res.format} &bull; {res.size} &bull; {res.downloads.toLocaleString()} downloads
                            </span>
                          </div>
                          <button
                            onClick={() => alert(`Downloading ${res.name}...`)}
                            className="px-2.5 py-1 rounded bg-navy hover:bg-navy-dark text-white text-xs font-bold shrink-0 transition-colors cursor-pointer"
                          >
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Right Page Bottom Pager */}
                <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs relative z-10">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Page {activeUnit?.id * 2}
                  </span>

                  {nextUnit ? (
                    <button
                      onClick={() => {
                        setActiveUnitId(nextUnit.id);
                        setCurrentQuestionIndex(0);
                        setActiveImageNoteIndex(0);
                      }}
                      className="inline-flex items-center gap-1 font-bold text-navy hover:underline transition-colors cursor-pointer"
                    >
                      <span>Next Chapter ❯</span>
                    </button>
                  ) : (
                    <span className="text-slate-400 italic">End of Syllabus</span>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Book Drop Shadow */}
          <div className="h-5 w-[88%] mx-auto bg-slate-900/15 rounded-full blur-[12px] mt-3 pointer-events-none" />

        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. LIGHTBOX FULLSCREEN MODAL (FOR HIGH-RES IMAGE NOTES)             */}
      {/* =================================================================== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-2 right-2 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white text-xs font-bold cursor-pointer z-10"
            >
              ✕ Close Preview
            </button>
            <div className="relative w-full h-[85vh] rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src={lightboxImage}
                alt="High-res notes preview"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-2 text-center text-white/90 text-xs">
              <span>{currentImageNote?.title} &bull; Contributed by {currentImageNote?.contributor}</span>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. USER UPLOAD NOTES MODAL WITH FACULTY VERIFICATION PIPELINE       */}
      {/* =================================================================== */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl text-slate-800 border border-slate-200 overflow-hidden">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-navy">
                  Contribute Chapter Notes
                </h3>
                <span className="text-[11px] text-slate-500">
                  Unit {activeUnit?.id}: {activeUnit?.shortTitle || activeUnit?.title}
                </span>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>

            {uploadSubmittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl font-bold border-2 border-emerald-500">
                  ✓
                </div>
                <h4 className="font-bold text-lg text-emerald-950">
                  Notes Submitted Successfully!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{uploadFormData.name}</strong>! Your notes for <strong>Unit {activeUnit?.id}</strong> have been submitted for faculty review. We have added a preview to this chapter’s Verified Notes tab.
                </p>
              </div>
            ) : (
              <form onSubmit={handleUploadSubmit} className="mt-4 space-y-3.5 text-xs">
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl leading-relaxed text-blue-900">
                  <span className="font-bold flex items-center gap-1.5 text-navy mb-0.5">
                    <ShieldLogo className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Faculty Quality Review:</span>
                  </span>
                  All student notes are verified for syllabus coverage by BBA Easy Notes teachers within 24 hours before public release.
                </div>

                <div>
                  <label className="font-bold text-navy block mb-1">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Karki"
                    value={uploadFormData.name}
                    onChange={(e) => setUploadFormData({ ...uploadFormData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="font-bold text-navy block mb-1">
                    Your College / Campus (TU, PU, KU):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shanker Dev Campus, KUSOM, NCC, Quest"
                    value={uploadFormData.campus}
                    onChange={(e) => setUploadFormData({ ...uploadFormData, campus: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>

                <div>
                  <label className="font-bold text-navy block mb-1">
                    Format of Notes:
                  </label>
                  <select
                    value={uploadFormData.noteType}
                    onChange={(e) => setUploadFormData({ ...uploadFormData, noteType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  >
                    <option value="Handwritten Scanned Sheets">Handwritten Scanned Sheets (Images)</option>
                    <option value="Complete Chapter PDF">Complete Chapter PDF</option>
                    <option value="Conceptual Mind Map & Flowchart">Conceptual Mind Map & Flowchart</option>
                    <option value="Exam Night Formula Sheet">Exam Night Formula Sheet</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-navy block mb-1">
                    Select Document / Images (PDF, JPG, PNG up to 25MB):
                  </label>
                  <div className="border-2 border-dashed border-slate-300 bg-slate-50 p-4 rounded-xl text-center cursor-pointer hover:bg-slate-100 transition-colors">
                    <svg className="w-6 h-6 mx-auto text-navy mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-[11px] font-bold text-navy">
                      Click to choose files or drag and drop
                    </span>
                    <span className="block text-[9.5px] text-slate-400 mt-0.5">
                      Scanned photos of handwritten notebooks are accepted
                    </span>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-navy block mb-1">
                    Description / Key Topics Included:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Clean notes on Henry Mintzberg's 10 roles with diagram and Nepal case study."
                    value={uploadFormData.description}
                    onChange={(e) => setUploadFormData({ ...uploadFormData, description: e.target.value })}
                    className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-navy focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-navy hover:bg-navy-dark text-white font-bold text-xs shadow-md cursor-pointer"
                  >
                    Submit for Faculty Verification
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
