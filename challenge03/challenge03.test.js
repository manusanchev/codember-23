import { describe, it, expect } from "vitest";
import {
  encryptionPoliciesChecker1,
  encryptionPoliciesChecker2,
} from "./challenge03.js";

describe.concurrent("Challenge03", () => {
  it("case 1", () => {
    const input = `2-4 f: fgff
    4-6 z: zzzsg 
    1-6 h: hhhhhh`;
    const output = "zzzsg";
    expect(encryptionPoliciesChecker1(input, 0)).toBe(output);
    expect(encryptionPoliciesChecker2(input, 0)).toBe(output);
  });
});
