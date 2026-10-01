import type { Day, Question } from "../data/types";
import { answerId, partMatches } from "./grade";
import { currentStreak, formatWhen } from "./progress";
import type { Submission } from "./storage";

export type PartResult = {
  label: string;
  value: string;
  key: string;
  blank: boolean;
  correct: boolean;
};

export type QuestionResult = {
  question: Question;
  correct: boolean;
  anyBlank: boolean;
  parts: PartResult[];
};

export function gradeQuestion(
  question: Question,
  answers: Record<string, string> | undefined,
): QuestionResult {
  const parts = question.parts.map((part) => {
    const value = answers?.[answerId(question.n, part.id)] ?? "";
    const blank = value.trim() === "";
    return {
      label: part.label ?? "Answer",
      value,
      key: part.key,
      blank,
      correct: !blank && partMatches(part, value),
    };
  });
  return {
    question,
    correct: parts.every((part) => part.correct),
    anyBlank: parts.some((part) => part.blank),
    parts,
  };
}

export function scoreSubmission(day: Day, submission: Submission | undefined): {
  correct: number;
  total: number;
  results: QuestionResult[];
} {
  const results = day.questions.map((question) => gradeQuestion(question, submission?.answers));
  return {
    correct: results.filter((result) => result.correct).length,
    total: day.questions.length,
    results,
  };
}

function childAnswer(result: QuestionResult): string {
  if (result.parts.length === 1) {
    const value = result.parts[0]?.value.trim() ?? "";
    return value || "(blank)";
  }
  return result.parts
    .map((part) => `${part.label}: ${part.value.trim() || "(blank)"}`)
    .join(" · ");
}

export function summaryText(days: Day[], submissions: Submission[], now = new Date()): string {
  const byDay = new Map(submissions.map((item) => [item.day, item]));
  const lines = [
    "Ruveer’s Math Practice",
    "For Mum and Dad",
    `Exported ${formatWhen(now.toISOString(), now)}`,
    "",
    `Days saved: ${submissions.length} of 30`,
    `Streak: ${currentStreak(submissions, now)}`,
    "",
  ];

  for (const day of days) {
    const submission = byDay.get(day.day);
    if (!submission) {
      lines.push(`Day ${day.day} · ${day.topic} — not saved`);
      continue;
    }
    const score = scoreSubmission(day, submission);
    lines.push(
      `Day ${day.day} · ${day.topic} · ${score.correct}/${score.total} · ${formatWhen(submission.submittedAt, now)}`,
    );
    for (const result of score.results) {
      const mark = result.correct ? "match" : "check";
      lines.push(`${result.question.n}. ${result.question.prompt.replace(/\n/g, " ")}`);
      lines.push(`   Ruveer: ${childAnswer(result)}`);
      lines.push(`   Key: ${result.question.keyLine} (${mark})`);
    }
    lines.push("");
  }

  return lines.join("\n").trim() + "\n";
}
