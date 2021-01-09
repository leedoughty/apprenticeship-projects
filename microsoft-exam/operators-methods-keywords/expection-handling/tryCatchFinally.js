// try catch finally

// function nonExistentFunction() {
//   console.log("actually it does exist");
// }

try {
  nonExistentFunction();
} catch (error) {
  console.log(error);
} finally {
  console.log("finally!");
}
