//! +++++++++++++++++  MAP ++++++++++++++

// let map = new Map()
// console.log(map.size);

// // Array to map
// //2d array
// let arr = [
//    [1,"Mohnish"],
//    [2,"Mithun"],
//    [3,"Kapil"],
//    [4,"Ronak"],
//    [5,"Shrasti"]
// ]
// console.log(arr);

// let myMap = arr.map((arrItem) => map.set(arrItem[0], arrItem[1]))
// console.log(myMap[0]);

var myMap = new Map();

myMap.set(1, "Mohnish");
myMap.set(2, "Gorana");
myMap.set(3, "Neemuch");
myMap.set(4, "Student");

console.log(myMap);

for (const key of myMap.keys()) {
   console.log(`key is ${key}`);
}
for (const values of myMap.values()) {
   console.log(`values is ${values}`);
}
for (const [key, value] of myMap) {
   console.log(`key is ${key} and values is ${value}`);
}

myMap.forEach( (key) => console.log(`${key}`) ); // !!!!! not an issue, 
//* foreach design in such a way that it is used to manipulate the values hence the key used here is same as the index hnce it will give value representing that index
//* foreach give always give you value first ↓
myMap.forEach( (v, k) => console.log(`${v} and key is ${k}`) );

