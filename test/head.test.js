const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 5 for array with a single element [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it ("returns undefined for empty array []", () => {
    assert.isUndefined(head([]));
  });
});
