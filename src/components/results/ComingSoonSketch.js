"use client";

/**
 * Self-Drawing "Coming Soon" Background Sketch Animation
 * Continuous looping stroke-dasharray line drawing
 * Matches the hand-drawn line-art style from BBA Info and About Us
 */
export default function ComingSoonSketch() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-visible z-0">
      <svg
        viewBox="0 0 960 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[840px] h-auto opacity-35 sm:opacity-40"
      >
        <defs>
          <linearGradient id="sketchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          <filter id="sketchGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <style>{`
            @keyframes sketchDrawLoop {
              0% {
                stroke-dashoffset: 1400;
                opacity: 0;
              }
              15% {
                opacity: 1;
              }
              75% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              90% {
                stroke-dashoffset: 0;
                opacity: 0.8;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
            }

            @keyframes sketchAccentLoop {
              0% {
                stroke-dashoffset: 400;
                opacity: 0;
              }
              30% {
                stroke-dashoffset: 400;
                opacity: 0;
              }
              70% {
                stroke-dashoffset: 0;
                opacity: 1;
              }
              90% {
                stroke-dashoffset: 0;
                opacity: 0.9;
              }
              100% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
            }

            .sketch-char-path {
              stroke-dasharray: 1400;
              stroke-dashoffset: 1400;
              animation: sketchDrawLoop 5.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }

            .sketch-accent-path {
              stroke-dasharray: 400;
              stroke-dashoffset: 400;
              animation: sketchAccentLoop 5.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
          `}</style>
        </defs>

        {/* ------------------------------------------------------------------ */}
        {/* BIG SKETCH TEXT: "COMING SOON" IN ARTISTIC CALLIGRAPHY OUTLINES    */}
        {/* ------------------------------------------------------------------ */}
        
        {/* "C" */}
        <path
          d="M130 85 C115 50, 60 45, 45 90 C30 135, 50 185, 100 185 C130 185, 145 160, 150 145"
          stroke="url(#sketchGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "0ms" }}
        />

        {/* "o" */}
        <path
          d="M190 145 C190 115, 225 115, 225 145 C225 175, 190 175, 190 145 Z"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "180ms" }}
        />

        {/* "m" */}
        <path
          d="M260 180 L260 120 C275 115, 290 115, 295 130 C305 115, 325 115, 335 130 L335 180 M295 130 L295 180"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "360ms" }}
        />

        {/* "i" */}
        <path
          d="M375 125 L375 180 M375 105 L375 108"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          className="sketch-char-path"
          style={{ animationDelay: "540ms" }}
        />

        {/* "n" */}
        <path
          d="M415 180 L415 120 C430 112, 455 112, 460 135 L460 180"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          className="sketch-char-path"
          style={{ animationDelay: "720ms" }}
        />

        {/* "g" */}
        <path
          d="M500 145 C500 120, 530 120, 530 145 C530 170, 500 170, 500 145 Z M530 125 L530 195 C530 225, 495 230, 480 215"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "900ms" }}
        />

        {/* "S" */}
        <path
          d="M635 80 C600 70, 575 90, 575 115 C575 155, 640 140, 640 175 C640 205, 605 210, 570 195"
          stroke="url(#sketchGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "1150ms" }}
        />

        {/* "o" */}
        <path
          d="M680 145 C680 115, 715 115, 715 145 C715 175, 680 175, 680 145 Z"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "1350ms" }}
        />

        {/* "o" */}
        <path
          d="M750 145 C750 115, 785 115, 785 145 C785 175, 750 175, 750 145 Z"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sketch-char-path"
          style={{ animationDelay: "1550ms" }}
        />

        {/* "n" */}
        <path
          d="M825 180 L825 120 C840 112, 865 112, 870 135 L870 180"
          stroke="url(#sketchGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          className="sketch-char-path"
          style={{ animationDelay: "1750ms" }}
        />

        {/* Elegant Calligraphic Underline Flourish */}
        <path
          d="M90 220 C260 245, 640 245, 870 205"
          stroke="#f59e0b"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="sketch-accent-path"
          style={{ animationDelay: "1900ms" }}
        />

        {/* Little Sparkle Accent Left */}
        <path
          d="M50 45 L50 25 M40 35 L60 35"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="sketch-accent-path"
          style={{ animationDelay: "2100ms" }}
        />

        {/* Little Sparkle Accent Right */}
        <path
          d="M890 90 L890 70 M880 80 L900 80"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="sketch-accent-path"
          style={{ animationDelay: "2200ms" }}
        />
      </svg>
    </div>
  );
}

