// Arrays 

let a= [1,2,3,4,false,"Mohnish"]
console.log(a);

let b = new Array("5");
console.log(b);

/*
    array ->     [11,12,551,78,23]
    position->    0  1  2   3   4    0 based indedxing in js 
    last
*/

console.log("Last Element in a " +  a[a.length-1] )


// Array methods
let arr = [1,2,3,4,5,6];
arr.push(6); // add at last
console.log("Array " + arr);
arr.pop(); // remove last
console.log(arr);
arr.shift() //remove 0th index
console.log(arr);

arr.unshift(9) //insert at begin
console.log(arr);

console.log("Concat")
let a1 = [1,2,3,4,5];
let a2=[3,4,5,56];
let a3 = a1.concat(a2) // a1 then a2
console.log("Array 3- " + a3 );

let s = a3.join(" @ ");
console.log(s);

console.log("Reverse of a3 -> " + a3.reverse() )

let arr1= [1,2,3,4,5,6,7];
console.log(" start after index 2 and end to before 5  -> "+arr1.slice(2,5));

let arr2=[55,11,22,33,88,99]
arr2.splice(2,3,5) // add after 2index and delete 3 elemnt then isnert 5 into it
console.log("Adding one into mid of arr " ,arr2)