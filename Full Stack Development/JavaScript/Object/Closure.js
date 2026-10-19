function Account(){
    let Balance=1000;
function Deposit(amount){
    Balance=Balance+amount;
    console.log("BalanceAmount :" +Balance);
}
return Deposit;
}
const MyAccount=Account();
MyAccount(500);
MyAccount(700);