// add and subtract dates

// let date = new Date();

// let tenDaysFromNow = date.setDate(date.getDate() + 10);
// console.log(new Date(tenDaysFromNow));

function adjustMonth(value) {
  var date = new Date();
  var month = date.getMonth();
  date.setMonth(month + value);
  return date;
}

console.log(adjustMonth(3));
