const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["me", "you", "them"], ["me", "you", "they"]), false);
assertEqual(eqArrays(["hi", "hi", "hee"], ["hi", "hi", "hee"]), true);
assertEqual(eqArrays([5, 4, 3, 2, 1], [5, 4, 7, 8, 9]), false);
