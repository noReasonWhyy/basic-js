const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrMtrx) {
  const cats = [];
    for (let i = 0; i < arrMtrx.length; i++) {
      for (let j = 0; j < arrMtrx[i].length; j++) {
        if (arrMtrx[i][j] == '^^') {
          cats.push(arrMtrx[i][j]);
        }
      }
    }
  return cats.length;
}

module.exports = {
  countCats
};
