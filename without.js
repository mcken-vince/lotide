const eqArrays = (arr1, arr2) => {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  console.log(eqArrays(arr1, arr2));
};


// input: source array
//        arr of items to remove
// return new array with only items from source array that are not in second array
// iterate through source array, comparing with each item of second array
// if there is a match, do not add element to new array, if no match then add it
// return new array
const without = (source, itemsToRemove) => {
  const output = [];
  for (let x of source) {
    if (!(itemsToRemove.includes(x))) {
      output.push(x);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["hello", "goodbye", "green", "blue"], ["goodbye", "hello"])); // => ["green", "blue"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
