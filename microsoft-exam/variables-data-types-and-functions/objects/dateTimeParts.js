// retrieve date and time parts

let date = new Date();

// date
// the getFullYear() method returns the year of a date as a four digit number:

console.log(date.getFullYear());

// the getMonth() method returns the month of a date as a number (0-11):
// this is zero-indexed!

console.log(date.getMonth());

// the getDate() method returns the day of a date as a number (1-31):

console.log(date.getDate());

// time
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// the getTime() method returns the number of milliseconds since January 1, 1970:

console.log(date.getTime());
