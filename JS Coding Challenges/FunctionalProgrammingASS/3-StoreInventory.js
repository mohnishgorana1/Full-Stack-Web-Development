// +++++++++     Build a feature for Store's Inventory.   +++++++

// Suppose a store has a list of items and their prices in US Dollars stored as an object. 
//Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. 
//The program should use the map higher-order function to create a new object with the converted prices in Rupees.


Items = {
    Milk : 10,
    Jam : 20,
    Pulses : 30,
    Flour : 15
}
let IterableItems =[];
IterableItems.push(Items)
console.log(IterableItems);

IterableItems.map( (e) => {
    for(var i in e){
        let rupee = e[i]*80;
        console.log(rupee);
    }
} )
