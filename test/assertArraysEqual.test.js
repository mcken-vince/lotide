const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(["me", "you", "ME"], ["me", "you", "ME"]);
assertArraysEqual([1, 2, 3, 4, 5], [01, 02, 03, 04, 05]);
assertArraysEqual(["yes", "no", "yes"], ["yes", "no", "yes"]);
