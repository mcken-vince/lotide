const letterPositions = (string) => {
  const results = {};

  for (let l = 0; l < string.length; l++) {
    if (string[l] !== " ") {
      if (results[string[l]]) {
        results[string[l]].push(l);
      } else {
        results[string[l]] = [l];
      }
    }
  }

  return results;
};

module.exports = letterPositions;