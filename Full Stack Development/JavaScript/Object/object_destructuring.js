//Object Destructuring

const student={
    name: "Priya",
    age: 21,
    course: "React"
};

const {name ,age, course}=student;

console.log(name);
console.log(age);
console.log(course);


//Destructuring Property name rename and default

const user={
    name:"Priya"
};
const {
    name:studentName,
    city="Chennai"
}=user;
console.log(studentName);
console.log(city);