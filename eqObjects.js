const eqArrays = require('./eqArrays');

const eqObjects = (o1, o2) => {
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    console.log(`Object.keys(o1).length !== Object.keys(o2)`);
    return false;
  }
  for (let key in o1) {
    // handles if element is an object
    if (typeof o1[key] === 'object') {
      console.log(`Object.isObject(o1[key])`);
      if (!eqObjects(o1[key], o2[key])) {
        return false;
      }
    }else if (Array.isArray(o1[key])) {
      console.log(`Array.isArray(o1[key])`);
      if (!eqArrays(o1[key], o2[key])) {
        return false;
      }
    } else if (o1[key] !== o2[key]) {
      console.log(`o1[key] !== o2[key] ||| ${o1[key], o2[key]} `);
      return false;
    }
  }
  return true;
};


module.exports = eqObjects;


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(eqObjects({a: {b: {c: {z: 5}, d: {e: 10}}, f: 8, g: 9}, h: 7}, {a: {b: {c: {z: 5}, d: {e: 10}}, f: 8, g: 9}, h: 7})); // => true