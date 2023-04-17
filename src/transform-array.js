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
  let sequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!sequences.includes(arr[i])) {
      newArr.push(arr[i]);
    }
    if (arr[i] === '--discard-next') {
      i++;
    }
    if (arr[i] === '--discard-prev') {
      if (newArr.length != 0 && arr[i - 2] != '--discard-next') {
        newArr.pop();
      }
    }
    if (arr[i] === '--double-next') {
      if (arr[i + 1]) {
        newArr.push(arr[i + 1]);
      }


    }
    if (arr[i] === '--double-prev') {
      if (newArr.length != 0 && arr[i - 2] != '--discard-next') {
        newArr.push(newArr[newArr.length - 1]);
      }

    }
  }
  return newArr;
}

module.exports = {
  transform
};
