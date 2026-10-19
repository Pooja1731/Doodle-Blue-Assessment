//spread with object

const orginal={
    name:"Priya",
    age: 21
};

const updated={
    ...orginal,
    age:22,
    city: "chennai"
};

console.log(orginal);
console.log(updated);

//spread with combined object
const personal={
    name:"Arun",
    age:21
};

const profession={
    role:"Developer",
    company:"ABC Tech"
};

const profile={
    ...personal,
    ...profession
};

console.log(profile);