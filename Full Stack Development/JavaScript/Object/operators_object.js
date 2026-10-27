//Nullish Coalesing

const username=null;
const age=0;
const city=undefined;

console.log(username ?? "Guest");
console.log(age ?? 18);
console.log(city ?? "Chaennai");

//optional chaining

const user={
    name:"anu",
    address:{city:"chennai"}
};
console.log(user.phone);
console.log(user.address.city);
console.log(user.name);

// || and ??

console.log(0 || 100);
console.log(0 ?? 100);

console.log(false || true);
console.log(false ?? true);

console.log("" || "Guest");
console.log("" ?? "Guest");