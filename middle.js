const middle = (array) => {
  let mid;

  const isEven = (array) => {
    if (array.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  if (array.length > 2) {
    if (isEven(array)) {
      mid = [array.length / 2 - 1, array.length / 2];
      return [array[mid[0]], array[mid[1]]];
    } else {
      mid = Math.floor(array.length / 2);
      return [array[mid]];
    }
  } else {
    return [];
  }
};

module.exports = middle;
