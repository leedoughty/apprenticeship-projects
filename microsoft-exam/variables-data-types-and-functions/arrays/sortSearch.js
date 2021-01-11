// sort and search an array

// the default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

// sorting numbers with sort gives unexpected results
const numbers = [1, 42, 3, 21, 10000];
numbers.sort();
console.log(numbers);

// we need to pass a compare function

const newNumbers = [2, 33, 42, 3, 100, 2021];
newNumbers.sort((a, b) => {
  return a - b;
});
console.log(newNumbers);

// find returns the value of the first element in an array that pass a test

const foundFortyTwo = newNumbers.find((element) => element === 42);
console.log(foundFortyTwo);

// reverse

const some = [1, 42, 3, 21, 10000];
console.log(some.reverse());
