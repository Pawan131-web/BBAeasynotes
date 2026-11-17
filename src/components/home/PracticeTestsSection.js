"use client";

import { useState } from "react";
import Link from "next/link";

export default function PracticeTestsSection() {
  const [selectedOption, setSelectedOption] = useState("A");

  const options = [
    { id: "A", text: "A. Mean", correct: true },
    { id: "B", text: "B. Median", correct: false },
    { id: "C", text: "C. Mode", correct: false },
  ];

  return (
    <section className="bg-practice-deep text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Info & Action */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  Practice tests
                </h2>
                <span className="bg-yellow text-navy font-bold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  Beta
                </span>
              </div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Test yourself before the exam. Choose a subject and chapter, answer timed questions, and see your score with explanations.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-2.5 text-sm sm:text-base text-white/90">
              <li className="flex items-center gap-3">
                <span className="text-yellow font-extrabold text-base">✓</span>
                <span>Choose university, semester and subject</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow font-extrabold text-base">✓</span>
                <span>Timed tests with instant results</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow font-extrabold text-base">✓</span>
                <span>Explanation for every answer</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/practice-tests"
                className="inline-flex items-center justify-center bg-yellow text-navy font-bold text-sm px-6 py-3 rounded-xl hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                Try a practice test
              </Link>
            </div>
          </div>

          {/* Right Column: Quiz Preview Mockup Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-text-main rounded-2xl shadow-xl p-5 sm:p-6 border border-white/20">
              {/* Quiz Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border text-xs sm:text-sm">
                <span className="font-semibold text-text-muted">
                  Business Statistics · Sem 2
                </span>
                <span className="font-medium text-practice flex items-center gap-1.5 bg-practice-light px-2.5 py-1 rounded-md">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Question 3 of 10 · 12:40
                </span>
              </div>

              {/* Question Statement */}
              <div className="py-4">
                <p className="font-bold text-base sm:text-lg text-text-main leading-snug">
                  Which measure of central tendency is most affected by extreme values?
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5">
                {options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedOption(option.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "border-practice bg-practice-light/40 text-practice font-semibold shadow-xs"
                          : "border-border hover:bg-bg-light text-text-main"
                      }`}
                    >
                      <span>{option.text}</span>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-practice text-white flex items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              <div className="mt-4 p-3.5 rounded-xl bg-notes-light border border-notes/20 text-xs sm:text-sm text-notes leading-relaxed">
                <p>
                  <strong className="font-semibold">Correct:</strong> The mean uses every value, so extreme values pull it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
