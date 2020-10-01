function makeGreeting(greeting = "") {
  const myGreeting = greeting.toUpperCase();
  return function (name) {
    return `${myGreeting} ${name}`;
  };
}

const sayHello = makeGreeting("hello");
const sayHowdy = makeGreeting("howdy");
const sayGoodDay = makeGreeting("good day");

console.log(sayHello("lee"));
console.log(sayHowdy("lee"));
console.log(sayGoodDay("mate"));
