// value versus reference

var arrRef = ["Hi!"];
var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // true

var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2); // false

// pass something as a string or as an object

console.log("-----------");

// function takes a copy of sampleStudent, it reverts back as its a string
// it's not passing the value, its passing the value

// whereas with an object, you are passing the reference, you can change the properties within the object

// if a variable is passed into a function that is a primitive, it can't be changed
// if you pass an object, the elements within it can be changed

function change(student, course) {
  student = "JavaScript Student";
  course.name = "JavaScript";
  course.grade = 100;
}

var sampleCourse = { name: "HTML", grade: 90 };
var sampleStudent = "HTML Student";

change(sampleStudent, sampleCourse);
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade);

// Find HTML student JavaScript student example

console.log("-----------");

let myString = "lee";
console.log(myString);

function changeString() {
  myString = "heather";
}

changeString();
console.log(myString);

//

console.log("-----------");

let myString2 = "lee";
console.log(myString2);

function changeString2(myString2) {
  myString2 = "heather";
}

changeString2();
console.log(myString2);
