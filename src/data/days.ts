import { day1 } from "./day1";
import { days02to10 } from "./days-02-10";
import { days11to20 } from "./days-11-20";
import { days21to30 } from "./days-21-30";
import type { Day } from "./types";

export const days: Day[] = [day1, ...days02to10, ...days11to20, ...days21to30];

export function getDay(day: number): Day | undefined {
  return days.find((item) => item.day === day);
}
