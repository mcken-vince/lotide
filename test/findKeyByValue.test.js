const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('should return correct key for given value', () => {
    assert.strictEqual(findKeyByValue({a: 1, b: 2, c: 3}, 3), 'c');
  });
  it("should return undefined if key doesn't exist", () => {
    assert.isUndefined(findKeyByValue({a:1, b: 2, c:3}));
  });
});
