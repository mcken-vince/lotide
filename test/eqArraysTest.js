const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["me", "you", "them"], ["me", "you", "they"]), false);
assertEqual(eqArrays(["hi", "hi", "hee"], ["hi", "hi", "hee"]), true);
assertEqual(eqArrays([5, 4, 3, 2, 1], [5, 4, 7, 8, 9]), false);
