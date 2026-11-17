import { notFound } from "next/navigation";
import { getSubjectCurriculum } from "@/data/subjectCurriculumData";
import { NOTES_CATALOG } from "@/data/notesData";
import UniversalNotesReader from "@/components/notes/UniversalNotesReader";

export const instant = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const curriculum = getSubjectCurriculum(slug);
  if (!curriculum) {
    return {
      title: "Notes Not Found — BBA Easy Notes",
    };
  }
  return {
    title: `Study Notes: ${curriculum.subject.title} — BBA Easy Notes`,
    description: `Read verified, chapter-by-chapter complete study notes for ${curriculum.subject.title} with TU/PU exam patterns, definitions, and case studies.`,
  };
}

export async function generateStaticParams() {
  return NOTES_CATALOG.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotesReaderPage({ params }) {
  const { slug } = await params;
  const curriculum = getSubjectCurriculum(slug);

  if (!curriculum) {
    notFound();
  }

  return <UniversalNotesReader curriculum={curriculum} />;
}

