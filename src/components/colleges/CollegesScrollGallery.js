"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/**
 * 27 Premier Colleges & Universities in Nepal
 * Complete full-page overlapping photo gallery
 * (All cards uniform — no special yellow marks)
 */
const GALLERY_COLLEGES = [
  // --- ROW 1 (4 cards) ---
  {
    id: "tu",
    name: "Tribhuvan University",
    location: "Kirtipur, Kathmandu",
    image: "/universities/tu-hd.jpg",
    rotate: -2.5,
    row: 1,
  },
  {
    id: "sdc",
    name: "Shanker Dev Campus",
    location: "Putalisadak, Kathmandu",
    image: "/universities/sdc-hd.jpg",
    rotate: 2.2,
    row: 1,
  },
  {
    id: "thames",
    name: "Thames International College",
    location: "Old Baneshwor, Kathmandu",
    image: "/colleges/thames.jpg",
    rotate: -1.8,
    row: 1,
  },
  {
    id: "apex",
    name: "Apex College",
    location: "Mid-Baneshwor, Kathmandu",
    image: "/colleges/apex.jpg",
    rotate: 3,
    row: 1,
  },

  // --- ROW 2 (5 cards) ---
  {
    id: "pu",
    name: "Pokhara University",
    location: "Dhungepatan, Pokhara",
    image: "/universities/pu-hd.jpg",
    rotate: 2,
    row: 2,
  },
  {
    id: "jmc",
    name: "Janapriya Multiple Campus",
    location: "Simalchaur, Pokhara",
    image: "/JMC.png",
    rotate: -3,
    row: 2,
  },
  {
    id: "ace",
    name: "Ace Institute of Management",
    location: "Sinamangal, Kathmandu",
    image: "/colleges/ace.jpg",
    rotate: 1.5,
    row: 2,
  },
  {
    id: "dav",
    name: "DAV College of Management",
    location: "Bhanimandal, Lalitpur",
    image: "/colleges/dav.jpg",
    rotate: -2.5,
    row: 2,
  },
  {
    id: "ku",
    name: "Kathmandu University",
    location: "Dhulikhel, Kavre",
    image: "/universities/ku-hd.jpg",
    rotate: 2.8,
    row: 2,
  },

  // --- ROW 3 (5 cards) ---
  {
    id: "lacm",
    name: "Little Angels' College of Management",
    location: "Hattiban, Lalitpur",
    image: "/colleges/lacm.jpg",
    rotate: -2.2,
    row: 3,
  },
  {
    id: "pyc",
    name: "Public Youth Campus",
    location: "Dhobichaur, Kathmandu",
    image: "/colleges/pyc.jpg",
    rotate: 2.5,
    row: 3,
  },
  {
    id: "kings",
    name: "King's College",
    location: "Babarmahal, Kathmandu",
    image: "/colleges/kings.jpg",
    rotate: -1.5,
    row: 3,
  },
  {
    id: "quest",
    name: "Quest International College",
    location: "Gwarko, Lalitpur",
    image: "/colleges/quest.jpg",
    rotate: 3.2,
    row: 3,
  },
  {
    id: "kusom",
    name: "KUSOM",
    location: "Balkumari, Lalitpur",
    image: "/universities/kusom-hd.jpg",
    rotate: -2.8,
    row: 3,
  },

  // --- ROW 4 (5 cards) ---
  {
    id: "stxaviers",
    name: "St. Xavier's College",
    location: "Maitighar, Kathmandu",
    image: "/colleges/stxaviers.jpg",
    rotate: 2.4,
    row: 4,
  },
  {
    id: "uniglobe",
    name: "Uniglobe College",
    location: "New Baneshwor, Kathmandu",
    image: "/colleges/uniglobe.jpg",
    rotate: -3,
    row: 4,
  },
  {
    id: "kist",
    name: "KIST College",
    location: "Kamalpokhari, Kathmandu",
    image: "/colleges/kist.jpg",
    rotate: 1.8,
    row: 4,
  },
  {
    id: "ncc",
    name: "Nepal Commerce Campus",
    location: "Minbhawan, Kathmandu",
    image: "/colleges/ncc.jpg",
    rotate: -2.2,
    row: 4,
  },
  {
    id: "kmc",
    name: "Kathmandu Model College",
    location: "Balkumari, Lalitpur",
    image: "/colleges/kmc.jpg",
    rotate: 2.6,
    row: 4,
  },

  // --- ROW 5 (4 cards) ---
  {
    id: "saim",
    name: "SAIM College",
    location: "Old Baneshwor, Kathmandu",
    image: "/colleges/saim.jpg",
    rotate: -2,
    row: 5,
  },
  {
    id: "prime",
    name: "Prime College",
    location: "Khusibu, Kathmandu",
    image: "/colleges/prime.jpg",
    rotate: 2.5,
    row: 5,
  },
  {
    id: "boston",
    name: "Boston International College",
    location: "Bharatpur, Chitwan",
    image: "/colleges/boston.jpg",
    rotate: -2.8,
    row: 5,
  },
  {
    id: "nccs",
    name: "NCCS College",
    location: "Paknajol, Kathmandu",
    image: "/colleges/nccs.jpg",
    rotate: 1.9,
    row: 5,
  },

  // --- ROW 6 (4 cards) ---
  {
    id: "pnc",
    name: "Prithvi Narayan Campus",
    location: "Bagar, Pokhara",
    image: "/colleges/pnc.jpg",
    rotate: -2.4,
    row: 6,
  },
  {
    id: "patan",
    name: "Patan Multiple Campus",
    location: "Patandhoka, Lalitpur",
    image: "/colleges/patan.jpg",
    rotate: 2.2,
    row: 6,
  },
  {
    id: "padmakanya",
    name: "Padmakanya Multiple Campus",
    location: "Bagbazar, Kathmandu",
    image: "/colleges/padmakanya.jpg",
    rotate: -1.7,
    row: 6,
  },
  {
    id: "purbanchal",
    name: "Purbanchal University",
    location: "Biratnagar",
    image: "/universities/purbanchal-hd.jpg",
    rotate: 2.6,
    row: 6,
  },
];

