//Object creation , access , update ,delete

const employee={
    name: "Arun",
    salary: 30000
};

console.log(employee.name);
console.log(employee["salary"]);

employee.salary=35000;
console.log(employee.salary);

employee.city="chennai";
delete employee.city;
console.log(employee);