// console.log(typeof [1,2,3,4]);  // =>        object

const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat(twoArray);

// const threeArray = [oneArray, twoArray];  wrong approch

const threeArray = [...oneArray, ...twoArray]  // three dot approach i.e spread operator 
console.log(threeArray);

//spread operator is used for spreading its values

// ++++++++++++++++++++++++++++++++++

function manyArguments(){
    let args = Array.from(arguments) // arguments diye or unko arr me convert kra fir arr args me assign kiya
    let finalArr = args.map( e => e  ) //us array pe operation lagaya or finalArr me assign kiya
    console.log(finalArr);
}
manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)


// REST operator L apki array kis values ko pack krta ek array ke andar
console.log("\nRest Operator");

function manyArguments2(...args){           // yaha humne ...args se arguments to args me store krwa diya direct 
    console.log(typeof args)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}
manyArguments2(1,2,3)
manyArguments2(1,2,3,4,5,6,7)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
//eg 
const names = ["superman","flash"]
const newNames = ["Batman",...names,"thor"]
console.log(newNames);

const sitname = "mohnish"
console.log( [...sitname] ) // spread not rest

function pwskills(...values){  // rest 
    return values;
}
console.log(pwskills("superman", "flash"));


//    ARRAY DESTRUCTURE MEANS USE SPREAD OPERATOR


