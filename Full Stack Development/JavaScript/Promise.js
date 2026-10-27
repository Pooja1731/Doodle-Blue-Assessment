/*
const mypromise=new Promise((resolve,reject)=>{
    const marks=63;
    if (marks>=50){
        resolve("You are pass");
    }
    else{
        reject("You are fail");
    }
});
mypromise
    .then((result)=>console.log(result))
    .catch((error)=>console.log(error.message))
    .finally(()=>console.log("completed"));

*/

const mypromise=new Promise((resolve,reject)=>{
    const Payment=false;
    if (Payment==true){
        resolve("Payment successful");
    }
    else{
        reject("Payment failed");
    }
});
mypromise
    .then((result)=>console.log(result))
    .catch((error) => console.log(error))
    .finally(()=>console.log("completed"));
