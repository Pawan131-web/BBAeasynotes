"use client";

import { SEMESTERS_LIST, SUBJECT_CATEGORIES } from "@/data/notesData";

export default function NotesSidebar({
  selectedSemesters,
  setSelectedSemesters,
  selectedCategories,
  setSelectedCategories,
  onResetFilters,
}) {
  const toggleSemester = (sem) => {
    setSelectedSemesters((prev) =>
      prev.includes(sem) ? prev.filter((s) => s !== sem) : [...prev, sem]
    );
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const hasActiveFilters =
    selectedSemesters.length > 0 || selectedCategories.length > 0;

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs sticky top-24">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-navy tracking-tight">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs font-semibold text-syllabus hover:underline cursor-pointer"
            >
              Reset all
            </button>
          )}
        </div>

        {/* Section 1: Semesters */}
        <div className="py-4 border-b border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Semesters
          </h3>
          <div className="space-y-2">
            {SEMESTERS_LIST.map((sem) => {
              const isChecked = selectedSemesters.includes(sem);
              return (
                <label
                  key={sem}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 hover:text-navy cursor-pointer select-none group py-0.5"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleSemester(sem)}
                    className="w-4 h-4 rounded border-slate-300 text-syllabus focus:ring-syllabus/20 cursor-pointer transition-colors"
                  />
                  <span className={`transition-colors ${isChecked ? "font-bold text-navy" : "font-normal"}`}>
                    {sem}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Section 2: Subjects */}
        <div className="pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Subjects
          </h3>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {SUBJECT_CATEGORIES.map((cat) => {
              const isChecked = selectedCategories.includes(cat);
              return (
                <label
                  key={cat}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 hover:text-navy cursor-pointer select-none group py-0.5"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCategory(cat)}
                    className="w-4 h-4 rounded border-slate-300 text-syllabus focus:ring-syllabus/20 cursor-pointer transition-colors"
                  />
                  <span className={`transition-colors ${isChecked ? "font-bold text-navy" : "font-normal"}`}>
                    {cat}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

