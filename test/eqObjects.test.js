const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('should return true given two identical objects', () => {
    assert.isTrue(eqObjects({a: 1, b: 2, c: 3}, {b: 2, a: 1, c: 3}));
  });
  it('should return false given two objects with same values and different keys', () => {
    assert.isFalse(eqObjects({x: 1, y: 2, z: 3}, {a: 1, b: 2, c: 3}));
  });
  it('should return true given two identical objects with nested objects as values', () => {
    assert.isTrue((eqObjects({a: {b: {c: {z: 5}, d: {e: 10}}, f: 8, g: 9}, h: 7}, {a: {b: {c: {z: 5}, d: {e: 10}}, f: 8, g: 9}, h: 7})));
  });
});
