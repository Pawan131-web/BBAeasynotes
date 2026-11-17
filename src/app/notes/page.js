"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookSpineFilter from "@/components/notes/BookSpineFilter";
import NotesCard from "@/components/notes/NotesCard";
import { NOTES_CATALOG, UNIVERSITIES_LIST, RESOURCE_TYPES } from "@/data/notesData";

function normalizeSemesterParam(param) {
  if (!param || param === "all") return "all";
  const trimmed = param.trim();
  const numMatch = trimmed.match(/\d+/);
  if (numMatch) {
    return `Semester ${numMatch[0]}`;
  }
  return trimmed;
}

function normalizeUniversityParam(param) {
  if (!param || param === "all") return "all";
  const lower = param.toLowerCase().trim();
  if (lower === "purbanchal") return "pu-east";
  return lower;
}

function normalizeQueryParam(param) {
  if (!param) return "";
  let q = param.trim();
  // Turn slug-style queries like 'principles-of-management' into readable words
  if (q.includes("-") && !q.includes(" ")) {
    q = q.replace(/-/g, " ");
  }
  return q;
}

function NotesContent() {
  const searchParams = useSearchParams();

  // Initial values parsed and normalized from URL search parameters
  const initialQuery = normalizeQueryParam(searchParams.get("q"));
  const initialUni = normalizeUniversityParam(searchParams.get("uni"));
  const initialSem = normalizeSemesterParam(searchParams.get("sem"));
  const initialFormat = searchParams.get("format") || searchParams.get("type") || "all";
  const initialCat = searchParams.get("cat") || searchParams.get("category") || "all";
  const initialSort = searchParams.get("sort") || "recommended";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedUniversity, setSelectedUniversity] = useState(initialUni);
  const [selectedSemester, setSelectedSemester] = useState(initialSem);
  const [selectedResourceType, setSelectedResourceType] = useState(initialFormat);
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState(initialSort);

  // Filtering & Sorting Logic
  const filteredNotes = useMemo(() => {
    return NOTES_CATALOG.filter((note) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = note.title.toLowerCase().includes(query);
        const matchesCategory = note.category.toLowerCase().includes(query);
        const matchesDesc = note.description.toLowerCase().includes(query);
        const matchesSem = note.semester.toLowerCase().includes(query);
        const matchesSlug = note.slug?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesSem && !matchesSlug) {
          return false;
        }
      }

      // 2. University Filter
      if (selectedUniversity !== "all") {
        const hasUni =
          note.universities.includes(selectedUniversity) ||
          (selectedUniversity === "pu-east" && note.universities.includes("purbanchal")) ||
          (selectedUniversity === "purbanchal" && note.universities.includes("pu-east"));
        if (!hasUni) {
          return false;
        }
      }

      // 3. Semester Filter
      if (selectedSemester !== "all") {
        const noteSemLower = note.semester.toLowerCase();
        const selSemLower = selectedSemester.toLowerCase();
        if (noteSemLower !== selSemLower) {
          const noteNum = noteSemLower.match(/\d+/)?.[0];
          const selNum = selSemLower.match(/\d+/)?.[0];
          if (!noteNum || !selNum || noteNum !== selNum) {
            return false;
          }
        }
      }

      // 4. Resource Type Filter
      if (selectedResourceType !== "all") {
        if (!note.resourceTypes || !note.resourceTypes.includes(selectedResourceType)) {
          return false;
        }
      }

      // 5. Subject Domain / Category Filter
      if (selectedCategory !== "all") {
        if (note.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "az") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "popular") {
        return parseInt(b.fileCount, 10) - parseInt(a.fileCount, 10);
      }
      // "recommended" or default catalog order
      return 0;
    });
  }, [searchQuery, selectedUniversity, selectedSemester, selectedResourceType, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedUniversity("all");
    setSelectedSemester("all");
    setSelectedResourceType("all");
    setSelectedCategory("all");
    setSortBy("recommended");
  };

  const currentUniName =
    UNIVERSITIES_LIST.find((u) => u.id === selectedUniversity)?.name || "All Universities";

  const currentResourceLabel =
    RESOURCE_TYPES.find((r) => r.id === selectedResourceType)?.label || selectedResourceType;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-6 sm:py-8">
      {/* Full width container from left to right */}
      <div className="w-full px-3 sm:px-5 lg:px-6 xl:px-8">
        
        {/* MAIN LAYOUT: Full-width Left Filter Sidebar + Wide Notes Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-6 xl:gap-8">
          
          {/* LEFT SIDEBAR: EXPANDABLE UNIVERSITY, SEMESTER, MATERIAL & DOMAIN */}
          <BookSpineFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalResultsCount={filteredNotes.length}
            selectedUniversity={selectedUniversity}
            setSelectedUniversity={setSelectedUniversity}
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
            selectedResourceType={selectedResourceType}
            setSelectedResourceType={setSelectedResourceType}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onResetFilters={handleResetFilters}
          />

          {/* RIGHT MAIN CONTENT AREA */}
          <div className="flex-1 w-full min-w-0">

            {/* ============================================================== */}
            {/* CARDS GRID: 2 COLUMNS ON DESKTOP, 3 ON ULTRA-WIDE              */}
            {/* Gives each 3D book realistic width (~270px-280px)             */}
            {/* ============================================================== */}
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {filteredNotes.map((note) => (
                  <NotesCard key={note.id} note={note} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-3xl border border-slate-200/90 p-10 sm:p-14 text-center shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-yellow/15 text-navy flex items-center justify-center mx-auto mb-3.5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">No subjects match this filter</h3>
                <p className="text-xs sm:text-sm text-text-muted max-w-sm mx-auto mb-5 font-normal leading-relaxed">
                  No notes match the selected filters {selectedUniversity !== "all" && <>for <strong>{currentUniName}</strong></>} {selectedSemester !== "all" && <>in <strong>{selectedSemester}</strong></>} {selectedCategory !== "all" && <>under <strong>{selectedCategory}</strong></>} {selectedResourceType !== "all" && <>for <strong>{currentResourceLabel}</strong></>}.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-yellow text-navy font-bold text-xs rounded-xl hover:bg-[#ffc642] transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Show All Notes</span>
                  <span>↺</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

function NotesPageContainer() {
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();
  return <NotesContent key={searchKey} />;
}

export default function NotesPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#F8FAFC] min-h-screen py-10 flex items-center justify-center">
          <div className="text-slate-400 text-sm font-medium animate-pulse">
            Loading library bookshelf...
          </div>
        </div>
      }
    >
      <NotesPageContainer />
    </Suspense>
  );
}
