// Can you fix this code?
function doubleAllNumbers(numbers) {
  let doubledNumbers = [];

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

const numbers = [10, 20, 30];
const result = doubleAllNumbers(numbers);
console.log(result); // Should log [20, 40, 60]
