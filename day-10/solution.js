import { parseInput } from '../helpers/parsers';

// eslint-disable-next-line import/prefer-default-export
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
