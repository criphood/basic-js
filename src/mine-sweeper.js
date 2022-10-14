const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minesweeper = [], result = [], counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j - 1] || matrix[i][j + 1]) {
          counter += 1;
      }

      if ((matrix[i - 1] && matrix[i - 1][j - 1]) ||
          (matrix[i - 1] && matrix[i - 1][j]) ||
          (matrix[i - 1] && matrix[i - 1][j + 1]) ||
          (matrix[i + 1] && matrix[i + 1][j - 1]) ||
          (matrix[i + 1] && matrix[i + 1][j]) ||
          (matrix[i + 1] && matrix[i + 1][j + 1])) {
          counter += 1;
      }

      minesweeper.push(counter);
      counter = 0;
    }
  }

  for (let i = 0; i < minesweeper.length; i += 3) {
    if (minesweeper[i] !== undefined &&
        minesweeper[i + 1] !== undefined &&
        minesweeper[i + 2] !== undefined) {
      result.push([minesweeper[i], minesweeper[i+1], minesweeper[i+2]]);
    }
  }

  return result;
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]));

module.exports = {
  minesweeper
};
