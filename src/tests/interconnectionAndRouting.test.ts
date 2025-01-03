import { strict as assert } from 'assert';
import { interconnectionAndRouting } from '../index'; 

describe('Interconnection and Routing', () => {
  it('should match valid inputs', () => {
    const validInputs: { input: string, reason: string }[] = [
      { input: "1410", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1411", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1412", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1413", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1414", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1415", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1416", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1417", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1418", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1419", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1420", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1421", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1422", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1423", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1424", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1425", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1426", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1427", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1428", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1429", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1430", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1431", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1432", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
      { input: "1433", reason: "Valid: Matches 14 followed by a digit from 1 to 9 and any digit" },
    ];
    validInputs.forEach(({ input, reason }) => {
      assert.strictEqual(interconnectionAndRouting.test(input), true, `Expected "${input}" to match the regex. Reason: ${reason}`);
    });
  });

  it('should not match invalid inputs', () => {
    const invalidInputs: { input: string, reason: string }[] = [
      { input: "", reason: "Invalid: Empty string" },
      { input: " ", reason: "Invalid: Contains whitespace" },
      { input: "14", reason: "Invalid: Missing digits" },
      { input: "140", reason: "Invalid: Second digit must be 1-9" },
      { input: "1400", reason: "Invalid: Second digit must be 1-9" },
      { input: "1310", reason: "Invalid: Does not start with 14" },
      { input: "1510", reason: "Invalid: Does not start with 14" },
      { input: "141", reason: "Invalid: Missing digit" },
      { input: "14100", reason: "Invalid: Too many digits" },
      { input: "14A0", reason: "Invalid: Contains non-numeric character" },
      { input: "14B0", reason: "Invalid: Contains non-numeric character" },
      { input: "14C0", reason: "Invalid: Contains non-numeric character" },
      { input: "14D0", reason: "Invalid: Contains non-numeric character" },
      { input: "14E0", reason: "Invalid: Contains non-numeric character" },
      { input: "14F0", reason: "Invalid: Contains non-numeric character" },
      { input: "14G0", reason: "Invalid: Contains non-numeric character" },
      { input: "14H0", reason: "Invalid: Contains non-numeric character" },
      { input: "14I0", reason: "Invalid: Contains non-numeric character" },
      { input: "14J0", reason: "Invalid: Contains non-numeric character" },
      { input: "14K0", reason: "Invalid: Contains non-numeric character" },
      { input: "14L0", reason: "Invalid: Contains non-numeric character" },
      { input: "14M0", reason: "Invalid: Contains non-numeric character" },
      { input: "14N0", reason: "Invalid: Contains non-numeric character" },
      { input: "14O0", reason: "Invalid: Contains non-numeric character" },
      { input: "14P0", reason: "Invalid: Contains non-numeric character" },
      { input: "14Q0", reason: "Invalid: Contains non-numeric character" },
    ];
    invalidInputs.forEach(({ input, reason }) => {
      assert.strictEqual(interconnectionAndRouting.test(input), false, `Expected "${input}" not to match the regex. Reason: ${reason}`);
    });
  });
});