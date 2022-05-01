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
  let string = n.toString();
  let array = [];
  //return numbers
  for (let i = 0; i < string.length; i++) {
 array.push(string.slice(0, i ) + string.slice(i+1));
  }
 // //for (let j = 0; j < array.length; j++) {
    //l

  return Math.max(...array);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
