const eqArrays = (a1, a2) => {
  // if different lengths
  if (a1.length !== a2.length) {
    return false;
  }
  for (let x in a1) {
    // if item is an array
    if (Array.isArray(a1[x])) {
      if (!eqArrays(a1[x], a2[x])) {
        return false;
      }
    } else if (a1[x] !== a2[x]) {
      return false;
    }
  }
  return true;
};





// const eqArrays = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     for (let x = 0; x < arr1.length; x++) {
//       if (Array.isArray(arr1[x])) {
//         return eqArrays(arr1[x], arr2[x]);
//       }
//       if (arr1[x] !== arr2[x]) {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
//   return true;
// };

module.exports = eqArrays;

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false