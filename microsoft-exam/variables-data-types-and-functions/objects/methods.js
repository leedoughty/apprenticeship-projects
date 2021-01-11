// methods

const person = {
  firstName: "Lee",
  lastName: "Doughty",
  age: 25,
  cool: true,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

// Object.keys

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
