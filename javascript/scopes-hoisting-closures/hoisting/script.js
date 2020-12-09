// function declarations and variable declarations are hoisted
console.log(age);
var age = 25;

sayHi();

function sayHi() {
  console.log("hey!");
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}
