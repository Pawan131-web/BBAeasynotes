import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-navy text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Text */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Start studying smarter today
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Pick your university to get study material right away.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/universities"
              className="bg-yellow hover:brightness-105 active:scale-95 text-navy font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md text-center cursor-pointer"
            >
              Choose university
            </Link>
            <a
              href="https://t.me/bbaeasynotes"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold text-sm px-6 py-3 rounded-xl transition-all text-center"
            >
              Join Telegram group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
