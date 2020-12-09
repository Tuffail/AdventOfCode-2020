import { parseInput } from '../helpers/parsers';

const parseSingleInput = (singleInput) => singleInput.split('');

export const problem1 = (input, xChange, yChange) => {
  const grid = parseInput(input, parseSingleInput);
  let x = 0;
  let y = 0;
  let treeCount = 0;

  const gridRowLength = grid[0].length;

  while (y < grid.length - 1) {
    x += xChange;
    y += yChange;
    if (grid[y][x % gridRowLength] === '#') {
      treeCount += 1;
    }
  }

  return treeCount;
};

export const problem2 = (input) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes.reduce((acc, [xChange, yChange]) => acc * problem1(input, xChange, yChange), 1);
};
