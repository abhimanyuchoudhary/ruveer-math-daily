# Ruveer’s Math Practice

A phone-first practice book for Ruveer: 30 days, 12 questions a day. He picks a day, types his answers, and saves them on that phone. Mum or Dad open Parent review to compare his answers with the key.

There is no account and no server. Answers live in the browser’s local storage.

## Open it on this computer

```bash
npm install
npm run dev
```

Then open [http://127.0.0.1:43123](http://127.0.0.1:43123).

On a phone on the same Wi-Fi, use the Network address Vite prints.

## How Ruveer uses it

1. Tap a day, or **Start Day …** on the home screen.
2. Type an answer in each box. Questions with two parts (change and what is left, perimeter and area) have two boxes.
3. Tap **Save for Mum and Dad**.
4. The page says it is saved, and marks which answers match. It does not show the correct answers.

The home screen keeps a checklist of saved days and a streak. The streak is calendar days in a row with at least one save, counting today, or yesterday if nothing is saved yet today.

## Parent review

Tap **For Mum or Dad** and enter the PIN.

The default PIN is `1234`. Change it in `src/lib/pin.ts`:

```ts
// Parent PIN. Change this string if you want a different code.
export const PARENT_PIN = "1234";
```

The PIN is only a lock on this phone. It is not a password on a server, and it is visible in the page’s code.

Parent review shows each day, the time it was saved, Ruveer’s answers, the answer key, and the score. From there you can:

- **Copy summary** — plain text you can paste into a note or message
- **Download JSON** — `ruveer-math-answers.json`, to move answers to another phone
- **Choose JSON file** or paste JSON — import those answers (a newer save wins)
- **Clear this day** or **Clear all saved answers**

Lock hides the review until the PIN is entered again. Closing the browser tab locks it too.

## Day 1

Day 1 is the approved set in [`content/day1-questions.md`](content/day1-questions.md). The app must keep those questions and the answer key word for word. `npm run check` fails if they drift.

Days 2–30 are a mixed stretch for a strong Year 3, with some early Year 4–5 ideas: the four operations, fractions, a first look at decimals, measurement, time, AED, perimeter and area, remainders, work and hours, speed, percentages, simple probability, ratios, and patterns.

## Check and build

```bash
npm run check
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Asset paths are relative, so the same folder works at a domain root or in a GitHub Pages project folder.

## Put it on GitHub Pages

The phone URL, once published, is:

https://abhimanyuchoudhary.github.io/ruveer-math-daily/

That matches the geography quiz at https://abhimanyuchoudhary.github.io/geography-continent-quiz/. The geography app is plain HTML on `main`. This one is a Vite app, so Pages has to build it. `.github/workflows/pages.yml` does that. `base` in `vite.config.ts` is `./`, so the built files work in the `/ruveer-math-daily/` folder.

From a machine where `gh auth status` shows the `abhimanyuchoudhary` account:

```bash
gh repo create abhimanyuchoudhary/ruveer-math-daily --public --source=. --remote=github --push
gh api --method POST /repos/abhimanyuchoudhary/ruveer-math-daily/pages -f build_type=workflow
```

If the first Actions run finished before Pages was switched on, open the **Actions** tab and re-run **Deploy GitHub Pages**. The same switch is **Settings → Pages → Build and deployment → Source: GitHub Actions**.
