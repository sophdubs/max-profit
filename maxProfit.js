const maxProfit = function(arr) {
  let max = 0;
  let min = Number.POSITIVE_INFINITY;

  for(let num of arr) {
    if (num < min) {
      min = num;
    } else {
      max = Math.max(max, num - min);
    }
  }
  return max === 0 ? -1 : max;
};

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maxProfit([45, 35, 31, 11, 9, 2]));