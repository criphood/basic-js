const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    const number = n.replace(n[i], '');
    if (number > max) {
      max = number;
    }
  }
  return +max;
}

console.log(deleteDigit(222219))

module.exports = {
  deleteDigit
};
