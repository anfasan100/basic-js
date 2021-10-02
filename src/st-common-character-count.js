import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  let sum = 0;
  for(let i = 0; s1.length > i; i++){
    for(let j = 0; s2.length > j; j++){
      if( s1[i] == s2[j]){
        s1.splice(i, 1);
        s2.splice(j, 1);
        i--;
        j--;
        sum += 1;
        continue;
      }
    }
  }
  return sum;
}
