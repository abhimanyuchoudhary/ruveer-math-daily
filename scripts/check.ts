import assert from "node:assert/strict";
import fs from "node:fs";
import { days, getDay } from "../src/data/days.ts";
import { partMatches } from "../src/lib/grade.ts";

const source = fs.readFileSync(new URL("../content/day1-questions.md", import.meta.url), "utf8");
const [questionBlock, keyBlock] = source.split(/\nAnswer key[^\n]*\n/);
if (!questionBlock || !keyBlock) throw new Error("Could not split the Day 1 file");

function numbered(block: string): string[] {
  const found: string[] = [];
  const starts = [...block.matchAll(/^(\d+)\. /gm)];
  for (let index = 0; index < starts.length; index += 1) {
    const current = starts[index];
    const next = starts[index + 1];
    if (!current || current.index == null) continue;
    const n = Number(current[1]);
    if (n !== found.length + 1) throw new Error(`Numbering jumped to ${n}`);
    const from = current.index + current[0].length;
    const to = next?.index ?? block.length;
    found.push(block.slice(from, to).trim());
  }
  return found;
}

const prompts = numbered(questionBlock);
const keys = numbered(keyBlock);
const day1 = getDay(1);
assert.ok(day1);
assert.equal(prompts.length, 12);
assert.equal(keys.length, 12);
day1.questions.forEach((question, index) => {
  assert.equal(question.prompt, prompts[index], `Day 1 prompt ${index + 1}`);
  assert.equal(question.keyLine, keys[index], `Day 1 key ${index + 1}`);
});

assert.equal(days.length, 30);
const seen = new Set<number>();
for (const day of days) {
  assert.equal(seen.has(day.day), false, `duplicate day ${day.day}`);
  seen.add(day.day);
  assert.equal(day.questions.length, 12, `day ${day.day} question count`);
  day.questions.forEach((question, index) => {
    assert.equal(question.n, index + 1, `day ${day.day} numbering`);
    assert.ok(question.prompt.trim().length > 0);
    assert.ok(question.keyLine.trim().length > 0);
    assert.equal(/\\frac|\\\[|\\\(|\$\$/.test(question.prompt), false, question.prompt);
    const ids = new Set<string>();
    for (const part of question.parts) {
      assert.equal(ids.has(part.id), false);
      ids.add(part.id);
      assert.equal(partMatches(part, part.key), true, `day ${day.day} q${question.n} key ${part.key}`);
      for (const accepted of part.accept ?? []) {
        assert.equal(
          partMatches(part, accepted),
          true,
          `day ${day.day} q${question.n} accept ${accepted}`,
        );
      }
    }
  });
}
for (let day = 1; day <= 30; day += 1) assert.ok(seen.has(day));

function compute(expr: string): number | null {
  const compact = expr.replace(/\s+/g, "");
  const tokens = compact.match(/\d+(?:\.\d+)?|[+\-*/]/g);
  if (!tokens || tokens.join("") !== compact) return null;
  const values: number[] = [];
  const ops: string[] = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i] ?? "";
    if (i % 2 === 0) {
      if (!/^\d/.test(token)) return null;
      values.push(Number(token));
    } else {
      ops.push(token);
    }
  }
  if (values.length !== ops.length + 1) return null;
  for (let i = 0; i < ops.length; ) {
    if (ops[i] === "*" || ops[i] === "/") {
      const left = values[i];
      const right = values[i + 1];
      const op = ops[i];
      if (left == null || right == null || op == null) return null;
      values.splice(i, 2, op === "*" ? left * right : left / right);
      ops.splice(i, 1);
    } else {
      i += 1;
    }
  }
  let total = values[0];
  if (total == null) return null;
  for (let i = 0; i < ops.length; i += 1) {
    const right = values[i + 1];
    if (right == null) return null;
    total = ops[i] === "+" ? total + right : total - right;
  }
  return total;
}

function expressionValue(prompt: string): number | null {
  const line = prompt.split("\n")[0]?.trim() ?? "";
  if (!/[+\-−×÷]/.test(line)) return null;
  if (/[a-z]/i.test(line.replace(/aed/gi, ""))) return null;
  let expr = line.replace(/−/g, "-").replace(/×/g, "*").replace(/÷/g, "/");
  expr = expr.replace(/aed/gi, "");
  expr = expr.replace(/=.*$/, "");
  if (!/^[\d\s.+\-*/]+$/.test(expr)) return null;
  return compute(expr);
}

