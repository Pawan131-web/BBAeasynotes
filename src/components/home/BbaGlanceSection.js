import Image from "next/image";
import Link from "next/link";
import { BBA_AT_A_GLANCE } from "@/data/homeData";

export default function BbaGlanceSection() {
  const renderIcon = (type) => {
    switch (type) {
      case "calendar":
        return (
          <svg
            className="w-5 h-5 text-[#2563EB]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
          </svg>
        );
      case "book":
        return (
          <svg
            className="w-5 h-5 text-[#2563EB]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case "briefcase":
        return (
          <svg
            className="w-5 h-5 text-[#2563EB]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case "trend":
        return (
          <svg
            className="w-5 h-5 text-[#2563EB]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Hero Banner Container with Soft Gradient */}
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#EBF3FF] via-[#E6F0FD] to-[#DFEBFC] border border-[#D3E3F8]/80 shadow-xl shadow-blue-500/5 p-6 sm:p-8 lg:p-10 xl:p-12">
          
          {/* Background Decorative Element 1: Dark Navy Organic Corner Waves */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#0B1E48] pointer-events-none opacity-95 hidden sm:block" />
          <div className="absolute -bottom-14 -right-14 w-60 h-60 rounded-full bg-[#122B66] pointer-events-none opacity-85 hidden sm:block" />

          {/* Background Decorative Element 2: Subtle Blue Dots Grid Matrix */}
          <div className="absolute top-5 right-14 w-32 h-32 bg-[radial-gradient(#2563EB_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-25 pointer-events-none hidden lg:block" />

          {/* Main 3-Column Layout: Left Copy | Center 3D Illustration | Right White Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* ==================== LEFT COLUMN: HEADLINE & DESCRIPTION ==================== */}
            <div className="lg:col-span-4 flex flex-col justify-center py-2 sm:py-4">
              {/* Main Heading with Yellow Sparkles & Brush Underline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#0B1A3B] tracking-tight leading-[1.18]">
                BBA at a{" "}
                <span className="relative inline-block text-[#1963E8]">
                  glance
                  {/* 3 Accent Sparkles/Rays above glance */}
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none select-none">
                    <span className="w-1 h-2.5 bg-[#F5B82E] rounded-full rotate-[-25deg] inline-block" />
                    <span className="w-1.5 h-3.5 bg-[#F5B82E] rounded-full inline-block" />
                    <span className="w-1 h-2.5 bg-[#F5B82E] rounded-full rotate-[25deg] inline-block" />
                  </span>
                  {/* Yellow brush underline curve */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#F5B82E] pointer-events-none"
                    viewBox="0 0 120 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 8.5C35 3.5 85 4 117 8.5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-5 max-w-sm">
                A dynamic program that builds business knowledge, leadership skills and prepares you for a successful career in the corporate world.
              </p>
            </div>

            {/* ==================== CENTER COLUMN: 3D HERO ILLUSTRATION ==================== */}
            <div className="lg:col-span-4 flex items-center justify-center relative my-4 lg:my-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[979/837] hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                  src="/bba-3d-asset.png"
                  alt="BBA Books, Graduation Cap & Academic Growth"
                  fill
                  className="object-contain drop-shadow-lg select-none"
                  priority
                />
              </div>
            </div>

            {/* ==================== RIGHT COLUMN: FLOATING WHITE INFO CARD ==================== */}
            <div className="lg:col-span-4">
              <div className="relative z-10 bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-6 lg:p-7 shadow-xl shadow-blue-900/5 border border-slate-100">
                {BBA_AT_A_GLANCE.map((item, index) => {
                  const isLast = index === BBA_AT_A_GLANCE.length - 1;
                  return (
                    <div
                      key={item.key}
                      className={`flex items-start gap-3.5 sm:gap-4 ${
                        !isLast ? "pb-3.5 sm:pb-4 mb-3.5 sm:mb-4 border-b border-slate-100" : ""
                      }`}
                    >
                      {/* Icon inside soft blue badge */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#EEF5FF] flex items-center justify-center shrink-0 mt-0.5">
                        {renderIcon(item.icon)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                          {item.label}
                        </h4>

                        {item.subtitle && (
                          <p
                            className={`mt-0.5 leading-snug ${
                              item.key === "subjects"
                                ? "text-xs font-semibold text-slate-700"
                                : "text-xs text-slate-500 font-medium"
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        )}

                        {item.description && (
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Optional Action Arrow (Item 4: Next Step) */}
                      {item.hasActionArrow && item.href && (
                        <Link
                          href={item.href}
                          className="w-8 h-8 rounded-full bg-[#EEF5FF] text-[#2563EB] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all shadow-xs group/btn shrink-0 mt-1"
                          aria-label={item.label}
                        >
                          <span className="text-sm font-bold group-hover/btn:translate-x-0.5 transition-transform">
                            →
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
