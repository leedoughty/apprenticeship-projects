// naming conventions

// javascript function and variable names can start with:
// any letter
// $
// _

// they cannot start with a number but may include a number

let $variableStartingWithDollar = "dollar variable";
console.log($variableStartingWithDollar);

let _variableStartingWithAnUnderscore = "underscore variable";
console.log(_variableStartingWithAnUnderscore);

let variableConta1n1ngNumbers42 =
  "a variable containing numbers is fine as long as the name does not start with a number";
console.log(variableConta1n1ngNumbers42);

function $dollarFunction() {
  console.log("dollar function");
}

$dollarFunction();

function _underscoreFunction() {
  console.log("underscore function");
}

_underscoreFunction();

function functionContainingNumbers42() {
  console.log(
    "a function containing numbers is fine as long as the name does not start with a number"
  );
}

functionContainingNumbers42();
