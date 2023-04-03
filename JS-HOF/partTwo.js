//map 
let arr = [2, 3, 4]
arr.map(function(element, index, arr){
    console.log(element, index, arr);
})
const heros = ["mohnish" ,"mohit" , "harshit", ];
heros.map( (h) => console.log( h.toUpperCase() ) )

//filter 
console.log(heros);
const herosWith_it = heros.filter( (h) => {
    return h.endsWith("it");
})
console.log(herosWith_it);

// shopping card // REDUCE
const cartBill = [20, 30, 50]

const sumOfCartBill = cartBill.reduce( (prev, curr) => prev + curr , 0 )
console.log(sumOfCartBill);

// every fn for checkng similar values
const gameScore = [200 , 300, 310, 250, 150, "Mohnish"]
const gameScoreCheck = gameScore.every( (v) => typeof v === 'number')
console.log(gameScoreCheck);

// find score above 200 // find method // jo bhi first value cndtn satify krgi vo ye le lega
const score = [200, 400, 500, 600]
const above200 = score.find( (s) =>  s > 200)
console.log(above200);

//findindex : The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
//            If no elements satisfy the testing function, -1 is returned.
const amount = [1000, 1500, 2500, 3000]
const amountAbove2000 = amount.findIndex( (a) =>  a > 2000 )
console.log(amountAbove2000);


//some : The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
//       It returns true if, in the array, it finds an element for which the provided function returns true;
//       otherwise it returns false. It doesn't modify the array.

const OddAmount = amount.some( (amt) => (amt % 2) != 0 )
console.log(OddAmount);


//sort: The sort() method sorts the elements of an array in place and returns the reference to the same array,now sorted.
//      The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const rollNo = [1,25,19,100];
const result = rollNo.sort();
console.log(result)