import { multi, part, q, type Day } from "./types";

/** Prompts and key lines match content/day1-questions.md exactly. */
export const day1: Day = {
  day: 1,
  topic: "Warm-up",
  questions: [
    q(1, "487 + 359 − 128 = ?", "718", { number: 718 }),
    q(2, "12 × 15 = ?", "180", { number: 180 }),
    multi(3, "A bike costs AED 245. Mum pays with AED 300. How much change? Then she buys a helmet for AED 38 from that change — how much is left?", "Change 55; left 17", [
      part("change", "Change (AED)", "55", { number: 55 }),
      part("left", "Left (AED)", "17", { number: 17 }),
    ]),
    q(4, "504 − 278 = ?", "226", { number: 226 }),
    q(5, "6 × ___ = 54\nWhat number goes in the blank?", "9", { number: 9 }),
    q(6, "Which is bigger: 3/4 or 5/8?", "3/4", {
      accept: ["3 / 4", "three quarters", "three-quarters", "¾"],
    }),
    q(7, "A rope is 2 m 45 cm. How many centimetres is that in total?", "245 cm", {
      number: 245,
      accept: ["245 centimetres", "245 centimeters"],
    }),
    q(8, "Ruveer has 96 stickers. He gives 1/4 to Ved. How many does he keep?", "72", {
      number: 72,
    }),
    q(9, "23 × 14 = ?", "322", { number: 322 }),
    q(10, "A film starts at 3:45 and lasts 1 hour 40 minutes. What time does it end?", "5:25", {
      accept: ["5:25 pm", "17:25", "05:25"],
    }),
    multi(11, "A rectangle is 12 cm long and 7 cm wide. What is its perimeter? What is its area?", "Perimeter 38 cm; area 84 cm²", [
      part("perimeter", "Perimeter (cm)", "38 cm", { number: 38, accept: ["38cm"] }),
      part("area", "Area (cm²)", "84 cm²", {
        number: 84,
        accept: ["84 cm2", "84cm²", "84 square cm"],
      }),
    ]),
    q(12, "Three friends share 75 marbles so each gets the same number, and 3 are left over. How many does each get?", "24 each", {
      number: 24,
    }),
  ],
};
