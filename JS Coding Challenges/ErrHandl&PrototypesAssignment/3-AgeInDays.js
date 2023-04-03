//                                      Age In Days

// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.


// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."


// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

let person = {
    firstName : "Mohnish",
    lastName : "Gorana",
    ageInYears: 22
}
console.log(person);

// const todayDate = new Date();
// console.log(todayDate);


function ageInDays(person, callback){
    const fullName = person.firstName +" " + person.lastName
    const todayDate = new Date();
    let ageInDays = person.ageInYears * 365 

    let msg = "Persons Full Name is " + fullName + " and their age in days is " + ageInDays;
    
    logFun(msg);

}
function logFun(msg){
    console.log(msg);
}
ageInDays(person, logFun)
