import type { Part } from "../data/types";

const EXTRA_PHRASES = [
  "is more likely",
  "is less likely",
  "more likely",
  "less likely",
  "is bigger",
  "is larger",
  "is greater",
  "is smaller",
  "is longer",
  "is shorter",
  "is heavier",
  "is lighter",
  "is later",
  "is earlier",
  "is faster",
  "is slower",
  "is likely",
  "is unlikely",
  "the answer is",
  "answer is",
  "the answer",
  "i think",
];

export function answerId(n: number, partId: string): string {
  return `${n}.${partId}`;
}

function loose(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, "-")
    .replace(/×/g, "x")
    .replace(/÷/g, "/")
    .replace(/²/g, "2")
    .replace(/\s+/g, " ")
    .replace(/[.](?=\s|$)/g, "")
    .trim();
}

function tight(s: string): string {
  return loose(s).replace(/[^a-z0-9/:.%-]/g, "");
}

export function normalizePhrase(s: string): string {
  let t = ` ${loose(s)} `;
  for (const phrase of EXTRA_PHRASES) {
    t = t.split(phrase).join(" ");
  }
  t = t.replace(/\b(the|a|an|answer)\b/g, " ");
  return tight(t);
}

function tokens(s: string): string[] {
  return loose(s)
    .split(/\s*(?:,|;|\band\b)\s*/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

function tokenEq(a: string, b: string): boolean {
  if (tight(a) === tight(b) || normalizePhrase(a) === normalizePhrase(b)) return true;
  if (a.trim() !== "" && b.trim() !== "" && !/[a-z/:]/i.test(a) && !/[a-z/:]/i.test(b)) {
    const na = Number(a);
    const nb = Number(b);
    if (!Number.isNaN(na) && !Number.isNaN(nb) && na === nb) return true;
  }
  return false;
}

function numbersIn(s: string): number[] {
  if (s.includes("/")) return [];
  const matches = s.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/g);
  return matches ? matches.map(Number) : [];
}
function durationKey(s: string): string | null {
  const t = loose(s);
  const both = t.match(
    /(\d+)\s*(?:hours?|hrs?|h)\s*(?:and\s*)?(\d+)\s*(?:minutes?|mins?|m)\b/,
  );
  if (both) return `${Number(both[1])}h${Number(both[2])}m`;
  const hours = t.match(/(\d+)\s*(?:hours?|hrs?|h)\b/);
  if (hours && !/(?:minutes?|mins?)\b/.test(t)) return `${Number(hours[1])}h`;
  const minutes = t.match(/(\d+)\s*(?:minutes?|mins?)\b/);
  if (minutes && !/(?:hours?|hrs?|\bh)\b/.test(t)) return `${Number(minutes[1])}m`;
  return null;
}

type Clock = { h24: number; min: number; kind: "bare" | "ampm" | "h24" };

function parseClock(s: string): Clock | null {
  const t = loose(s);
  const match = t.match(/\b(\d{1,2})[:.](\d{2})\b/);
  if (!match) return null;
  const ampm = /\b(am|pm)\b/.test(t);
  if (!t.includes(":") && !ampm) return null;
  let h = Number(match[1]);
  const min = Number(match[2]);
  if (min > 59 || h > 23) return null;
  let kind: Clock["kind"] = "bare";
  if (ampm) {
    kind = "ampm";
    if (/\bpm\b/.test(t) && h < 12) h += 12;
    if (/\bam\b/.test(t) && h === 12) h = 0;
  } else if (h > 12) {
    kind = "h24";
  }
  return { h24: h, min, kind };
}

function clocksMatch(a: Clock, b: Clock): boolean {
  if (a.min !== b.min) return false;
  if (a.h24 === b.h24) return true;
  const bare = a.kind === "bare" || b.kind === "bare";
  return bare && a.h24 % 12 === b.h24 % 12;
}

export function partMatches(part: Part, raw: string): boolean {
  const input = raw.trim();
  if (!input) return false;
  const candidates = [part.key, ...(part.accept ?? [])];

  const inputTight = tight(input);
  const inputPhrase = normalizePhrase(input);
  if (
    candidates.some((candidate) => {
      return (
        tight(candidate) === inputTight ||
        loose(candidate) === loose(input) ||
        normalizePhrase(candidate) === inputPhrase
      );
    })
  ) {
    return true;
  }

  const inputTokens = tokens(input);
  if (inputTokens.length > 1) {
    for (const candidate of candidates) {
      const candidateTokens = tokens(candidate);
      if (
        candidateTokens.length === inputTokens.length &&
        candidateTokens.every((token, index) => tokenEq(token, inputTokens[index] ?? ""))
      ) {
        return true;
      }
    }
  }

  const inputDuration = durationKey(input);
  if (inputDuration && candidates.some((candidate) => durationKey(candidate) === inputDuration)) {
    return true;
  }

  const inputClock = parseClock(input);  if (inputClock && candidates.some((candidate) => {
    const clock = parseClock(candidate);
    return clock != null && clocksMatch(inputClock, clock);
  })) {
    return true;
  }

  if (part.number != null) {
    const found = numbersIn(input);
    if (found.length === 1 && found[0] === part.number) return true;
  }

  return false;
}
