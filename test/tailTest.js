// const assertEqual = require('../assertEqual.js');
// const tail = require('../tail.js');

// // Test Case: Check the original array
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should not modify original array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it('returns 2 for [1, 2]', () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it('returns an empty array [] when given an empty array []', () => {
    assert.deepEqual(tail([]), []);
  })
  it('returns an empty array [] when given an array with only one element ["g"]', () => {
    assert.deepEqual(tail(['g']), []);
  });
});
