// One friendly badge per session, named after what the kid mastered.

export interface Badge {
  id: string;
  name: string;
  emoji: string;
}

export const sessionBadges: Record<number, Badge> = {
  1: { id: "algorithm-explorer", name: "Algorithm Explorer", emoji: "🧭" },
  2: { id: "sequence-star", name: "Sequence Star", emoji: "🪜" },
  3: { id: "decision-detective", name: "Decision Detective", emoji: "🕵️" },
  4: { id: "loop-legend", name: "Loop Legend", emoji: "🔁" },
  5: { id: "scratch-scout", name: "Scratch Scout", emoji: "🐱" },
  6: { id: "event-wizard", name: "Event Wizard", emoji: "⚡" },
  7: { id: "repeat-master", name: "Repeat Master", emoji: "🌀" },
  8: { id: "sound-maestro", name: "Sound Maestro", emoji: "🎵" },
  9: { id: "if-else-hero", name: "If-Else Hero", emoji: "🚦" },
  10: { id: "variable-champion", name: "Variable Champion", emoji: "🏆" },
};

export function getBadgeForSession(sessionId: number): Badge | null {
  return sessionBadges[sessionId] ?? null;
}

export const TOTAL_BADGES = Object.keys(sessionBadges).length;
