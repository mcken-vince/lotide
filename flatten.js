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
