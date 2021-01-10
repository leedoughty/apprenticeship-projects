// value versus reference

var arrRef = ["Hi!"];
var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // true

var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2); // false
