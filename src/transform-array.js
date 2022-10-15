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

  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (arr.indexOf(arr[i]) !== 0 && arr[i - 2] !== '--discard-next') {
          queue.pop();
        }
        break;
      case '--double-prev':
        if (arr.indexOf(arr[i]) !== 0 && arr[i - 2] !== '--discard-next') {
          queue.push(arr[i - 1]);
        }
        break;
      case '--discard-next':
        if (arr.indexOf(arr[i]) == arr.length - 1) {
          break;
        } else {
          i += 1;
        }
        break;
      case '--double-next':
        if (arr.indexOf(arr[i]) == arr.length - 1) {
          break;
        } else {
          queue.push(arr[i + 1]);
        }
        break;
      default:
        queue.push(arr[i]);
    }
  }

  return queue;
}

module.exports = {
  transform
};
