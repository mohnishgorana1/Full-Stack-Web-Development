let cart = [
    { unitPrice : 100, quantity : 1 }, // Rice
    { unitPrice : 200, quantity : 3 }, // Wheat
    { unitPrice : 400, quantity : 2 }  // Pulses
]




const Cost = (cart)  => {
    var totalCost = 0;
    for (var i in cart){
        totalCost += cart[i].unitPrice * cart[i].quantity
    }
    console.log(totalCost);
}
Cost(cart);

