// converting data types

console.log(String(123));

console.log(Number(true));
console.log(Number(false));
console.log(Number(NaN));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(""));
console.log(Number(" "));

console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(!!"lee");

console.log("------------");

console.log(parseInt("123"));
console.log(parseInt("123.56"));
console.log(parseFloat("123.56"));

let theMeaningOfLife = 42;
console.log(theMeaningOfLife.toString());

console.log(true);
console.log(true.toString());

console.log("5" + 2);
console.log(5 + "2");

// *, -, / all coerce
console.log("5" - 2);

let a = "7";
let b = "5";

console.log("------------");

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
