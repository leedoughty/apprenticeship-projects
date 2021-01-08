function addOne(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i]++;
  }
  // console.log(arrayOfNumbers);
}

addOne([5, 8, 2, 3, 6]);

//

function addFullTitle(providedNames) {
  for (theName of providedNames) {
    const { title, firstName, lastName } = theName;
    theName.fullTitle = `${title} ${firstName} ${lastName}`;
    // console.log(theName);
  }
}

const names = [
  {
    title: "Mr",
    firstName: "Lee",
    lastName: "Doughty",
  },
  {
    title: "Mrs",
    firstName: "Jane",
    lastName: "Smith",
  },
];

addFullTitle(names);

//

function ballColourSorter(providedBallArray) {
  let redArray = [];
  let greenArray = [];
  let index = 0;
  while (
    index < providedBallArray.length &&
    providedBallArray[index].number % 2 !== 0
  ) {
    if (providedBallArray[index].colour === "red") {
      redArray.unshift(providedBallArray[index]);
    } else if (providedBallArray[index].colour === "green") {
      greenArray.push(providedBallArray[index]);
    }
    index += 1;
  }
  let sortedArray = [...redArray, ...greenArray];
  // console.log(sortedArray);
}

let ballArray = [
  {
    number: 1,
    colour: "green",
  },
  {
    number: 2,
    colour: "red",
  },
  {
    number: 3,
    colour: "green",
  },
  {
    number: 4,
    colour: "green",
  },
  {
    number: 5,
    colour: "red",
  },
  {
    number: 6,
    colour: "green",
  },
];

ballColourSorter(ballArray);

//

function ballColourSorterNoEven(providedBallArray) {
  let redArray = [];
  let greenArray = [];
  let index = 0;
  while (index < providedBallArray.length) {
    if (providedBallArray[index].number % 2 === 0) {
      break;
    }
    if (providedBallArray[index]["colour"] === "red") {
      redArray.push(providedBallArray[index]);
    }
    if (providedBallArray[index]["colour"] === "green") {
      greenArray.push(providedBallArray[index]);
    }
    index += 1;
  }
  let sortedArray = [...redArray, ...greenArray];
  // console.log(sortedArray);
}

let ballArray2 = [
  {
    number: 1,
    colour: "red",
  },
  {
    number: 2,
    colour: "red",
  },
  {
    number: 3,
    colour: "green",
  },
  {
    number: 4,
    colour: "green",
  },
  {
    number: 5,
    colour: "red",
  },
  {
    number: 6,
    colour: "green",
  },
  {
    number: 7,
    colour: "red",
  },
  {
    number: 8,
    colour: "red",
  },
];

ballColourSorterNoEven(ballArray2);

//

const stringExample = "hello!";
// console.log(stringExample);
// console.log(typeof stringExample);
// string

const firstNum = 42;
const secondNum = 100;
// console.log(firstNum + secondNum);
// console.log(typeof firstNum);
// number

const booleanExample = true;
// console.log(booleanExample);
// console.log(typeof booleanExample);
// boolean

const nullExample = null;
// console.log(nullExample);
// console.log(typeof nullExample);
// null

const undefinedExample = undefined;
// console.log(undefinedExample);
// console.log(typeof undefinedExample);
// undefined

const objectExample = {
  firstKey: "first value",
  secondKey: "second value",
};
// console.log(objectExample);
// console.log(typeof objectExample);
// object

const foo = typeof 5;
// string

var i;
for (i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  // console.log("the number is", i);
}

var j;
for (j = 0; j < 10; j++) {
  if (j === 3) {
    continue;
  }
  // console.log("the number is", j);
}

// while
var k = 0;
while (k < 10) {
  // console.log("The number is " + k);
  k++;
}

// console.log("--------");
// do while
var l = 0;
do {
  // console.log("The number is " + l);
  l++;
} while (l < 5);

// -----------

// var numbers = [];
// for (var i = 0; i < 10; i++) {
//   numbers.push(Math.round(Math.abs(Math.random() * 10)));
// }

// var sum = 0;

// for (var j = 0; j < 10; j = j++) {
//   sum += sum[j];
// }
// console.log(sum);

function change(student, course) {
  student = "JavaScript Student";
  course.name = "JavaScript";
  course.grade = 100;
}

var sampleCourse = { name: "HTML", grade: 90 };
var sampleStudent = "HTML Student";

change(sampleStudent, sampleCourse);
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade);
