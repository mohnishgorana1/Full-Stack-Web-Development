userdetails = { name :"Mohnish" ,balance : 2000 }

let deposit = 1000
let withdrawal = 500

const updateBalance = (user,deposit,withdrawal) => {
    user.balance += deposit - withdrawal
}
updateBalance(userdetails,deposit,withdrawal);

console.log(userdetails)