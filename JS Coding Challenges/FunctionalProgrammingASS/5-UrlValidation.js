// Write a program using a regex that matches valid URLs. Valid URLs should start with either 
//      http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not



// Valid Url : https://one or more letter digits special char.moreletter

let ValidUrl = "^(https:\/.|http:\/.)[a-zA-Z0-9\-_$]+[a-zA-Z]{2-5}$ "
let givenURL = "https://mohnishgorana123@.com"


let flag = 'gi'
let regex = new RegExp(ValidUrl,flag);

const result = regex.test(givenURL)
console.log(result);