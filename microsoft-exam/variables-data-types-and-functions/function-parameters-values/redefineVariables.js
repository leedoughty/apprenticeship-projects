// redefine variables

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
  let cool = true;
  const cool = true;
}

// var cool = 1;

// if (1 === 1) {
//   var cool = true;
//   // let cool = true;
//   // const cool = true;
// }

console.log("cool?", cool);
// 1