for (const day of days) {
  for (const question of day.questions) {
    const value = expressionValue(question.prompt);
    const only = question.parts.length === 1 ? question.parts[0] : undefined;
    if (value != null && only?.number != null) {
      assert.ok(
        Math.abs(value - only.number) < 1e-9,
        `Day ${day.day} Q${question.n} evaluates to ${value}, key ${only.number}: ${question.prompt}`,
      );
    }
    const remainder = question.prompt.match(/^(\d+) ÷ (\d+)\./);
    if (remainder && question.parts.length === 2) {
      const left = Number(remainder[1]);
      const right = Number(remainder[2]);
      assert.equal(question.parts[0]?.number, Math.floor(left / right), question.prompt);
      assert.equal(question.parts[1]?.number, left % right, question.prompt);
    }
  }
}

const q1 = day1.questions;
assert.equal(partMatches(q1[5]!.parts[0]!, "3/4 is bigger"), true);
assert.equal(partMatches(q1[5]!.parts[0]!, "5/8"), false);
assert.equal(partMatches(q1[6]!.parts[0]!, "245"), true);
assert.equal(partMatches(q1[6]!.parts[0]!, "2 m 45 cm"), false);
assert.equal(partMatches(q1[9]!.parts[0]!, "5:25 pm"), true);
assert.equal(partMatches(q1[9]!.parts[0]!, "17:25"), true);
assert.equal(partMatches(q1[9]!.parts[0]!, "5:45"), false);
assert.equal(partMatches(q1[10]!.parts[0]!, "38 cm"), true);
assert.equal(partMatches(q1[10]!.parts[1]!, "84 cm2"), true);
assert.equal(partMatches(q1[11]!.parts[0]!, "24 marbles"), true);
assert.equal(partMatches(q1[2]!.parts[0]!, "55"), true);
assert.equal(partMatches(q1[2]!.parts[1]!, "17"), true);

function partNumber(day: number, n: number, id: string): number {
  const question = getDay(day)?.questions.find((item) => item.n === n);
  const part = question?.parts.find((item) => item.id === id);
  assert.ok(part?.number != null, `missing number day ${day} q${n} ${id}`);
  return part.number;
}

assert.equal(partNumber(1, 3, "change"), 300 - 245);
assert.equal(partNumber(1, 3, "left"), 55 - 38);
assert.equal(partNumber(1, 8, "a"), 96 - 96 / 4);
assert.equal(partNumber(1, 11, "perimeter"), 2 * (12 + 7));
assert.equal(partNumber(1, 11, "area"), 12 * 7);
assert.equal(partNumber(2, 11, "pages"), 15 + 18);
assert.equal(partNumber(2, 11, "left"), 80 - 33);
assert.equal(partNumber(6, 11, "total"), 108 + 75);
assert.equal(partNumber(6, 11, "longer"), 108 - 75);
assert.equal(partNumber(12, 11, "distance"), 24 + 18);
assert.equal(partNumber(12, 11, "speed"), 42 / 3);
assert.equal(partNumber(13, 11, "discount"), 60 * 0.25);
assert.equal(partNumber(13, 11, "sale"), 60 - 15);
assert.equal(partNumber(16, 11, "cost"), 18 * 4);
assert.equal(partNumber(16, 11, "left"), 100 - 72);
assert.equal(partNumber(18, 11, "bill"), 3 * 2 + 11);
assert.equal(partNumber(18, 11, "change"), 20 - 17);
assert.equal(partNumber(21, 11, "one"), 12 * 3);
assert.equal(partNumber(21, 11, "two"), 36 * 2);
assert.equal(partNumber(22, 11, "distance"), 80 + 40);
assert.equal(partNumber(22, 11, "speed"), 120 / 3);
assert.equal(partNumber(23, 11, "off"), 400 * 0.2);
assert.equal(partNumber(23, 11, "sale"), 400 - 80);
assert.equal(partNumber(25, 4, "a"), 120 - 35 - 18);
assert.equal(partNumber(25, 5, "a"), 6 * 14 - 8);
assert.equal(partNumber(25, 8, "a"), 42 - 27 - 9);
assert.equal(partNumber(25, 10, "each"), 100 / 4);
assert.equal(partNumber(25, 10, "left"), 25 - 9);
assert.equal(partNumber(25, 11, "start"), 8 * 12);
assert.equal(partNumber(25, 11, "left"), 96 - 15);
assert.equal(partNumber(27, 11, "first"), 47 + 86 - 29);
assert.equal(partNumber(27, 11, "double"), 104 * 2);
assert.equal(partNumber(29, 11, "all"), 30 * 3);
assert.equal(partNumber(29, 11, "left"), 90 - 30);
assert.equal(partNumber(30, 4, "each"), 96 / 4);
assert.equal(partNumber(30, 4, "left"), 24 - 7);
assert.equal(partNumber(30, 5, "perimeter"), 2 * (16 + 9));
assert.equal(partNumber(30, 5, "area"), 16 * 9);
assert.equal(partNumber(30, 7, "speed"), 150 / 3);
assert.equal(partNumber(30, 7, "distance"), 50 * 5);

console.log("Question bank checks passed.");
