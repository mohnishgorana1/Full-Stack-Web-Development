// 5. Greeting Promise.

// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".


// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

async function Greeting(myName) {
    let msg = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(`Hello ${myName}`)  
        },0000)
        
    })
    return `Hello ${myName}`
    
}
let greetMsg = Greeting("Mohnish")
greetMsg.then( (value) => {
    console.log(value);
})