import { multi, part, q, type Day } from "./types";

export const days21to30: Day[] = [
  {
    day: 21,
    topic: "Work rates",
    questions: [
      q(1, "Ruveer earns 3 stars each day he practises. How many stars in 10 days?", "30", { number: 30 }),
      q(2, "A painter paints 4 walls a day. How many days for 20 walls?", "5", { accept: ["5 days"] }),
      q(3, "Two taps together fill 12 litres in 1 hour. How many litres in 3 hours?", "36", { number: 36 }),
      q(4, "One person makes 8 sandwiches an hour. How many can 3 people make in 1 hour?", "24", { number: 24 }),
      q(5, "It takes 6 hours for 1 person to dig a garden. How long for 2 people working together at the same speed, sharing the work?", "3 hours", {
        accept: ["3", "3 h"],
      }),
      q(6, "A machine packs 5 boxes each minute. How many boxes in 12 minutes?", "60", { number: 60 }),
      q(7, "Ved solves 4 problems every 10 minutes. How many problems in 30 minutes?", "12", { number: 12 }),
      q(8, "4 children together wash 2 cars each hour. How many cars in 6 hours?", "12", { number: 12 }),
      q(9, "Ruveer types 20 words each minute. How many minutes to type 100 words?", "5", {
        accept: ["5 minutes", "5 min"],
      }),
      q(10, "One hose fills a tank in 8 hours. A second hose is just as fast. Together, how many hours to fill one tank?", "4 hours", {
        accept: ["4", "4 h"],
      }),
      multi(11, "Mum bakes 12 cookies every 20 minutes. How many cookies in 1 hour? How many in 2 hours?", "36 in 1 hour; 72 in 2 hours", [
        part("one", "In 1 hour", "36", { number: 36 }),
        part("two", "In 2 hours", "72", { number: 72 }),
      ]),
      q(12, "5 workers each build 2 metres of fence a day. How many metres does the team build in 4 days?", "40", {
        number: 40,
      }),
    ],
  },
  {
    day: 22,
    topic: "Speed again",
    questions: [
      q(1, "5 km each hour for 6 hours. How far?", "30 km", { number: 30 }),
      q(2, "100 km in 4 hours. What is the speed in km per hour?", "25", {
        number: 25,
        accept: ["25 km/h"],
      }),
      q(3, "Speed is 12 km per hour. Distance is 36 km. How many hours?", "3", { accept: ["3 hours"] }),
      q(4, "A scooter goes 20 km in 1 hour. How far in 30 minutes?", "10 km", { number: 10 }),
      q(5, "Ruveer walks 3 km in 1 hour. How many metres is that distance?", "3000", {
        number: 3000,
        accept: ["3000 m", "3 km"],
      }),
      q(6, "A plane flies 600 km in 1 hour. How far in 3 hours?", "1800 km", { number: 1800 }),
      q(7, "45 km in 3 hours. How many km each hour?", "15", { number: 15 }),
      q(8, "Which takes longer: 10 km at 5 km per hour, or 12 km at 6 km per hour?", "same time", {        accept: ["the same", "same", "they take the same time", "equal", "both 2 hours", "neither"],
      }),
      q(9, "A runner does 400 m in 2 minutes. How many metres each minute?", "200", { number: 200 }),
      q(10, "Distance 90 km. Time 2 hours. What is the speed in km per hour?", "45", {
        number: 45,
        accept: ["45 km/h"],
      }),
      multi(11, "A car drives 80 km in 2 hours, then 40 km in 1 hour. Do not count any rest. How far did it drive? What was the average driving speed in km per hour?", "120 km; 40 km per hour", [
        part("distance", "Distance (km)", "120", { number: 120 }),
        part("speed", "Speed (km/h)", "40", { number: 40 }),
      ]),
      q(12, "If the speed doubles and the time stays the same, what happens to the distance?", "it doubles", {
        accept: ["doubles", "the distance doubles", "distance doubles", "it is doubled"],
      }),
    ],
  },
  {
    day: 23,
    topic: "Percentages again",
    questions: [
      q(1, "50% of 64 = ?", "32", { number: 32 }),
      q(2, "25% of 48 = ?", "12", { number: 12 }),
      q(3, "10% of 130 = ?", "13", { number: 13 }),
      q(4, "20% of 45 = ?", "9", { number: 9 }),
      q(5, "5% of 80 = ?", "4", { number: 4 }),
      q(6, "75% of 20 = ?", "15", { number: 15 }),
      q(7, "A class has 40 children. 25% wear glasses. How many wear glasses?", "10", { number: 10 }),
      q(8, "AED 200 with 10% off. How much is taken off?", "20", { number: 20 }),
      q(9, "1% of 500 = ?", "5", { number: 5 }),
      q(10, "Find 50% of 18 and 50% of 22. Add those two answers.", "20", { number: 20 }),
      multi(11, "A bike was AED 400. The sale is 20% off. How much is 20% of 400? What is the sale price?", "80 off; sale 320", [
        part("off", "Amount off (AED)", "80", { number: 80 }),
        part("sale", "Sale price (AED)", "320", { number: 320 }),
      ]),
      q(12, "Which is bigger: 10% of 200, or 25% of 60?", "10% of 200", {
        accept: ["20", "the first", "first one", "10 percent of 200"],
      }),
    ],
  },
  {
    day: 24,
    topic: "Chance and ratio",
    questions: [
      q(1, "A bag has 6 red counters and 2 blue counters. Which colour is more likely?", "red"),
      q(2, "A fair spinner has 3 equal colours. Chance of one named colour, as a fraction?", "1/3", {
        accept: ["1 / 3", "one third"],
      }),
      q(3, "A dice is rolled. Chance of an even number, as a fraction?", "1/2", {
        accept: ["3/6", "1 / 2", "3 / 6", "even chance"],
      }),      q(4, "The ratio of cats to dogs is 3:1. There are 3 cats. How many dogs?", "1", { number: 1 }),
      q(5, "For every 2 goals Ruveer scores, Ved scores 1. Ruveer scores 8. How many does Ved score?", "4", {
        number: 4,
      }),
      q(6, "Rolling a 7 on a normal dice: impossible or certain?", "impossible"),
      q(7, "10 cards, and 1 is gold. Chance of gold, as a fraction?", "1/10", {
        accept: ["1 / 10", "one tenth"],
      }),
      q(8, "The ratio 4:4 is the same as 1:___", "1", { number: 1 }),
      q(9, "A bag has 5 black and 5 white counters. Chance of white?", "1/2", {
        accept: ["even", "even chance", "5/10", "50%", "one half"],
      }),
      q(10, "Picking a red counter from 9 red and 1 yellow: likely or unlikely?", "likely"),
      multi(11, "Beads are in the ratio red:blue = 1:4. There are 3 red beads. How many blue beads? How many beads altogether?", "12 blue; 15 total", [
        part("blue", "Blue beads", "12", { number: 12 }),
        part("total", "Total beads", "15", { number: 15 }),
      ]),
      q(12, "A spinner has 8 equal sections. 3 say win. Chance of win, as a fraction?", "3/8", {
        accept: ["3 / 8"],
      }),
    ],
  },
  {
    day: 25,
    topic: "Word problems",
    questions: [
      q(1, "246 + 389 = ?", "635", { number: 635 }),
      q(2, "700 − 286 = ?", "414", { number: 414 }),
      q(3, "25 × 8 = ?", "200", { number: 200 }),
      q(4, "Ruveer has 120 stickers. He gives 35 to Ved and 18 to a friend. How many are left?", "67", {
        number: 67,
      }),
      q(5, "6 boxes hold 14 crayons each. Then 8 crayons are lost. How many crayons are left?", "76", {
        number: 76,
      }),
      q(6, "Double 48, then subtract 15.", "81", { number: 81 }),
      q(7, "Half of 86 = ?", "43", { number: 43 }),
      q(8, "A bus has 42 seats. 27 are taken. Then 9 more people get on. How many empty seats are left?", "6", {
        number: 6,
      }),
      q(9, "13 × 5 + 7 = ?", "72", { number: 72 }),
      multi(10, "Share AED 100 equally among 4 children. Then one child spends AED 9. How much did each child get? How much does that child have left?", "25 each; 16 left", [
        part("each", "Each child (AED)", "25", { number: 25 }),
        part("left", "Left after spending (AED)", "16", { number: 16 }),
      ]),
      multi(11, "A shop has 8 shelves with 12 books on each. 15 books are sold. How many books were there at the start? How many are left?", "96 at the start; 81 left", [
        part("start", "At the start", "96", { number: 96 }),
        part("left", "Left", "81", { number: 81 }),
      ]),
      q(12, "144 ÷ 12 = ?", "12", { number: 12 }),    ],
  },
  {
    day: 26,
    topic: "Remainders and patterns",
    questions: [
      multi(1, "38 ÷ 5. What is the quotient? What is the remainder?", "7 remainder 3", [
        part("quotient", "Quotient", "7", { number: 7 }),
        part("remainder", "Remainder", "3", { number: 3 }),
      ]),
      multi(2, "60 ÷ 7. What is the quotient? What is the remainder?", "8 remainder 4", [
        part("quotient", "Quotient", "8", { number: 8 }),
        part("remainder", "Remainder", "4", { number: 4 }),
      ]),
      multi(3, "53 ÷ 6. What is the quotient? What is the remainder?", "8 remainder 5", [
        part("quotient", "Quotient", "8", { number: 8 }),
        part("remainder", "Remainder", "5", { number: 5 }),
      ]),
      multi(4, "100 ÷ 8. What is the quotient? What is the remainder?", "12 remainder 4", [
        part("quotient", "Quotient", "12", { number: 12 }),
        part("remainder", "Remainder", "4", { number: 4 }),
      ]),
      multi(5, "27 ÷ 4. What is the quotient? What is the remainder?", "6 remainder 3", [
        part("quotient", "Quotient", "6", { number: 6 }),
        part("remainder", "Remainder", "3", { number: 3 }),
      ]),
      q(6, "11, 22, 33, 44, ___", "55", { number: 55 }),
      q(7, "1, 2, 4, 7, 11, ___", "16", { number: 16 }),
      q(8, "81 ÷ 9 = ?", "9", { number: 9 }),
      multi(9, "Chairs are put in rows of 8. There are 70 children. How many full rows? How many children are in the last incomplete row?", "8 full rows; 6 children", [
        part("rows", "Full rows", "8", { number: 8 }),
        part("left", "Children left", "6", { number: 6 }),
      ]),
      multi(10, "The rule is subtract 9. Start at 70. What are the next two numbers?", "61 and 52", [
        part("next", "Next", "61", { number: 61 }),
        part("after", "One after", "52", { number: 52 }),
      ]),
      multi(11, "95 ÷ 10. What is the quotient? What is the remainder?", "9 remainder 5", [
        part("quotient", "Quotient", "9", { number: 9 }),
        part("remainder", "Remainder", "5", { number: 5 }),
      ]),
      multi(12, "6, 12, 18, 24, ___, ___", "30 and 36", [
        part("next", "Next", "30", { number: 30 }),
        part("after", "One after", "36", { number: 36 }),
      ]),
    ],
  },
  {
    day: 27,
    topic: "Bigger numbers",    questions: [
      q(1, "875 + 268 = ?", "1143", { number: 1143 }),
      q(2, "2000 − 745 = ?", "1255", { number: 1255 }),
      q(3, "36 × 5 = ?", "180", { number: 180 }),
      q(4, "19 × 4 = ?", "76", { number: 76 }),
      q(5, "132 ÷ 11 = ?", "12", { number: 12 }),
      q(6, "48 ÷ 3 = ?", "16", { number: 16 }),
      q(7, "9 × 9 − 9 = ?", "72", { number: 72 }),
      q(8, "250 + 250 + 250 = ?", "750", { number: 750 }),
      q(9, "15 × 15 = ?", "225", { number: 225 }),
      q(10, "1000 ÷ 8 = ?", "125", { number: 125 }),
      multi(11, "47 + 86 − 29 = ? Then multiply that answer by 2. What is the first answer? What is the doubled answer?", "104; doubled 208", [
        part("first", "First answer", "104", { number: 104 }),
        part("double", "Doubled", "208", { number: 208 }),
      ]),
      q(12, "Which is larger: 8 × 12 or 9 × 11?", "9 × 11", {
        accept: ["9 x 11", "99", "the second", "9×11"],
      }),
    ],
  },
  {
    day: 28,
    topic: "Stretch mix",
    questions: [
      q(1, "3/8 of 40 = ?", "15", { number: 15 }),
      q(2, "0.6 + 0.9 = ?", "1.5", { number: 1.5, accept: ["1.50"] }),
      q(3, "2 m 35 cm + 80 cm = ___ cm", "315", { number: 315 }),
      q(4, "What is 25% of AED 84?", "21", { number: 21 }),
      q(5, "Speed is 18 km per hour for 2 hours. How far?", "36 km", { number: 36 }),
      q(6, "A bag has 3 red counters and 9 blue counters. Chance of red, in simplest form?", "1/4", {
        accept: ["3/12", "1 / 4", "3 / 12"],
      }),
      q(7, "The ratio of water to squash is 5:1. There are 2 cups of squash. How many cups of water?", "10", {
        number: 10,
      }),
      multi(8, "46 ÷ 5. What is the quotient? What is the remainder?", "9 remainder 1", [
        part("quotient", "Quotient", "9", { number: 9 }),
        part("remainder", "Remainder", "1", { number: 1 }),
      ]),
      q(9, "What is the perimeter of a rectangle 13 cm by 7 cm?", "40 cm", { number: 40 }),
      q(10, "1 hour 45 minutes = ___ minutes", "105", { number: 105 }),
      q(11, "One person takes 12 hours to paint a fence. Three people work together at the same speed. How many hours?", "4", {
        accept: ["4 hours"],
      }),
      q(12, "2, 6, 18, 54, ___", "162", { number: 162 }),
    ],
  },
  {
    day: 29,
    topic: "Review",    questions: [
      q(1, "564 − 287 = ?", "277", { number: 277 }),
      q(2, "24 × 6 = ?", "144", { number: 144 }),
      q(3, "What is 2/5 of 35?", "14", { number: 14 }),
      q(4, "5.6 − 2.8 = ?", "2.8", { number: 2.8 }),
      q(5, "A film is 2 hours 10 minutes long. How many minutes is that?", "130", { number: 130 }),
      q(6, "What is the area of a 14 cm by 6 cm rectangle?", "84 cm²", {
        number: 84,
        accept: ["84 cm2"],
      }),
      multi(7, "67 ÷ 8. What is the quotient? What is the remainder?", "8 remainder 3", [
        part("quotient", "Quotient", "8", { number: 8 }),
        part("remainder", "Remainder", "3", { number: 3 }),
      ]),
      q(8, "What is 15% of 40?", "6", { number: 6 }),
      q(9, "A cyclist rides 27 km in 3 hours. What is the speed in km per hour?", "9", {
        number: 9,
        accept: ["9 km/h"],
      }),
      q(10, "For every 4 red tiles there is 1 white tile. There are 20 red tiles. How many white tiles?", "5", {
        number: 5,
      }),
      multi(11, "Ruveer works for 30 minutes and finishes 1/3 of his questions. If he keeps the same speed, how many minutes for all the questions? How many minutes are left after the first 30?", "90 minutes for all; 60 left", [
        part("all", "Minutes for all", "90", { number: 90 }),
        part("left", "Minutes left", "60", { number: 60 }),
      ]),
      multi(12, "A spinner has 5 equal sections. 2 are green. Is green likely or unlikely? What is the chance as a fraction?", "Unlikely; 2/5", [
        part("word", "Likely or unlikely?", "unlikely"),
        part("fraction", "Chance", "2/5", { accept: ["2 / 5"] }),
      ]),
    ],
  },
  {
    day: 30,
    topic: "Final mix",
    questions: [
      q(1, "999 + 186 = ?", "1185", { number: 1185 }),
      q(2, "40 × 12 = ?", "480", { number: 480 }),
      q(3, "3/4 of 60 = ?", "45", { number: 45 }),
      multi(4, "AED 96 is shared by 4 friends. Then each friend buys a snack for AED 7. How much did each friend get? How much does each have left?", "24 each; 17 left", [
        part("each", "Each share (AED)", "24", { number: 24 }),
        part("left", "Left (AED)", "17", { number: 17 }),
      ]),
      multi(5, "A rectangle is 16 cm by 9 cm. What is the perimeter? What is the area?", "Perimeter 50 cm; area 144 cm²", [
        part("perimeter", "Perimeter (cm)", "50 cm", { number: 50 }),
        part("area", "Area (cm²)", "144 cm²", { number: 144, accept: ["144 cm2"] }),
      ]),
      q(6, "What is 20% of 75?", "15", { number: 15 }),
      multi(7, "A train travels 150 km in 3 hours. What is its speed in km per hour? How far would it go in 5 hours at that speed?", "50 km/h; 250 km", [
        part("speed", "Speed (km/h)", "50", { number: 50 }),        part("distance", "Distance in 5 hours (km)", "250", { number: 250 }),
      ]),
      multi(8, "83 ÷ 9. What is the quotient? What is the remainder?", "9 remainder 2", [
        part("quotient", "Quotient", "9", { number: 9 }),
        part("remainder", "Remainder", "2", { number: 2 }),
      ]),
      q(9, "5, 8, 14, 23, 35, ___", "50", { number: 50 }),
      q(10, "Two people together clean a hall in 6 hours. They work at the same speed. How long would one person take alone?", "12 hours", {
        accept: ["12", "12 h"],
      }),
      multi(11, "A bag has 4 red, 3 blue, and 1 green counter. Chance of green, as a fraction? Chance of not green, as a fraction?", "1/8 green; 7/8 not green", [
        part("green", "Green", "1/8", { accept: ["1 / 8"] }),
        part("not", "Not green", "7/8", { accept: ["7 / 8"] }),
      ]),
      q(12, "Ruveer starts at 5:35. He does 12 questions and each takes 4 minutes. What time does he finish?", "6:23", {
        accept: ["6:23 pm", "18:23"],
      }),
    ],
  },
];
