function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    const median =
      (list.slice(middleIndex)[0] + list.slice(middleIndex - 1)[0]) / 2;
    return median;
  } else {
    const median = list.slice(middleIndex)[0];
    return median;
  }
}
console.log(calculateMedian([10, 20, 30, 50, 60]));
