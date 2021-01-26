// properties

function change(student, course) {
  student = "JavaScript Student";
  course.name = "JavaScript";
  course.grade = 100;
}

var sampleCourse = { name: "HTML", grade: 90 };
var sampleStudent = "HTML Student";

change(sampleStudent, sampleCourse);
console.log(sampleStudent, sampleCourse.name, sampleCourse.grade);
