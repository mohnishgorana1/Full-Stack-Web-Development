console.log("\n\n\n");
function Product(n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
}
const p = new Product("Iphone", 10000, 5);
console.log(p);

/**
 * 1. this in js is diff than other lang
 * 2 this referrs to the context from where we called
 * 
 * in fn constructor also
 *  - if u return primitive it is ignored and we return the object referred by this
 *  - if you return a custom obj, then the custom obj is returned
 *  - if you dont return anything, then obj referred by this is returned
 */

let x = {
    P : Product
}
x.P("airpods", 2000, 5);
console.log(x);


/**
 *         X ==> P => Product()  :> x ek obj uske andar P ek key h jo product ko hold kregi
 *                               :> 
 * |-------------------------------------
 * |name = airpods
 * |price = 2000
 * |ratings = 5
 * |------------------------------------
 * 
 */
console.log("\n\n\n\n");
const Product2 = function (n, p, r){
  this.name = n;
  this.product = p;
  this.rating = r;
}
const P2 = new Product2("Ipad", 5000, 5)
console.log(P2);

console.log("\n\nMaje tab aenge jab aap arrow fn use kroge\n\n");

// ! Arrow fn ko as a fn constructor use nhi kr skte ho yeh ek limitations h arrow fn ki
// ! Calling context is not applicable with arrow fn 

// const Product3 = (n, p, r) =>{
//   this.name = n;
//   this.product = p;
//   this.rating = r;
// }
// const P3 = new Product3("Macbook", 120000, 5)
// console.log(P3);

// ********************

let obj = {
  x : 10,
  fun(){
    console.log(this.x);
  }
}
obj.fun() // * => output => 10

let obj2 = {
  x : 10,
  fun2: () => {
    console.log(this.x);
  }
}
obj2.fun2() // * => output => undefined But why ↓
//arrow fn ke andar 'this' ka koi bhi reference exist nhi krta h 
// 