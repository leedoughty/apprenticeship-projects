// localize date format

const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("de-DE", options));

//

console.log(date);
console.log(date.toLocaleString());
