// null

// null represents the intentional absense of any object value

var aNullVariable = null;
console.log(aNullVariable);

// typeof null is an object, however null is a type

console.log(typeof null);

//

function getVowels(str) {
  const match = str.match(/[aeiou]/gi);
  if (match === null) {
    return 0;
  }
  return match.length;
}

console.log(getVowels("sky"));
