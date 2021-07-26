const middle = require ('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle(["one", "two", "three", "four"]), ["two", "three"]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