export default function CollegesScrollGallery() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Trigger pop-up animation from bottom when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.05 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Split cards by row
  const row1 = GALLERY_COLLEGES.filter((c) => c.row === 1);
  const row2 = GALLERY_COLLEGES.filter((c) => c.row === 2);
  const row3 = GALLERY_COLLEGES.filter((c) => c.row === 3);
  const row4 = GALLERY_COLLEGES.filter((c) => c.row === 4);
  const row5 = GALLERY_COLLEGES.filter((c) => c.row === 5);
  const row6 = GALLERY_COLLEGES.filter((c) => c.row === 6);

  const renderCard = (col, index, totalOffset) => {
    const isHovered = hoveredId === col.id;
    const globalIdx = totalOffset + index;

    return (
      <div
        key={col.id}
        onMouseEnter={() => setHoveredId(col.id)}
        onMouseLeave={() => setHoveredId(null)}
        style={{
          transform: isVisible
            ? isHovered
              ? "translateY(-14px) scale(1.1) rotate(0deg)"
              : `translateY(0px) scale(1) rotate(${col.rotate}deg)`
            : "translateY(140px) scale(0.85) rotate(0deg)",
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${globalIdx * 35}ms, opacity 0.6s ease ${globalIdx * 35}ms, box-shadow 0.3s ease`,
          zIndex: isHovered ? 60 : 10 + index,
        }}
        className={`relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] h-[175px] sm:h-[200px] md:h-[230px] lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xl shadow-slate-950/15 hover:shadow-2xl ${
          index > 0 ? "-ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16" : ""
        }`}
      >
        {/* Background Image */}
        <Image
          src={col.image}
          alt={col.name}
          fill
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-108" : "scale-100"
          }`}
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
        />

        {/* Clean Vignette for bottom text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

        {/* Bottom Card Title & Location (Uniform for all colleges) */}
        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white z-20 flex flex-col justify-end">
          <h4 className="text-xs sm:text-sm md:text-[15px] font-bold text-white tracking-tight leading-snug drop-shadow-sm truncate">
            {col.name}
          </h4>
          <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 truncate drop-shadow-xs">
            {col.location}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white pt-10 pb-24 sm:pt-14 sm:pb-32 overflow-hidden select-none border-t border-slate-100"
    >
      {/* Pure, Clean Heading */}
      <div className="w-full text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Colleges in Nepal
        </h2>
      </div>

      {/* Full-Page Overlapping Gallery: Cards stacked on each other, popping from bottom */}
      <div className="w-full flex flex-col items-center justify-center">
        
        {/* ROW 1 */}
        <div className="flex items-center justify-center w-full px-4 overflow-visible">
          {row1.map((col, idx) => renderCard(col, idx, 0))}
        </div>

        {/* ROW 2 */}
        <div className="flex items-center justify-center w-full px-4 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-visible">
          {row2.map((col, idx) => renderCard(col, idx, 4))}
        </div>

        {/* ROW 3 */}
        <div className="flex items-center justify-center w-full px-4 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-visible">
          {row3.map((col, idx) => renderCard(col, idx, 9))}
        </div>

        {/* ROW 4 */}
        <div className="flex items-center justify-center w-full px-4 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-visible">
          {row4.map((col, idx) => renderCard(col, idx, 14))}
        </div>

        {/* ROW 5 */}
        <div className="flex items-center justify-center w-full px-4 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-visible">
          {row5.map((col, idx) => renderCard(col, idx, 19))}
        </div>

        {/* ROW 6 */}
        <div className="flex items-center justify-center w-full px-4 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 overflow-visible">
          {row6.map((col, idx) => renderCard(col, idx, 23))}
        </div>

      </div>
    </section>
  );
}
