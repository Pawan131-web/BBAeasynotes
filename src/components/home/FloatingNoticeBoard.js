"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NoticeBoardFeed from "./NoticeBoardFeed";

export default function FloatingNoticeBoard() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu dropdown if clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Hide on distraction-free reading mode
  if (pathname?.includes("/read")) {
    return null;
  }

  const handleComposeClick = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    }
    // Small timeout to allow feed mounting if expanding from collapsed state
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("open-request-post-modal"));
    }, 120);
  };

  const handleSearchClick = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    }
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("toggle-notice-search"));
    }, 120);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed bottom-0 right-2.5 sm:right-6 z-50 flex flex-col items-end transition-all duration-300 ease-out select-none ${
        isOpen
          ? "w-[calc(100vw-20px)] sm:w-[395px] xl:w-[415px] h-[580px] sm:h-[620px] max-h-[85vh]"
          : "w-[270px] sm:w-[300px] h-[50px] sm:h-[52px]"
      }`}
    >
      {/* Outer Shell styled after LinkedIn Messaging Dock */}
      <div className="w-full h-full bg-white rounded-t-2xl shadow-[0_-8px_32px_rgba(15,23,42,0.14)] border border-slate-200/90 flex flex-col overflow-hidden">
        
        {/* ==================== DOCK HEADER BAR ==================== */}
        <div
          onClick={toggleOpen}
          className="h-[50px] sm:h-[52px] px-3 sm:px-3.5 bg-white border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 transition-colors shrink-0"
        >
          {/* Left: Avatar with Active Status Dot & Title */}
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Avatar with Green Dot at 5 o'clock */}
            <div className="relative w-8 h-8 rounded-full shrink-0 ring-1 ring-slate-200/80 bg-slate-50">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/updatedsitelogo.png"
                  alt="Notice Board"
                  fill
                  className="object-contain p-0.5"
                  sizes="32px"
                />
              </div>
              {/* Online Green Dot Indicator */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-500/30"
                title="Active updates"
              />
            </div>

            {/* Title & Badge */}
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[13.5px] sm:text-[14.5px] font-bold text-slate-800 tracking-tight truncate">
                Notice Board
              </span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-rose-500 text-white shadow-2xs">
                3
              </span>
            </div>
          </div>

          {/* Right Action Icons (Matching LinkedIn Messaging Header) */}
          <div className="flex items-center gap-0.5 sm:gap-1 text-slate-600">
            {/* Search Icon (Visible when open) */}
            {isOpen && (
              <button
                type="button"
                onClick={handleSearchClick}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                title="Search notices"
                aria-label="Search notices"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}

            {/* Three Dots Menu Button */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen((prev) => !prev);
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                title="More options"
                aria-label="More options"
              >
                <span className="text-base font-extrabold tracking-widest leading-none">···</span>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200/90 py-1.5 z-50 text-xs font-semibold text-slate-700 animate-fade-in"
                >
                  <Link
                    href="/notices"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-3.5 py-2 hover:bg-slate-50 transition-colors text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span>View all notices</span>
                  </Link>

                  <button
                    type="button"
                    onClick={(e) => {
                      handleComposeClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3.5 py-2 hover:bg-slate-50 transition-colors text-slate-700 text-left cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span>Request to post</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      handleSearchClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3.5 py-2 hover:bg-slate-50 transition-colors text-slate-700 text-left cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search notice feed</span>
                  </button>
                </div>
              )}
            </div>

            {/* Compose / Pencil Icon Button (LinkedIn Style) */}
            <button
              type="button"
              onClick={handleComposeClick}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Request a post / announcement"
              aria-label="Request a post"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
                />
              </svg>
            </button>

            {/* Chevron Toggle Button (Up when collapsed, Down when open) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleOpen();
              }}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title={isOpen ? "Minimize notice board" : "Expand notice board"}
              aria-label={isOpen ? "Minimize notice board" : "Expand notice board"}
            >
              {isOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ==================== EXPANDED PORTRAIT FEED BODY ==================== */}
        {isOpen && (
          <div className="flex-1 min-h-0 w-full overflow-hidden bg-white flex flex-col">
            <NoticeBoardFeed isFloating={true} />
          </div>
        )}

      </div>
    </div>
  );
}
