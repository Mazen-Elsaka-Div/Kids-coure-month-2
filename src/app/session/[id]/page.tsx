import { notFound } from "next/navigation";
import { session1 } from "@/data/session1";
import { session2 } from "@/data/session2";
import { session3 } from "@/data/session3";
import { session4 } from "@/data/session4";
import { session5 } from "@/data/session5";
import { session6 } from "@/data/session6";
import { session7 } from "@/data/session7";
import { Navigation } from "@/components/Navigation";
import { SlideLayout } from "@/components/SlideLayout";
import { TeacherNotes } from "@/components/TeacherNotes";
import { Mascot } from "@/components/Mascot";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }];
}

export default async function SessionPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const sessionId = params.id;
  const session = sessionId === "1" ? session1 : sessionId === "2" ? session2 : sessionId === "3" ? session3 : sessionId === "4" ? session4 : sessionId === "5" ? session5 : sessionId === "6" ? session6 : sessionId === "7" ? session7 : null;

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
