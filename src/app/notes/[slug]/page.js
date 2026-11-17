import { notFound } from "next/navigation";
import { getSubjectCurriculum } from "@/data/subjectCurriculumData";
import { NOTES_CATALOG } from "@/data/notesData";
import SubjectDetailClient from "@/components/notes/SubjectDetailClient";

export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const curriculum = getSubjectCurriculum(slug);
  if (!curriculum) {
    return {
      title: "Subject Not Found — BBA Easy Notes",
    };
  }
  return {
    title: `${curriculum.subject.title} (${curriculum.subject.semester}) Notes & Syllabus — BBA Easy Notes`,
    description: `${curriculum.subject.description} Download verified PDF notes, past questions, and model papers for TU, PU, KU, and PU-East.`,
  };
}

export async function generateStaticParams() {
  return NOTES_CATALOG.map((note) => ({
    slug: note.slug,
  }));
}

export default async function SubjectDetailPage({ params }) {
  const { slug } = await params;
  const curriculum = getSubjectCurriculum(slug);

  if (!curriculum) {
    notFound();
  }

  return <SubjectDetailClient curriculum={curriculum} />;
}

