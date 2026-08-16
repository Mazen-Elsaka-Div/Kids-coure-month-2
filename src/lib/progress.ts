// Client-side progress tracking (points + badges) stored in localStorage.
// Fires "progress:points" CustomEvent on window so UI can react instantly.

const STORAGE_KEY = "codeclass:progress";

export interface ProgressState {
  points: number;
  completedSessions: Record<string, true>;
  badges: string[];
}

const EMPTY_STATE: ProgressState = {
  points: 0,
  completedSessions: {},
  badges: [],
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getProgress(): ProgressState {
  if (!isBrowser()) return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      points: typeof parsed.points === "number" ? parsed.points : 0,
      completedSessions: parsed.completedSessions ?? {},
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
    };
  } catch {
    return EMPTY_STATE;
  }
}

function saveProgress(state: ProgressState) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); fail silently.
  }
}

export function getPoints(): number {
  return getProgress().points;
}

export function addPoints(amount: number): number {
  const state = getProgress();
  state.points += amount;
  saveProgress(state);
  if (isBrowser()) {
    window.dispatchEvent(
      new CustomEvent("progress:points", {
        detail: { total: state.points, delta: amount },
      })
    );
  }
  return state.points;
}

export function isSessionCompleted(sessionId: number): boolean {
  return Boolean(getProgress().completedSessions[String(sessionId)]);
}

export function completeSession(sessionId: number, badgeId: string): boolean {
  const state = getProgress();
  if (state.completedSessions[String(sessionId)]) return false;
  state.completedSessions[String(sessionId)] = true;
  if (!state.badges.includes(badgeId)) {
    state.badges.push(badgeId);
  }
  saveProgress(state);
  return true;
}

export function getEarnedBadges(): string[] {
  return getProgress().badges;
}
