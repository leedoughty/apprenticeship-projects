// constants

const number = 42;
console.log(number);

// the const keyword makes a variable itself immutable, not its assigned content

const person = {
  firstName: "Lee",
  lastName: "Doughty",
  age: 25,
};

person.firstName = "John";
console.log(person);

// const with arrays

const things = ["saucepan", "pencil", "sofa"];
things.push("bin");

// const is block scoped

const number = 42;

function changeNumber() {
  number = 100;
}

changeNumber();
console.log(number);

//

// const variables cannot be updated

// const key = "xyz123";
// key = "abc456"; // throws an error

// const needs to be initialized

// const something;
// console.log(something); // throws an error
