function addOne(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    arrayOfNumbers[i]++;
  }
  //   console.log(arrayOfNumbers);
}

addOne([5, 8, 2, 3, 6]);

//

function addFullTitle(providedNames) {
  for (name of providedNames) {
    name.fullTitle = `${name.title} ${name.firstName} ${name.lastName}`;
    // console.log(name);
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
  while (index < providedBallArray.length) {
    if (providedBallArray[index]["colour"] === "red") {
      redArray.unshift(providedBallArray[index]);
    } else if (providedBallArray[index]["colour"] === "green") {
      greenArray.push(providedBallArray[index]);
    }
    index += 1;
  }
  let sortedArray = [...redArray, ...greenArray];
  //   console.log(sortedArray);
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
    if (providedBallArray[index]["number"] === 2) {
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
  console.log(sortedArray);
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
