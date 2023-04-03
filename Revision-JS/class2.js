
let obj = {
    name: "Mohnish",
    course: "FSWD",
    duration: 2
}
for (const i in obj) {   // i denotes keys
    console.log(`${i} : ${obj[i]} `);

}


let price = {
    a: 100,
    b: 200,
    c: 300
}
for (const key in price) {
    price[key] = price[key] * 10
}
console.log(price);
console.log("\n\n");


let arr = [100,200,300,400,500]
for (const itr of arr) {
    console.log(itr);
}


