function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
  return total / list.length;
}
console.log(calculateMean([10, 20, 30, 40, 50]));
