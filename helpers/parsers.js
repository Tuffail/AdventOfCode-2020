// eslint-disable-next-line import/prefer-default-export
export const parseInput = (input, parseType) => {
  const values = input.split('\n');
  if (parseType) {
    return values.map((x) => parseType(x));
  }
  return values;
};
