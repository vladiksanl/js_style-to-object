'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const arrayFromString = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 0)
    .map((element) => element.split(':').map((part) => part.trim()));

  const fromArrayToObject = Object.fromEntries(arrayFromString);

  return fromArrayToObject;
}

module.exports = convertToObject;
