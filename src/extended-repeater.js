import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, { repeatTimes, separator = '+', addition = "", additionRepeatTimes = 1, additionSeparator= '|' } = {} ) {
  let newAddition = "";
  let newStr = "";
  for(let i = 0; i < additionRepeatTimes; i++){
    newAddition += String(addition);
    if (additionRepeatTimes - 1 !== i) newAddition += additionSeparator;
  }
  for(let j = 0; j < repeatTimes; j++){
    newStr += String(str);
    newStr += newAddition;
    if (repeatTimes - 1 !== j) newStr += separator;
  }
  return newStr ? newStr: str + addition;
}