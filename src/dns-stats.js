const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};
  domains.forEach(domain => {
    domain = domain.split('.').reverse();
    let key = '';
    domain.forEach(item => {
      key += '.' + item;
      if (stats[key]) {
        stats[key] = stats[key] + 1;
      } else {
        stats[key] = 1;
      }
    })
  });
  return stats;
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats
};
