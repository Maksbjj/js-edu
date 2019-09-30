/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  let masterTime = 800;
  let basicTime = 500;
  let weeks = 0;
  if (knowsProgramming == true) {
    weeks += Math.ceil(masterTime / config[focus]);
  } else {
    weeks += Math.ceil((masterTime + basicTime) / config[focus]);
  }
  return weeks;
};
