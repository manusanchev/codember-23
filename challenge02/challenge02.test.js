import { describe, it, expect } from "vitest";
import { miniCompilerSolution2, miniCompilerSolution1 } from "./challenge02.js";

describe.concurrent("Challenge02", () => {
    it("case 1", () => {
        const input = "##*&";
        const output = "4";
        expect(miniCompilerSolution2(input)).toBe(output);
        expect(miniCompilerSolution1(input)).toBe(output);
    });

    it("case 2", () => {
        const input = "&##&*&@&";
        const output = "0243";
        expect(miniCompilerSolution2(input)).toBe(output);
        expect(miniCompilerSolution1(input)).toBe(output);
    });
});