import { strict as assert } from 'assert';
import { internationalService as regex } from '../index';

describe('International Service', () => {
  it('should match valid inputs', () => {
    const validInputs: { input: string, reason: string }[] = [
      { input: "0010", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "0014", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "0015", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "0016", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "0018", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "0019", reason: "Valid: 00 followed by 1 and a digit from 0, 4, 5, 6, 8, 9" },
      { input: "00130", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00131", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00132", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00133", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00134", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00135", reason: "Valid: 00 followed by 1, 3, and any digit" },
      { input: "00170", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00171", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00172", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00173", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00174", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00175", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00176", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00177", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00178", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00179", reason: "Valid: 00 followed by 1, 7, and any digit" },
      { input: "00900", reason: "Valid: 00 followed by 9 and two digits" },
      { input: "00901", reason: "Valid: 00 followed by 9 and two digits" },
      { input: "00902", reason: "Valid: 00 followed by 9 and two digits" },
      { input: "00903", reason: "Valid: 00 followed by 9 and two digits" },
      { input: "00904", reason: "Valid: 00 followed by 9 and two digits" },
      { input: "00905", reason: "Valid: 00 followed by 9 and two digits" },
    ];
    validInputs.forEach(({ input, reason }) => {
      assert.strictEqual(regex.test(input), true, `Expected "${input}" to match the regex. Reason: ${reason}`);
    });
  });

  it('should not match invalid inputs', () => {
    const invalidInputs: { input: string, reason: string }[] = [
      { input: "0013", reason: "Invalid: 00 followed by 1 and 3, but no subsequent digit" },
      { input: "0012", reason: "Invalid: 00 followed by 1 and 2, which is not allowed" },
      { input: "00111", reason: "Invalid: 00 followed by 1 and two 1s, which is not allowed" },
      { input: "009", reason: "Invalid: 00 followed by 9, but missing two digits" },
      { input: "001", reason: "Invalid: 00 followed by 1, but missing subsequent digits" },
      { input: "00010", reason: "Invalid: Starts with three 0s, which is not allowed" },
      { input: "10010", reason: "Invalid: Does not start with 00" },
      { input: "00100", reason: "Invalid: 00 followed by 1 and 0, but has an extra 0 at the end" },
      { input: "0011", reason: "Invalid: 00 followed by 1 and two 1s, which is not allowed" },
      { input: "0017", reason: "Invalid: 00 followed by 1 and 7, but no subsequent digit" },
      { input: "0013A", reason: "Invalid: 00 followed by 1, 3, and a non-digit" },
      { input: "0017B", reason: "Invalid: 00 followed by 1, 7, and a non-digit" },
      { input: "009", reason: "Invalid: 00 followed by 9, but missing two digits" },
      { input: "009A", reason: "Invalid: 00 followed by 9 and a non-digit" },
      { input: "009B", reason: "Invalid: 00 followed by 9 and a non-digit" },
      { input: "009C", reason: "Invalid: 00 followed by 9 and a non-digit" },
      { input: "00", reason: "Invalid: Missing digits after 00" },
      { input: "0", reason: "Invalid: Missing leading 0" },
      { input: "", reason: "Invalid: Empty string" },
      { input: "1", reason: "Invalid: Missing leading 00" },
      { input: "10", reason: "Invalid: Missing leading 00" },
      { input: "100", reason: "Invalid: Missing leading 00" },
      { input: "1001", reason: "Invalid: Missing leading 00" },
      { input: "10010", reason: "Invalid: Missing leading 00" },
      { input: "000", reason: "Invalid: Too many leading 0s" },
      { input: "0000", reason: "Invalid: Too many leading 0s" },
      { input: "00000", reason: "Invalid: Too many leading 0s" },
    ];
    invalidInputs.forEach(({ input, reason }) => {
      assert.strictEqual(regex.test(input), false, `Expected "${input}" not to match the regex. Reason: ${reason}`);
    });
  });
});