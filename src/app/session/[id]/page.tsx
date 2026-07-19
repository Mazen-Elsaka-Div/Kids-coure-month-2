import { notFound } from "next/navigation";
import { session1 } from "@/data/session1";
import { session2 } from "@/data/session2";
import { Navigation } from "@/components/Navigation";
import { SlideLayout } from "@/components/SlideLayout";
import { TeacherNotes } from "@/components/TeacherNotes";
import { Mascot } from "@/components/Mascot";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default async function SessionPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const sessionId = params.id;
  const session = sessionId === "1" ? session1 : sessionId === "2" ? session2 : null;

  if (!session) {
    notFound();
  }

  // Get current slide from URL or default to 1
  const slideParam = searchParams.slide;
  const currentSlideId = typeof slideParam === "string" ? parseInt(slideParam, 10) : 1;

  const currentSlide = session.slides.find((s) => s.id === currentSlideId);

  if (!currentSlide) {
    notFound();
  }

  // Calculate prev/next
  const totalSlides = session.slides.length;
  const prevSlideId = currentSlideId > 1 ? currentSlideId - 1 : null;
  const nextSlideId = currentSlideId < totalSlides ? currentSlideId + 1 : null;

  return (
    <>
      <Navigation
        sessionId={sessionId}
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        prevSlideId={prevSlideId}
        nextSlideId={nextSlideId}
      />
      
      <main className="overflow-hidden relative min-h-screen">
        <SlideLayout slide={currentSlide} />
      </main>

      {currentSlide.teacherNotes && (
        <TeacherNotes notes={currentSlide.teacherNotes} />
      )}

      {currentSlide.mascotMessage && (
        <Mascot message={currentSlide.mascotMessage} />
      )}
    </>
  );
}
