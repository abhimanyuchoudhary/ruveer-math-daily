import { useMemo, useState } from "react";
import type { Day } from "../data/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { answerId } from "../lib/grade";
import { gradeQuestion } from "../lib/summary";
import type { Submission } from "../lib/storage";

type PracticeProps = {
  day: Day;
  submission?: Submission;
  saveBlocked: boolean;
  onBack: () => void;
  onSave: (submission: Submission) => void;
};

function blankAnswers(day: Day): Record<string, string> {
  const answers: Record<string, string> = {};
  for (const question of day.questions) {
    for (const part of question.parts) answers[answerId(question.n, part.id)] = "";
  }
  return answers;
}

export function Practice({ day, submission, saveBlocked, onBack, onSave }: PracticeProps) {
  const [answers, setAnswers] = useState<Record<string, string>>(() => ({
    ...blankAnswers(day),
    ...submission?.answers,
  }));
  const [editing, setEditing] = useState(submission == null);
  const [notice, setNotice] = useState("");
  const saved = submission != null && !editing;

  const filled = useMemo(
    () => Object.values(answers).filter((value) => value.trim() !== "").length,
    [answers],
  );
  const results = useMemo(
    () => (saved && submission ? day.questions.map((question) => gradeQuestion(question, submission.answers)) : []),
    [day.questions, saved, submission],
  );
  const matched = results.filter((result) => result.correct).length;

  function update(id: string, value: string) {
    setAnswers((current) => ({ ...current, [id]: value }));
    setNotice("");
  }

  function save() {
    if (filled === 0) {
      setNotice("Type at least one answer before saving.");
      return;
    }
    onSave({
      day: day.day,
      answers,
      submittedAt: new Date().toISOString(),
    });
    setEditing(false);
    setNotice("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-40">
      <button type="button" onClick={onBack} className="min-h-11 text-base font-extrabold text-teal">
        ← All days
      </button>
      <p className="mt-2 text-sm font-extrabold tracking-wide text-amber uppercase">Day {day.day}</p>
      <h1 className="font-display text-4xl leading-none font-semibold">{day.topic}</h1>
      <p className="mt-2 text-base text-stone">{filled} of {day.questions.reduce((sum, question) => sum + question.parts.length, 0)} boxes filled</p>

      {saved && submission ? (
        <div className={`mt-4 rounded-3xl px-4 py-4 ${saveBlocked ? "bg-miss-soft" : "bg-good-soft"}`} role="status">
          <h2 className={`text-2xl font-extrabold ${saveBlocked ? "text-miss" : "text-good"}`}>
            {saveBlocked ? "Not stored on this phone" : "Saved for Mum and Dad"}
          </h2>
          <p className="mt-1 text-base text-ink-soft">
            {saveBlocked
              ? "This browser blocked local storage, so Mum and Dad will not see these answers after a refresh."
              : `Day ${day.day} is stored on this phone. ${matched} of ${day.questions.length} match the answer key.`}
            {!saveBlocked && matched === day.questions.length
              ? " Nice work."
              : null}
            {!saveBlocked && matched !== day.questions.length
              ? " The ones to look at again stay here for them. The answer key is not shown."
              : null}
          </p>
          <Button
            variant="outline"
            size="touch"
            className="mt-3 w-full bg-card"
            onClick={() => setEditing(true)}
          >
            Change answers
          </Button>
        </div>
      ) : null}

      {notice ? (        <p className="mt-4 rounded-2xl bg-amber-soft px-4 py-3 text-base font-bold text-ink" role="alert">
          {notice}
        </p>
      ) : null}

      <ol className="mt-4 space-y-3">
        {day.questions.map((question) => {
          const result = results.find((item) => item.question.n === question.n);
          return (
            <li key={question.n} className="scroll-mb-32 rounded-3xl bg-card px-4 py-4 ring-1 ring-line">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-extrabold text-teal">Question {question.n}</p>
                {result ? (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${
                      result.correct ? "bg-good-soft text-good" : "bg-amber-soft text-amber"
                    }`}
                  >
                    {result.correct ? "Matches" : "Have another look"}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xl leading-snug font-bold whitespace-pre-line">{question.prompt}</p>
              <div className={`mt-3 grid gap-3 ${question.parts.length > 1 ? "sm:grid-cols-2" : ""}`}>
                {question.parts.map((part) => {
                  const id = answerId(question.n, part.id);
                  return (
                    <label key={part.id} className="block">
                      <span className="mb-1.5 block text-sm font-extrabold text-stone">
                        {part.label ?? "Your answer"}
                      </span>
                      <Input
                        value={answers[id] ?? ""}
                        onChange={(event) => update(id, event.target.value)}
                        readOnly={saved}
                        inputMode={part.number == null ? "text" : "decimal"}
                        autoComplete="off"
                        maxLength={200}
                        enterKeyHint="next"
                        className="h-14 rounded-2xl bg-white px-4 text-lg font-bold md:text-lg"
                        aria-label={part.label ?? `Answer for question ${question.n}`}
                      />
                    </label>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-lg gap-2 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {saved ? (
            <Button className="w-full" size="touch" onClick={onBack}>
              Back to days
            </Button>
          ) : (
            <Button className="w-full" size="touch" onClick={save}>
              {submission ? "Save updated answers" : "Save for Mum and Dad"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
