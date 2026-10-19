const students=["Priya" , "Arun" ,"Dhivya" ,"Rahul" , "Sneha"];

//  Print the first and last student names
console.log(students[0]);
console.log(students[students.length - 1]);

// Add "Karthik" to the end of the array
students.push("Karthik");
console.log(students);

// Remove the last student
students.pop();
console.log(students);

//Slice Create a new array containing Arun and Divya
const selectedStudents = students.slice(1, 3);
console.log(selectedStudents);

// Splice: Remove "Divya" from the original array
students.splice(2, 1);
console.log(students);

//Includes: Check whether "Priya" exists
console.log(students.includes("Priya")); 

//Filter , map ,  reduce

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2000 }
];

const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);


