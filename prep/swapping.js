// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray); // logs [1, 2, 3, 4, 5]
