import { parseInput } from '../helpers/parsers';

export const problem1 = (input, joltsToMeasure) => {
  const sortedAdapterJoltages = parseInput(input, Number).sort((a, b) => a - b);
  const deviceJoltage = sortedAdapterJoltages[sortedAdapterJoltages.length - 1] + 3;
  sortedAdapterJoltages.push(deviceJoltage);
  sortedAdapterJoltages.unshift(0);

  const joltageDiffs = new Map();
  let currentJoltage = 0;

  sortedAdapterJoltages.forEach((adapterJoltage) => {
    const difference = adapterJoltage - currentJoltage;
    if (difference <= 3) {
      currentJoltage = adapterJoltage;
      joltageDiffs.set(difference, (joltageDiffs.get(difference) || 0) + 1);
    }
  });

  return joltsToMeasure.reduce(
    (acc, jolt) => (joltageDiffs.has(jolt) ? joltageDiffs.get(jolt) * (acc || 1) : acc), 0,
  );
};

const getCombinations = (input, memo = {}) => {
  const key = input.join(',');
  if (key in memo) {
    return memo[input];
  }
  let result = 1;
  for (let i = 0; i < input.length - 1; i += 1) {
    if (input[i + 1] - input[i - 1] <= 3) {
      const newInput = [input[i - 1]].concat(input.slice(i + 1));
      result += getCombinations(newInput, memo);
    }
  }

  // eslint-disable-next-line no-param-reassign
  memo[key] = result;

  return result;
};

export const problem2 = (input) => {
  const sortedAdapterJoltages = parseInput(input, Number).sort((a, b) => a - b);
  const deviceJoltage = sortedAdapterJoltages[sortedAdapterJoltages.length - 1] + 3;
  sortedAdapterJoltages.push(deviceJoltage);
  sortedAdapterJoltages.unshift(0);

  return getCombinations(sortedAdapterJoltages);
};
