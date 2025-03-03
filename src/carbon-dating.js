const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(string) {
  if (isNaN(+string) || typeof string !== 'string' || string <= 0 || string > MODERN_ACTIVITY) {
    return false;
  } else {
    return Math.ceil((Math.log(MODERN_ACTIVITY / +string)) / (Math.log(2) / HALF_LIFE_PERIOD));
  }
}

console.log(dateSample(3));

module.exports = {
  dateSample
};
