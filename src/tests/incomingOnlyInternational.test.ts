import { strict as assert } from 'assert';
import { incomingOnlyInternational as regex } from '../index';

describe('Incoming Only International', () => {
  it('should match valid inputs', () => {
    const validInputs: { input: string, reason: string }[] = [
      { input: "1031", reason: "Valid: Matches 10 followed by 3 and a digit from 1 to 3" },
      { input: "1032", reason: "Valid: Matches 10 followed by 3 and a digit from 1 to 3" },
      { input: "1033", reason: "Valid: Matches 10 followed by 3 and a digit from 1 to 3" },
      { input: "1068", reason: "Valid: Matches 10 followed by 68" },
    ];
    validInputs.forEach(({ input, reason }) => {
      assert.strictEqual(regex.test(input), true, `Expected "${input}" to match the regex. Reason: ${reason}`);
    });
  });

  it('should not match invalid inputs', () => {
    const invalidInputs: { input: string, reason: string }[] = [
      { input: "", reason: "Invalid: Empty string" },
      { input: " ", reason: "Invalid: Contains whitespace" },
      { input: "1030", reason: "Invalid: Not an allowed number" },
      { input: "1034", reason: "Invalid: Not an allowed number" },
      { input: "1035", reason: "Invalid: Not an allowed number" },
      { input: "1067", reason: "Invalid: Not an allowed number" },
      { input: "1069", reason: "Invalid: Not an allowed number" },
      { input: "10311", reason: "Invalid: Too many digits" },
      { input: "103", reason: "Invalid: Too few digits" },
      { input: "10", reason: "Invalid: Too few digits" },
      { input: "1", reason: "Invalid: Too few digits" },
      { input: "1031a", reason: "Invalid: Contains non-numeric characters" },
      { input: "1032b", reason: "Invalid: Contains non-numeric characters" },
      { input: "1033c", reason: "Invalid: Contains non-numeric characters" },
      { input: "1068d", reason: "Invalid: Contains non-numeric characters" },
      { input: "10-31", reason: "Invalid: Contains non-numeric characters" },
      { input: "10-32", reason: "Invalid: Contains non-numeric characters" },
      { input: "10-33", reason: "Invalid: Contains non-numeric characters" },
      { input: "10-68", reason: "Invalid: Contains non-numeric characters" },
      { input: "10.31", reason: "Invalid: Contains non-numeric characters" },
      { input: "10.32", reason: "Invalid: Contains non-numeric characters" },
      { input: "10.33", reason: "Invalid: Contains non-numeric characters" },
      { input: "10.68", reason: "Invalid: Contains non-numeric characters" },
      { input: "10 31", reason: "Invalid: Contains whitespace" },
      { input: "10 32", reason: "Invalid: Contains whitespace" },
      { input: "10 33", reason: "Invalid: Contains whitespace" },
      { input: "10 68", reason: "Invalid: Contains whitespace" },
    ];
    invalidInputs.forEach(({ input, reason }) => {
      assert.strictEqual(regex.test(input), false, `Expected "${input}" not to match the regex. Reason: ${reason}`);
    });
  });
});