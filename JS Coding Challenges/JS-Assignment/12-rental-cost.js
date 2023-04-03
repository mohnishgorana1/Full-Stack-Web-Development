// Thq rental costs are
// Economy = Rs. 4000 /- per days
// Midsize = Rs. 10,000 /- per days
// Luxury = Rs. 20,000 /- per days

function Rent(n,car){
    if(car == "Economy"){
        return 4000*n;
    }
    else if(car == "Midsize"){
        return 10000*n;
    }
    else if(car == "Luxury"){
        return 20000*n;
    }
    else{
        return null;
    }
}
cars =  ["Economy", "Midsize","Luxury" ]

console.log(Rent( 15 , cars[0]) )
console.log(Rent( 10 , cars[1]) )
console.log(Rent( 10 , "Luxury"))
console.log(Rent( 15 , cars[3]) )

