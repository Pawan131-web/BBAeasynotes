"use client";

import { useEffect } from "react";

export default function AuthModal({ isOpen, onClose, type = "login" }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-sm sm:max-w-md w-full p-6 sm:p-7 shadow-2xl border border-border text-center relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-navy p-1.5 rounded-lg hover:bg-bg-light transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge Icon */}
        <div className="w-13 h-13 mx-auto mb-4 rounded-2xl bg-yellow/20 flex items-center justify-center text-yellow">
          <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Title */}
        <h3 id="auth-modal-title" className="text-xl font-bold text-navy mb-2">
          {type === "signup" ? "Sign Up" : "Log In"} Coming Soon!
        </h3>

        {/* Message */}
        <p className="text-sm text-text-muted leading-relaxed mb-6">
          This functionality is coming soon. All study materials, notes, past questions, and practice tests are <strong>100% free and open to everyone</strong> right now without needing an account.
        </p>

        {/* Action Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-navy hover:bg-navy-dark text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer"
        >
          Got it, continue reading
        </button>
      </div>
    </div>
  );
}

