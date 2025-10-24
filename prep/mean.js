const items = [4.6, 5.03, 7.99, 8.01];
console.log(items[0]);

function calculateMean(list) {
  let total = 0;
  for (const items of list) {
    total += items;
    console.log(total);
  }
  console.log(calculateMean(items));
}
