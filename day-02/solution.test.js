import { INPUT } from './__fixtures__/input';
// import { INPUT } from './input';

import { problem1, problem2 } from './solution';

describe('Day 2 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem1(INPUT);
    expect(result).toBe(2);
  });
});

describe('Day 2 - Part Two', () => {
  it('should return correct answer with input', () => {
    const result = problem2(INPUT);
    expect(result).toBe(1);
  });
});
