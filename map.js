const map = (array, callback) => {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// console.log(map(words, word => word[0]));
// console.log(map(["hello", "my", "name", "is", "Vincent"], word => word.toUpperCase()));
