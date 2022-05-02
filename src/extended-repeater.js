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
function repeater(str, { repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'}) {

  
  str = String(str);
  addition = String(addition);
  let additionString;
  let x = additionSeparator.length;
  addition === '' ? additionString = '' : additionString = (`${addition}${additionSeparator}`).repeat(additionRepeatTimes).slice(0, -x);
  let subString = str + additionString;
  let result = '';
  let i = 0;
  while (i < repeatTimes-1) {
    result +=subString + separator;
    i++
  }
  result +=subString;
  return result;

 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
