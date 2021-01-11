// switch

function getDiscount(day) {
  var discount = 0;
  switch (day) {
    case "Wednesday":
      discount = 0.1;
      break;
    case "Tuesday":
      discount = 0.05;
      break;
    default:
      discount = 0;
      break;
  }
  return discount;
}

console.log(getDiscount("Wednesday"));
console.log(getDiscount("Tuesday"));
console.log(getDiscount("Monday"));
