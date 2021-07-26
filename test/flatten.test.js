// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, 5, 2, 3, [7, 8, 9, [1, 2, 3], 6], [9, 8, 4], 2]));

const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('flattens one layer of sub-arrays', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('flattens only one layer of arrays', () => {
    assert.deepEqual(flatten([1, 5, 2, 3, [7, 8, 9, [1, 2, 3], 6], [9, 8, 4], 2]), [1, 5, 2, 3, 7, 8, 9, [1, 2, 3], 6, 9, 8, 4, 2]);
  });
});
