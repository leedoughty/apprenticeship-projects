// type checking functions

function checkNumber(entry) {
  if (Number.isNaN(parseInt(entry))) {
    console.log("not a number!");
  } else {
    console.log(entry);
  }
}

checkNumber("hello");
