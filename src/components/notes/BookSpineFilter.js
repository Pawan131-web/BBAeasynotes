"use client";

import { useState } from "react";
import {
  UNIVERSITIES_LIST,
  SEMESTERS_LIST,
  RESOURCE_TYPES,
  SUBJECT_CATEGORIES,
  NOTES_CATALOG,
} from "@/data/notesData";

export default function BookSpineFilter({
  searchQuery = "",
  setSearchQuery,
  sortBy = "recommended",
  setSortBy,
  totalResultsCount,
  selectedUniversity = "all",
  setSelectedUniversity,
  selectedSemester = "all",
  setSelectedSemester,
  selectedResourceType = "all",
  setSelectedResourceType,
  selectedCategory = "all",
  setSelectedCategory,
  onResetFilters,
}) {
  // Master accordion toggles - derived naturally from props, with user override support
  const [allUnisOpenOverride, setAllUnisOpenOverride] = useState(null);
  const [expandedUniOverride, setExpandedUniOverride] = useState(undefined);
  const [domainOpenOverride, setDomainOpenOverride] = useState(null);

  const isAllUnisOpen = allUnisOpenOverride ?? (selectedUniversity !== "all");
  const expandedUni = expandedUniOverride !== undefined ? expandedUniOverride : (selectedUniversity !== "all" ? selectedUniversity : null);
  const isDomainOpen = domainOpenOverride ?? (selectedCategory !== "all");

  const handleReset = () => {
    setAllUnisOpenOverride(false);
    setExpandedUniOverride(null);
    setDomainOpenOverride(false);
    if (onResetFilters) onResetFilters();
  };

  const isFiltered =
    Boolean(searchQuery && searchQuery.trim() !== "") ||
    selectedUniversity !== "all" ||
    selectedSemester !== "all" ||
    selectedResourceType !== "all" ||
    selectedCategory !== "all";

  // Dynamic note count calculation for Universities & Semesters
  const getNoteCount = (uniId, sem = "all") => {
    return NOTES_CATALOG.filter((note) => {
      const matchUni = uniId === "all" || note.universities.includes(uniId);
      const matchSem = sem === "all" || note.semester === sem;
      return matchUni && matchSem;
    }).length;
  };

  // Dynamic count for Resource Types
  const getResourceTypeCount = (typeId) => {
    return NOTES_CATALOG.filter((note) => {
      return typeId === "all" || (note.resourceTypes && note.resourceTypes.includes(typeId));
    }).length;
  };

  // Dynamic count for Subject Categories
  const getCategoryCount = (categoryName) => {
    return NOTES_CATALOG.filter((note) => {
      return categoryName === "all" || note.category.toLowerCase() === categoryName.toLowerCase();
    }).length;
  };

  // Master "All Universities" spine click handler
  const handleAllUniversitiesSpineClick = () => {
    if (!isAllUnisOpen) {
      // If closed, open it and select "all"
      setAllUnisOpenOverride(true);
      setSelectedUniversity("all");
      setSelectedSemester("all");
      setExpandedUniOverride(null);
    } else {
      // If already open:
      if (selectedUniversity !== "all") {
        // Switch back to "All Universities" overview
        setSelectedUniversity("all");
        setSelectedSemester("all");
        setExpandedUniOverride(null);
      } else {
        // Toggle closed
        setAllUnisOpenOverride(false);
        setExpandedUniOverride(null);
      }
    }
  };

  // Click on a specific university inside "All Universities"
  const handleUniversityClick = (e, uniId) => {
    e.stopPropagation();
    if (uniId === "all") {
      setSelectedUniversity("all");
      setSelectedSemester("all");
      setExpandedUniOverride(null);
      return;
    }

    if (uniId === selectedUniversity && expandedUni === uniId) {
      // If already open, clicking it contracts its semesters
      setExpandedUniOverride(null);
      return;
    }

    // Select university and expand its 8 semesters, previous one contracts
    setSelectedUniversity(uniId);
    setSelectedSemester("all");
    setExpandedUniOverride(uniId);
  };

  // Click on a semester
  const handleSemesterClick = (e, uniId, sem) => {
    e.stopPropagation();
    setSelectedUniversity(uniId);
    setSelectedSemester(sem);
  };

  // Individual universities (excluding "all" since "all" is the master spine)
  const individualUniversities = UNIVERSITIES_LIST.filter((u) => u.id !== "all");

  // Active labels for headers
  const currentResourceLabel =
    RESOURCE_TYPES.find((r) => r.id === selectedResourceType)?.label || "All Formats";

  return (
    <aside className="w-full lg:w-[350px] xl:w-[370px] shrink-0 lg:sticky lg:top-20 self-start">
      {/* UNIFIED FILTER CARD: UNIVERSITIES, SEMESTERS & SUBJECT DOMAINS */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs transition-all duration-300">
        
        {/* Card Header */}
        <div className="pb-3.5 mb-3.5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-[17px] sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
              Select Filters
            </h3>
            {totalResultsCount !== undefined && (
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold text-[11px] border border-slate-200/80">
                {totalResultsCount}
              </span>
            )}
          </div>
          {isFiltered && (
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-syllabus hover:underline cursor-pointer transition-colors px-2 py-1 rounded-md hover:bg-syllabus-light"
            >
              Reset
            </button>
          )}
        </div>

        {/* Search Bar & Clean Inline Sort */}
        <div className="mb-4 space-y-2">
          {/* Search Input */}
          {setSearchQuery && (
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes, topics, codes..."
                className="w-full pl-9.5 pr-8 py-2 bg-slate-50/90 hover:bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all font-normal"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs font-semibold p-1 cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          )}

          {/* Clean Inline Sort Control */}
          {setSortBy && (
            <div className="flex items-center justify-between px-1 text-xs text-slate-500 pt-0.5">
              <span className="text-[11.5px] text-slate-500 font-medium">
                {totalResultsCount !== undefined ? `${totalResultsCount} Subjects Available` : "All Subjects"}
              </span>

              <div className="flex items-center gap-1.5">
                <span className="text-[11.5px] text-slate-400 font-normal">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-slate-100/80 hover:bg-slate-200/60 text-slate-700 text-[11.5px] font-semibold py-1 pl-2.5 pr-6 rounded-lg border border-slate-200/60 focus:outline-none cursor-pointer transition-colors"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="popular">Most Files</option>
                    <option value="az">Title (A-Z)</option>
                  </select>
                  <svg
                    className="w-3 h-3 text-slate-400 absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stacked Book Spines on Shelf */}
        <div className="space-y-3.5">

          {/* ============================================================== */}
          {/* SECTION 1: ALL UNIVERSITIES (MASTER SPINE WITH NESTED BRANCHES) */}
          {/* ============================================================== */}
          <div className="relative">
            {/* Level 0: Master "All Universities" Book Spine */}
            <div
              onClick={handleAllUniversitiesSpineClick}
              className={`
                relative group flex items-center justify-between px-4 py-3.5 sm:py-4 rounded-r-xl border transition-all duration-300 ease-out cursor-pointer select-none
                ${
                  selectedUniversity === "all"
                    ? "translate-x-3 sm:translate-x-3.5 bg-yellow border-slate-900 shadow-md z-10"
                    : "translate-x-0 bg-white border-slate-800/80 hover:translate-x-2.5 hover:bg-yellow hover:border-slate-900 hover:shadow-sm"
                }
              `}
            >
              {/* Left Orange Bookmark Stripe */}
              <div
                className={`
                  absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors duration-200
                  ${
                    selectedUniversity === "all"
                      ? "bg-[#D97706]"
                      : "bg-transparent group-hover:bg-[#D97706]"
                  }
                `}
              />

              {/* Title */}
              <div className="pl-1.5 flex-1 pr-2">
                <span
                  className={`
                    block text-[13.5px] sm:text-sm font-bold tracking-tight leading-tight transition-colors duration-200 whitespace-nowrap
                    ${selectedUniversity === "all" ? "text-navy" : "text-slate-900 group-hover:text-navy"}
                  `}
                >
                  All Universities
                </span>
              </div>

              {/* Right: Count, Dropdown Chevron & Ribbed Lines */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`
                    text-xs font-semibold transition-colors duration-200 whitespace-nowrap
                    ${
                      selectedUniversity === "all"
                        ? "text-navy/80 font-bold"
                        : "text-slate-500 group-hover:text-navy/80"
                    }
                  `}
                >
                  {selectedUniversity === "all" ? `${getNoteCount("all")} Notes` : "Nepal"}
                </span>

                {/* Chevron that rotates 90 deg when open */}
                <svg
                  className={`
                    w-3.5 h-3.5 transition-transform duration-300 shrink-0
                    ${isAllUnisOpen ? "rotate-90 text-navy font-bold" : "text-slate-400 group-hover:text-navy"}
                  `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>

                {/* Ribbed Page Lines */}
                <div className="flex items-center gap-[2px] pr-0.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                </div>
              </div>
            </div>

            {/* LEVEL 1: UNIVERSITIES LIST INSIDE "ALL UNIVERSITIES" */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isAllUnisOpen
                  ? "max-h-[1600px] opacity-100 my-2.5"
                  : "max-h-0 opacity-0 my-0 pointer-events-none"
              }`}
            >
              <div className="ml-3 sm:ml-4 pl-3 sm:pl-3.5 border-l-2 border-slate-300/90 space-y-2.5 py-1">
                
                {/* Child Option: View All Universities Overview */}
                <div
                  onClick={(e) => handleUniversityClick(e, "all")}
                  className={`
                    relative group/sub flex items-center justify-between px-3.5 py-2.5 rounded-r-xl border transition-all duration-200 cursor-pointer select-none text-xs
                    ${
                      selectedUniversity === "all"
                        ? "translate-x-2 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                        : "bg-slate-50/90 border-slate-200/90 text-slate-700 hover:bg-yellow hover:border-slate-800 hover:translate-x-1.5 hover:text-navy"
                    }
                  `}
                >
                  <div
                    className={`
                      absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors
                      ${
                        selectedUniversity === "all"
                          ? "bg-[#D97706]"
                          : "bg-transparent group-hover/sub:bg-[#D97706]"
                      }
                    `}
                  />
                  <span className="pl-1 font-semibold text-xs sm:text-[13px] whitespace-nowrap">
                    All Universities (Overview)
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[11px] font-semibold opacity-85 whitespace-nowrap">
                      {getNoteCount("all")} Notes
                    </span>
                    <div className="flex items-center gap-[1.5px] pr-0.5 shrink-0">
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Individual Universities: TU, PU, KU, PU-East */}
                {individualUniversities.map((uni) => {
                  const isUniSelected = selectedUniversity === uni.id;
                  const isUniExpanded = expandedUni === uni.id;
                  const uniNoteCount = getNoteCount(uni.id, "all");

                  return (
                    <div key={uni.id} className="transition-all duration-200">
                      
                      {/* University Book Spine Item */}
                      <div
                        onClick={(e) => handleUniversityClick(e, uni.id)}
                        className={`
                          relative group/uni flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-r-xl border transition-all duration-200 cursor-pointer select-none text-xs
                          ${
                            isUniSelected
                              ? "translate-x-2.5 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                              : "bg-white border-slate-800/70 text-slate-800 hover:bg-yellow hover:border-slate-900 hover:translate-x-2 hover:text-navy"
                          }
                        `}
                      >
                        {/* Orange Bookmark Stripe */}
                        <div
                          className={`
                            absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors
                            ${
                              isUniSelected
                                ? "bg-[#D97706]"
                                : "bg-transparent group-hover/uni:bg-[#D97706]"
                            }
                          `}
                        />

                        {/* University Name */}
                        <div className="pl-1 pr-2 flex-1 min-w-0">
                          <span className="font-bold text-[12.5px] sm:text-[13px] block leading-snug whitespace-nowrap">
                            {uni.name}
                          </span>
                        </div>

                        {/* Count, Chevron & Ribbed Lines */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[11px] font-semibold opacity-80 whitespace-nowrap">
                            {uniNoteCount} Notes
                          </span>

                          <svg
                            className={`
                              w-3 h-3 transition-transform duration-300 shrink-0
                              ${
                                isUniExpanded
                                  ? "rotate-90 text-navy font-bold"
                                  : "text-slate-400 group-hover/uni:text-navy"
                              }
                            `}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>

                          <div className="flex items-center gap-[1.5px] pr-0.5 opacity-60 group-hover/uni:opacity-100 shrink-0">
                            <span className="w-[1px] h-3.5 bg-slate-900 rounded-full" />
                            <span className="w-[1px] h-3.5 bg-slate-900 rounded-full" />
                            <span className="w-[1px] h-3.5 bg-slate-900 rounded-full" />
                            <span className="w-[1px] h-3.5 bg-slate-900 rounded-full" />
                          </div>
                        </div>
                      </div>

                      {/* LEVEL 2: 8 SEMESTERS INSIDE THIS UNIVERSITY */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isUniExpanded
                            ? "max-h-[600px] opacity-100 my-2"
                            : "max-h-0 opacity-0 my-0 pointer-events-none"
                        }`}
                      >
                        <div className="ml-3 sm:ml-3.5 pl-3 border-l-2 border-amber-400/80 space-y-1.5 py-1">
                          
                          {/* All Semesters Option */}
                          <div
                            onClick={(e) => handleSemesterClick(e, uni.id, "all")}
                            className={`
                              relative group/sem flex items-center justify-between px-3 py-2 rounded-r-lg border transition-all duration-200 cursor-pointer select-none text-xs
                              ${
                                isUniSelected && selectedSemester === "all"
                                  ? "translate-x-1.5 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                                  : "bg-slate-50/80 border-slate-200/90 text-slate-700 hover:bg-yellow hover:border-slate-800 hover:translate-x-1 hover:text-navy"
                              }
                            `}
                          >
                            <div
                              className={`
                                absolute left-0 top-0 bottom-0 w-1 rounded-l transition-colors
                                ${
                                  isUniSelected && selectedSemester === "all"
                                    ? "bg-[#D97706]"
                                    : "bg-transparent group-hover/sem:bg-[#D97706]"
                                }
                              `}
                            />
                            <span className="pl-1 font-semibold text-[12px] whitespace-nowrap">
                              All {uni.shortName} Semesters
                            </span>
                            <span className="text-[10px] font-semibold opacity-75 whitespace-nowrap">
                              {uniNoteCount} Notes
                            </span>
                          </div>

                          {/* Semesters 1 to 8 */}
                          {SEMESTERS_LIST.map((sem, idx) => {
                            const isSemActive = isUniSelected && selectedSemester === sem;
                            const semCount = getNoteCount(uni.id, sem);

                            return (
                              <div
                                key={sem}
                                onClick={(e) => handleSemesterClick(e, uni.id, sem)}
                                className={`
                                  relative group/sem flex items-center justify-between px-3 py-2 rounded-r-lg border transition-all duration-200 cursor-pointer select-none text-xs
                                  ${
                                    isSemActive
                                      ? "translate-x-1.5 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                                      : "bg-white border-slate-200/80 text-slate-700 hover:bg-yellow hover:border-slate-800 hover:translate-x-1 hover:text-navy"
                                  }
                                `}
                              >
                                {/* Left Orange Bookmark Line */}
                                <div
                                  className={`
                                    absolute left-0 top-0 bottom-0 w-1 rounded-l transition-colors
                                    ${
                                      isSemActive
                                        ? "bg-[#D97706]"
                                        : "bg-transparent group-hover/sem:bg-[#D97706]"
                                    }
                                  `}
                                />

                                {/* Number Bubble + Semester Name */}
                                <div className="pl-1 flex items-center gap-1.5 min-w-0">
                                  <span
                                    className={`
                                      w-3.5 h-3.5 rounded-full text-[8.5px] flex items-center justify-center font-bold shrink-0 transition-colors
                                      ${
                                        isSemActive
                                          ? "bg-navy text-yellow"
                                          : "bg-slate-200/80 text-slate-600 group-hover/sem:bg-navy group-hover/sem:text-yellow"
                                      }
                                    `}
                                  >
                                    {idx + 1}
                                  </span>
                                  <span className="font-semibold tracking-tight text-[12px] whitespace-nowrap">
                                    {sem}
                                  </span>
                                </div>

                                {/* Right: Notes count & Lines */}
                                <div className="flex items-center gap-1 shrink-0 opacity-80 group-hover/sem:opacity-100">
                                  <span className="text-[10px] font-semibold whitespace-nowrap">
                                    {semCount} {semCount === 1 ? "Note" : "Notes"}
                                  </span>
                                  <div className="flex items-center gap-[1px] pr-0.5 shrink-0">
                                    <span className="w-[1px] h-2.5 bg-slate-800 rounded-full" />
                                    <span className="w-[1px] h-2.5 bg-slate-800 rounded-full" />
                                    <span className="w-[1px] h-2.5 bg-slate-800 rounded-full" />
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 2: SUBJECT DOMAIN FILTER (SAME BOOK SPINE STYLE)       */}
          {/* ============================================================== */}
          <div className="relative">
            {/* Master Spine: Subject Domain */}
            <div
              onClick={() => setDomainOpenOverride(!isDomainOpen)}
              className={`
                relative group flex items-center justify-between px-4 py-3.5 sm:py-4 rounded-r-xl border transition-all duration-300 ease-out cursor-pointer select-none
                ${
                  selectedCategory !== "all"
                    ? "translate-x-3 sm:translate-x-3.5 bg-yellow border-slate-900 shadow-md z-10"
                    : "translate-x-0 bg-white border-slate-800/80 hover:translate-x-2.5 hover:bg-yellow hover:border-slate-900 hover:shadow-sm"
                }
              `}
            >
              {/* Left Orange Bookmark Stripe */}
              <div
                className={`
                  absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors duration-200
                  ${
                    selectedCategory !== "all"
                      ? "bg-[#D97706]"
                      : "bg-transparent group-hover:bg-[#D97706]"
                  }
                `}
              />

              {/* Title */}
              <div className="pl-1.5 flex-1 pr-2">
                <span
                  className={`
                    block text-[13.5px] sm:text-sm font-bold tracking-tight leading-tight transition-colors duration-200 whitespace-nowrap
                    ${selectedCategory !== "all" ? "text-navy" : "text-slate-900 group-hover:text-navy"}
                  `}
                >
                  Subject Domain
                </span>
              </div>

              {/* Right: Active Category, Chevron & Ribbed Lines */}
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`
                    text-xs font-semibold transition-colors duration-200 whitespace-nowrap
                    ${
                      selectedCategory !== "all"
                        ? "text-navy/80 font-bold"
                        : "text-slate-500 group-hover:text-navy/80"
                    }
                  `}
                >
                  {selectedCategory === "all" ? "All Domains" : selectedCategory}
                </span>

                <svg
                  className={`
                    w-3.5 h-3.5 transition-transform duration-300 shrink-0
                    ${isDomainOpen ? "rotate-90 text-navy font-bold" : "text-slate-400 group-hover:text-navy"}
                  `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>

                <div className="flex items-center gap-[2px] pr-0.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                  <span className="w-[1px] h-4 bg-slate-900 rounded-full" />
                </div>
              </div>
            </div>

            {/* Nested Domain Options */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isDomainOpen
                  ? "max-h-[600px] opacity-100 my-2.5"
                  : "max-h-0 opacity-0 my-0 pointer-events-none"
              }`}
            >
              <div className="ml-3 sm:ml-4 pl-3 sm:pl-3.5 border-l-2 border-slate-300/90 space-y-2 py-1">
                
                {/* All Domains */}
                <div
                  onClick={() => setSelectedCategory("all")}
                  className={`
                    relative group/cat flex items-center justify-between px-3.5 py-2.5 rounded-r-xl border transition-all duration-200 cursor-pointer select-none text-xs
                    ${
                      selectedCategory === "all"
                        ? "translate-x-2 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                        : "bg-white border-slate-200/90 text-slate-700 hover:bg-yellow hover:border-slate-800 hover:translate-x-1.5 hover:text-navy"
                    }
                  `}
                >
                  <div
                    className={`
                      absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors
                      ${
                        selectedCategory === "all"
                          ? "bg-[#D97706]"
                          : "bg-transparent group-hover/cat:bg-[#D97706]"
                      }
                    `}
                  />
                  <span className="pl-1 font-semibold text-xs sm:text-[13px] whitespace-nowrap">
                    All Subject Domains
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[11px] font-semibold opacity-75 whitespace-nowrap">
                      {getCategoryCount("all")} Notes
                    </span>
                    <div className="flex items-center gap-[1.5px] pr-0.5 shrink-0">
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                      <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                {SUBJECT_CATEGORIES.map((cat) => {
                  const isCatActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                  const catCount = getCategoryCount(cat);

                  return (
                    <div
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`
                        relative group/cat flex items-center justify-between px-3.5 py-2.5 rounded-r-xl border transition-all duration-200 cursor-pointer select-none text-xs
                        ${
                          isCatActive
                            ? "translate-x-2 bg-yellow border-slate-900 text-navy font-bold shadow-2xs z-10"
                            : "bg-white border-slate-200/90 text-slate-700 hover:bg-yellow hover:border-slate-800 hover:translate-x-1.5 hover:text-navy"
                        }
                      `}
                    >
                      {/* Left Orange Stripe */}
                      <div
                        className={`
                          absolute left-0 top-0 bottom-0 w-1.5 rounded-l transition-colors
                          ${
                            isCatActive
                              ? "bg-[#D97706]"
                              : "bg-transparent group-hover/cat:bg-[#D97706]"
                          }
                        `}
                      />

                      <span className="pl-1 font-semibold text-xs sm:text-[13px] whitespace-nowrap">
                        {cat}
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[11px] font-semibold opacity-75 whitespace-nowrap">
                          {catCount} {catCount === 1 ? "Subject" : "Subjects"}
                        </span>
                        <div className="flex items-center gap-[1.5px] pr-0.5 shrink-0">
                          <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                          <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                          <span className="w-[1px] h-3 bg-slate-800 rounded-full" />
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>

        {/* Book Shelf Base Line (Solid grounding black bar) */}
        <div className="h-2.5 w-full bg-[#18181B] rounded-full mt-6 shadow-xs" />

      </div>
    </aside>
  );
}