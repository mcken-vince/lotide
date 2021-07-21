const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj2[key] !== obj1[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


const assertObjectsEqual = (obj1, obj2) => {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

assertObjectsEqual({a: 1, b: 2, c: 3}, {b: 2, c: 3, a: 1});
assertObjectsEqual({half: "no", yes: "no", ok: "no"}, {half: "yes", yes: "yes", ok: "yes"});
assertObjectsEqual({a: [1, 2, 3], b: [1, 2, 3], c: 5}, {a: [1, 2, 3], b: [1, 2, 3], c: 5});