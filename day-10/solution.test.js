import { INPUT } from './__fixtures__/input';
// import { INPUT } from './input';

import { problem1, problem2 } from './solution';

describe('Day 10 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem1(INPUT, [1, 3]);
    expect(result).toBe(35);
  });
});

describe('Day 10 - Part Two', () => {
  it('should return correct answer with input', () => {
    const result = problem2(INPUT);
    expect(result).toBe(8);
  });
});
