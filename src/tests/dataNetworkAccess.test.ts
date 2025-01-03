import { strict as assert } from 'assert';
import { dataNetworkAccess as Regex } from '../index'; 

describe('Data Network Access', () => {
  it('should match valid inputs', () => {
    const validInputs: { input: string, reason: string }[] = [
      { input: "01920", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01921", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01922", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01923", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01924", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01925", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01926", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01927", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01928", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01929", reason: "Valid: Matches 019 followed by 2 and any digit" },
      { input: "01984", reason: "Valid: Matches 019 followed by 8 and a digit from 4 to 8" },
      { input: "01985", reason: "Valid: Matches 019 followed by 8 and a digit from 4 to 8" },
      { input: "01986", reason: "Valid: Matches 019 followed by 8 and a digit from 4 to 8" },
      { input: "01987", reason: "Valid: Matches 019 followed by 8 and a digit from 4 to 8" },
      { input: "01988", reason: "Valid: Matches 019 followed by 8 and a digit from 4 to 8" },
    ];
    validInputs.forEach(({ input, reason }) => {
      assert.strictEqual(Regex.test(input), true, `Expected "${input}" to match the regex. Reason: ${reason}`);
    });
  });

  it('should not match invalid inputs', () => {
    const invalidInputs: { input: string, reason: string }[] = [
      { input: "", reason: "Invalid: Empty string" },
      { input: " ", reason: "Invalid: Contains whitespace" },
      { input: "019", reason: "Invalid: Missing digits" },
      { input: "0190", reason: "Invalid: Does not match allowed patterns" },
      { input: "0191", reason: "Invalid: Does not match allowed patterns" },
      { input: "0193", reason: "Invalid: Does not match allowed patterns" },
      { input: "0198", reason: "Invalid: Does not match allowed patterns" },
      { input: "01983", reason: "Invalid: Does not match allowed patterns" },
      { input: "01989", reason: "Invalid: Does not match allowed patterns" },
      { input: "01990", reason: "Invalid: Does not match allowed patterns" },
      { input: "01991", reason: "Invalid: Does not match allowed patterns" },
      { input: "01992", reason: "Invalid: Does not match allowed patterns" },
      { input: "01993", reason: "Invalid: Does not match allowed patterns" },
      { input: "01994", reason: "Invalid: Does not match allowed patterns" },
      { input: "01995", reason: "Invalid: Does not match allowed patterns" },
      { input: "01996", reason: "Invalid: Does not match allowed patterns" },
      { input: "01997", reason: "Invalid: Does not match allowed patterns" },
      { input: "01998", reason: "Invalid: Does not match allowed patterns" },
      { input: "01999", reason: "Invalid: Does not match allowed patterns" },
      { input: "01820", reason: "Invalid: Does not start with 019" },
      { input: "02920", reason: "Invalid: Does not start with 019" },
      { input: "0192", reason: "Invalid: Missing digit" },
      { input: "019200", reason: "Invalid: Too many digits" },
      { input: "019A0", reason: "Invalid: Contains non-numeric character" },
      { input: "019B0", reason: "Invalid: Contains non-numeric character" },
      { input: "019C0", reason: "Invalid: Contains non-numeric character" },
    ];
    invalidInputs.forEach(({ input, reason }) => {
      assert.strictEqual(Regex.test(input), false, `Expected "${input}" not to match the regex. Reason: ${reason}`);
    });
  });
});