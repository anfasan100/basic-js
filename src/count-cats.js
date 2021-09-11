import { NotImplementedError } from '../extensions/index.js';

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
export default function countCats(arr) {
  throw new NotImplementedError('Not implemented');
  let numOfCats = arr.reduce((catSum,box) => {
    let cats = box.filter(item => item == '^^');
    catSum += cats;
  }, 0);
  return numOfCats;
}

