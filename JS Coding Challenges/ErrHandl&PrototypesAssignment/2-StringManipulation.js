// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along
// with the manipulated string or the new string to the console.

//                              Expected Output
//              manipulateString("hello, world!", logString)
//              The manipulatd string is : HELLO, WORLD

let str = "Hello World"
console.log("Original String: ",str);

function manipulateString(str, callback){
    
    let str1 = str.toUpperCase();
    // console.log(str1);
    logString(str1);
}
function logString(str1){
    console.log(`The manipulated String is: ${str1}`);
}
manipulateString(str, logString)