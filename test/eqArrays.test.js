const eqArrays = require('../eqArrays.js');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true given two identical arrays of numbers', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('should return false given two arrays of strings with different values', () => {
    assert.isFalse(eqArrays(["me", "you", "them"], ["me", "you", "they"]));
  });
  it('should return true given two identical arrays of strings', () => {
    assert.isTrue(eqArrays(["hi", "hi", "hee"], ["hi", "hi", "hee"]));
  });
  it('should return false given two different arrays of numbers', () => {
    assert.isFalse(eqArrays([5, 4, 3, 2, 1], [5, 4, 7, 8, 9]));
  });
});
