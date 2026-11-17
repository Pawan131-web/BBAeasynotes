"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BbaInfoSection() {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // 8 Curated Mosaic Cards depicting real BBA education, classrooms, and case presentations
  const mosaicImages = [
    {
      id: "top-1",
      src: "/images/bba-gallery/bba-mosaic-1.jpg",
      alt: "BBA students collaborating with laptops and notebooks in modern study space",
      caption: "Case Study & Group Collaboration",
      span: "w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[450px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "top-2",
      src: "/images/bba-gallery/bba-mosaic-2.jpg",
      alt: "College students in front of university library bookshelves discussing notes",
      caption: "Library Research & Exam Prep",
      span: "w-[160px] sm:w-[190px] lg:w-[210px] xl:w-[225px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "top-3",
      src: "/images/bba-gallery/bba-mosaic-3.jpg",
      alt: "Students analyzing computer data in university business computer lab",
      caption: "Business Analytics & IT Lab",
      span: "w-[180px] sm:w-[215px] lg:w-[240px] xl:w-[255px] h-[180px] sm:h-[220px] lg:h-[245px] xl:h-[265px] self-end",
    },
    {
      id: "top-4",
      src: "/images/bba-gallery/bba-mosaic-4.jpg",
      alt: "Business seminar presentation with projection screen in college auditorium",
      caption: "Corporate Seminars & Guest Lectures",
      span: "w-[200px] sm:w-[235px] lg:w-[260px] xl:w-[280px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "bottom-1",
      src: "/images/bba-gallery/bba-mosaic-5.jpg",
      alt: "University students in café study session with tablet and digital notes",
      caption: "Peer-to-Peer Study Circles",
      span: "w-[180px] sm:w-[215px] lg:w-[240px] xl:w-[255px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "bottom-2",
      src: "/images/bba-gallery/bba-mosaic-6.jpg",
      alt: "Business student gesturing during corporate strategy case analysis",
      caption: "Executive Presentation Skills",
      span: "w-[175px] sm:w-[210px] lg:w-[230px] xl:w-[245px] h-[185px] sm:h-[220px] lg:h-[245px] xl:h-[265px] self-start",
    },
    {
      id: "bottom-3",
      src: "/images/bba-gallery/bba-mosaic-7.jpg",
      alt: "Professional BBA graduate with laptop standing by campus window",
      caption: "Internship & Career Readiness",
      span: "w-[160px] sm:w-[190px] lg:w-[210px] xl:w-[225px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "bottom-4",
      src: "/images/bba-gallery/bba-mosaic-8.jpg",
      alt: "Student presenting business model on whiteboard to classroom peers",
      caption: "Startup Pitching & Strategic Planning",
      span: "w-[340px] sm:w-[410px] lg:w-[460px] xl:w-[490px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
  ];

  // Lower Carousel Cards showcasing BBA Student Experience
  const carouselImages = [
    {
      src: "/images/bba-gallery/bba-mosaic-1.jpg",
      alt: "Modern campus study lounge with active peer collaboration",
      caption: "Collaborative Learning & Team Projects",
    },
    {
      src: "/images/bba-gallery/bba-mosaic-8.jpg",
      alt: "BBA student presenting interactive business strategy on whiteboard",
      caption: "Strategic Problem Solving & Case Debates",
    },
    {
      src: "/images/bba-gallery/bba-mosaic-2.jpg",
      alt: "Students collaborating in university library",
      caption: "Library Research & Term Paper Prep",
    },
    {
      src: "/images/bba-gallery/bba-mosaic-5.jpg",
      alt: "Student collaborative café and peer networking environment",
      caption: "Peer Mentorship & Professional Networking",
    },
    {
      src: "/images/bba-gallery/bba-mosaic-3.jpg",
      alt: "Business analytics lab and workstations",
      caption: "Quantitative Modeling & Digital Labs",
    },
  ];

  // Editorial Numbers tailored to the BBA Degree in Nepal
  const stats = [
    { number: "4 Yrs", label: "8 Comprehensive Semesters" },
    { number: "120+", label: "Total Credit Hours Required" },
    { number: "GPA 1.8+", label: "Min. +2/NEB Eligibility Needed" },
    { number: "100%", label: "Practical Case-Based Curriculum" },
  ];

  // The 4 Core Educational Pillars of BBA in Nepal
  const values = [
    {
      icon: "/images/about/pillar-icon-1.png",
      title: "What is BBA?",
      subtitle: "Professional Management Degree",
      description:
        "Bachelor of Business Administration (BBA) is an intensive 4-year undergraduate degree designed to build managerial competence, leadership confidence, and strategic thinking.",
    },
    {
      icon: "/images/about/pillar-icon-2.png",
      title: "Semester & Case Pedagogy",
      subtitle: "Practical Hands-on Learning",
      description:
        "Unlike traditional annual degrees, BBA relies on continuous internal assessment (40-50%), classroom presentations, case analyses, and industry research rather than rote memorization.",
    },
    {
      icon: "/images/about/pillar-icon-3.png",
      title: "Context in Nepal",
      subtitle: "Nepal's Fastest Growing Sector",
      description:
        "BBA is the top management choice in Nepal due to the booming commercial banking sector, fintech boom (eSewa, Khalti), FMCG expansion, and emerging startup culture.",
    },
    {
      icon: "/images/about/pillar-icon-4.png",
      title: "Future Scope & Placements",
      subtitle: "Corporate & Global Pathway",
      description:
        "Direct stepping stone into 'A' Class commercial banks, corporate management, entrepreneurship, and premier MBA programs in Nepal and international universities.",
    },
  ];

  // The 4 Major Universities Offering BBA in Nepal
  const hubs = [
    {
      university: "Tribhuvan University (TU)",
      campus: "Faculty of Management (FOM) · Requires CMAT Entrance",
      location: "Central Campus Kirtipur · 60+ Constituent & Affiliated Colleges",
      code: "TU BBA",
    },
    {
      university: "Pokhara University (PU)",
      campus: "Faculty of Management Studies (FMS) · Requires PU Entrance",
      location: "Dhungepatan, Pokhara · 40+ Affiliated Business Schools",
      code: "PU BBA",
    },
    {
      university: "Kathmandu University (KU)",
      campus: "Kathmandu University School of Management (KUSOM)",
      location: "Balkumari, Lalitpur · Requires KUMAT Entrance Exam",
      code: "KU BBA",
    },
    {
      university: "Purbanchal University (PU-East)",
      campus: "Faculty of Management Studies · Requires University Entrance",
      location: "Main Campus, Biratnagar · 30+ Affiliated Centers",
      code: "PU-East BBA",
    },
  ];

  // Specializations in the Context of Nepal
  const specializations = [
    {
      id: "finance",
      name: "Banking & Financial Services",
      badge: "Highest Hiring in Nepal",
      desc: "Prepares students for commercial banks, Nepal Rastra Bank, investment houses, microfinance institutions, insurance companies, and capital markets.",
      courses: [
        "Financial Institutions & Markets",
        "Commercial Bank Management",
        "Security Analysis & Portfolio",
        "Corporate Risk & Treasury",
      ],
      careers: "Credit Analyst, Relationship Manager, Investment Associate, Branch Manager",
    },
    {
      id: "marketing",
      name: "Marketing & Brand Strategy",
      badge: "High Growth Sector",
      desc: "Focuses on consumer behavior, FMCG distribution, digital ad campaigns, brand equity, and strategic market expansion in Nepal's evolving retail market.",
      courses: [
        "Consumer Behavior Analysis",
        "Digital Marketing & SEO",
        "Strategic Brand Management",
        "Sales & Channel Logistics",
      ],
      careers: "Brand Manager, Growth Marketer, Media Strategist, Product Lead",
    },
    {
      id: "hr",
      name: "Human Resource Management",
      badge: "Organizational Leadership",
      desc: "Equips students with organizational leadership, talent acquisition, labor law compliance in Nepal, performance appraisal, and workplace culture building.",
      courses: [
        "Organizational Behavior (OB)",
        "Strategic Talent Acquisition",
        "Nepal Labor Law & Relations",
        "Employee Training & Appraisal",
      ],
      careers: "HR Business Partner, Corporate Recruiter, OD Consultant, People Lead",
    },
    {
      id: "analytics",
      name: "Fintech & Digital Business",
      badge: "Next-Gen In Demand",
      desc: "Bridges modern business administration with quantitative analytics, MIS systems, payment gateway technologies, e-commerce, and business statistics.",
      courses: [
        "Management Information Systems",
        "Business Analytics & Statistics",
        "E-Commerce & Digital Payments",
        "Operations Research",
      ],
      careers: "Business Analyst, Fintech Operations, E-Commerce Lead, Systems Consultant",
    },
  ];

  return (
    <article className="bg-white text-slate-900 overflow-hidden">
      {/* ========================================================================= */}
      {/* 0. TOP MOSAIC PHOTO GALLERY (EXACT TO REFERENCE SCREENSHOT)               */}
      {/* ========================================================================= */}
      <div className="pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop/Tablet Asymmetrical 2-Row Mosaic Grid */}
          <div className="hidden md:flex flex-col gap-4 lg:gap-5 select-none">
            
            {/* Row 1: Indented on Left (~12%), Extends to Far Right */}
            <div className="flex items-center gap-4 lg:gap-5 pl-0 lg:pl-24 xl:pl-32 justify-start lg:justify-end">
              {mosaicImages.slice(0, 4).map((img) => (
                <div
                  key={img.id}
                  className={`group relative flex-none ${img.span} rounded-2xl lg:rounded-[26px] overflow-hidden bg-slate-100 shadow-xs hover:shadow-md transition-all duration-300`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 320px, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                    <span className="text-white text-xs font-medium tracking-tight">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Flush with Left, Leaves Open Whitespace on Right (~12%) */}
            <div className="flex items-center gap-4 lg:gap-5 pr-0 lg:pr-24 xl:pr-32 justify-start">
              {mosaicImages.slice(4, 8).map((img) => (
                <div
                  key={img.id}
                  className={`group relative flex-none ${img.span} rounded-2xl lg:rounded-[26px] overflow-hidden bg-slate-100 shadow-xs hover:shadow-md transition-all duration-300`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 320px, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                    <span className="text-white text-xs font-medium tracking-tight">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Mobile Horizontal Snap Scroll */}
          <div className="md:hidden flex gap-3.5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
            {mosaicImages.map((img) => (
              <div
                key={img.id}
                className="group relative flex-none w-[270px] sm:w-[310px] h-[195px] sm:h-[220px] rounded-2xl overflow-hidden bg-slate-100 shadow-xs snap-start"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 270px, 310px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-medium tracking-tight">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. EDITORIAL INTRO & WHAT BBA IS (CONTEXT IN NEPAL & FUTURE SCOPE)         */}
      {/* ========================================================================= */}
      <div className="pt-6 sm:pt-10 pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Statement */}
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-slate-900 tracking-[-0.02em] leading-[1.2] text-left">
            What is BBA and why is it Nepal&apos;s most sought-after{" "}
            <span className="font-semibold text-slate-950">
              business degree?
            </span>
          </h1>

          {/* Three Clean Editorial Paragraphs on BBA, Scope in Nepal & Practical Edge */}
          <div className="mt-8 sm:mt-10 space-y-6 text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-4xl">
            <p>
              The <strong>Bachelor of Business Administration (BBA)</strong> is a 4-year, 8-semester
              professional undergraduate degree designed to develop executive managerial competence,
              financial acumen, and strategic problem-solving abilities. Unlike conventional annual
              programs, BBA operates on a rigorous semester system that blends academic theory with
              practical case studies, business simulations, term papers, corporate presentations,
              and a compulsory capstone internship defense.
            </p>

            <p>
              In the context of Nepal, BBA has emerged as the premier gateway into the corporate
              world. Nepal&apos;s rapidly growing commercial banking network (&apos;A&apos; Class banks),
              booming fintech landscape (eSewa, Khalti, IME Pay), telecommunication leaders (Ncell,
              NTC), FMCG conglomerates (Unilever Nepal, Surya Nepal, Chaudhary Group), and rising
              startup ecosystem heavily recruit BBA graduates for their communication confidence,
              analytical mindset, and day-one workplace readiness.
            </p>

            <p>
              Beyond immediate corporate placement, the BBA degree provides an international
              academic foundation. Graduates possess the exact credit-hour standards (120–126
              credits) required for premier global Master of Business Administration (MBA) and
              specialized Master of Science (MS) programs across top universities in Nepal, the US,
              the UK, Canada, Australia, and Europe.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TRUSTED BY UNIVERSITIES & BUSINESS SCHOOLS STRIP                     */}
      {/* ========================================================================= */}
      <div className="border-t border-slate-100/80 pt-10 pb-12 sm:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-slate-600 uppercase mb-8">
            OFFERED UNDER NEPAL&apos;S 4 LEADING UNIVERSITIES & 150+ BUSINESS SCHOOLS
          </p>

          {/* University & Business School Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative shrink-0">
                <Image src="/tu-logo.svg" alt="Tribhuvan University" fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700">Tribhuvan University</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative shrink-0 rounded-full overflow-hidden">
                <Image src="/pu-logo.jpg" alt="Pokhara University" fill className="object-cover" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700">Pokhara University</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative shrink-0">
                <Image src="/ku-logo.svg" alt="Kathmandu University" fill className="object-contain" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700">Kathmandu University</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative shrink-0 rounded-full overflow-hidden">
                <Image src="/purbanchal-logo.png" alt="Purbanchal University" fill className="object-cover" />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700">Purbanchal University</span>
            </div>

            {/* Leading Affiliated Business Schools in Nepal */}
            <div className="flex items-center gap-6 text-xs sm:text-sm font-bold tracking-wider text-slate-500 uppercase">
              <span>KUSOM</span>
              <span>•</span>
              <span>Apex College</span>
              <span>•</span>
              <span>Ace Institute</span>
              <span>•</span>
              <span>Thames</span>
              <span>•</span>
              <span>KCM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. HORIZONTAL 5-PHOTO ROUNDED GALLERY (BBA CAMPUS EXPERIENCE)             */}
      {/* ========================================================================= */}
      <div className="relative py-6 sm:py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Left / Right Navigation Buttons */}
          <div className="flex justify-end gap-2.5 mb-4 sm:mb-6 pr-2">
            <button
              onClick={() => scrollCarousel("left")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition shadow-xs cursor-pointer"
              aria-label="Previous images"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition shadow-xs cursor-pointer"
              aria-label="Next images"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Smooth Horizontal Scrolling Gallery */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative flex-none w-[260px] sm:w-[300px] lg:w-[320px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px"
                />
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-xs sm:text-sm font-medium tracking-tight leading-snug drop-shadow-sm">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3.5. CREATIVE SHOWCASE: FINANCIAL & CAPITAL SELF-DRAWING MURAL ($ ART)    */}
      {/* ========================================================================= */}
      <div className="relative w-full py-16 sm:py-24 bg-slate-950 overflow-hidden border-y border-slate-900 select-none">
        
        {/* Full Left-to-Right Panoramic Financial Image Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/bba-finance/finance-market-bg.jpg"
            alt="Financial markets and capital analytics ambiance"
            fill
            className="object-cover opacity-40 scale-100"
            priority
          />
          {/* Vertical vignette to blend smoothly into the dark cinematic space */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/30 to-slate-950/75" />
        </div>

        {/* Section Headline Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6 sm:mb-10 pointer-events-none">
          <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-white tracking-tight">
            The language of capital &amp; enterprise.{" "}
            <span className="font-semibold text-amber-300">
              Money, markets &amp; management.
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal max-w-2xl mx-auto">
            At its core, a BBA teaches you how capital moves, multiplies, and builds real-world value across commercial banking, fintech, and modern business in Nepal.
          </p>
        </div>

        {/* Full-Width Panoramic SVG Financial Line Art Canvas */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2 sm:px-6 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 1200 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[500px] filter drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]"
          >
            {/* 1. Foundation: Financial Ledger, Double-Entry Sheet & Market Floor (Continuous Loop 1) */}
            <path
              d="M470 330C530 318 575 322 600 335C625 322 670 318 730 330M470 350C530 338 575 342 600 355C625 342 670 338 730 350M470 330V350M730 330V350M600 335V355M525 325V344M675 325V344M100 365H450M750 365H1100"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-1"
            />

            {/* 2. Central Sacred Treasury Vault & Radiance Halo (Continuous Loop 2) */}
            <path
              d="M600 95C660 95 700 140 700 195C700 250 660 295 600 295C540 295 500 250 500 195C500 140 540 95 600 95ZM600 335V295"
              stroke="rgba(255, 255, 255, 0.92)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-2"
            />

            {/* 3. Left Wing: Ascending Exponential Market Growth Curve & Candlesticks (Continuous Loop 3) */}
            <path
              d="M110 330C220 325 310 290 390 210C430 170 465 110 510 75M495 72L512 73L508 90M160 365V285H185V365M172 265V285M230 365V240H255V365M242 220V240M305 365V185H330V365M317 165V185M380 365V135H405V365M392 115V135M120 220C160 170 240 180 270 140C290 110 270 80 240 85C200 92 175 140 195 190"
              stroke="rgba(255, 255, 255, 0.88)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-3"
            />

            {/* 4. Right Wing: Commercial Banking Columns, Scales of Balance & Capital Circulation (Continuous Loop 4) */}
            <path
              d="M780 200L890 135L1000 200ZM805 200V365M825 200V365M880 200V365M900 200V365M955 200V365M975 200V365M1000 170C1040 150 1080 150 1110 170M1030 160L1015 220M1030 160L1045 220M1010 220H1050M1080 160L1065 200M1080 160L1095 200M1060 200H1100M740 280C800 240 880 260 960 220C1030 185 1080 230 1050 290C1020 340 940 330 870 310"
              stroke="rgba(255, 255, 255, 0.88)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-4"
            />

            {/* 5. Center Golden Accent: The Prominent '$' Currency Symbol & Wealth Crest (Continuous Accent Loop) */}
            <path
              d="M626 150C620 132 598 120 576 132C554 145 560 170 592 184C630 202 642 228 626 254C610 274 572 270 562 250M596 100V288M604 100V288M600 70L615 85L600 100L585 85ZM600 45V60M575 85H560M625 85H640M510 75L530 55M520 50H535V65"
              stroke="#F5B82E"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-accent"
            />
          </svg>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. AT SCALE ACROSS NEPAL (Serif Numbers Section)                          */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 bg-white border-t border-slate-100/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 tracking-[-0.015em] mb-14 sm:mb-20">
            At scale across Nepal.
          </h3>

          {/* 4 Editorial Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 tracking-tight font-normal">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-[13px] text-slate-600 font-normal mt-3 tracking-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. THE FOUR PEDAGOGICAL PILLARS OF BBA                                   */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 text-center tracking-[-0.015em] mb-16 sm:mb-24">
            The four foundational pillars that define{" "}
            <span className="font-semibold text-slate-950">the BBA curriculum.</span>
          </h3>

          {/* 4 Value Pillars with Exact Transparent Illustrations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 items-start">
            {values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                
                {/* Artwork Graphic */}
                <div className="h-44 sm:h-48 w-full flex items-center justify-center sm:justify-start mb-6">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-300 ease-out">
                    <Image
                      src={val.icon}
                      alt={val.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-[17px] font-semibold text-slate-900 tracking-tight leading-snug">
                  {val.title}
                </h4>

                {/* Subtitle Tag */}
                <p className="text-xs font-semibold text-blue-600 mt-1 mb-2">
                  {val.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. OUR HUBS / MAJOR UNIVERSITY STRUCTURE                                  */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overline Tag */}
          <p className="text-xs font-bold tracking-[0.2em] text-slate-600 uppercase mb-3">
            ACADEMIC HUBS
          </p>

          {/* Headline */}
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 tracking-[-0.015em] mb-12 sm:mb-16">
            BBA program framework across Nepal&apos;s major universities.
          </h3>

          {/* 2-Column Hubs Grid matching Join's office hubs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-12 lg:gap-x-16">
            {hubs.map((hub, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                {/* Minimalist Location Pin Icon */}
                <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                  <svg
                    className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                {/* Hub Information */}
                <div>
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-base sm:text-[17px] font-semibold text-slate-900 tracking-tight">
                      {hub.university}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {hub.code}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-snug">
                    {hub.campus}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {hub.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. REQUIRED BBA DETAILS: ELIGIBILITY (+2/SEE) & ENTRANCE EXAMS           */}
      {/* ========================================================================= */}
      <div className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              ADMISSION & ELIGIBILITY CONDITIONS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 tracking-tight mt-2">
              Eligibility criteria & entrance requirements to study BBA in Nepal
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Admission into the BBA program in Nepal requires meeting academic eligibility standards
              at the +2 level and passing the university management entrance examination.
            </p>
          </div>

          {/* 3 Admission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Academic Qualification */}
            <div className="bg-[#FAFBFD] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                +2 / Higher Secondary Criteria
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Candidates must have successfully completed 10+2 / NEB, CBSE, A-Levels, or equivalent
                from any recognized educational board in <strong>any discipline</strong> (Management,
                Science, or Humanities).
              </p>
              <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-700">
                <span className="font-semibold text-slate-900 block mb-1">Minimum GPA:</span>
                Minimum aggregate GPA of <strong>1.8 to 2.0</strong> (or minimum grade D+/C in each individual subject depending on university regulations).
              </div>
            </div>

            {/* Card 2: University Entrance Exams */}
            <div className="bg-[#FAFBFD] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                Mandatory Entrance Exams
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Applicants must register and appear for the designated university management entrance examination:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span><strong>CMAT:</strong> 100-mark test for Tribhuvan University</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span><strong>KUMAT:</strong> Verbal & analytical test for KUSOM</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  <span><strong>PU Entrance:</strong> Written aptitude for Pokhara University</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Interview & Final Merit */}
            <div className="bg-[#FAFBFD] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                Interview & Final Selection
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Candidates who meet the entrance cut-off score are invited for:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span><strong>Personal Interview (PI):</strong> Assessing communication and career motivation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span><strong>Group Discussion (GD):</strong> Evaluating teamwork and articulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span><strong>Merit List:</strong> Calculated from +2 GPA (30%), Entrance (60%), and Interview (10%)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 8. REQUIRED BBA DETAILS: CURRICULUM ARCHITECTURE & SPECIALIZATIONS       */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-24 bg-[#FAFBFE] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              CONCENTRATION STREAMS
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 tracking-tight mt-2">
              Four core specializations tailored for Nepal&apos;s corporate market
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              In Semesters 6, 7, and 8, BBA students choose a concentration area to specialize in,
              accompanied by an industry project and viva-voce examination.
            </p>
          </div>

          {/* Specialization Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 mb-3">
                    {spec.badge}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {spec.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {spec.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Key Subjects:
                    </span>
                    <ul className="space-y-1">
                      {spec.courses.map((course, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  <span className="font-semibold text-slate-700">Career Paths: </span>
                  {spec.careers}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Quick Facts Ribbon */}
          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Degree Length</span>
                <span className="text-base font-bold text-slate-900">4 Years (8 Semesters)</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200" />
              <div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Credit Hours</span>
                <span className="text-base font-bold text-slate-900">120 – 126 Total Credits</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200" />
              <div>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Eligibility (+2)</span>
                <span className="text-base font-bold text-slate-900">Min. GPA 1.8 – 2.0 / C</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Link
                href="/notes"
                className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition shadow-xs"
              >
                Browse Study Notes
              </Link>
              <Link
                href="/universities"
                className="flex-1 md:flex-none text-center px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
              >
                View Universities
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
