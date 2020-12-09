import { INPUT } from './__fixtures__/input';
// import { INPUT } from './input';

import { problem1, problem2 } from './solution';

describe('Day 3 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem1(INPUT, 3, 1);
    expect(result).toBe(7);
  });
});

describe('Day 3 - Part Two', () => {
  it('should return correct answer with input', () => {
    const result = problem2(INPUT);
    expect(result).toBe(336);
  });
});
