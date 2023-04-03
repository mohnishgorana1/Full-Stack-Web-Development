Dishes = { 
        Rasmalai : 50 , 
        Jalebi : 20 ,
        Roti:15,
        Raita:30,
        Sabji:150,
        GulabJamun :60

    }

 

let myOrder = Bill( 5,Dishes.Rasmalai, Dishes.Jalebi, Dishes.Roti, Dishes.Raita, Dishes.Sabji, Dishes.GulabJamun )

function Bill(n,d1,d2,d3,d4,d5,d6){

    let TotalBill = (d1 + d2 + d3 + d4 + d5 + d6) * 5;
    console.log("Total Bill and Cost of Bill Per Person ");
    return {
        _TotalBill : TotalBill,
        _BillPerPerson : (TotalBill) / n
    }
}


console.log(myOrder);