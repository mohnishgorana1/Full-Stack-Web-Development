let emptySet = new Set()
console.log(emptySet.size);

let myArray = [1,2,3,4,3,2]     // same values bhi array me 
let newSet = new Set(myArray) // unique values hi store hogi
console.log(newSet);

let myArray1 = [1,2,3,4,3,2] 
let newSet1 = new Set([...myArray1]) // spread 
console.log(newSet1);

newSet.add(9)
console.log(newSet);
console.log(newSet.has(1));

// newSet.clear()
console.log(newSet);

//  Set difference 

let s1 = new Set( [1,2,3,4,5] )
let s2 = new Set( [1,2,5,6,8] )

console.log(setDiff(s1, s2));

function setDiff(setA, setB){
    return new mySet( [...s1].filter( el => !s2.has(el) ) )
}

