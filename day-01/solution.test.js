import { INPUT } from './__fixtures__/input';

import { problem1, problem2 } from './solution';

describe('Day 1 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem1(INPUT, 2020);
    expect(result).toBe(514579);
  });
});

describe('Day 2 - Part One', () => {
  it('should return correct answer with input', () => {
    const result = problem2(INPUT, 2020);
    expect(result).toBe(241861950);
  });
});
