// if (10 > 2) {
//   console.log("10 > 2 is the condition");
// } else if (11 > 10) {
//   console.log("yep");
// } else if (3 > 1) {
//   console.log(
//     "this will never run as soon as an if statement finds itself to be true, it will skip the rest of the if's"
//   );
// }

//

// if (10 > 2) {
//   console.log("if you want multiple conditions");
// }

// if (11 > 10) {
//   console.log("you need multiple if statements");
// }

// if (3 > 1) {
//   console.log("yep");
// }

//

// const age = 50;
// if (age > 70) {
//   console.log("in your seventies");
// } else if (age > 50) {
//   console.log("in your 50s");
// } else {
//   console.log("nothing was true");
// }

//

// function slugify(sentence, lowercase) {
//   if (lowercase) {
//     return sentence.replace(/\s/g, "-").toLowerCase();
//   } else {
//     return sentence.replace(/\s/g, "-");
//   }
// }

//

// function slugify(sentence, lowercase) {
//   if (lowercase) {
//     return sentence.replace(/\s/g, "-").toLowerCase();
//   }
//   return sentence.replace(/\s/g, "-");
// }

//

function slugify(sentence, lowercase) {
  let slug = sentence.replace(/\s/g, "-");
  if (lowercase) {
    return slug.toLowerCase();
  }
  return slug;
}

//

// const age = 100;
// age === 100;

// const name = "lee";

//

const name = "lee";

if (name === "lee" || name === "stephen") {
  console.log("cool name");
}

//

console.log(true && true && true && true);
console.log(true && true && false && true);
console.log(true || true || false || true);

//

const isAwesomeName = "awesome".includes(name);

if (isAwesomeName) {
  console.log("super cool awesome name");
}

function nameIsAwesome(name) {
  return "awesome".includes(name);
}

const dog = "";

if (dog) {
  console.log("you have a dog");
} else {
  console.log("you dont have a dog");
}

//

const values = [
  [],
  {},
  -10,
  1,
  0,
  "",
  "full string",
  " ",
  undefined,
  NaN,
  null,
];

console.group("Truthy or false values");

values.forEach((value) => {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
});

console.groupEnd();
