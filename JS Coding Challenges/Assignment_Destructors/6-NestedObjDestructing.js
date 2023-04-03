// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties.
const Person = {
    name: "Mohnish", //
    age: 21,
    address: {
        street: "10 Pratap Marg", // 
        city: "Neemuch",
        state: "Madhya Pradesh"
    }
}

function find(Person){
    const { name , address: {street} } = Person
    return { name, street}
}
console.log( find(Person) )