// * Double using callback.

// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback

let arr = [1, 2, 3, 4, 5]

let newArr = arr.map(element => {
    return element * 2
});
console.log(newArr);