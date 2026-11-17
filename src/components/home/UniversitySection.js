"use client";

import Link from "next/link";
import Image from "next/image";

export default function UniversitySection() {
  // Row 1: Major Universities & Flagship Constituent Campuses
  const universitiesList = [
    {
      id: "tu",
      name: "Tribhuvan University",
      short: "TU",
      desc: "Est. 1959 · 60+ BBA Colleges",
      logo: "/tu-logo.svg",
      href: "/universities/tu",
      type: "University",
    },
    {
      id: "pu",
      name: "Pokhara University",
      short: "PU",
      desc: "Est. 1997 · 40+ Business Schools",
      logo: "/pu-logo.jpg",
      href: "/universities/pu",
      type: "University",
      isRound: true,
    },
    {
      id: "ku",
      name: "Kathmandu University",
      short: "KU",
      desc: "Est. 1991 · KUSOM & Affiliated",
      logo: "/ku-logo.svg",
      href: "/universities/ku",
      type: "University",
    },
    {
      id: "purbanchal",
      name: "Purbanchal University",
      short: "PU-East",
      desc: "Est. 1993 · 30+ Affiliated Centers",
      logo: "/purbanchal-logo.png",
      href: "/universities/purbanchal",
      type: "University",
      isRound: true,
    },
    {
      id: "kusom",
      name: "KUSOM",
      short: "KU School of Mgmt",
      desc: "Balkumari, Lalitpur · Premier BBA",
      logo: "/ku-logo.svg",
      href: "/universities/ku",
      type: "School of Management",
    },
    {
      id: "sdc",
      name: "Shanker Dev Campus",
      short: "TU Flagship",
      desc: "Putalisadak · Central Management",
      logo: "/tu-logo.svg",
      href: "/universities/tu",
      type: "Constituent Campus",
    },
    {
      id: "pyc",
      name: "Public Youth Campus",
      short: "PYC",
      desc: "Dhobichaur, Kathmandu · TU",
      logo: "/tu-logo.svg",
      href: "/universities/tu",
      type: "Constituent Campus",
    },
  ];

  // Row 2: Leading BBA Business Colleges across Nepal
  const collegesList = [
    {
      name: "Apex College",
      affiliation: "Pokhara University",
      location: "Mid-Baneshwor, Kathmandu",
      badge: "PU",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      href: "/universities/pu",
    },
    {
      name: "Ace Institute of Management",
      affiliation: "Pokhara University",
      location: "Sinamangal, Kathmandu",
      badge: "PU",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
      href: "/universities/pu",
    },
    {
      name: "Thames International College",
      affiliation: "Tribhuvan University",
      location: "Old Baneshwor, Kathmandu",
      badge: "TU",
      color: "bg-amber-50 text-amber-700 border-amber-200",
      href: "/universities/tu",
    },
    {
      name: "Kathmandu College of Management",
      affiliation: "KCM · Siam University",
      location: "Gwarko, Lalitpur",
      badge: "KU/Intl",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      href: "/universities/ku",
    },
    {
      name: "King's College",
      affiliation: "Westcliff University",
      location: "Babarmahal, Kathmandu",
      badge: "BBA Tech",
      color: "bg-rose-50 text-rose-700 border-rose-200",
      href: "/universities",
    },
    {
      name: "Quest International College",
      affiliation: "Pokhara University",
      location: "Gwarko, Lalitpur",
      badge: "PU",
      color: "bg-blue-50 text-blue-700 border-blue-200",
      href: "/universities/pu",
    },
    {
      name: "DAV College of Management",
      affiliation: "Tribhuvan University",
      location: "Bhanimandal, Lalitpur",
      badge: "TU",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      href: "/universities/tu",
    },
    {
      name: "SAIM College",
      affiliation: "Pokhara University",
      location: "Old Baneshwor, Kathmandu",
      badge: "PU",
      color: "bg-sky-50 text-sky-700 border-sky-200",
      href: "/universities/pu",
    },
    {
      name: "Uniglobe College",
      affiliation: "Pokhara University",
      location: "New Baneshwor, Kathmandu",
      badge: "PU",
      color: "bg-violet-50 text-violet-700 border-violet-200",
      href: "/universities/pu",
    },
  ];

  // Duplicate items to ensure seamless infinite looping
  const loopedUniversities = [...universitiesList, ...universitiesList];
  const loopedColleges = [...collegesList, ...collegesList];

  return (
    <section className="relative py-7 sm:py-10 bg-white border-b border-slate-100 overflow-hidden">
      
      {/* Edge Gradient Mask: Gives the popular smooth fade effect on sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

      {/* ========================================================================= */}
      {/* 1. ROW 1: UNIVERSITIES SLIDESHOW (Infinite Smooth Marquee Left)           */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-5 select-none">
        <div className="animate-marquee-left flex gap-4 sm:gap-5 py-1">
          {loopedUniversities.map((uni, idx) => (
            <Link
              key={`uni-${idx}`}
              href={uni.href}
              className="group flex items-center gap-3.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 shrink-0 cursor-pointer"
            >
              {/* Emblem Logo */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200/70 p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={38}
                  height={38}
                  className={`object-contain max-h-full max-w-full ${
                    uni.isRound ? "rounded-full" : ""
                  }`}
                />
              </div>

              {/* University Title & Description */}
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-blue-600 tracking-tight whitespace-nowrap transition-colors">
                  {uni.name}
                </span>
                <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
                  {uni.desc}
                </span>
              </div>

              {/* Subtle Arrow hint on hover */}
              <span className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all text-xs font-bold pl-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ROW 2: COLLEGES SLIDESHOW (Infinite Smooth Marquee Right)              */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden select-none">
        <div className="animate-marquee-right flex gap-3.5 sm:gap-4 py-1">
          {loopedColleges.map((col, idx) => (
            <Link
              key={`col-${idx}`}
              href={col.href}
              className="group flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white hover:bg-blue-50/40 border border-slate-200/70 hover:border-blue-200 hover:shadow-md transition-all duration-300 shrink-0 cursor-pointer"
            >
              {/* University Affiliation Badge */}
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md border tracking-wider uppercase ${col.color}`}
              >
                {col.badge}
              </span>

              {/* College Information */}
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 tracking-tight whitespace-nowrap transition-colors">
                  {col.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 whitespace-nowrap">
                  {col.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Explorer Action */}
      <div className="mt-8 text-center">
        <Link
          href="/universities"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
        >
          <span>Looking for a specific college curriculum? Browse directory</span>
          <span className="font-bold">→</span>
        </Link>
      </div>

    </section>
  );
}
