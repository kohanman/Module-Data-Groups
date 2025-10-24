function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}

function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
  return total / list.length;
}

const salaries = [10, 20, 30, 40, 60, 80, 80];
console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);
const median = calculateMedian(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
