// Can you fix this code?
function doubleAllNumbers(numbers) {
  let doubledNumbers = [];

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

const oldArray = [10, 20, 30];
const newArray = doubleAllNumbers(oldArray);
console.log(newArray); // Should log [20, 40, 60]
