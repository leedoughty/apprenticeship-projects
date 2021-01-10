// reusable code

function generateRandomNumberBetweenOneAndProvidedNumber(providedNumber) {
  return Math.floor(Math.random() * providedNumber + 1);
}

console.log(generateRandomNumberBetweenOneAndProvidedNumber(5));
console.log(generateRandomNumberBetweenOneAndProvidedNumber(100));
console.log(generateRandomNumberBetweenOneAndProvidedNumber(10000));
