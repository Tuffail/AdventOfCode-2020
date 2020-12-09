import { INPUT, INVALID_PASSPORTS, VALID_PASSPORTS } from './__fixtures__/input';
// import { INPUT } from './input';

import { problem1, problem2 } from './solution';

describe('Day 4 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem1(INPUT);
    expect(result).toHaveLength(2);
  });
});

describe('Day 4 - Part Two', () => {
  it('should return 0 with invalid passports', () => {
    const result = problem2(INVALID_PASSPORTS);
    expect(result).toHaveLength(0);
  });

  it('should return 4 with valid passports', () => {
    const result = problem2(VALID_PASSPORTS);
    expect(result).toHaveLength(4);
  });

  it('should return correct answer with input', () => {
    const result = problem2(INPUT);
    expect(result).toHaveLength(2);
  });
});
