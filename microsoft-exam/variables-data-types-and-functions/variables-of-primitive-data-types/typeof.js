// typeof

// string
const stringExample = "hello!";

console.log(typeof stringExample);

// number
const firstNum = 42;
const secondNum = 100;

console.log(typeof firstNum);

// boolean
const booleanExample = true;

console.log(typeof booleanExample);

// null - this returns "object" because the spec says so, widely regarded as a mistake
// null is still a type
const nullExample = null;

console.log(typeof nullExample);

// undefined
const undefinedExample = undefined;

console.log(typeof undefinedExample);

// object
const objectExample = {
  firstKey: "first value",
  secondKey: "second value",
};

console.log(typeof objectExample);

// string
const foo = typeof 5;
console.log(typeof foo);
