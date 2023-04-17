const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  let membersSorted = [];
  let teamNameStr = '';
  if (!Array.isArray(members)) {
    return false;
  }


  function sortMembers() {
    members.forEach(elem => {
      if (typeof elem === 'string') {
        elem = elem.toUpperCase();
        elem = elem.replaceAll(' ', '');
        membersSorted.push(elem);
      }
    })
    if (membersSorted.length != 0) {
      return membersSorted.sort();
    } else {
      return false;
    }


  }

  let result = sortMembers();

  if (result != false) {
    membersSorted.forEach(el => {
      teamNameStr += el[0];
    })
    return teamNameStr;
  } else {
    return false;
  }


}

module.exports = {
  createDreamTeam
};
