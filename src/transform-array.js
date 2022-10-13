const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformer = [...arr];

  for (let i = 0; i < transformer.length; i++) {
    if (transformer[i] == '--discard-next' && transformer[i + 2] == '--double-prev') {
      transformer.splice(i, 3);
    }

    if (transformer[i] == '--double-next' && transformer[i + 2] == '--double-prev') {
      transformer[i] = transformer[i + 1];
    }

    if (transformer[i] == '--discard-next' && transformer[i + 2] == '--discard-prev') {
      transformer.splice(i, 3);
    }

    if (transformer[i] === '--discard-prev') {
      if (i !== 0) transformer.splice(i - 1, 2);
      if (i == 0) transformer.splice(i, 1);
    }

    if (transformer[i] === '--discard-next') {
      if (i !== (transformer.length - 1)) transformer.splice(i, 2);
      if (i == (transformer.length - 1)) transformer.splice(i);
    }

    if (transformer[i] === '--double-prev') {
      if (i !== 0) transformer[i] = transformer[i - 1];
      if (i == 0) transformer.splice(i, 1);
    }

    if (transformer[i] === '--double-next') {
      if (i !== (transformer.length - 1)) transformer[i] = transformer[i + 1];
      if (i == (transformer.length - 1)) transformer.splice(i);
    }
  }
  return transformer
}

console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))

module.exports = {
  transform
};
