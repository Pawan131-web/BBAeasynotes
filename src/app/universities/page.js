import TopUniversitiesCurvedSection from "@/components/colleges/TopUniversitiesCurvedSection";
import CollegesScrollGallery from "@/components/colleges/CollegesScrollGallery";

export const metadata = {
  title: "Colleges & Universities — BBA Easy Notes",
  description:
    "Explore top universities and business colleges offering BBA in Nepal across Tribhuvan University, Pokhara University, Kathmandu University, and Purbanchal University.",
};

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. First Section: 3D Curved Cylindrical Panorama Carousel */}
      <TopUniversitiesCurvedSection />

      {/* 2. Scroll-Triggered Section: TU & PU Colleges Gallery */}
      <CollegesScrollGallery />
    </main>
  );
}

