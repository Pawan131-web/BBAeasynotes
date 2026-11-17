import AboutUsSection from "@/components/about/AboutUsSection";

export const metadata = {
  title: "About Us & Vision — BBA Easy Notes",
  description:
    "Discover the origin story, creator vision, and governance policies of BBA Easy Notes, Nepal's student-first management learning sanctuary.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutUsSection />
    </main>
  );
}
