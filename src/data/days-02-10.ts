import { multi, part, q, type Day } from "./types";

export const days02to10: Day[] = [
  {
    day: 2,
    topic: "Four operations",
    questions: [
      q(1, "256 + 178 = ?", "434", { number: 434 }),
      q(2, "900 − 465 = ?", "435", { number: 435 }),
      q(3, "8 × 7 = ?", "56", { number: 56 }),
      q(4, "63 ÷ 7 = ?", "9", { number: 9 }),
      q(5, "45 + 27 − 19 = ?", "53", { number: 53 }),
      q(6, "9 × ___ = 72\nWhat number goes in the blank?", "8", { number: 8 }),
      q(7, "A box has 8 rows of 6 pencils. How many pencils are there?", "48", { number: 48 }),
      q(8, "420 ÷ 5 = ?", "84", { number: 84 }),
      q(9, "150 − 68 + 25 = ?", "107", { number: 107 }),
      q(10, "14 × 6 = ?", "84", { number: 84 }),
      multi(11, "Ruveer reads 15 pages on Saturday and 18 on Sunday. How many pages is that? The book has 80 pages. How many are left?", "33 pages; 47 left", [
        part("pages", "Pages read", "33", { number: 33 }),
        part("left", "Pages left", "47", { number: 47 }),
      ]),
      q(12, "7 × 8 + 6 = ?", "62", { number: 62 }),
    ],
  },
  {
    day: 3,
    topic: "Fractions",
    questions: [
      q(1, "What is 1/2 of 48?", "24", { number: 24 }),
      q(2, "What is 1/3 of 36?", "12", { number: 12 }),
      q(3, "Which is bigger: 2/3 or 3/5?", "2/3", { accept: ["2 / 3", "two thirds"] }),
      q(4, "1/4 + 1/4 = ?", "1/2", { accept: ["2/4", "one half", "0.5"] }),
      q(5, "A pizza is cut into 8 equal slices. Ruveer eats 3. What fraction is left?", "5/8", {
        accept: ["5 / 8", "five eighths"],
      }),
      q(6, "What is 3/4 of 20?", "15", { number: 15 }),
      q(7, "2/5 of 30 stickers are stars. How many are stars?", "12", { number: 12 }),
      q(8, "Which is smaller: 1/2 or 3/8?", "3/8", { accept: ["3 / 8", "three eighths"] }),
      q(9, "1/6 of 42 = ?", "7", { number: 7 }),
      q(10, "A jug holds 18 cups when it is full. It is 2/3 full. How many cups are in it now?", "12", {
        number: 12,
      }),
      multi(11, "There are 24 counters. 1/3 are red and 1/4 are blue. How many are red? How many are blue?", "8 red; 6 blue", [
        part("red", "Red", "8", { number: 8 }),
        part("blue", "Blue", "6", { number: 6 }),
      ]),
      q(12, "Write these from smallest to biggest: 1/2, 1/4, 3/4", "1/4, 1/2, 3/4", {
        accept: ["1/4 1/2 3/4", "1/4, 2/4, 3/4"],
      }),
    ],  },
  {
    day: 4,
    topic: "Money (AED)",
    questions: [
      q(1, "AED 6.50 + AED 2.25 = ?", "8.75", { number: 8.75, accept: ["AED 8.75", "8.75 dirhams"] }),
      q(2, "A sandwich costs AED 12 and juice costs AED 5. How much for both?", "17", { number: 17 }),
      q(3, "Ruveer has AED 50. He buys a book for AED 18 and a pen for AED 7. How much is left?", "25", {
        number: 25,
      }),
      q(4, "4 notebooks cost AED 8 each. What is the total?", "32", { number: 32 }),
      q(5, "Mum pays AED 100 for a toy that costs AED 64. How much change?", "36", { number: 36 }),
      q(6, "AED 20 − AED 7.50 = ?", "12.50", { number: 12.5, accept: ["12.5", "AED 12.50"] }),
      q(7, "Three tickets cost AED 45 in total. How much is one ticket?", "15", { number: 15 }),
      q(8, "A water bottle is AED 9. How much for 6 bottles?", "54", { number: 54 }),
      q(9, "Ruveer saves AED 5 each day for 8 days. How much does he save?", "40", { number: 40 }),
      q(10, "Which is more: AED 3.40 or AED 3.25?", "AED 3.40", {
        number: 3.4,
        accept: ["3.40", "3.4", "AED 3.4"],
      }),
      multi(11, "A cap is AED 28 and socks are AED 11. How much do they cost together? Dad pays with AED 50. How much change?", "39; change 11", [
        part("cost", "Cost (AED)", "39", { number: 39 }),
        part("change", "Change (AED)", "11", { number: 11 }),
      ]),
      q(12, "5 × AED 6 = ?", "30", { number: 30 }),
    ],
  },
  {
    day: 5,
    topic: "Time",
    questions: [
      q(1, "How many minutes are in 1 hour?", "60", { number: 60 }),
      q(2, "How many minutes are in 2 hours?", "120", { number: 120 }),
      q(3, "A lesson starts at 9:15 and lasts 40 minutes. What time does it end?", "9:55", {
        accept: ["09:55", "9:55 am"],
      }),
      q(4, "What time is 25 minutes after 2:50?", "3:15", { accept: ["3:15 pm", "15:15"] }),
      q(5, "How many hours from 8:00 am to 11:00 am?", "3", {
        accept: ["3 hours", "3 h"],
      }),
      q(6, "A bus ride takes 35 minutes. It leaves at 4:10. What time does it arrive?", "4:45", {
        accept: ["4:45 pm", "16:45"],
      }),
      q(7, "How many seconds are in 1 minute?", "60", { number: 60 }),
      q(8, "School ends at 2:30. Football starts 45 minutes later. What time is that?", "3:15", {
        accept: ["3:15 pm", "15:15"],
      }),
      q(9, "1 hour 20 minutes = ___ minutes", "80", { number: 80 }),
      q(10, "One cartoon is 25 minutes. Ruveer watches 2 cartoons, starting at 6:05. What time does he finish?", "6:55", {
        accept: ["6:55 pm", "18:55"],      }),
      q(11, "A train leaves at 10:40 and arrives at 12:15. How long is the journey?", "1 hour 35 minutes", {
        accept: ["1 h 35 min", "1hr 35mins", "95 minutes", "1 hour and 35 minutes"],
      }),
      q(12, "Which is longer: 90 minutes or 1 hour 20 minutes?", "90 minutes", {
        number: 90,
        accept: ["90 min", "the first one"],
      }),
    ],
  },
  {
    day: 6,
    topic: "Measurement",
    questions: [
      q(1, "1 m = ___ cm", "100", { number: 100 }),
      q(2, "3 m = ___ cm", "300", { number: 300 }),
      q(3, "1 m 20 cm = ___ cm", "120", { number: 120 }),
      q(4, "250 cm = ___ m ___ cm", "2 m 50 cm", {
        accept: ["2m 50cm", "2 metres 50 centimetres", "2.5 m", "250 cm"],
      }),
      q(5, "A pencil is 14 cm. A ruler is 30 cm. How much longer is the ruler?", "16 cm", { number: 16 }),
      q(6, "1 kg = ___ g", "1000", { number: 1000 }),
      q(7, "2 kg 300 g = ___ g", "2300", { number: 2300 }),
      q(8, "A bag of rice is 5 kg. How many grams is that?", "5000", { number: 5000 }),
      q(9, "4500 g = ___ kg ___ g", "4 kg 500 g", {
        accept: ["4kg 500g", "4.5 kg", "4500 g"],
      }),
      q(10, "Which is heavier: 1 kg 200 g or 900 g?", "1 kg 200 g", {
        accept: ["1kg 200g", "1200 g", "the first one"],
      }),
      multi(11, "One ribbon is 1 m 8 cm. Another is 75 cm. What is the total length in centimetres? How much longer is the first ribbon?", "183 cm; 33 cm longer", [
        part("total", "Total (cm)", "183", { number: 183 }),
        part("longer", "How much longer (cm)", "33", { number: 33 }),
      ]),
      multi(12, "4 × 25 cm = ___ cm. How many metres is that?", "100 cm; 1 m", [
        part("cm", "Centimetres", "100", { number: 100 }),
        part("m", "Metres", "1", { number: 1, accept: ["1 m", "1 metre"] }),
      ]),
    ],
  },
  {
    day: 7,
    topic: "Perimeter and area",
    questions: [
      q(1, "A square has sides of 6 cm. What is its perimeter?", "24 cm", { number: 24 }),
      q(2, "A square has sides of 5 cm. What is its area?", "25 cm²", {
        number: 25,
        accept: ["25 cm2", "25 square cm"],
      }),
      q(3, "A rectangle is 9 cm long and 4 cm wide. What is its perimeter?", "26 cm", { number: 26 }),      q(4, "A rectangle is 10 cm long and 3 cm wide. What is its area?", "30 cm²", {
        number: 30,
        accept: ["30 cm2"],
      }),
      q(5, "A rectangle has a perimeter of 20 cm. The length is 6 cm. What is the width?", "4 cm", {
        number: 4,
      }),
      q(6, "A garden is 8 m long and 5 m wide. What is its area?", "40 m²", {
        number: 40,
        accept: ["40 m2", "40 square metres"],
      }),
      q(7, "A photo frame is 15 cm by 8 cm. What is the perimeter?", "46 cm", { number: 46 }),
      q(8, "Which has the bigger area: a 6 cm by 4 cm rectangle, or a 5 cm by 5 cm square?", "the square", {
        accept: ["square", "5 cm square", "the 5 cm square", "25 cm²", "5 by 5"],
      }),
      q(9, "A path is 12 m long and 2 m wide. What is its area?", "24 m²", {
        number: 24,
        accept: ["24 m2"],
      }),
      q(10, "Each side of a square is 9 cm. What is the perimeter?", "36 cm", { number: 36 }),
      multi(11, "A rectangle is 11 cm long and 5 cm wide. What is its perimeter? What is its area?", "Perimeter 32 cm; area 55 cm²", [
        part("perimeter", "Perimeter (cm)", "32 cm", { number: 32 }),
        part("area", "Area (cm²)", "55 cm²", { number: 55, accept: ["55 cm2"] }),
      ]),
      q(12, "Ruveer walks once around a pitch that is 40 m long and 20 m wide. How far does he walk?", "120 m", {
        number: 120,
      }),
    ],
  },
  {
    day: 8,
    topic: "Remainders",
    questions: [
      multi(1, "17 ÷ 5. What is the quotient? What is the remainder?", "3 remainder 2", [
        part("quotient", "Quotient", "3", { number: 3 }),
        part("remainder", "Remainder", "2", { number: 2 }),
      ]),
      multi(2, "29 ÷ 4. What is the quotient? What is the remainder?", "7 remainder 1", [
        part("quotient", "Quotient", "7", { number: 7 }),
        part("remainder", "Remainder", "1", { number: 1 }),
      ]),
      multi(3, "50 ÷ 6. What is the quotient? What is the remainder?", "8 remainder 2", [
        part("quotient", "Quotient", "8", { number: 8 }),
        part("remainder", "Remainder", "2", { number: 2 }),
      ]),
      multi(4, "34 ÷ 7. What is the quotient? What is the remainder?", "4 remainder 6", [
        part("quotient", "Quotient", "4", { number: 4 }),
        part("remainder", "Remainder", "6", { number: 6 }),
      ]),
      multi(5, "22 ÷ 3. What is the quotient? What is the remainder?", "7 remainder 1", [        part("quotient", "Quotient", "7", { number: 7 }),
        part("remainder", "Remainder", "1", { number: 1 }),
      ]),
      multi(6, "45 ÷ 8. What is the quotient? What is the remainder?", "5 remainder 5", [
        part("quotient", "Quotient", "5", { number: 5 }),
        part("remainder", "Remainder", "5", { number: 5 }),
      ]),
      multi(7, "Eggs come in boxes of 6. There are 40 eggs. How many full boxes? How many eggs are left over?", "6 boxes; 4 left", [
        part("boxes", "Full boxes", "6", { number: 6 }),
        part("left", "Eggs left", "4", { number: 4 }),
      ]),
      multi(8, "100 ÷ 9. What is the quotient? What is the remainder?", "11 remainder 1", [
        part("quotient", "Quotient", "11", { number: 11 }),
        part("remainder", "Remainder", "1", { number: 1 }),
      ]),
      q(9, "3 coaches each hold 28 children. There are 80 children. How many seats are left empty?", "4", {
        number: 4,
      }),
      q(10, "72 ÷ 8 = ?", "9", { number: 9 }),
      multi(11, "A baker packs 5 biscuits in each bag. She has 47 biscuits. How many full bags? How many biscuits are left?", "9 bags; 2 left", [
        part("bags", "Full bags", "9", { number: 9 }),
        part("left", "Biscuits left", "2", { number: 2 }),
      ]),
      q(12, "8 × 9 − 15 = ?", "57", { number: 57 }),
    ],
  },
  {
    day: 9,
    topic: "Decimals",
    questions: [
      q(1, "0.5 is the same as which fraction?", "1/2", { accept: ["1 / 2", "one half", "2/4"] }),
      q(2, "Which is bigger: 0.4 or 0.7?", "0.7", { number: 0.7, accept: ["0.70"] }),
      q(3, "0.3 + 0.4 = ?", "0.7", { number: 0.7 }),
      q(4, "1.5 + 2.3 = ?", "3.8", { number: 3.8 }),
      q(5, "3.6 − 1.2 = ?", "2.4", { number: 2.4 }),
      q(6, "Write 3/10 as a decimal.", "0.3", { number: 0.3, accept: [".3"] }),
      q(7, "Which is bigger: 0.8 or 0.75?", "0.8", { number: 0.8, accept: ["0.80"] }),
      q(8, "0.25 is the same as which fraction?", "1/4", { accept: ["1 / 4", "one quarter", "25/100"] }),
      q(9, "2.5 + 1.5 = ?", "4", { number: 4, accept: ["4.0"] }),
      q(10, "A rope is 1.2 m and another is 0.8 m. How long are they together?", "2 m", {
        number: 2,
        accept: ["2", "2.0 m", "2 metres"],
      }),
      multi(11, "Which is bigger, 1.5 or 1.05? How much bigger?", "1.5 is bigger by 0.45", [
        part("which", "Which is bigger?", "1.5", { number: 1.5 }),
        part("diff", "How much bigger?", "0.45", { number: 0.45 }),
      ]),
      q(12, "Write these from smallest to biggest: 0.2, 0.15, 0.5", "0.15, 0.2, 0.5", {
        accept: ["0.15, 0.20, 0.50", "0.15 0.2 0.5"],
      }),    ],
  },
  {
    day: 10,
    topic: "Patterns",
    questions: [
      q(1, "4, 8, 12, 16, ___", "20", { number: 20 }),
      q(2, "2, 4, 8, 16, ___", "32", { number: 32 }),
      q(3, "30, 27, 24, 21, ___", "18", { number: 18 }),
      q(4, "1, 4, 9, 16, ___", "25", { number: 25 }),
      q(5, "5, 10, 15, 20, ___", "25", { number: 25 }),
      q(6, "1, 3, 6, 10, ___", "15", { number: 15 }),
      q(7, "80, 40, 20, 10, ___", "5", { number: 5 }),
      q(8, "7, 14, 21, 28, ___", "35", { number: 35 }),
      q(9, "100, 90, 80, 70, ___", "60", { number: 60 }),
      multi(10, "The rule is add 6. Start at 3. What are the next two numbers?", "9 and 15", [
        part("next", "Next", "9", { number: 9 }),
        part("after", "One after", "15", { number: 15 }),
      ]),
      multi(11, "2, 5, 8, 11, ___\nWhat is the rule? What is the next number?", "Add 3; next 14", [
        part("rule", "Rule", "add 3", { accept: ["+3", "plus 3", "add three"] }),
        part("next", "Next number", "14", { number: 14 }),
      ]),
      q(12, "64, 32, 16, 8, ___", "4", { number: 4 }),
    ],
  },
];
