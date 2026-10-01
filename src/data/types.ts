export type Part = {
  id: string;
  label?: string;
  /** Answer shown to a parent. */
  key: string;
  /** When set, one number equal to this (units ignored) is accepted. */
  number?: number;
  accept?: string[];
};

export type Question = {
  n: number;
  prompt: string;
  /** One-line answer key for parent review. */
  keyLine: string;
  parts: Part[];
};

export type Day = {
  day: number;
  topic: string;
  questions: Question[];
};

export function q(
  n: number,
  prompt: string,
  key: string,
  opts?: { number?: number; accept?: string[] },
): Question {
  return {
    n,
    prompt,
    keyLine: key,
    parts: [{ id: "a", key, number: opts?.number, accept: opts?.accept }],
  };
}

export function multi(
  n: number,
  prompt: string,
  keyLine: string,
  parts: Part[],
): Question {
  return { n, prompt, keyLine, parts };
}

export function part(
  id: string,
  label: string,
  key: string,
  opts?: { number?: number; accept?: string[] },
): Part {
  return { id, label, key, number: opts?.number, accept: opts?.accept };
}
