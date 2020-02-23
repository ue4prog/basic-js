/**@param {Date}date */
module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.keys(date).length > 0) {
    throw new Error();
  }
  const month = date.getMonth();

  if (month === 11 || month < 2) {
    return 'winter';
  } else if (month > 1 && month < 5) {
    return 'spring';
  } else if (month > 4 && month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  } 
};
