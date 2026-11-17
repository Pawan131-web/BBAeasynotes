export default function SubjectIcon({ type, className = "w-10 h-10" }) {
  switch (type) {
    case "notebook":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Notebook back & cover */}
          <rect x="10" y="6" width="28" height="36" rx="4" fill="#F87171" stroke="#1F2937" strokeWidth="2.5" />
          {/* Inner spine lines / stitches */}
          <rect x="7" y="11" width="6" height="3" rx="1" fill="#FEF08A" stroke="#1F2937" strokeWidth="2" />
          <rect x="7" y="22" width="6" height="3" rx="1" fill="#FEF08A" stroke="#1F2937" strokeWidth="2" />
          <rect x="7" y="33" width="6" height="3" rx="1" fill="#FEF08A" stroke="#1F2937" strokeWidth="2" />
          {/* Bookmark ribbon */}
          <path d="M28 6V18L32 15L36 18V6H28Z" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
          {/* Front label plate */}
          <rect x="16" y="24" width="16" height="11" rx="2" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
          <line x1="19" y1="28" x2="29" y2="28" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="19" y1="31" x2="26" y2="31" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "accounting":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Coin */}
          <circle cx="15" cy="16" r="9" fill="#FBBF24" stroke="#1F2937" strokeWidth="2.5" />
          <text x="15" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937" fontFamily="sans-serif">$</text>
          {/* Bars */}
          <rect x="25" y="26" width="5" height="15" rx="1.5" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" />
          <rect x="32" y="20" width="5" height="21" rx="1.5" fill="#34D399" stroke="#1F2937" strokeWidth="2" />
          <rect x="39" y="14" width="5" height="27" rx="1.5" fill="#F87171" stroke="#1F2937" strokeWidth="2" />
          {/* Growth arrow */}
          <path d="M22 22L33 13L42 9" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37 9H42V14" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "megaphone":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Megaphone body */}
          <path d="M12 21H18L30 13V35L18 27H12C10.8954 27 10 26.1046 10 25V23C10 21.8954 10.8954 21 12 21Z" fill="#38BDF8" stroke="#1F2937" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Front opening */}
          <ellipse cx="30" cy="24" rx="3" ry="11" fill="#FBBF24" stroke="#1F2937" strokeWidth="2.5" />
          {/* Handle */}
          <path d="M16 27V36C16 37.1046 16.8954 38 18 38C19.1046 38 20 37.1046 20 36V27" fill="#F87171" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
          {/* Sound waves */}
          <path d="M36 17C38.5 19 39.5 21.5 39.5 24C39.5 26.5 38.5 29 36 31" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M41 13C44.5 16.5 46 20 46 24C46 28 44.5 31.5 41 35" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "org":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Top boss node */}
          <circle cx="24" cy="12" r="5" fill="#F87171" stroke="#1F2937" strokeWidth="2" />
          <path d="M18 22C18 19.5 20.5 18 24 18C27.5 18 30 19.5 30 22" fill="#F87171" stroke="#1F2937" strokeWidth="2" />
          
          {/* Connection lines */}
          <path d="M24 22V27M13 27H35M13 27V30M35 27V30" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />

          {/* Left node */}
          <circle cx="13" cy="33" r="4" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" />
          <path d="M8 41C8 39 10 37.5 13 37.5C16 37.5 18 39 18 41" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" />

          {/* Right node */}
          <circle cx="35" cy="33" r="4" fill="#34D399" stroke="#1F2937" strokeWidth="2" />
          <path d="M30 41C30 39 32 37.5 35 37.5C38 37.5 40 39 40 41" fill="#34D399" stroke="#1F2937" strokeWidth="2" />
        </svg>
      );

    case "gavel":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Gavel head */}
          <g transform="rotate(-30 24 24)">
            <rect x="18" y="10" width="12" height="20" rx="3" fill="#B45309" stroke="#1F2937" strokeWidth="2.5" />
            <rect x="16" y="8" width="16" height="5" rx="1.5" fill="#F59E0B" stroke="#1F2937" strokeWidth="2" />
            <rect x="16" y="27" width="16" height="5" rx="1.5" fill="#F59E0B" stroke="#1F2937" strokeWidth="2" />
            {/* Handle */}
            <rect x="22" y="28" width="4" height="22" rx="2" fill="#D97706" stroke="#1F2937" strokeWidth="2.5" />
          </g>
          {/* Striking block */}
          <ellipse cx="14" cy="40" rx="8" ry="4" fill="#6B7280" stroke="#1F2937" strokeWidth="2" />
        </svg>
      );

    case "hr":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Center Leader */}
          <circle cx="24" cy="15" r="5" fill="#F87171" stroke="#1F2937" strokeWidth="2" />
          <path d="M17 26C17 23 20 21 24 21C28 21 31 23 31 26V28H17V26Z" fill="#F87171" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />

          {/* Left Member */}
          <circle cx="12" cy="20" r="4" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" />
          <path d="M6 30C6 27.5 8.5 25.5 12 25.5C14.5 25.5 16.5 26.5 17.5 28.5L16 32H6V30Z" fill="#38BDF8" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />

          {/* Right Member */}
          <circle cx="36" cy="20" r="4" fill="#34D399" stroke="#1F2937" strokeWidth="2" />
          <path d="M42 30C42 27.5 39.5 25.5 36 25.5C33.5 25.5 31.5 26.5 30.5 28.5L32 32H42V30Z" fill="#34D399" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );

    case "economics":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#F1F5F9" stroke="#1F2937" strokeWidth="2.5" />
          <path d="M12 12V36H36" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 30C20 28 24 18 34 14" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 16C22 18 26 28 34 32" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="23.5" r="3" fill="#F59E0B" stroke="#1F2937" strokeWidth="1.5" />
        </svg>
      );

    case "stats":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2.5" />
          <rect x="13" y="24" width="4" height="12" rx="1" fill="#38BDF8" stroke="#1F2937" strokeWidth="1.5" />
          <rect x="20" y="16" width="4" height="20" rx="1" fill="#FBBF24" stroke="#1F2937" strokeWidth="1.5" />
          <rect x="27" y="20" width="4" height="16" rx="1" fill="#34D399" stroke="#1F2937" strokeWidth="1.5" />
          <rect x="34" y="12" width="4" height="24" rx="1" fill="#F87171" stroke="#1F2937" strokeWidth="1.5" />
          <path d="M11 20L19 14L28 17L37 9" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "finance":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Safe box */}
          <rect x="8" y="10" width="32" height="28" rx="4" fill="#F0FDF4" stroke="#1F2937" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="8" fill="#FDE047" stroke="#1F2937" strokeWidth="2" />
          <circle cx="24" cy="24" r="3" fill="#1F2937" />
          <line x1="24" y1="16" x2="24" y2="18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="30" x2="24" y2="32" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="24" x2="18" y2="24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          <line x1="30" y1="24" x2="32" y2="24" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
          <rect x="12" y="38" width="6" height="4" rx="1" fill="#1F2937" />
          <rect x="30" y="38" width="6" height="4" rx="1" fill="#1F2937" />
        </svg>
      );

    case "cost":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Calculator */}
          <rect x="10" y="7" width="28" height="34" rx="4" fill="#EDE9FE" stroke="#1F2937" strokeWidth="2.5" />
          <rect x="14" y="11" width="20" height="8" rx="2" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
          {/* Buttons */}
          <circle cx="17" cy="24" r="2" fill="#A855F7" />
          <circle cx="24" cy="24" r="2" fill="#A855F7" />
          <circle cx="31" cy="24" r="2" fill="#A855F7" />
          <circle cx="17" cy="30" r="2" fill="#A855F7" />
          <circle cx="24" cy="30" r="2" fill="#A855F7" />
          <circle cx="31" cy="30" r="2" fill="#A855F7" />
          <rect x="15" y="34" width="18" height="3" rx="1.5" fill="#F43F5E" />
        </svg>
      );

    case "communication":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Blue Speech Bubble */}
          <path d="M10 14C10 10.6863 12.6863 8 16 8H28C31.3137 8 34 10.6863 34 14V22C34 25.3137 31.3137 28 28 28H18L12 34V28H10C6.68629 28 4 25.3137 4 22V14" fill="#93C5FD" stroke="#1F2937" strokeWidth="2" strokeLinejoin="round" />
          {/* Yellow overlapping speech bubble */}
          <path d="M22 20C22 17.7909 23.7909 16 26 16H38C40.2091 16 42 17.7909 42 20V28C42 30.2091 40.2091 32 38 32H34V38L28 32H26C23.7909 32 22 30.2091 22 28V20Z" fill="#FDE047" stroke="#1F2937" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="28" cy="24" r="1.5" fill="#1F2937" />
          <circle cx="32" cy="24" r="1.5" fill="#1F2937" />
          <circle cx="36" cy="24" r="1.5" fill="#1F2937" />
        </svg>
      );

    case "it":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Laptop Screen */}
          <rect x="10" y="10" width="28" height="20" rx="3" fill="#38BDF8" stroke="#1F2937" strokeWidth="2.5" />
          <rect x="13" y="13" width="22" height="14" rx="1" fill="#0F172A" />
          <path d="M16 18L19 20L16 22M21 22H26" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" />
          {/* Base */}
          <path d="M6 32C6 30.8954 6.89543 30 8 30H40C41.1046 30 42 30.8954 42 32V34C42 35.1046 41.1046 36 40 36H8C6.89543 36 6 35.1046 6 34V32Z" fill="#E2E8F0" stroke="#1F2937" strokeWidth="2.5" />
        </svg>
      );

    case "strategy":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Target */}
          <circle cx="24" cy="24" r="16" fill="#FEE2E2" stroke="#1F2937" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="11" fill="#FEF3C7" stroke="#1F2937" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" fill="#F87171" stroke="#1F2937" strokeWidth="2" />
          <circle cx="24" cy="24" r="2" fill="#1F2937" />
          {/* Arrow */}
          <path d="M38 10L26 22" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M38 15V10H33" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tax":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Document */}
          <rect x="11" y="7" width="26" height="34" rx="3" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2.5" />
          <line x1="16" y1="13" x2="26" y2="13" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="19" x2="32" y2="19" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="25" x2="32" y2="25" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          {/* Stamp */}
          <circle cx="28" cy="32" r="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
          <path d="M25 32L27 34L31 30" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "operations":
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          {/* Box / Delivery */}
          <path d="M24 8L38 15V33L24 40L10 33V15L24 8Z" fill="#FDE68A" stroke="#1F2937" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 8V40M24 24L38 15M24 24L10 15" stroke="#1F2937" strokeWidth="2" />
          <path d="M19 18L24 21L29 18" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <rect x="10" y="8" width="28" height="32" rx="4" fill="#38BDF8" stroke="#1F2937" strokeWidth="2.5" />
          <line x1="16" y1="16" x2="32" y2="16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="22" x2="32" y2="22" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="28" x2="26" y2="28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

