// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements. 

function RemoveDuplicates(arr){
    
    let uniqueElementSet = [...new Set(arr)]

    return uniqueElementSet
    
}

let arr = [11, 21, 31, 11, 55, 55, 23, 54]

const x = RemoveDuplicates(arr)
console.log(x)
