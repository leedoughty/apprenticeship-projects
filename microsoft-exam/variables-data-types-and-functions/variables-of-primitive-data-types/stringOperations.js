// string operations

var sentence = "Hello World";

console.log(sentence.length);

console.log(sentence.indexOf("World"));

console.log(sentence.toLowerCase());

console.log(sentence.toUpperCase());

console.log(sentence.charAt(1));

console.log(sentence[6]);

const arrayOfTheWholeString = sentence.split();
console.log(arrayOfTheWholeString);

const arrayOfLetters = sentence.split("");
console.log(arrayOfLetters);

const arrayOfWords = sentence.split(" ");
console.log(arrayOfWords);

//

let fruits = "blueberry, banana, orange";

console.log(fruits.slice(11, 17));

console.log(fruits.substring(11, 17));
