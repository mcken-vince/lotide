const flatten = (array) => {
  const flattenedArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, 5, 2, 3, [7, 8, 9, [1, 2, 3], 6], [9, 8, 4], 2]));