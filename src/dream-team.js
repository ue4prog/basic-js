module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const res = members.filter(word => typeof word === 'string').map(element => { return element.trim().split('')[0].toUpperCase()}).sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }
    return 0;
  }).join('');
  return res;
};