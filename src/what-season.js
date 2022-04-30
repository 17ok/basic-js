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
/*
function getSeason(/* date */ /*) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
*/
function getSeason(date) {
  let month;
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';
  if (!(date instanceof Date)||date.hasOwnProperty('getMonth')) throw new Error('Invalid date!');
 
  try {
   month = date.getMonth()
 } catch{
   throw new Error('Invalid date!')
}

  if (month > 10 || month < 2)  return 'winter'
  if (month > 1 & month < 5) return 'spring'
  if (month > 4 && month < 8) return 'summer'
  if (month > 7 && month < 11) return 'fall'
 }



module.exports = {
  getSeason
};
