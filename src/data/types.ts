// Type definitions for the slide system

export interface SlideData {
  id: number;
  title: string;
  emoji: string;
  content: string[];
  image?: string;
  imagePrompt?: string;
  type: "content" | "quiz" | "game" | "activity" | "review" | "homework";
  newWord?: {
    word: string;
    pronunciation: string;
    meaning: string;
    example: string;
  };
  mascotMessage: string;
  teacherNotes: {
    questions: string[];
    expectedAnswers: string[];
    tips: string[];
    transition: string;
  };
  // Quiz-specific fields
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
  };
  // Game-specific fields
  gameUrl?: string;
  // Review-specific fields
  reviewPoints?: string[];
  // Activity-specific fields
  activitySteps?: string[];
  // Background color variant
  bgVariant?: "default" | "blue" | "purple" | "green" | "orange";
}

export interface SessionData {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  slides: SlideData[];
  color: string;
}
