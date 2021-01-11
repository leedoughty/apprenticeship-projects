// date object

// There are 4 ways to create a new date object:

console.log("Today: ", new Date());

console.log("My Birthday: ", new Date(1995, 5, 3, 11, 30, 00, 0));

console.log("Some date in the far future: ", new Date(20140194019988));

console.log("My Birthday again: ", new Date("June 3, 1995 11:30:00"));

// Date.now() returns the milliseconds since epoch time

console.log(Date.now());

// Date.parse()

const unixTimeZero = Date.parse("01 Jan 1970 00:00:00 GMT");
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);

console.log(javaScriptRelease);
