const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail([1, 2])[0], [2][0]);
assertEqual(tail(['g'])[0], [][0]);
assertEqual(tail([])[0], [][0]);
