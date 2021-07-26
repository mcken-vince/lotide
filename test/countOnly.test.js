const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('returns correct count & does not return items if value is false or if key not in object', () => {
    const firstNames = ["Karl",  "Salima",  "Agouhanna",  "Fang",  "Kavith",  "Jason",  "Salima",  "Fang",  "Joe"];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason:1, Fang: 2});
  });
});
