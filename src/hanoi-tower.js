const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  const hanoiObj = {
    turns: 0,
    seconds: 0
  }

  hanoiObj.turns = Math.pow(2, disksNumber) - 1;
  hanoiObj.seconds = Math.floor(hanoiObj.turns / (turnsSpeed/3600));

  return hanoiObj;
}

module.exports = {
  calculateHanoi
};
