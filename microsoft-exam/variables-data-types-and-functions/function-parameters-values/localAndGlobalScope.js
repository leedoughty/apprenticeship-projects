// local and global scope

// global variable (the window)

const first = "lee";
let second = "doughty";
// var is attached to the window object
var age = 25;

// function is attached to the window object
function sayHi() {
  console.log("hi!");
}

// function scope

const age = 100;

function go() {
  // const age = 200;
  const hair = "blonde";
  console.log(age);
  console.log(hair);
}

go();

console.log(age);
console.log(hair);

// block scope

let cool;

if (1 === 1) {
  // var cool = true;
  // let cool = true;
  cool = true;
  // const cool = true;
}

console.log(cool);

// function scope

function isCool(name) {
  let cool;
  if (name === "lee") {
    cool = true;
  }
  console.log(cool);
  return cool;
}

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const dog = "round boi";

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = "shiba";
  logDog("rufus");
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}
