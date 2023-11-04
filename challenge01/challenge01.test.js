import {
  searchPatternSolution1,
  searchPatternSolution2,
  searchPatternSolution3,
} from "./challenge01.js";
import { describe, it, expect } from "vitest";

describe("", () => {
  it("Example 1", () => {
    const message = "gato perro perro coche Gato peRRo sol";
    const solution = "gato2perro3coche1sol1";

    expect(searchPatternSolution1(message)).toBe(solution);
    expect(searchPatternSolution2(message)).toBe(solution);
    expect(searchPatternSolution3(message)).toBe(solution);
  });

  it("Example 2", () => {
    const message = "llaveS casa CASA casa llaves";
    const solution = "llaves2casa3";

    expect(searchPatternSolution1(message)).toBe(solution);
    expect(searchPatternSolution2(message)).toBe(solution);
    expect(searchPatternSolution3(message)).toBe(solution);
  });

  it("Example 3", () => {
    const message = "taza ta za taza";
    const solution = "taza2ta1za1";

    expect(searchPatternSolution1(message)).toBe(solution);
    expect(searchPatternSolution2(message)).toBe(solution);
    expect(searchPatternSolution3(message)).toBe(solution);
  });

  it("Example 4", () => {
    const message = "casas casa casasas";
    const solution = "casas1casa1casasas1"; // this is wrong midu!!!

    expect(searchPatternSolution1(message)).toBe(solution);
    expect(searchPatternSolution2(message)).toBe(solution);
    expect(searchPatternSolution3(message)).toBe(solution);
  });
});
