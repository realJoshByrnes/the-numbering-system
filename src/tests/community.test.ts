import { strict as assert } from 'assert';
import { community } from '../index';

describe('Community', () => {
  it('should match valid inputs', () => {
    const validInputs: { input: string, reason: string }[] = [
      { input: "1100", reason: "Valid: Matches 11 followed by 00" },
      { input: "1190", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1191", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1192", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1193", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1194", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1195", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1196", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1197", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1198", reason: "Valid: Matches 11 followed by 9 and any digit" },
      { input: "1199", reason: "Valid: Matches 11 followed by 9 and any digit" },
    ];
    validInputs.forEach(({ input, reason }) => {
      assert.strictEqual(community.test(input), true, `Expected "${input}" to match the regex. Reason: ${reason}`);
    });
  });

  it('should not match invalid inputs', () => {
    const invalidInputs: { input: string, reason: string }[] = [
      { input: "", reason: "Invalid: Empty string" },
      { input: " ", reason: "Invalid: Contains whitespace" },
      { input: "11", reason: "Invalid: Missing digits after 11" },
      { input: "110", reason: "Invalid: Missing digit after 110" },
      { input: "1101", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1102", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1103", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1104", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1105", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1106", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1107", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1108", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1109", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1110", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1111", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1112", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1113", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1114", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1115", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1116", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1117", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1118", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1119", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1120", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1121", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1122", reason: "Invalid: Does not match the allowed patterns" },
      { input: "1123", reason: "Invalid: Does not match the allowed patterns" },
    ];
    invalidInputs.forEach(({ input, reason }) => {
      assert.strictEqual(community.test(input), false, `Expected "${input}" not to match the regex. Reason: ${reason}`);
    });
  });
});