import { multi, part, q, type Day } from "./types";

export const days11to20: Day[] = [
  {
    day: 11,
    topic: "Work and hours",
    questions: [
      q(1, "Ruveer packs 4 boxes every hour. How many boxes in 3 hours?", "12", { number: 12 }),
      q(2, "Mum paints 5 chairs in 1 hour. How many chairs in 4 hours?", "20", { number: 20 }),
      q(3, "A tap fills 2 litres every minute. How many litres in 10 minutes?", "20", { number: 20 }),
      q(4, "Ved reads 10 pages each hour. How many hours to read 40 pages?", "4", {
        accept: ["4 hours", "4 h"],
      }),
      q(5, "A printer prints 6 pages each minute. How many pages in 8 minutes?", "48", { number: 48 }),
      q(6, "It takes 2 hours to wash 1 car. How many hours to wash 3 cars at the same speed?", "6", {
        accept: ["6 hours"],
      }),
      q(7, "Together, two people pack 10 boxes in 1 hour. How many boxes in 5 hours at that same speed?", "50", {
        number: 50,
      }),
      q(8, "Ruveer writes 12 words each minute. How many words in 5 minutes?", "60", { number: 60 }),
      q(9, "A hose fills 8 buckets each hour. How many buckets in 6 hours?", "48", { number: 48 }),
      q(10, "One worker builds 3 metres of wall each day. How many days for 18 metres?", "6", {
        accept: ["6 days"],
      }),
      q(11, "Ruveer alone takes 40 minutes to tidy the room. Ved works just as fast. If they tidy together and share the work equally, how long does it take?", "20 minutes", {
        number: 20,
        accept: ["20 min", "20 mins"],
      }),
      q(12, "A machine fills 9 bottles each minute. It runs for 1 hour. How many bottles?", "540", {
        number: 540,
      }),
    ],
  },
  {
    day: 12,
    topic: "Speed",
    questions: [
      q(1, "A car travels 60 km in 1 hour. What is its speed in km per hour?", "60", {
        number: 60,
        accept: ["60 km/h", "60 km per hour"],
      }),
      q(2, "Ruveer walks 4 km in 1 hour. How far in 3 hours at the same speed?", "12 km", { number: 12 }),
      q(3, "A bus goes 50 km each hour. How far in 2 hours?", "100 km", { number: 100 }),
      q(4, "A cyclist rides 30 km in 2 hours. What is the speed in km per hour?", "15", {
        number: 15,
        accept: ["15 km/h", "15 km per hour"],
      }),
      q(5, "Speed is 8 km per hour. Time is 4 hours. How far?", "32 km", { number: 32 }),
      q(6, "A train travels 120 km at 60 km per hour. How many hours does it take?", "2", {        accept: ["2 hours"],
      }),
      q(7, "Ved cycles 18 km in 3 hours. How many km each hour?", "6", { number: 6 }),
      q(8, "A camel walks 9 km each hour. How far in 5 hours?", "45 km", { number: 45 }),
      q(9, "The distance is 40 km. The speed is 10 km per hour. How many hours?", "4", {
        accept: ["4 hours"],
      }),
      q(10, "Ruveer runs 200 metres in 1 minute. How far in 5 minutes at the same speed?", "1000 m", {
        number: 1000,
        accept: ["1000 metres", "1 km", "1 kilometre"],
      }),
      multi(11, "A boat travels 24 km in 2 hours, then 18 km in 1 hour. How far in total? What is the average speed for the whole trip, in km per hour?", "42 km; 14 km per hour", [
        part("distance", "Total distance (km)", "42", { number: 42 }),
        part("speed", "Average speed (km/h)", "14", { number: 14 }),
      ]),
      q(12, "Which is faster: 20 km in 2 hours, or 12 km in 1 hour?", "12 km in 1 hour", {
        accept: ["12 km/h", "the second", "12 km in one hour", "second one"],
      }),
    ],
  },
  {
    day: 13,
    topic: "Percentages",
    questions: [
      q(1, "What is 50% of 80?", "40", { number: 40 }),
      q(2, "What is 10% of 70?", "7", { number: 7 }),
      q(3, "What is 25% of 40?", "10", { number: 10 }),
      q(4, "50% is the same as which fraction?", "1/2", { accept: ["1 / 2", "one half", "0.5"] }),
      q(5, "25% is the same as which fraction?", "1/4", { accept: ["1 / 4", "one quarter", "0.25"] }),
      q(6, "What is 10% of 250?", "25", { number: 25 }),
      q(7, "A shirt costs AED 80. There is 50% off. What is the sale price?", "40", { number: 40 }),
      q(8, "What is 20% of 30?", "6", { number: 6 }),
      q(9, "In a class of 20, 10% are absent. How many are absent?", "2", { number: 2 }),
      q(10, "What is 100% of 15?", "15", { number: 15 }),
      multi(11, "A bag costs AED 60. It is 25% off. How much is the discount? What is the sale price?", "Discount 15; sale 45", [
        part("discount", "Discount (AED)", "15", { number: 15 }),
        part("sale", "Sale price (AED)", "45", { number: 45 }),
      ]),
      q(12, "Which is more: 50% of 20, or 25% of 36?", "50% of 20", {
        accept: ["10", "the first", "first one", "50 percent of 20"],
      }),
    ],
  },
  {
    day: 14,
    topic: "Probability",
    questions: [
      q(1, "A bag has 5 red counters and nothing else. Chance of picking red: certain, likely, even, unlikely, or impossible?", "certain", {
        accept: ["certain chance"],
      }),      q(2, "That same bag has only red counters. Chance of picking blue?", "impossible", {
        accept: ["impossible chance", "zero", "0"],
      }),
      q(3, "A coin has heads and tails, both equally likely. Chance of heads?", "even chance", {
        accept: ["even", "1/2", "50%", "a half", "half", "one half"],
      }),
      q(4, "A spinner has 4 equal parts: red, blue, green, and yellow. Chance of red, as a fraction?", "1/4", {
        accept: ["1 / 4", "one quarter"],
      }),
      q(5, "A dice is rolled. Chance of a 6, as a fraction?", "1/6", { accept: ["1 / 6", "one sixth"] }),
      q(6, "A bag has 3 red counters and 1 blue counter. Which colour is more likely?", "red", {
        accept: ["red is more likely"],
      }),
      q(7, "There are 8 cards: 2 stars and 6 circles. Chance of a star, as a fraction?", "1/4", {
        accept: ["2/8", "1 / 4", "2 / 8"],
      }),
      q(8, "Is this certain, impossible, or even: the sun will rise tomorrow?", "certain"),
      q(9, "A bag has 10 balls, all green. Chance of green, as a percentage?", "100%", {
        number: 100,
        accept: ["100", "100 percent", "certain"],
      }),
      q(10, "A spinner is half red and half blue, in equal sizes. Chance of blue?", "1/2", {
        accept: ["even", "even chance", "50%", "one half", "a half"],
      }),
      multi(11, "A bag has 4 red, 4 blue, and 2 green counters (10 in total). Chance of red, as a fraction? Chance of green, as a fraction?", "4/10 red; 2/10 green", [
        part("red", "Red", "4/10", { accept: ["2/5", "4 / 10", "2 / 5"] }),
        part("green", "Green", "2/10", { accept: ["1/5", "2 / 10", "1 / 5"] }),
      ]),
      q(12, "A dice is rolled. Is a number greater than 4 likely, unlikely, or even?", "unlikely", {
        accept: ["unlikely chance"],
      }),
    ],
  },
  {
    day: 15,
    topic: "Ratios",
    questions: [
      q(1, "The ratio of boys to girls is 1 to 2. If there is 1 boy, how many girls?", "2", { number: 2 }),
      q(2, "For every 1 red bead there are 3 blue beads. If there are 2 red beads, how many blue beads?", "6", {
        number: 6,
      }),
      q(3, "A recipe uses 2 cups of flour for every 1 cup of sugar. For 3 cups of sugar, how many cups of flour?", "6", {
        number: 6,
      }),
      q(4, "The ratio of apples to oranges is 4:1. There is 1 orange. How many apples?", "4", { number: 4 }),
      q(5, "For every AED 5 Ruveer saves, Dad gives AED 1. If Ruveer saves AED 20, how much does Dad give?", "4", {
        number: 4,
      }),
      q(6, "Red to yellow counters are 2:3. There are 2 red. How many yellow?", "3", { number: 3 }),
      q(7, "A drink is 1 part juice and 4 parts water. If you use 2 cups of juice, how many cups of water?", "8", {        number: 8,
      }),
      q(8, "In a car park the ratio of cars to bikes is 5:2. There are 10 cars. How many bikes?", "4", {
        number: 4,
      }),
      q(9, "For every 3 stickers Ved has, Ruveer has 1. Ved has 12 stickers. How many does Ruveer have?", "4", {
        number: 4,
      }),
      q(10, "The ratio 1:1 means the two amounts are ___", "equal", {
        accept: ["the same", "same", "equal amounts"],
      }),
      multi(11, "A necklace has beads in the ratio black:white = 3:2. There are 6 black beads. How many white beads? How many beads in total?", "4 white; 10 total", [
        part("white", "White beads", "4", { number: 4 }),
        part("total", "Total beads", "10", { number: 10 }),
      ]),
      q(12, "4 cats to 2 dogs is the same ratio as ___ cats to 1 dog.", "2", { number: 2 }),
    ],
  },
  {
    day: 16,
    topic: "Mixed checkpoint",
    questions: [
      q(1, "638 + 274 = ?", "912", { number: 912 }),
      q(2, "1000 − 468 = ?", "532", { number: 532 }),
      q(3, "16 × 7 = ?", "112", { number: 112 }),      q(4, "96 ÷ 6 = ?", "16", { number: 16 }),
      q(5, "What is 1/5 of 45?", "9", { number: 9 }),
      q(6, "2.8 + 1.4 = ?", "4.2", { number: 4.2 }),
      q(7, "A film starts at 7:20 and lasts 55 minutes. What time does it end?", "8:15", {
        accept: ["8:15 pm", "20:15"],
      }),
      q(8, "What is the perimeter of a square with side 8 cm?", "32 cm", { number: 32 }),
      multi(9, "41 ÷ 6. What is the quotient? What is the remainder?", "6 remainder 5", [
        part("quotient", "Quotient", "6", { number: 6 }),
        part("remainder", "Remainder", "5", { number: 5 }),
      ]),
      q(10, "What is 10% of 90?", "9", { number: 9 }),
      multi(11, "Ruveer has AED 100. Tickets are AED 18 each. He buys 4. How much do the tickets cost? How much is left?", "72; left 28", [
        part("cost", "Cost (AED)", "72", { number: 72 }),
        part("left", "Left (AED)", "28", { number: 28 }),
      ]),
      q(12, "3, 6, 12, 24, ___", "48", { number: 48 }),
    ],
  },
  {
    day: 17,
    topic: "Fractions again",
    questions: [
      q(1, "1/2 of 90 = ?", "45", { number: 45 }),
      q(2, "2/3 of 18 = ?", "12", { number: 12 }),      q(3, "3/5 of 25 = ?", "15", { number: 15 }),
      q(4, "Which is bigger: 5/6 or 2/3?", "5/6", { accept: ["5 / 6", "five sixths"] }),
      q(5, "1/2 + 1/4 = ?", "3/4", { accept: ["3 / 4", "0.75", "three quarters"] }),
      q(6, "3/8 + 2/8 = ?", "5/8", { accept: ["5 / 8"] }),
      q(7, "7/10 − 3/10 = ?", "4/10", { accept: ["2/5", "4 / 10", "2 / 5"] }),
      q(8, "A chocolate bar has 12 squares. Ruveer eats 1/3. How many squares are left?", "8", { number: 8 }),
      q(9, "Which is bigger: 0.5 or 1/4?", "0.5", { accept: ["1/2", "0.50", "a half"] }),
      q(10, "3/4 of 16 dates = ?", "12", { number: 12 }),
      multi(11, "There are 30 children. 1/2 play football and 1/5 play tennis. How many play football? How many play tennis?", "15 football; 6 tennis", [
        part("football", "Football", "15", { number: 15 }),
        part("tennis", "Tennis", "6", { number: 6 }),
      ]),
      q(12, "What fraction of 20 is 5?", "1/4", { accept: ["5/20", "1 / 4", "5 / 20"] }),
    ],
  },
  {
    day: 18,
    topic: "Money problems",
    questions: [
      q(1, "AED 14.50 + AED 3.50 = ?", "18", { number: 18, accept: ["18.00", "AED 18"] }),
      q(2, "AED 20 − AED 6.75 = ?", "13.25", { number: 13.25 }),
      q(3, "3 ice creams at AED 4.50 each. What is the total?", "13.50", {
        number: 13.5,
        accept: ["13.5", "AED 13.50"],
      }),
      q(4, "A book is AED 37. Ruveer pays with AED 50. How much change?", "13", { number: 13 }),
      q(5, "8 × AED 7 = ?", "56", { number: 56 }),
      q(6, "Share AED 48 equally among 6 children. How much does each child get?", "8", { number: 8 }),
      q(7, "A game is AED 85. It is reduced by AED 20. What is the new price?", "65", { number: 65 }),
      q(8, "Ruveer buys 2 pens at AED 3.50 each and a ruler at AED 2. How much altogether?", "9", {
        number: 9,
        accept: ["9.00", "AED 9"],
      }),
      q(9, "Mum has AED 200. She spends AED 125 on shoes. How much is left?", "75", { number: 75 }),
      q(10, "Which costs more: 4 items at AED 6, or 3 items at AED 9?", "3 items at AED 9", {
        accept: ["27", "the second", "3 at AED 9", "second one"],
      }),
      multi(11, "Juice is AED 3 and a sandwich is AED 11. Ruveer buys 2 juices and 1 sandwich. He pays with AED 20. How much is the bill? How much change?", "Bill 17; change 3", [
        part("bill", "Bill (AED)", "17", { number: 17 }),
        part("change", "Change (AED)", "3", { number: 3 }),
      ]),
      q(12, "AED 2.40 + AED 2.60 = ?", "5", { number: 5, accept: ["5.00", "AED 5"] }),
    ],
  },
  {
    day: 19,
    topic: "Time stretch",
    questions: [
      q(1, "3 hours = ___ minutes", "180", { number: 180 }),
      q(2, "90 minutes = ___ hours ___ minutes", "1 hour 30 minutes", {        accept: ["1 h 30 min", "1hr 30mins", "1.5 hours", "1 hour and 30 minutes"],
      }),
      q(3, "What time is 2 hours 15 minutes after 9:30?", "11:45", { accept: ["11:45 am"] }),
      q(4, "A match starts at 4:40 and ends at 6:05. How long is it?", "1 hour 25 minutes", {
        accept: ["1 h 25 min", "85 minutes", "1 hour and 25 minutes"],
      }),
      q(5, "How many days are in 3 weeks?", "21", { number: 21 }),
      q(6, "How many minutes from 11:50 to 12:20?", "30", { number: 30 }),
      q(7, "A bus comes every 15 minutes. The first bus is at 8:00. What time is the 4th bus?", "8:45", {
        accept: ["08:45", "8:45 am"],
      }),
      q(8, "2 hours 10 minutes + 50 minutes = ?", "3 hours", {
        accept: ["3 h", "3", "180 minutes", "3 hours 0 minutes"],
      }),
      q(9, "School runs from 8:15 to 2:15. How many hours is that?", "6", { accept: ["6 hours"] }),
      q(10, "A cake needs 45 minutes. It goes in at 5:35. What time does it come out?", "6:20", {
        accept: ["6:20 pm", "18:20"],
      }),
      multi(11, "Practice is 25 minutes of sums and 20 minutes of times tables, starting at 4:05. What time does Ruveer finish? How many minutes is the whole practice?", "4:50; 45 minutes", [
        part("finish", "Finish time", "4:50", { accept: ["4:50 pm", "16:50"] }),
        part("minutes", "Minutes", "45", { number: 45 }),
      ]),
      q(12, "Which is later: 15:10 or 3:20 pm?", "3:20 pm", {
        accept: ["15:20", "3:20", "the second"],
      }),
    ],
  },
  {
    day: 20,
    topic: "Measure and shape",
    questions: [
      q(1, "5 m = ___ cm", "500", { number: 500 }),
      q(2, "2 km = ___ m", "2000", { number: 2000 }),
      q(3, "1 L = ___ ml", "1000", { number: 1000 }),
      q(4, "3 L 250 ml = ___ ml", "3250", { number: 3250 }),
      q(5, "1500 ml = ___ L ___ ml", "1 L 500 ml", {
        accept: ["1l 500ml", "1.5 L", "1.5 litres", "1500 ml"],
      }),
      q(6, "A rectangle is 20 cm by 5 cm. What is the area?", "100 cm²", {
        number: 100,
        accept: ["100 cm2"],
      }),
      q(7, "A square has side 12 cm. What is the perimeter?", "48 cm", { number: 48 }),
      q(8, "How many centimetres in half of 1 metre?", "50", { number: 50 }),
      q(9, "A book is 2 cm thick. How tall is a stack of 9 books?", "18 cm", { number: 18 }),
      multi(10, "750 g + 250 g = ___ g. How many kilograms is that?", "1000 g; 1 kg", [
        part("g", "Grams", "1000", { number: 1000 }),
        part("kg", "Kilograms", "1", { number: 1, accept: ["1 kg"] }),
      ]),
      multi(11, "A rectangular rug is 3 m long and 2 m wide. What is the perimeter in metres? What is the area in square metres?", "Perimeter 10 m; area 6 m²", [        part("perimeter", "Perimeter (m)", "10", { number: 10 }),
        part("area", "Area (m²)", "6", { number: 6, accept: ["6 m2"] }),
      ]),
      q(12, "Which holds more: 2 L or 1500 ml?", "2 L", {
        accept: ["2 litres", "2 liters", "2000 ml", "the first"],
      }),
    ],
  },
];
