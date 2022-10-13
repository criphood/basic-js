const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let added = [],
    result = [];

  if (options.addition === null) options.addition = 'null';

  if (!options.additionRepeatTimes) added.push(options.addition);
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    added.push(options.addition);
  }

  if (!options.additionSeparator) options.additionSeparator = '|';
  const resultString = str + added.join(options.additionSeparator);

  if (!options.repeatTimes) result.push(resultString);
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(resultString);
  }

  if (!options.separator) {
    return result.join('+')
  } else {
    return result.join(options.separator);
  }
}

console.log(repeater('STRING', {
  separator: 'ds',
  addition: null,
  additionSeparator: ')))000'
}))

module.exports = {
  repeater
};
