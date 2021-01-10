// iteration

// forEach

let numbers = [3, 42, 100, 99];

numbers.forEach((number) => {
  console.log(number);
});

// map

let numbers2 = [33, 42, 100, 2021, 10000];

let doubleNumbers = numbers2.map((num) => {
  return num * 2;
});

console.log(doubleNumbers);

//

let numbersMoreThanAThousand = numbers2.filter((num) => {
  return num > 1000;
});

console.log(numbersMoreThanAThousand);
