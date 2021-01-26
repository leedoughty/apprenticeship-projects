// formatting numbers

console.log(Number("123"));
console.log(parseInt("42abc100"));

// rounding to decimal

// instance vs Math
// toFixed
console.log((123.45).toFixed(1));

// toFixed

function significance(value, digits) {
  return value.toFixed(digits);
}

console.log(significance(3.141592, 3));

// toPrecision
function precision(value, digits) {
  return value.toPrecision(digits);
}

console.log(precision(3.141592, 3));
