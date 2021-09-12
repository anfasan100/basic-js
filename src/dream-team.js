import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let names = members.filter(word => {
    if (Number.isNaN(+word) && typeof word === "string" ) return word
  });
  let dreamTeam = "";
  for(let i = 0; i < names.length; i++){
    names[i] = names[i].trim();
    dreamTeam += names[i][0];
  }
  return dreamTeam.toUpperCase().split('').sort((A, B) => A.codePointAt(0) - B.codePointAt(0) ).join('');
}
