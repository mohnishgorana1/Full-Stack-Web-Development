let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman","flash", "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.mohnish = function(){
    console.log(`Mohnish is present in all objects`)
}

console.log(myHeros.mohnish());  // myheros array ko mohnish object ka acces mil paya
console.log(heroPower.mohnish());

Array.prototype.heyMohnish = function() {
    console.log(`HeyMohnish is present in all objects`)
}

// console.log(myHeros.heyMohnish());
// console.log(heroPower.heyMohnish());

//* Inheritance 
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable: true
}

//modern synatx 
Object.setPrototypeOf(TeachingSupport, Teacher)   // 1st wali ki prop 2nd wale ko bhi deni h 

console.log(Teacher.isAvailable); // dekho mene teacher obj me teaching support wale prop ko access kr liya
Teacher.isAvailable = false
console.log(Teacher.isAvailable);
console.log(TeachingSupport.isAvailable);// => true(line32) // lkin teaching support me change nhi hua


// ! truelength (task)
String.prototype.truelength = function (){
    console.log(`True Length:${this.trim().length}`); // trim last ke spce ko dlt krdeta h
}
"mohnish   ".truelength();
"gorana   ".truelength();
