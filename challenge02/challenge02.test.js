import { describe, it, expect } from "vitest";
import { miniCompiler } from "./challenge02.js";

describe("Challenge02", () => {
  it("case 1", () => {
    const input = "##*&";
    const output = "4";
    expect(miniCompiler(input)).toBe(output);
  });

  it("case 2", () => {
    const input = "&##&*&@&";
    const output = "0243";
    expect(miniCompiler(input)).toBe(output);
  });
});
