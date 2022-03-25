// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxQuant = 0;
  let maxChar = '';
  // create character map
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // find highest number in character map
  for (let char in charMap) {
    if (charMap[char] > maxQuant) {
      maxQuant = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
