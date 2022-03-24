// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charObj = {};
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > maxNum) {
      maxNum = charObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
