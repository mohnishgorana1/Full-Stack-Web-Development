IncorrectCart = {
    "a" : 10,
    "b" : 20,
    "c" : 30
}

let CorrectCart = []
CorrectCart.push(IncorrectCart)

CorrectCart.map(e => {
    console.log(e);
    for(var i in e){
        // console.log(e[i]);
        e[i] *= 2
        console.log(e[i]);
    }

})
console.log(CorrectCart);

