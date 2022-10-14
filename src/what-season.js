const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  let seasons = ['spring', 'summer', 'autumn', 'winter'];

  if (date instanceof Date && Object.keys(date).length == 0) {
      if (date.getMonth() >= 0 && date.getMonth() <= 1 || date.getMonth() == 11) {
          return seasons[3];
      } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
          return seasons[1];
      } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
        return seasons[2];
      } else if (date.getMonth() >= 2 && date.getMonth() <= 5) {
        return seasons[0];
      }
  } else if (date == undefined) {
    return 'Unable to determine the time of year!';
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
