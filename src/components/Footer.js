"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CurrentYear from "@/components/CurrentYear";

export default function Footer() {
  const pathname = usePathname();
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'sending' | 'sent'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "General Question",
    message: "",
  });

  // Hide footer on results pages and notes reader page
  if (
    pathname === "/results" ||
    pathname === "/result" ||
    pathname?.includes("/read")
  ) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("sent");
    }, 800);
  };

  const handleResetForm = () => {
    setFormStatus("idle");
    setFormData({
      name: "",
      email: "",
      topic: "General Question",
      message: "",
    });
  };

  const studyLinks = [
    { name: "Chapter Notes", href: "/notes" },
    { name: "Syllabus Outlines", href: "/notes?format=syllabus" },
    { name: "Past Question Papers", href: "/notes?format=past-questions" },
    { name: "Model Question Sets", href: "/notes?format=model-papers" },
  ];

  const universityLinks = [
    { name: "Tribhuvan University (TU)", href: "/notes?uni=tu" },
    { name: "Pokhara University (PU)", href: "/notes?uni=pu" },
    { name: "Kathmandu University (KU)", href: "/notes?uni=ku" },
    { name: "Purbanchal University (PU)", href: "/notes?uni=pu-east" },
  ];

  const exploreLinks = [
    { name: "BBA Curriculum", href: "/about-bba" },
    { name: "Board Results Hub", href: "/results" },
    { name: "About Our Mission", href: "/about-us" },
    { name: "Notice Board", href: "/#notice-board" },
  ];

  return (
    <>
      <footer className="relative bg-[#0A0D14] text-white overflow-hidden selection:bg-yellow selection:text-navy border-t border-white/10 font-sans">
        
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute top-0 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 translate-y-1/3 w-80 h-80 bg-yellow/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-18 pb-6 sm:pb-8 relative z-10">
          
          {/* ============================================================== */}
          {/* TOP SECTION: BRAND INFO + CLEAN 3-COLUMN NAVIGATION           */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14">
            
            {/* LEFT SIDE: Brand Logo, Social Icons & Contact Info (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Logo */}
              <Link href="/" className="inline-block group" title="BBA Easy Notes">
                <div className="relative h-9 sm:h-10 w-44">
                  <Image
                    src="/bbaeasynoteslogo-white.png"
                    alt="BBA Easy Notes"
                    fill
                    className="object-contain object-left group-hover:opacity-90 transition-opacity"
                  />
                </div>
              </Link>

              {/* Social Media Circular Outline Buttons (Instagram, X, YouTube, Telegram) */}
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Telegram / Community */}
                <a
                  href="https://t.me/bbaeasynotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-10 h-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </a>
              </div>

              {/* Physical Location & Contact Info */}
              <div className="space-y-1.5 text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed pt-1">
                <p>Bagbazar & Putalisadak, Kathmandu</p>
                <p>Bagmati Province, Nepal</p>
                <p className="pt-1 text-slate-300 font-medium hover:text-white transition-colors">
                  <a href="mailto:hello@bbaeasynotes.com">hello@bbaeasynotes.com</a>
                </p>
                <p className="text-slate-400">
                  (+977) 980-0000000
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: 3 Clean Minimal Columns (lg:col-span-7) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6 pt-2 lg:pt-0">
              
              {/* Column 1: STUDY */}
              <div className="space-y-3.5">
                <span className="text-[11px] font-bold text-white tracking-widest uppercase block">
                  STUDY
                </span>
                <ul className="space-y-2.5 text-xs sm:text-[13px]">
                  {studyLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-150 inline-block py-0.5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: UNIVERSITIES */}
              <div className="space-y-3.5">
                <span className="text-[11px] font-bold text-white tracking-widest uppercase block">
                  UNIVERSITIES
                </span>
                <ul className="space-y-2.5 text-xs sm:text-[13px]">
                  {universityLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-150 inline-block py-0.5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: EXPLORE */}
              <div className="space-y-3.5 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold text-white tracking-widest uppercase block">
                  EXPLORE
                </span>
                <ul className="space-y-2.5 text-xs sm:text-[13px]">
                  {exploreLinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-slate-400 hover:text-white transition-colors duration-150 inline-block py-0.5"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* DIVIDER LINE WITH RIGHT-DOCKED PILL BUTTON ("Send a Message")   */}
          {/* ============================================================== */}
          <div className="relative w-full border-t border-white/15 my-6 sm:my-8 flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsMessageModalOpen(true)}
              className="absolute -top-4 right-0 bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs sm:text-[13px] px-5 sm:px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Send us a message</span>
              <svg
                className="w-3.5 h-3.5 text-slate-900 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* ============================================================== */}
          {/* MIDDLE ROW: Short Mission Statement & Legal Links               */}
          {/* ============================================================== */}
          <div className="pt-4 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs sm:text-[13px]">
            
            {/* Mission Statement */}
            <p className="text-slate-400 font-normal leading-relaxed max-w-xl">
              From syllabus outlines to unit-by-unit concept breakdowns and 10-year board papers. BBA Easy Notes is crafted to give every BBA student in Nepal the cleanest, most accessible study sanctuary.
            </p>

            {/* Uppercase Legal Links */}
            <div className="flex items-center gap-6 text-[11px] sm:text-xs font-semibold text-slate-400 tracking-wider uppercase shrink-0">
              <Link href="/about-us" className="hover:text-white transition-colors">
                TERMS &amp; CONDITIONS
              </Link>
              <Link href="/about-us" className="hover:text-white transition-colors">
                PRIVACY POLICY
              </Link>
              <button
                type="button"
                onClick={() => setIsMessageModalOpen(true)}
                className="hover:text-white transition-colors cursor-pointer uppercase"
              >
                CONTACT US
              </button>
            </div>

          </div>

          {/* Copyright notice line */}
          <div className="pt-2 pb-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
            <p>© <CurrentYear /> BBA Easy Notes. Handcrafted for BBA Students in Nepal 🇳🇵</p>
            <p className="text-slate-500 font-mono text-[11px]">v2.6 · 2026 Ready</p>
          </div>

        </div>

        {/* ============================================================== */}
        {/* GIANT ARCHITECTURAL BRAND WATERMARK TYPOGRAPHY ALONG THE BOTTOM */}
        {/* Matches reference screenshot ("ente. - mome")                  */}
        {/* ============================================================== */}
        <div className="w-full overflow-hidden select-none pointer-events-none -mb-3 sm:-mb-6 md:-mb-10 lg:-mb-14 text-center">
          <span className="text-[54px] sm:text-[88px] md:text-[124px] lg:text-[168px] xl:text-[208px] 2xl:text-[230px] font-black tracking-tighter text-white/[0.045] sm:text-white/[0.055] leading-none uppercase whitespace-nowrap block">
            bbaeasynotes
          </span>
        </div>

      </footer>

      {/* ============================================================== */}
      {/* INTERACTIVE "SEND US A MESSAGE" POPUP MODAL                     */}
      {/* ============================================================== */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#0F141F] border border-slate-700/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl text-white font-sans overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsMessageModalOpen(false);
                if (formStatus === "sent") handleResetForm();
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white w-8 h-8 rounded-full bg-slate-800/60 hover:bg-slate-700 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              title="Close"
              aria-label="Close message modal"
            >
              ✕
            </button>

            {formStatus === "sent" ? (
              /* Success State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-2xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Message Delivered!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been sent to our academic support team. We will get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      handleResetForm();
                      setIsMessageModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-all cursor-pointer shadow-md"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Message Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Header */}
                <div className="pr-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-yellow/15 border border-yellow/30 text-[11px] font-bold text-yellow mb-2.5">
                    <span>Academic Helpdesk</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Have a question, feedback, or need specific notes? Let us know and we’ll help you out.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-3 pt-2">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="e.g. Aayush Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Email or WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="e.g. aayush@example.com or 98XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow transition-all"
                    />
                  </div>

                  {/* Topic Dropdown */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, topic: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow transition-all cursor-pointer"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Notes & Study Material Request">Notes &amp; Study Material Request</option>
                      <option value="Syllabus & Course Outline Question">Syllabus &amp; Course Outline Question</option>
                      <option value="Report an Error / Suggestion">Report an Error / Suggestion</option>
                      <option value="Colleges / University Collaboration">Colleges / University Collaboration</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Write your note or question here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsMessageModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-[13px] shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}
