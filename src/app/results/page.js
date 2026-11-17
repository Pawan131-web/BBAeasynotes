import Image from "next/image";
import RealTimeCosmicClock from "@/components/results/RealTimeCosmicClock";

export const metadata = {
  title: "Results — BBA Easy Notes",
  description:
    "Semester results portal for BBA students across Tribhuvan University, Pokhara University, Kathmandu University, and Purbanchal University. Coming soon!",
};

export default function ResultsPage() {
  return (
    <main className="relative w-full min-h-screen bg-slate-950 text-white overflow-hidden select-none">
      
      {/* ===================================================================== */}
      {/* BACKGROUND: CINEMATIC STARRY NIGHT OVER MOUNTAIN PEAK                 */}
      {/* ===================================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/results-bg.jpg"
          alt="Starry Night Mountain Sky"
          fill
          priority
          className="object-cover object-bottom filter brightness-[0.92] contrast-[1.05]"
          sizes="100vw"
        />

        {/* Ambient Dark Atmospheric Gradient Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/60" />

        {/* Soft Cosmic Nebula Hues */}
        <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />
      </div>

      {/* ===================================================================== */}
      {/* FOREGROUND: REAL-TIME COSMIC CLOCK & CIRCULAR SECONDS DIAL            */}
      {/* ===================================================================== */}
      <RealTimeCosmicClock />

    </main>
  );
}
