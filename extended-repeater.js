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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  function getAddition(value, times, separator = '|') {
    let addition = [];
    let additionStr = '';
    if (typeof value === 'boolean' || value === null) {
      value = String(value);
    }
    if (value) {
      if (!times || times === 0) {
        return additionStr = value;
      }
      for (let i = 0; i < times; i++) {
        addition.push(value);
        addition.push(separator);
      }
      addition.pop()
      addition.forEach(el => {
        additionStr = additionStr + el;
      })
      return additionStr;
    } else {
      return '';
    }
  }

  let additionStr = getAddition(options.addition, options.additionRepeatTimes, options.additionSeparator);
  function getStr(value, times, separator = '+') {
    let strArr = [];
    let result = '';
    if (typeof value === 'boolean' || value === null) {
      value = String(value);
    }
    if (value) {
      value = value + additionStr;
    }
    //console.log(value)

    if (!times || times === 0) {
      return result = value;
    }

    if (times > 0) {
      for (let i = 0; i < times; i++) {
        strArr.push(value);
        strArr.push(separator);
      }
      strArr.pop();
      strArr.forEach(el => {
        result = result + el;
      })
    }
    return result;
  }
  return getStr(str, options.repeatTimes, options.separator, additionStr)
}

module.exports = {
  repeater
};
