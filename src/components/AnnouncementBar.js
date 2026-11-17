"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnnouncementBar() {
  const pathname = usePathname();

  // Hide on homepage, results pages, and notes reader page
  if (
    pathname === "/" ||
    pathname === "/results" ||
    pathname === "/result" ||
    pathname?.includes("/read")
  ) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className="bg-yellow text-navy h-[38px] flex items-center justify-center px-4 text-xs sm:text-[13px] tracking-wide"
    >
      <Link
        href="/past-questions?sem=5"
        className="hover:underline inline-flex items-center gap-2 justify-center font-semibold"
      >
        {/* Megaphone / announcement icon */}
        <svg
          className="w-4 h-4 shrink-0 text-navy"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.5 4.5v15l-6-4.5H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9h6l6-4.5Z" />
          <path d="M7.5 15v3.25A1.25 1.25 0 0 0 8.75 19.5h.5A1.25 1.25 0 0 0 10.5 18.25V16L7.5 15Z" />
          <path d="M19.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z" />
        </svg>
        <span>New: Sem 5 question papers added</span>
        <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
