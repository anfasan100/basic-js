import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  let season = 'Unable to determine the time of year!'
  if ( date === undefined)  {
    return season;
  } else if (!(date instanceof Date) || Object.values(date).length > 0) {
    throw new Error("Invalid date!");
  }
  let month = date.getMonth();
  if ( month == 11 || month < 2){
    season = 'winter'
  } else if ( 2 <= month && month < 5 ){
    season = 'spring'
  } else if ( 5 <= month && month < 8 ){
    season = 'summer'
  } if ( 8 <= month && month < 11 ){
    season = 'autumn'
  } 
  return season;
}
