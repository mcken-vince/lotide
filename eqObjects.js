const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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



assertEqual(eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}), true);
assertEqual(eqObjects({hi: "there", my: "name", is: "Vincent"}, {hi: "there", my: "name", is: "Vincent"}), true);
assertEqual(eqObjects({a: 6, b: 7, c: 9}, {a: 6, b: 1, c: 9}), false);
assertEqual(eqObjects({yo: "ya", be: "baa", yes: "no"}, {this: "that", hit: "pat", joe: "doe"}), false);

console.log("-----------------");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
