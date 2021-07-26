const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('works for a single word string', () => {
    assert.deepEqual(letterPositions("absolutely"), {a:[0], b:[1], s:[2], o:[3], l:[4,8], u: [5], t:[6], e:[7], y:[9]});
  });
  it("doesn't include spaces", () => {
    assert.deepEqual(letterPositions("a fish called wanda"), {a:[0, 8, 15, 18], f:[2], i:[3], s:[4], h:[5], c:[7], l:[9,10], e:[11], d:[12,17], w:[14], n:[16]});
  });
  it('works on numbers', () => {
    assert.deepEqual(letterPositions('123452'), {1:[0], 2:[1,5], 3:[2], 4:[3], 5:[4]});
  });
});
