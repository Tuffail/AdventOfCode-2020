import { parseInput } from '../helpers/parsers';

export const problem1 = (input, target) => {
  const values = parseInput(input, Number);
  for (let i = 0; i < values.length; i += 1) {
    for (let j = i + 1; j < values.length; j += 1) {
      if (values[i] + values[j] === target) {
        return values[i] * values[j];
      }
    }
  }
  return null;
};

export const problem2 = (input, target) => {
  const values = parseInput(input, Number);
  for (let i = 0; i < values.length; i += 1) {
    for (let j = i + 1; j < values.length; j += 1) {
      for (let k = j + 1; k < values.length; k += 1) {
        if (values[i] + values[j] + values[k] === target) {
          return values[i] * values[j] * values[k];
        }
      }
    }
  }
  return null;
};
