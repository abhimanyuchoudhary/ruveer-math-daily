import { useRef, useState } from "react";
import { days, getDay } from "../data/days";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PARENT_PIN } from "../lib/pin";
import { formatWhen } from "../lib/progress";
import { exportPayload, parseImport, type Submission } from "../lib/storage";
import { scoreSubmission, summaryText } from "../lib/summary";

const UNLOCK_KEY = "ruveer-parent-unlocked";

type ParentProps = {
  submissions: Submission[];
  onBack: () => void;
  onClearDay: (day: number) => void;
  onClearAll: () => void;
  onImport: (incoming: Submission[]) => void;
};

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function Parent({ submissions, onBack, onClearDay, onClearAll, onImport }: ParentProps) {
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [copyNote, setCopyNote] = useState("");
  const [summaryPreview, setSummaryPreview] = useState("");
  const [importNote, setImportNote] = useState("");
  const [paste, setPaste] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const byDay = new Map(submissions.map((item) => [item.day, item]));

  function unlock() {
    if (pin.trim() === PARENT_PIN) {
      try {
        sessionStorage.setItem(UNLOCK_KEY, "1");
      } catch {
        // The page can still open for this visit if storage is blocked.
      }
      setUnlocked(true);
      setPinError("");
      return;
    }
    setPinError("That PIN is not right.");
  }

  function lock() {
    try {
      sessionStorage.removeItem(UNLOCK_KEY);
    } catch {
      // Ignore storage failures and just hide the review.
    }
    setUnlocked(false);
    setSelected(null);
    setPin("");
  }

  async function copySummary() {
    const text = summaryText(days, submissions);
    try {
      await navigator.clipboard.writeText(text);
      setCopyNote("Summary copied. You can paste it into a note or message.");
    } catch {
      setCopyNote("Copy was blocked. The summary is in the box below — select it and copy.");
      setSummaryPreview(text);
    }
  }

  function downloadJson() {
    const blob = new Blob([JSON.stringify(exportPayload({ submissions: Object.fromEntries(submissions.map((item) => [String(item.day), item])) }), null, 2)], {
      type: "application/json",
    });    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ruveer-math-answers.json";
    link.click();
    URL.revokeObjectURL(url);
    setCopyNote("JSON file downloaded.");
  }

  function takeImport(raw: string) {
    const incoming = parseImport(raw);
    if (!incoming) {
      setImportNote("That file is not a Ruveer answers export.");
      return;
    }
    onImport(incoming);
    setImportNote(`Imported ${incoming.length} saved day${incoming.length === 1 ? "" : "s"}. A newer save wins if both phones have the same day.`);
    setPaste("");
  }

  if (!unlocked) {
    return (
      <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pt-[max(1.25rem,env(safe-area-inset-top))]">
        <button type="button" onClick={onBack} className="min-h-11 self-start text-base font-extrabold text-teal">
          ← Back
        </button>
        <h1 className="mt-4 font-display text-4xl leading-none font-semibold">Parent review</h1>
        <p className="mt-3 text-lg text-ink-soft">
          This page shows Ruveer’s saved answers and the answer key. The PIN only hides it on this phone.
        </p>
        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            unlock();
          }}
        >
          <label className="block text-sm font-extrabold text-stone" htmlFor="pin">
            PIN
          </label>
          <Input
            id="pin"
            value={pin}
            onChange={(event) => {
              setPin(event.target.value);
              setPinError("");
            }}
            type="password"
            inputMode="numeric"
            autoComplete="off"
            maxLength={8}
            aria-invalid={pinError ? true : undefined}
            className="mt-2 h-14 rounded-2xl bg-card px-4 text-2xl tracking-[0.3em] md:text-2xl"
          />
          {pinError ? (
            <p className="mt-2 text-base font-bold text-miss" role="alert">
              {pinError}
            </p>
          ) : null}
          <Button className="mt-4 w-full" size="touch" type="submit">
            Open review
          </Button>
        </form>
      </div>
    );
  }

  const selectedDay = selected == null ? undefined : getDay(selected);
  const selectedSubmission = selected == null ? undefined : byDay.get(selected);

  if (selectedDay) {
    const score = scoreSubmission(selectedDay, selectedSubmission);
    return (
      <div className="mx-auto min-h-dvh w-full max-w-lg px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-10">
        <button type="button" onClick={() => setSelected(null)} className="min-h-11 text-base font-extrabold text-teal">
          ← All saved days
        </button>
        <p className="mt-2 text-sm font-extrabold tracking-wide text-amber uppercase">Day {selectedDay.day}</p>
        <h1 className="font-display text-4xl leading-none font-semibold">{selectedDay.topic}</h1>
        {selectedSubmission ? (          <p className="mt-3 text-lg font-bold">
            {score.correct}/{score.total} match · saved {formatWhen(selectedSubmission.submittedAt)}
          </p>
        ) : (
          <p className="mt-3 text-lg text-ink-soft">Ruveer has not saved this day yet. The key is here if you want to look ahead.</p>
        )}
        <ol className="mt-4 space-y-3">
          {score.results.map((result) => (
            <li key={result.question.n} className="rounded-3xl bg-card px-4 py-4 ring-1 ring-line">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-extrabold text-teal">Question {result.question.n}</p>
                {selectedSubmission ? (
                  <span className={`text-sm font-extrabold ${result.correct ? "text-good" : "text-miss"}`}>
                    {result.correct ? "Match" : "Different"}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 font-bold whitespace-pre-line">{result.question.prompt}</p>
              <div className="mt-3 space-y-2">
                {result.parts.map((part) => (
                  <div key={part.label} className="rounded-2xl bg-paper px-3 py-2">
                    {result.parts.length > 1 ? (
                      <p className="text-xs font-extrabold tracking-wide text-stone uppercase">{part.label}</p>
                    ) : null}
                    <p>
                      <span className="font-extrabold">Ruveer: </span>
                      {part.blank ? "blank" : part.value}
                    </p>
                    <p>
                      <span className="font-extrabold">Key: </span>
                      {part.key}
                    </p>
                  </div>
                ))}
              </div>
              {result.parts.length > 1 || result.question.keyLine !== result.parts[0]?.key ? (
                <p className="mt-2 text-sm text-stone">Answer key: {result.question.keyLine}</p>
              ) : null}
            </li>
          ))}
        </ol>
        {selectedSubmission ? (
          <Button
            variant="outline"
            size="touch"
            className="mt-4 w-full"
            onClick={() => {
              if (window.confirm(`Clear Ruveer’s saved answers for Day ${selectedDay.day}?`)) {
                onClearDay(selectedDay.day);
              }
            }}
          >
            Clear this day
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-12">
      <button type="button" onClick={onBack} className="min-h-11 text-base font-extrabold text-teal">
        ← Practice home
      </button>
      <div className="mt-2 flex items-end justify-between gap-3">
        <h1 className="font-display text-4xl leading-none font-semibold">Parent review</h1>
        <button type="button" onClick={lock} className="min-h-11 text-base font-extrabold text-stone">
          Lock
        </button>
      </div>
      <p className="mt-3 text-lg text-ink-soft">
        {submissions.length} of 30 days saved on this phone.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Button size="touch" onClick={() => void copySummary()}>
          Copy summary
        </Button>
        <Button variant="outline" size="touch" className="bg-card" onClick={downloadJson}>
          Download JSON
        </Button>
      </div>
      {copyNote ? <p className="mt-3 text-base font-bold text-teal-dark">{copyNote}</p> : null}
      {summaryPreview ? (
        <Textarea className="mt-3 min-h-40 rounded-2xl bg-card text-base md:text-base" value={summaryPreview} readOnly />
      ) : null}

      {submissions.length === 0 ? (
        <p className="mt-5 rounded-3xl bg-card px-4 py-4 ring-1 ring-line">
          Nothing saved yet. When Ruveer submits a day, it shows up here with the time and the answer key.
        </p>
      ) : null}

      <ul className="mt-4 space-y-2">
        {days.map((day) => {
          const submission = byDay.get(day.day);
          const score = submission ? scoreSubmission(day, submission) : undefined;
          return (
            <li key={day.day}>
              <button                type="button"
                onClick={() => setSelected(day.day)}
                className="flex min-h-16 w-full items-center justify-between rounded-2xl bg-card px-4 py-3 text-left ring-1 ring-line"
              >
                <span>
                  <span className="block text-lg font-extrabold">Day {day.day}</span>
                  <span className="block text-sm font-bold text-stone">{day.topic}</span>
                </span>
                <span className="text-right text-sm font-bold">
                  {submission && score ? (
                    <>
                      <span className="block text-base text-ink">{score.correct}/{score.total}</span>
                      <span className="block text-stone">{formatWhen(submission.submittedAt)}</span>
                    </>
                  ) : (
                    <span className="text-stone">Not saved</span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <section className="mt-6 rounded-3xl bg-card px-4 py-4 ring-1 ring-line">
        <h2 className="text-lg font-extrabold">Bring answers from another phone</h2>
        <p className="mt-1 text-base text-ink-soft">
          Use a JSON file exported from Parent review. Newer saves replace older ones for the same day.
        </p>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            void file.text().then(takeImport);
            event.target.value = "";
          }}
        />
        <Button variant="outline" size="touch" className="mt-3 w-full" onClick={() => fileRef.current?.click()}>
          Choose JSON file
        </Button>
        <label className="mt-4 block text-sm font-extrabold text-stone" htmlFor="paste-json">
          Or paste JSON
        </label>
        <Textarea
          id="paste-json"
          value={paste}
          onChange={(event) => setPaste(event.target.value)}
          className="mt-2 min-h-28 rounded-2xl text-base md:text-base"
          placeholder='{"submissions":[...]}'
        />
        <Button
          size="touch"
          className="mt-3 w-full"
          onClick={() => takeImport(paste)}
          disabled={paste.trim() === ""}
        >
          Import pasted JSON
        </Button>
        {importNote ? <p className="mt-3 text-base font-bold">{importNote}</p> : null}
      </section>

      <Button
        variant="destructive"
        size="touch"
        className="mt-4 w-full"
        onClick={() => {
          if (window.confirm("Clear every saved day on this phone?")) onClearAll();
        }}
      >
        Clear all saved answers
      </Button>
    </div>
  );
}
