const students=[
    {id:1,name:'Aman',marks:85,attendance:92},
    {id:2,name:'Riya',marks:38,attendance:76},
    {id:3,name:'Karan',marks:67,attendance:81},
    {id:4,name:'Simran',marks:91,attendance:88},
    {id:5,name:'Raj',marks:45,attendance:60},
    {id:6,name:'Neha',marks:29,attendance:95}
];

const passedStudents=students.filter(student=>student.marks>=40);

const studentReport=students.map(({name,marks,attendance})=>{
  let grade;

  if (marks >= 80) grade = "A";
  else if (marks >= 60) grade = "B";
  else if (marks >= 40) grade = "C";
  else grade = "F";
  return {name,marks,attendance,grade};
});

const averageMarks=students.reduce((sum,student)=>sum+student.marks,0)
students.length;
const topper=students.reduce((best,student)=>student.marks>best.marks?student:best);



console.log("PASSED STUDENTS");
passedStudents.forEach(({ name,marks})=>{console.log(`${name}-${marks}marks`);
});

console.log("\nSTUDENT REPORT");
studentReport.forEach(({name,marks,attendance,grade})=>
 {
console.log(
`Name: ${name}, Marks: ${marks},Attendance:${attendance}%,Grade:${grade}`);
});


console.log(`\nClass Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Topper: ${topper.name} - ${topper.marks} marks`);
