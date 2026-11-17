import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingNoticeBoard from "@/components/home/FloatingNoticeBoard";

export const metadata = {
  title: "BBA Easy Notes — Study Materials for BBA Students in Nepal",
  description:
    "Your one-stop destination for BBA study materials in Nepal. Syllabus, notes, past questions, model papers, and practice tests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingNoticeBoard />
      </body>
    </html>
  );
}
