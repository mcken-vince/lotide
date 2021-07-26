const countLetters = (string) => {
  const letterCount = {};
  const noSpaces = string.split(" ").join("");
  console.log(noSpaces);
  for (let letter of noSpaces) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;

// console.log(countLetters("hello"));
// console.log(countLetters("hi my name is Vincent"));
// console.log(countLetters("supercalifragilisticexpialidocious"));
