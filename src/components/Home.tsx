import { days, getDay } from "../data/days";
import { Button } from "./ui/button";
import { currentStreak, formatWhen, nextDay } from "../lib/progress";
import type { Submission } from "../lib/storage";

type HomeProps = {
  submissions: Submission[];
  saveBlocked: boolean;
  onOpenDay: (day: number) => void;
  onOpenParent: () => void;
};

export function Home({ submissions, saveBlocked, onOpenDay, onOpenParent }: HomeProps) {
  const done = new Set(submissions.map((item) => item.day));
  const upcoming = nextDay(done);
  const upcomingDay = upcoming == null ? undefined : getDay(upcoming);
  const streak = currentStreak(submissions);
  const latest = [...submissions].sort(
    (a, b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt),
  )[0];

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <header>
        <p className="text-sm font-extrabold tracking-[0.16em] text-teal uppercase">Daily maths</p>
        <h1 className="mt-1 font-display text-[2.35rem] leading-none font-semibold text-ink">
          Ruveer’s Math Practice
        </h1>
        <p className="mt-3 max-w-sm text-lg text-ink-soft">
          Thirty days. About twelve questions a day. Your answers stay on this phone for Mum and Dad.
        </p>
      </header>

      {saveBlocked ? (
        <p className="mt-4 rounded-2xl bg-miss-soft px-4 py-3 text-base text-miss" role="status">
          This browser is blocking saved answers. You can still practise, but Mum and Dad will not see them after you close the page.
        </p>
      ) : null}

      <section className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-amber-soft px-4 py-4">
          <p className="text-sm font-bold text-amber">Streak</p>
          <p className="mt-1 text-3xl font-extrabold text-ink">{streak}</p>
          <p className="text-sm text-ink-soft">{streak === 1 ? "day in a row" : "days in a row"}</p>
        </div>
        <div className="rounded-3xl bg-accent px-4 py-4">
          <p className="text-sm font-bold text-teal-dark">Days saved</p>
          <p className="mt-1 text-3xl font-extrabold text-ink">{done.size}/30</p>
          <p className="text-sm text-ink-soft">on this phone</p>
        </div>
      </section>

      {latest ? (
        <p className="mt-3 text-base text-stone">
          Last save: Day {latest.day}, {formatWhen(latest.submittedAt)}
        </p>
      ) : (
        <p className="mt-3 text-base text-stone">Nothing saved yet. Day 1 is a good place to start.</p>
      )}

      {upcomingDay ? (
        <section className="mt-5 rounded-3xl bg-card p-4 shadow-[0_10px_30px_rgba(28,36,48,0.05)] ring-1 ring-line">
          <p className="text-sm font-extrabold tracking-wide text-amber uppercase">Next up</p>
          <h2 className="mt-1 text-2xl font-extrabold">
            Day {upcomingDay.day}
            <span className="ml-2 text-lg font-bold text-stone">{upcomingDay.topic}</span>
          </h2>
          <Button className="mt-4 w-full" size="touch" onClick={() => onOpenDay(upcomingDay.day)}>
            Start Day {upcomingDay.day}
          </Button>
        </section>
      ) : (
        <section className="mt-5 rounded-3xl bg-good-soft px-4 py-5">
          <h2 className="text-2xl font-extrabold text-good">All 30 days are saved.</h2>
          <p className="mt-1 text-base text-ink-soft">Mum and Dad have the full set in Parent review.</p>
        </section>
      )}

      <section className="mt-6">
        <h2 className="text-lg font-extrabold">All days</h2>
        <p className="text-base text-stone">A tick means that day is saved.</p>
        <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-5">
          {days.map((day) => {
            const saved = done.has(day.day);
            const isNext = day.day === upcoming;
            return (
              <button
                key={day.day}
                type="button"
                onClick={() => onOpenDay(day.day)}
                aria-label={`Day ${day.day}${saved ? ", saved" : ", not saved yet"}`}
                className={`flex min-h-16 flex-col items-center justify-center rounded-2xl border text-ink transition active:scale-[0.98] ${
                  saved
                    ? "border-teal bg-teal text-white"
                    : isNext
                      ? "border-amber bg-card ring-2 ring-amber"
                      : "border-line bg-card"
                }`}
              >
                <span className="text-xl leading-none font-extrabold">{day.day}</span>                <span className={`mt-1 text-xs font-bold ${saved ? "text-white/90" : "text-stone"}`}>
                  {saved ? "Saved" : "Open"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <footer className="mt-8 flex flex-col items-start gap-3 border-t border-line pt-5">
        <p className="text-sm text-stone">Streak counts calendar days with at least one save, including today or yesterday.</p>
        <Button variant="outline" size="touch" className="w-full bg-card" onClick={onOpenParent}>
          For Mum or Dad
        </Button>
      </footer>
    </div>
  );
}
