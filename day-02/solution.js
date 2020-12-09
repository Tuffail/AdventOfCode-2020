import { parseInput } from '../helpers/parsers';

const policyRegex = /(\d+)-(\d+)\s([a-z]):\s(\w+)/i;

export const problem1 = (input) => {
  const values = parseInput(input);
  const correctPasswordsCount = values.reduce((acc, current) => {
    const [, lowerLimit, upperLimit, letter, password] = current.match(policyRegex);
    const letterCount = (password.match(new RegExp(letter, 'g')) || []).length;
    return letterCount >= lowerLimit && letterCount <= upperLimit ? acc + 1 : acc;
  }, 0);

  return correctPasswordsCount;
};

export const problem2 = (input) => {
  const values = parseInput(input);
  const correctPasswordsCount = values.reduce((acc, current) => {
    const [, firstPosition, secondPosition, letter, password] = current.match(policyRegex);
    const firstLetterMatched = password.charAt(firstPosition - 1) === letter;
    const secondLetterMatched = password.charAt(secondPosition - 1) === letter;
    // Applying XOR operator via JS
    return (firstLetterMatched || secondLetterMatched)
      && !(firstLetterMatched && secondLetterMatched) ? acc + 1 : acc;
  }, 0);

  return correctPasswordsCount;
};
