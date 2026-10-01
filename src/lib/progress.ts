import type { Submission } from "./storage";

function dayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function currentStreak(submissions: Submission[], now = new Date()): number {
  const saved = new Set(submissions.map((item) => dayKey(new Date(item.submittedAt))));
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!saved.has(dayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!saved.has(dayKey(cursor))) return 0;
  }
  let streak = 0;
  while (saved.has(dayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function nextDay(done: Set<number>): number | null {
  for (let day = 1; day <= 30; day += 1) {
    if (!done.has(day)) return day;
  }
  return null;
}

export function formatWhen(iso: string, now = new Date()): string {
  const date = new Date(iso);
  const time = date.toLocaleTimeString("en-AE", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const start = (value: Date) => new Date(value.getFullYear(), value.getMonth(), value.getDate());
  const today = start(now).getTime();
  const that = start(date).getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (that === today) return `today, ${time}`;
  if (that === today - oneDay) return `yesterday, ${time}`;
  const label = date.toLocaleDateString("en-AE", {
    day: "numeric",
    month: "short",
    year: date.getFullYear() === now.getFullYear() ? undefined : "numeric",
  });
  return `${label}, ${time}`;
}
