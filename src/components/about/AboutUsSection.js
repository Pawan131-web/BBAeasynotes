"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
  // 8 Curated Mosaic Cards reflecting the Creator's Journey, Coding, Design & Vision
  const mosaicImages = [
    {
      id: "creator-1",
      src: "/images/creator/creator-workspace.jpg",
      alt: "Creator workspace with laptop, code editor, and fresh coffee",
      caption: "Crafting the Platform · Late-Night Engineering",
      span: "w-[320px] sm:w-[380px] lg:w-[420px] xl:w-[450px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "creator-2",
      src: "/images/creator/creator-coffee.jpg",
      alt: "Espresso and student notebook on wooden desk",
      caption: "Deep Focus & Mindful Curation",
      span: "w-[160px] sm:w-[190px] lg:w-[210px] xl:w-[225px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "creator-3",
      src: "/images/creator/creator-wireframe.jpg",
      alt: "UI UX design wireframes and responsive sketches",
      caption: "UI/UX Architecture & Simplicity",
      span: "w-[180px] sm:w-[215px] lg:w-[240px] xl:w-[255px] h-[180px] sm:h-[220px] lg:h-[245px] xl:h-[265px] self-end",
    },
    {
      id: "creator-4",
      src: "/images/creator/creator-library.jpg",
      alt: "University library archives and management textbooks",
      caption: "Syllabus Research Across Nepal",
      span: "w-[200px] sm:w-[235px] lg:w-[260px] xl:w-[280px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "creator-5",
      src: "/images/creator/creator-notes.jpg",
      alt: "Handwritten management notes and fountain pen",
      caption: "Synthesizing Complex Concepts",
      span: "w-[180px] sm:w-[215px] lg:w-[240px] xl:w-[255px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "creator-6",
      src: "/images/creator/creator-code.jpg",
      alt: "Developer writing Next.js and full-stack code",
      caption: "High-Performance Web Tech",
      span: "w-[175px] sm:w-[210px] lg:w-[230px] xl:w-[245px] h-[185px] sm:h-[220px] lg:h-[245px] xl:h-[265px] self-start",
    },
    {
      id: "creator-7",
      src: "/images/creator/creator-studio.jpg",
      alt: "Minimalist desk with greenery and notebook",
      caption: "Distraction-Free Environment",
      span: "w-[160px] sm:w-[190px] lg:w-[210px] xl:w-[225px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
    {
      id: "creator-8",
      src: "/images/creator/creator-vision.jpg",
      alt: "Digital tablet roadmap for education in Nepal",
      caption: "Empowering 150+ BBA Colleges",
      span: "w-[340px] sm:w-[410px] lg:w-[460px] xl:w-[490px] h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px]",
    },
  ];

  // Core Numbers
  const stats = [
    { number: "150+", label: "Colleges Reached Across Nepal" },
    { number: "100%", label: "Free & Open Access for Students" },
    { number: "1", label: "Solo Developer & Creator Vision" },
    { number: "0", label: "Distracting Popups or Paid Paywalls" },
  ];

  // The 4 Guiding Philosophies
  const philosophies = [
    {
      icon: "/images/about/creator-pillar-1.svg",
      title: "Radical Student-First Focus",
      subtitle: "Built by a Student for Students",
      description:
        "Every semester outline, model answer, and study guide is hand-curated to bring clarity to exam preparation. We measure our impact solely by how much academic stress we remove.",
    },
    {
      icon: "/images/about/creator-pillar-2.svg",
      title: "Zero Friction & Clutter-Free",
      subtitle: "Pure Learning, No Distractions",
      description:
        "No forced signups to view a single note, no intrusive ad popups, and no paywalls. We believe modern academic tools should be as clean and dignified as a quiet university library.",
    },
    {
      icon: "/images/about/creator-pillar-3.svg",
      title: "Curricular Rigor Across Nepal",
      subtitle: "TU, PU, KU & Purbanchal Aligned",
      description:
        "Syllabus structures in Nepal differ markedly between universities. We map materials specifically to each university's grading schemes, question weights, and case study requirements.",
    },
    {
      icon: "/images/about/creator-pillar-4.svg",
      title: "Independent Craftsmanship",
      subtitle: "Engineered with Precision",
      description:
        "Single-handedly designed and coded using Next.js, Tailwind CSS, and cloud architecture to ensure lightning-fast note loading, even on modest 3G/4G connections across Nepal.",
    },
  ];

  // Platform Governance, Legal Policies & Copyright
  const policies = [
    {
      number: "01",
      title: "Intellectual Property & Design Copyright",
      subtitle: "Original Architecture & Feature Rights",
      summary:
        "All visual designs, UI/UX interaction models, frontend layouts, custom graphics, and software features on BBA Easy Notes are the exclusive intellectual property of the creator and protected under the Copyright Act of Nepal and international treaties.",
      clauses: [
        "Unauthorized copying, cloning, scraping, or commercial republication of this site's design, code, or features is strictly prohibited.",
        "Any entity, individual, or competing platform found plagiarizing the layout, branding, or feature set will face immediate formal cease-and-desist enforcement and civil/criminal legal action in appropriate courts.",
        "Educational fair-use for personal study is permitted, but automated data extraction or mass mirroring without written consent is strictly barred.",
      ],
    },
    {
      number: "02",
      title: "File Upload Standards & Abuse Penalties",
      subtitle: "Zero-Tolerance Repository Integrity",
      summary:
        "BBA Easy Notes is built as a trusted sanctuary for genuine study materials. All community submissions and file uploads are strictly monitored and logged for security and authenticity.",
      clauses: [
        "Users are strictly prohibited from uploading unwanted, irrelevant, copyrighted textbook piracy, promotional spam, adult content, or files containing malicious scripts, viruses, or spyware.",
        "Any user found uploading unauthorized or malicious files will face immediate and permanent account termination, IP-range bans, and forfeiture of all platform privileges.",
        "Severe abuse, malicious hacking attempts, or harmful content dissemination will be reported directly to Nepal Police Cyber Bureau and law enforcement agencies for formal prosecution under the Electronic Transactions Act (Cyber Law).",
      ],
    },
    {
      number: "03",
      title: "User Reviews & Content Usage License",
      subtitle: "Permission for Community Testimonials",
      summary:
        "We celebrate our community of scholars and value student feedback, notes suggestions, ratings, and course reviews to make the platform better for incoming semesters.",
      clauses: [
        "By submitting reviews, ratings, study notes, or feedback on BBA Easy Notes, the user grants the platform a non-exclusive, perpetual, royalty-free license to use, display, publish, and showcase such reviews and suggestions across our digital properties.",
        "This allows us to feature authentic student testimonials, highlight top student contributors, and display transparent feedback to help fellow BBA students make informed choices.",
        "Users retain moral authorship of their constructive contributions while ensuring the platform can utilize reviews to enhance community credibility.",
      ],
    },
    {
      number: "04",
      title: "User Agreement on Profile & Information Usage",
      subtitle: "Consent to Utilize User & Profile Details",
      summary:
        "By accessing BBA Easy Notes, creating an account, or submitting personal details, the user expressly agrees and consents to the platform utilizing their provided information as required for core site functionality, profile presentation, and service operations.",
      clauses: [
        "The user explicitly authorizes BBA Easy Notes to store, process, and utilize provided user information—including full name, avatar/profile pictures, college or campus affiliation, semester level, university enrollment, bio, and study preferences—as needed to power user profiles, leaderboards, and personalized learning feeds.",
        "The user agrees that platform interactions such as study bookmarks, note ratings, uploaded notes, and public comments may be associated with their profile and displayed across relevant pages as deemed necessary by the site.",
        "The user confirms that all profile details provided are accurate and that the site reserves the right to use aggregate, anonymized usage insights to improve notes discovery and maintain system performance.",
      ],
    },
    {
      number: "05",
      title: "Privacy Commitment & Student Confidentiality",
      subtitle: "Transparent and Secure Data Handling",
      summary:
        "While user details and profile information are utilized to run platform features, we respect student confidentiality and adhere to modern security standards.",
      clauses: [
        "We never sell, rent, or trade your personal email, private credentials, or reading history to external advertisers or commercial data brokers.",
        "Account information is utilized solely within the BBA Easy Notes ecosystem for bookmarking notes, saving study progress, authentication, and optional platform notifications.",
        "All connections are secured via SSL encryption, ensuring your notes access and exam prep stay completely private.",
      ],
    },
  ];

  return (
    <article className="bg-white text-slate-900 overflow-hidden">
      {/* ========================================================================= */}
      {/* 0. TOP PHOTO MOSAIC GALLERY (CREATOR & VISION JOURNEY)                    */}
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
      {/* 1. EDITORIAL STATEMENT: THE ORIGIN & THE CREATOR                          */}
      {/* ========================================================================= */}
      <div className="pt-6 sm:pt-10 pb-14 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-slate-900 tracking-[-0.02em] leading-[1.2] text-left">
            Building Nepal&apos;s premier digital sanctuary for{" "}
            <span className="font-semibold text-slate-950">
              management scholars.
            </span>
          </h1>

          {/* Three Clean Editorial Paragraphs on Creator, Origin & Vision */}
          <div className="mt-8 sm:mt-10 space-y-6 text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-4xl">
            <p>
              <strong>BBA Easy Notes</strong> was born from a simple yet urgent conviction: that access to world-class,
              comprehensive management education in Nepal should never be gatekept by expensive coaching centers or lost in
              faded photocopy stacks. As a student navigating the demanding Bachelor of Business Administration curriculum,
              I observed firsthand the struggle my peers faced—inconsistent syllabi, unverified notes filled with typos,
              and outdated exam solutions scattered across unorganized Facebook groups and dusty campus corners.
            </p>

            <p>
              As a solo builder, student, and software craftsman, I set out to engineer a lasting solution. Combining a deep
              passion for modern web architecture with rigorous academic curation, I spent hundreds of late nights mapping
              every semester, verifying core textbook concepts, and writing full-stack code to build this platform from the ground up.
              Every line of code and every study resource here was created with one single objective: to give every Nepali student—whether
              studying in the heart of Kathmandu, Pokhara, Biratnagar, or Chitwan—the exact clarity, confidence, and tools required to excel.
            </p>

            <p>
              Our vision extends far beyond passing semester finals. We believe that when educational tools are fast, beautiful,
              and completely free of predatory ads or paywalls, students spend less time worrying and more time thinking
              critically. We are here to empower Nepal’s future generation of commercial bankers, financial strategists, ethical
              HR directors, and daring entrepreneurs who will shape our country&apos;s economy.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CREATIVE SHOWCASE: FULL-WIDTH PANORAMIC SELF-DRAWING MURAL             */}
      {/* ========================================================================= */}
      <div className="relative w-full py-16 sm:py-24 bg-slate-950 overflow-hidden border-y border-slate-900 select-none">
        
        {/* Full Left-to-Right Panoramic Image Backdrop (Spans edge-to-edge 100%) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/creator/self-draw-bg.jpg"
            alt="Warm creative study workspace ambiance"
            fill
            className="object-cover opacity-45 scale-100"
            priority
          />
          {/* Subtle vertical vignette so it flows elegantly */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/70" />
        </div>

        {/* Section Headline Overlay (Minimal & Refined) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center mb-6 sm:mb-10 pointer-events-none">
          <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-white tracking-tight">
            Crafted with intention. <span className="font-semibold text-amber-300">Line by line.</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
            Every note verified, every semester mapped, every line drawn with purpose.
          </p>
        </div>

        {/* Panoramic SVG Canvas Spreading Fully From Left to Right */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2 sm:px-6 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 1200 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[500px] filter drop-shadow-[0_0_16px_rgba(255,255,255,0.65)]"
          >
            {/* 1. Center Foundation: Open Book & Baseline (Continuous Loop 1) */}
            <path
              d="M480 340C530 328 575 332 600 345C625 332 670 328 720 340M480 358C530 346 575 350 600 363C625 350 670 346 720 358M480 340V358M720 340V358M600 345V363M250 365H460M740 365H950"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-1"
            />

            {/* 2. Central Rising Stem & Heart Arch of Wisdom (Continuous Loop 2) */}
            <path
              d="M600 345V220M600 220C580 185 540 150 500 135C460 120 430 140 420 175C405 220 430 265 490 295 C535 315 575 320 600 320C625 320 665 315 710 295C770 265 795 220 780 175C770 140 740 120 700 135 C660 150 620 185 600 220Z"
              stroke="rgba(255, 255, 255, 0.92)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-2"
            />

            {/* 3. Left Panoramic Spreading Wing & Foliage - Reaches Far Left (Continuous Loop 3) */}
            <path
              d="M490 260C380 250 260 220 160 160C110 130 80 85 120 70C160 55 210 100 240 150C270 200 310 230 360 250M420 175C340 150 250 120 180 80C145 60 160 30 200 40C245 50 290 90 340 130M140 110C110 95 90 70 115 65C140 60 160 85 140 110ZM210 70C180 50 170 25 195 20C220 15 235 45 210 70ZM290 110C265 90 255 65 280 60C305 55 315 85 290 110ZM360 170C330 150 320 125 345 120C370 115 385 145 360 170Z"
              stroke="rgba(255, 255, 255, 0.88)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-3"
            />

            {/* 4. Right Panoramic Spreading Wing & Foliage - Reaches Far Right (Continuous Loop 4) */}
            <path
              d="M710 260C820 250 940 220 1040 160C1090 130 1120 85 1080 70C1040 55 990 100 960 150C930 200 890 230 840 250M780 175C860 150 950 120 1020 80C1055 60 1040 30 1000 40C955 50 910 90 860 130M1060 110C1090 95 1110 70 1085 65C1060 60 1040 85 1060 110ZM990 70C1020 50 1030 25 1005 20C980 15 965 45 990 70ZM910 110C935 90 945 65 920 60C895 55 885 85 910 110ZM840 170C870 150 880 125 855 120C830 115 815 145 840 170Z"
              stroke="rgba(255, 255, 255, 0.88)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-4"
            />

            {/* 5. Center Soaring Quill & Aspiration Apex (Continuous Accent Loop) */}
            <path
              d="M600 175C590 155 575 135 560 122C552 116 558 106 566 108C584 114 598 132 600 148C602 132 616 114 634 108C642 106 648 116 640 122C625 135 610 155 600 175ZM600 100V38M590 60H610"
              stroke="#F5B82E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-loop-accent"
            />
          </svg>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. AT SCALE ACROSS NEPAL (SERIF NUMBERS)                                  */}
      {/* ========================================================================= */}
      <div className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 tracking-[-0.015em] mb-12 sm:mb-16">
            A quiet commitment to every student in Nepal.
          </h3>

          {/* 4 Editorial Serif Numbers */}
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
      {/* 4. FOUR FOUNDATIONAL VALUES (CLEAN PILLARS, ZERO BOX CLUTTER)            */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-slate-900 text-center tracking-[-0.015em] mb-16 sm:mb-24">
            The four values that guide{" "}
            <span className="font-semibold text-slate-950">our platform design.</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 items-start">
            {philosophies.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left group">
                
                {/* Minimalist Artwork Graphic */}
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

                <h4 className="text-base sm:text-[17px] font-semibold text-slate-900 tracking-tight leading-snug">
                  {val.title}
                </h4>

                <p className="text-xs font-semibold text-blue-600 mt-1 mb-2">
                  {val.subtitle}
                </p>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. PLATFORM GOVERNANCE, COPYRIGHT & LEGAL POLICIES                        */}
      {/* ========================================================================= */}
      <div className="py-20 sm:py-28 bg-[#FAFBFE] border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-slate-900 tracking-tight">
              Platform governance, intellectual property &amp;{" "}
              <span className="font-semibold text-slate-950">privacy policies.</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal">
              BBA Easy Notes is maintained with integrity and respect for our community.
              Please read the legally binding policies governing the use of this website.
            </p>

            {/* Mandatory Agreement Notice Banner */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                  Agreement by Continued Use
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  <strong>By continuing to browse, access, or use this site, all viewers and users explicitly agree to follow and abide by all privacy terms, copyright protections, and governance policies of BBA Easy Notes.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Clean Editorial Policy Grid (No tacky multicolor boxes, pure elegant typography) */}
          <div className="space-y-12 sm:space-y-16">
            {policies.map((policy) => (
              <div
                key={policy.number}
                className="pt-8 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start"
              >
                {/* Left Column: Number & Titles */}
                <div className="md:col-span-5">
                  <span className="text-xs font-bold text-slate-600 tracking-widest uppercase block mb-1">
                    SECTION {policy.number}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                    {policy.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-blue-600 mt-1">
                    {policy.subtitle}
                  </p>
                </div>

                {/* Right Column: Narrative & Detailed Enforceable Clauses */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                    {policy.summary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {policy.clauses.map((clause, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {clause}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Legal Summary Ribbon */}
          <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
            <p>
              Last Updated: 2026. Governed by the laws of Nepal and international digital property treaties.
            </p>
            <div className="flex items-center gap-4 text-slate-700 font-medium">
              <span>Contact: admin@bbaeasynotes.com</span>
              <span>•</span>
              <Link href="/notes" className="text-blue-600 hover:underline">
                Explore Notes
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. CREATOR DIRECT INVITATION (CLEAN & SUBTLE)                             */}
      {/* ========================================================================= */}
      <div className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
            Have feedback, notes to share, or a word for the creator?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto font-normal">
            BBA Easy Notes is continuously evolving. If you spot an error, want to contribute model answers,
            or want to connect directly with the developer, our inbox is always open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:admin@bbaeasynotes.com"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition shadow-xs"
            >
              Email Creator Directly
            </a>
            <Link
              href="/notes"
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition"
            >
              Browse Semester Materials
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

