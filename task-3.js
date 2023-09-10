const students = [
  {
    name: "nikita",
    age: 31,
    rate: 28,
  },
  {
    name: "olga",
    age: 10,
    rate: 80,
  },
  {
    name: "ludmila",
    age: 18,
    rate: 78,
  },
  {
    name: "yulia",
    age: 22,
    rate: 30,
  },
];
function greetings(student) {
  console.log(`Hello, ${student.name}`);
}

students.map((student) => greetings(student));

const studentRate = students.filter((student) => student.rate > 60);

console.table(studentRate);

function addRating(increaseRating) {
  students.forEach((student) => {
    return (student.rate += increaseRating);
  });
}
addRating(3);
console.table(students);
