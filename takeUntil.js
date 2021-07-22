const takeUntil = (array, callback) => {
  const result = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }

  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [100, 20, 30, 40, 550, 60, 70];
const results3 = takeUntil(data3, x => x > 100);
console.log(results3);
