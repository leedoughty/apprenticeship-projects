// multi dimensional arrays

let activities = [
  ["Eat", 1],
  ["Sleep", 7],
  ["Code", 8],
  ["Practice Japanese", 2],
  ["Meditate", 1],
];

console.log(activities[2][1]);

activities.push(["exercise", 1]);

console.log(activities);

activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data);
  });
});
