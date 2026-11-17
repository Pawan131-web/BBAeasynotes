"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";
import AuthModal from "@/components/AuthModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ open: false, type: "login" });
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Reset visibility and close mobile menu on route changes during render (React recommended pattern)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsVisible(true);
    setMobileOpen(false);
  }

  // Smart auto-hiding header on scroll across all pages:
  // - Scrolling DOWN: hides the header
  // - Scrolling UP: reveals the header
  // - At the very top: always visible
  useEffect(() => {
    let prevScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if page is scrolled past the top threshold
      setIsScrolled(currentScrollY > 40);

      // Always show header at the top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
        prevScrollY = currentScrollY;
        return;
      }

      // Do not auto-hide while mobile navigation is open
      if (mobileOpen) {
        prevScrollY = currentScrollY;
        return;
      }

      const diff = currentScrollY - prevScrollY;

      // Ignore micro-scrolls below threshold to prevent jitter
      if (Math.abs(diff) < 8) return;

      if (diff > 0) {
        // Scrolling DOWN -> hide header
        setIsVisible(false);
      } else {
        // Scrolling UP -> reveal header
        setIsVisible(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const handleOpenAuth = (type) => {
    setAuthModal({ open: true, type });
    setMobileOpen(false);
  };

  const handleCloseAuth = () => {
    setAuthModal({ open: false, type: "login" });
  };

  const checkIsActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Hide header on results page and notes reader page
  if (
    pathname === "/results" ||
    pathname === "/result" ||
    pathname?.includes("/read")
  ) {
    return null;
  }

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isHome
            ? isScrolled
              ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white"
              : "bg-transparent border-b-0 shadow-none text-white"
            : "bg-white/95 backdrop-blur-xl border-b border-border text-text-main shadow-xs"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[58px] sm:h-[66px] gap-4">
            {/* Left: Logo + Brand Name (clean white text like Winzy) */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 py-1 group"
            >
              <Image
                src="/bbaeasynoteslogo.png"
                alt="BBA Easy Notes"
                width={120}
                height={60}
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
              <span
                className={`font-bold text-[18px] sm:text-[19px] tracking-tight leading-none ${
                  isHome ? "text-white" : "text-slate-900"
                }`}
              >
                BBA <span className={isHome ? "text-white/90" : "text-slate-700"}>Easy Notes</span>
              </span>
            </Link>

            {/* Center: Desktop Navigation (clean minimalist links like Winzy) */}
            <nav className="hidden md:flex items-center gap-2 lg:gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = checkIsActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-[14px] lg:text-[15px] transition-colors whitespace-nowrap ${
                      isActive
                        ? isHome
                          ? "text-white font-bold"
                          : "bg-syllabus-light text-syllabus font-semibold"
                        : isHome
                          ? "text-white/75 font-medium hover:text-white transition-colors"
                          : "text-text-main font-medium hover:text-navy hover:bg-bg-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search Magnifier + Log in + Sign up (clean solid white pill like Winzy) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Search magnifier icon */}
              <Link
                href="/search"
                className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${
                  isHome
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-text-main hover:text-navy hover:bg-bg-light"
                }`}
                aria-label="Search"
                title="Search"
              >
                <svg
                  className={`w-5 h-5 ${isHome ? "text-white" : "text-text-main hover:text-navy"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </Link>

              {/* Log in Button */}
              <button
                type="button"
                onClick={() => handleOpenAuth("login")}
                className={`hidden md:inline-flex items-center justify-center px-4 py-2 text-[14px] lg:text-[15px] font-medium transition-all cursor-pointer ${
                  isHome
                    ? "text-white/90 hover:text-white"
                    : "text-text-main hover:text-navy"
                }`}
              >
                Log in
              </button>

              {/* Sign up Button - Solid white capsule button like Winzy */}
              <button
                type="button"
                onClick={() => handleOpenAuth("signup")}
                className={`hidden md:inline-flex items-center justify-center px-5 py-2 text-[14px] lg:text-[15px] font-bold rounded-full transition-all cursor-pointer shadow-sm active:scale-95 ${
                  isHome
                    ? "text-slate-950 bg-white hover:bg-white/90"
                    : "text-white bg-navy hover:bg-navy-dark"
                }`}
              >
                Sign up
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                className={`md:hidden inline-flex items-center justify-center p-1.5 rounded-md transition-colors ${
                  isHome ? "text-white hover:bg-white/15" : "text-text-main hover:bg-bg-light"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav
            className={`md:hidden border-t px-4 py-3 space-y-1.5 ${
              isHome ? "border-white/15 bg-slate-950/90 backdrop-blur-xl text-white" : "border-border bg-white"
            }`}
          >
            {/* Search link in mobile dropdown */}
            <Link
              href="/search"
              className="flex items-center gap-2 px-3 py-2 text-[15px] font-medium text-text-main rounded-md hover:bg-bg-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
              </svg>
              <span>Search</span>
            </Link>

            {NAV_LINKS.map((link) => {
              const isActive = checkIsActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 text-[15px] rounded-md transition-colors ${
                    isActive
                      ? "bg-syllabus-light text-syllabus font-semibold"
                      : "text-text-main font-medium hover:bg-bg-light"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-border flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleOpenAuth("login")}
                className="flex-1 py-2 text-center text-sm font-semibold text-text-main rounded-lg border border-border hover:bg-bg-light transition-colors cursor-pointer"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => handleOpenAuth("signup")}
                className="flex-1 py-2 text-center text-sm font-semibold text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Auth Coming Soon Modal */}
      <AuthModal
        isOpen={authModal.open}
        onClose={handleCloseAuth}
        type={authModal.type}
      />
    </>
  );
}
