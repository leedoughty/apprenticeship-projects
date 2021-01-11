// type checking functions

// isNaN

function checkNumber(entry) {
  if (Number.isNaN(parseInt(entry))) {
    console.log("not a number!");
  } else {
    console.log(entry);
  }
}

checkNumber("hello");

// Array.isArray?

const animals = ["dog", "cat", "moose"];

console.log(Array.isArray(animals));

const sentence = "hello world";

console.log(Array.isArray(sentence));
