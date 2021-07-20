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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(["me", "you", "me"], ["me", "you", "ME"]);
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 7, 8, 9]);
