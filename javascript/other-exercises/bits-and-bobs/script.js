// "use strict";

//
// Operator Precedence
// ...++
// ...--
// !
// ++...
// --...
// *
// /
// %
// +
// -
// <
// >
// <=
// >=
// ==
// !=
// ===
// &&
// ||

//

// // postfix increment
// let x = 3;
// y = x++;
// console.log({ x, y });

// // prefix increment
// let a = 2;
// b = ++a;
// console.log({ a, b });

// Prefix increment
let prefix = 1;
console.log(++prefix); // 2
console.log(prefix); // 2

// Postfix increment
let postfix = 1;
console.log(postfix++); // 1
console.log(postfix); // 2

//

// JavaScript function names can start with:
// any letter
// $
// _

// in regular expression form: [a-zA-Z_$][0-9a-zA-Z_$]*.
// In other words, the first character can be a letter or _ or $,
// and the other characters can be letters or _ or $ or numbers.

// They CANNOT start with a number, but may include a number

//

// Variables follow the same rules as functions

//

function foo(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

// foo(1, 2, 3, 4, 5);

// 1
// 2
// 3

//

foo(1, 2);

// 1
// 2
// undefined

//

// ("use strict");
// Helps with writing more secure JavaScript
undeclaredVariable = "hello";
console.log(undeclaredVariable);

function strictFunction() {
  "use strict";
  //   x = 3;
  console.log("hi");
}

strictFunction();
// Using strict mode, don’t allow the use of a variable without declaring it.
// Eliminates silent errors, throws errors instead
// More efficient, as you're not allowed to use less efficent (can't use ==)

//

// scoping

// var - function scoped
// let, const - block scoped

// var variables can be updated and re-declared within its scope;
// let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared.

// function isCool(name) {
//   let cool;
//   if (name === "lee") {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// isCool("lee");
// console.log(cool);

let cool = 1;

if (1 === 1) {
  cool = true;
  //   let cool = true;
  //   const cool = true;
}

// var cool = 1;

// if (1 === 1) {
//   var cool = true;
//   //   let cool = true;
//   //   const cool = true;
// }

console.log("cool?", cool);
// 1

//

// alert("Hello, this is an alert");
// no return value

// confirm("Hello, this is a confirm");
// true (if the user clicks "OK");
// false (if the user clicks "Cancel");

// prompt("Hello, this is a prompt");
// input value (if the user clicks "OK");
// null (if the user clicks "cancel");
