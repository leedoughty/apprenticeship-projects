const toppings = [
  "Mushrooms ",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Chiles",
  "Bacon",
  "Pickles",
  "Onions",
  "Cheese",
];

const buns = ["egg", "wonder", "brioche"];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: "I DONT LIKE BURGERS", rating: 1 },
];

// static methods
// live on the Array
// whereas instance methods live on the prototype

// static methods

// Array.of("lee", "mars");

// Array.from();
function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, (item, index) => {
    return index + start;
  });
  return range;
}

const myRange = createRange(20, 100);

console.log(Array.isArray(myRange));
console.log(typeof myRange);

// Static object method
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.values(meats).forEach((qty) => {
  console.log(qty);
});

// Object.entries(meats).forEach((entry) => {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(key, value);
// });

// Object.entries(meats).forEach((entry) => {
//   const [key, value] = entry;
//   console.log(key, value);
// });

Object.entries(meats).forEach(([meat, qty]) => {
  console.log(meat, qty);
});
