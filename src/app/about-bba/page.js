import BbaInfoSection from "@/components/bba-info/BbaInfoSection";

export const metadata = {
  title: "BBA Info & Details — BBA Easy Notes",
  description:
    "Comprehensive guide to the Bachelor of Business Administration (BBA) in Nepal across TU, PU, KU, and Purbanchal University. Syllabuses, curriculum, core specializations, and career pathways.",
};

export default function AboutBbaPage() {
  return (
    <main className="min-h-screen bg-white">
      <BbaInfoSection />
    </main>
  );
}
