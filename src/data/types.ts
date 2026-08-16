// Type definitions for the slide system

export interface BlockNode {
  type: "wrapper" | "action" | "if-else";
  color: "blue" | "orange" | "purple" | "green" | "pink";
  label: string;
  children?: BlockNode[];
  // Specific to if-else blocks
  elseLabel?: string;
  falseChildren?: BlockNode[];
}

export interface SlideData {
  id: number;
  title: string;
  emoji: string;
  content: string[];
  image?: string;
  imagePrompt?: string;
  type: "content" | "quiz" | "game" | "activity" | "review" | "homework" | "video" | "ui-tour" | "debug";
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
  // Code snippet specifically for kids
  codeSnippet?: string[];
  // Visual scratch-like blocks
  visualBlocks?: BlockNode[];
  // Interactive flip cards
  flipCards?: {
    frontEmoji: string;
    frontText: string;
    backEmoji: string;
    backText: string;
  }[];
  // Quiz-specific fields
  quiz?: {
    question: string;
    options: string[];
    correctIndex: number;
  };
  // Game-specific fields
  gameUrl?: string;
  // Video-specific fields
  videoUrl?: string;
  // Review-specific fields
  reviewPoints?: string[];
  // Activity-specific fields
  activitySteps?: string[];
  // Debug-specific fields: kid clicks the buggy step to fix it
  debug?: {
    scenario: string;
    steps: string[];
    buggyIndex: number;
    whyItsWrong: string;
    fixHint?: string;
  };
  // Real-screenshot UI tour of the Scratch editor.
  // `region` values are percentages (0-100) of the wide screenshot, used to
  // draw the spotlight rectangle over the part being explained.
  uiTour?: {
    wideImage: string;
    detailImage: string;
    detailLabel: string;
    region: { x: number; y: number; w: number; h: number };
    facts: string[];
    /** Render the detail crop tall (palettes) instead of wide. */
    detailTall?: boolean;
  };
  // Background color variant
  bgVariant?: "default" | "blue" | "purple" | "green" | "orange";
}

export interface SessionData {
  id: number;
  slug?: string;
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  slides: SlideData[];
  color: string;
}
