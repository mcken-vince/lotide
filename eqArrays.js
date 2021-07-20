const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// input: two arrays
// compares the two arrays, returns true if they are exactly the same, false if not
const eqArrays = (arr1, arr2) => {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["me", "you", "them"], ["me", "you", "they"]), false);
assertEqual(eqArrays(["hi", "hi", "hee"], ["hi", "hi", "hee"]), true);
assertEqual(eqArrays([5, 4, 3, 2, 1], [5, 4, 7, 8, 9]), false);