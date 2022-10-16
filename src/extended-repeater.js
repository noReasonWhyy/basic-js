const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  let speech = [];
  
  if (!options.separator) {
    options.separator = '+';
  }

  if (!("addition" in options)) {
    options.addition = '';
  } else {
    options.addition = `${options.addition}`;
  }
  
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  
  for (let i = 0; i < options.repeatTimes; i++) {
    let additions = [];

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      additions.push(`${options.addition}`);
    }

    additions = additions.join(options.additionSeparator);

    if (i === options.repeatTimes - 1) {
      speech.push(`${str}`, `${additions}`);
    } else {
      speech.push(`${str}`, `${additions}`, options.separator);
    }
  }

  return speech.join('');
}

module.exports = {
  repeater
};
