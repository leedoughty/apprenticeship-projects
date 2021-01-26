// for

var numbers = [];

for (var i = 0; i < 10; i++) {
  numbers.push(Math.round(Math.abs(Math.random() * 10)));
}

var sum = 0;

for (var j = 0; j < 10; j = j + 2) {
  sum += numbers[j];
}

console.log(sum);
